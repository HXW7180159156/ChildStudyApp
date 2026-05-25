import { LessonCategory, WordItem } from '../types';

type BaseWord = Omit<WordItem, 'imageUrl' | 'audioBase64' | 'audioBuffer'>;

/**
 * Hand-curated sample vocabulary used when no API key is configured, or when
 * the Gemini API call fails. Keeps the app fully usable for offline preview.
 */
const ALPHABET: Record<string, BaseWord[]> = {
  A: [
    { word: 'Apple', pronunciation: '/ˈæp.əl/', translation: '苹果', definition: 'A round red or green fruit.' },
    { word: 'Ant', pronunciation: '/ænt/', translation: '蚂蚁', definition: 'A tiny insect that lives in groups.' },
    { word: 'Airplane', pronunciation: '/ˈer.pleɪn/', translation: '飞机', definition: 'A machine that flies in the sky.' },
  ],
  B: [
    { word: 'Bear', pronunciation: '/ber/', translation: '熊', definition: 'A big furry animal.' },
    { word: 'Ball', pronunciation: '/bɔːl/', translation: '球', definition: 'A round toy you can throw.' },
    { word: 'Banana', pronunciation: '/bəˈnæn.ə/', translation: '香蕉', definition: 'A long yellow fruit.' },
  ],
};

const TOPICS: Record<string, BaseWord[]> = {
  'Farm Animals': [
    { word: 'Cow', pronunciation: '/kaʊ/', translation: '奶牛', definition: 'A big animal that gives milk.' },
    { word: 'Pig', pronunciation: '/pɪɡ/', translation: '猪', definition: 'A pink farm animal.' },
    { word: 'Sheep', pronunciation: '/ʃiːp/', translation: '羊', definition: 'A fluffy white farm animal.' },
  ],
  'Fruits': [
    { word: 'Apple', pronunciation: '/ˈæp.əl/', translation: '苹果', definition: 'A round red or green fruit.' },
    { word: 'Orange', pronunciation: '/ˈɔːr.ɪndʒ/', translation: '橙子', definition: 'A round orange fruit.' },
    { word: 'Grape', pronunciation: '/ɡreɪp/', translation: '葡萄', definition: 'A small round juicy fruit.' },
  ],
  'Colors': [
    { word: 'Red', pronunciation: '/red/', translation: '红色', definition: 'The color of strawberries.' },
    { word: 'Blue', pronunciation: '/bluː/', translation: '蓝色', definition: 'The color of the sky.' },
    { word: 'Green', pronunciation: '/ɡriːn/', translation: '绿色', definition: 'The color of grass.' },
  ],
};

const PHONETICS: Record<string, BaseWord[]> = {
  'Short A /æ/': [
    { word: 'Cat', pronunciation: '/kæt/', translation: '猫', definition: 'A small furry pet.' },
    { word: 'Hat', pronunciation: '/hæt/', translation: '帽子', definition: 'Something you wear on your head.' },
    { word: 'Bag', pronunciation: '/bæɡ/', translation: '包', definition: 'You carry things in it.' },
  ],
  'Short I /ɪ/': [
    { word: 'Pig', pronunciation: '/pɪɡ/', translation: '猪', definition: 'A pink farm animal.' },
    { word: 'Sit', pronunciation: '/sɪt/', translation: '坐', definition: 'To rest on a chair.' },
    { word: 'Big', pronunciation: '/bɪɡ/', translation: '大的', definition: 'Not small.' },
  ],
};

const GENERIC: BaseWord[] = [
  { word: 'Star', pronunciation: '/stɑːr/', translation: '星星', definition: 'A bright light in the night sky.' },
  { word: 'Sun', pronunciation: '/sʌn/', translation: '太阳', definition: 'The bright light in the daytime sky.' },
  { word: 'Moon', pronunciation: '/muːn/', translation: '月亮', definition: 'You can see it at night.' },
];

export function getFallbackVocabulary(topic: string, category: LessonCategory): BaseWord[] {
  if (category === 'alphabet') {
    const letter = topic.replace(/^Letter\s+/i, '').trim().toUpperCase();
    if (ALPHABET[letter]) return ALPHABET[letter];
    // Auto-generate trivial placeholders so the lesson is at least playable.
    return [
      { word: `${letter}pple`, pronunciation: `/${letter.toLowerCase()}/`, translation: `${letter} 开头的词`, definition: `A word starting with ${letter}.` },
      { word: `${letter}all`,  pronunciation: `/${letter.toLowerCase()}/`, translation: `${letter} 开头的词`, definition: `Another word starting with ${letter}.` },
      { word: `${letter}ar`,   pronunciation: `/${letter.toLowerCase()}/`, translation: `${letter} 开头的词`, definition: `One more word starting with ${letter}.` },
    ];
  }
  if (category === 'phonetics') {
    return PHONETICS[topic] ?? GENERIC;
  }
  return TOPICS[topic] ?? GENERIC;
}

/** A tiny 1x1 transparent PNG, used as an inert placeholder when image gen is unavailable. */
export const PLACEHOLDER_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
      <rect width='200' height='200' fill='#FFE7B3'/>
      <text x='50%' y='54%' font-size='90' text-anchor='middle' font-family='Comic Sans MS, sans-serif'>🎨</text>
    </svg>`,
  );
