import { GoogleGenAI, Type, Modality } from "@google/genai";
import { WordItem, LessonCategory } from "../types";
import { decodeBase64, decodeAudioData } from "./audioUtils";

const API_KEY = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Generates a vocabulary list based on topic and category.
 */
export const generateVocabulary = async (topic: string, category: LessonCategory): Promise<Omit<WordItem, 'imageUrl' | 'audioData'>[]> => {
  const modelId = "gemini-2.5-flash";
  
  let prompt = "";

  switch (category) {
    case 'alphabet':
      prompt = `Generate 3 distinct, simple English words for a 5-year-old child that start with the letter "${topic}". 
      Ensure the words are concrete nouns (like animals, fruits, objects) that are easy to visualize.
      Include the word, a simple pronunciation guide, a Chinese translation, and a very simple definition.`;
      break;
    case 'phonetics':
      prompt = `Generate 3 simple English words for a child that clearly demonstrate the phonetic sound "${topic}".
      Ensure the sound is prominent in the word.
      Include the word, the IPA pronunciation (highlighting the target sound), a Chinese translation, and a simple definition.`;
      break;
    case 'topic':
    default:
      prompt = `Generate 3 simple English words for children related to the topic: "${topic}". 
      Include the word, a simple pronunciation guide, a Chinese translation, and a very simple definition suitable for a 5-year-old.`;
      break;
  }

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
  if (!text) return [];
  return JSON.parse(text);
};

/**
 * Generates a cute cartoon image for a word.
 */
export const generateImage = async (word: string): Promise<string> => {
  // Use a fallback image if API key is missing or for speed in dev, 
  // but here we implement the actual call.
  if (!API_KEY) return `https://picsum.photos/400/400?random=${Math.random()}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `A cute, colorful, vector-style flat cartoon illustration of a ${word} for a children's app. White background. Minimalist.` }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Image gen failed", error);
    // Fallback
    return `https://picsum.photos/400/400?random=${word}`;
  }
  return `https://picsum.photos/400/400?random=${word}`;
};

/**
 * Generates speech audio for a word using Gemini TTS.
 */
export const generateSpeech = async (text: string, audioCtx: AudioContext): Promise<AudioBuffer | undefined> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say this clearly and cheerfully for a child: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, // Kore is usually good for clarity
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const audioBytes = decodeBase64(base64Audio);
      return await decodeAudioData(audioBytes, audioCtx, 24000, 1);
    }
  } catch (error) {
    console.error("TTS failed", error);
  }
  return undefined;
};