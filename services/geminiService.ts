import { GoogleGenAI, Type, Modality } from "@google/genai";
import { WordItem, LessonCategory } from "../types";
import { getFallbackVocabulary } from "./fallbackData";
import { getWordImage } from "./wordImages";

const API_KEY = process.env.API_KEY || '';
export const hasApiKey = Boolean(API_KEY);

// Initialize client (lazy – avoid crashing when no key is configured).
const ai = hasApiKey ? new GoogleGenAI({ apiKey: API_KEY }) : null;

type BaseWord = Omit<WordItem, 'imageUrl' | 'audioBase64' | 'audioBuffer'>;

/**
 * Generates a vocabulary list based on topic and category. Falls back to a
 * built-in sample list when no API key is configured or the call fails.
 */
export const generateVocabulary = async (
  topic: string,
  category: LessonCategory,
): Promise<BaseWord[]> => {
  if (!ai) return getFallbackVocabulary(topic, category);

  const modelId = "gemini-2.5-flash";
  let prompt = "";

  switch (category) {
    case 'alphabet':
      prompt = `Generate 3 distinct, simple, REAL English words for a 5-year-old child that start with the letter "${topic}".
      Strict rules:
      - Every word MUST be a real, common English word found in a dictionary. Do NOT invent, blend, or modify words. For example, do not return "Ipple" or "Cpple" – those are not real words.
      - Words MUST be concrete nouns that are easy to picture (animals, fruits, everyday objects, vehicles, etc.).
      - Words MUST actually start with the letter "${topic}" (case-insensitive).
      For each word include: the word, a simple pronunciation guide, a Chinese translation, and a very simple definition for a 5-year-old.`;
      break;
    case 'phonetics':
      prompt = `Generate 10 distinct, simple English words for a child that clearly demonstrate the phonetic sound "${topic}".
      Ensure the sound is prominent in each word, and that the words are concrete and easy to visualize.
      Include the word, the IPA pronunciation (highlighting the target sound), a Chinese translation, and a simple definition.`;
      break;
    case 'topic':
    default:
      prompt = `Generate 10 distinct, simple English words for children related to the topic: "${topic}".
      Ensure the words are common, concrete and easy to visualize for a 5-year-old.
      Include the word, a simple pronunciation guide, a Chinese translation, and a very simple definition suitable for a 5-year-old.`;
      break;
  }

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              pronunciation: { type: Type.STRING },
              translation: { type: Type.STRING },
              definition: { type: Type.STRING },
            },
            required: ["word", "pronunciation", "translation", "definition"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return getFallbackVocabulary(topic, category);
    const parsed = JSON.parse(text) as BaseWord[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return getFallbackVocabulary(topic, category);
    }
    return parsed;
  } catch (error) {
    console.error("Vocabulary generation failed, using fallback", error);
    return getFallbackVocabulary(topic, category);
  }
};

/**
 * Generates a cute cartoon image for a word. Returns a data URL or a
 * placeholder when image generation is unavailable.
 */
export const generateImage = async (word: string): Promise<string> => {
  if (!ai) return getWordImage(word);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `A cute, colorful, vector-style flat cartoon illustration of a ${word} for a children's app. White background. Minimalist.` }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Image gen failed", error);
  }
  return getWordImage(word);
};

/**
 * Generates speech audio for a word using Gemini TTS, returning the raw base64
 * PCM payload so callers can both cache it and decode it into an AudioBuffer.
 */
export const generateSpeechBase64 = async (text: string): Promise<string | undefined> => {
  if (!ai) return undefined;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say this clearly and cheerfully for a child: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  } catch (error) {
    console.error("TTS failed", error);
    return undefined;
  }
};
