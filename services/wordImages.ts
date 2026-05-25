/**
 * Hand-crafted SVG illustrations for the built-in vocabulary words.
 *
 * Used as the primary "image" source when no Gemini API key is configured, and
 * as a fallback when image generation fails. SVGs are resolution-independent so
 * they remain crisp on any screen size.
 */

// Each SVG is a 200x200 viewBox, square, drawn on a soft pastel background
// to match the cream/yellow card aesthetic used throughout the app.

const SVGS: Record<string, string> = {
  apple: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Apple">
  <rect width="200" height="200" fill="#FFF3D6"/>
  <path d="M60 38 Q78 22 96 38" stroke="#7A4A21" stroke-width="6" fill="none" stroke-linecap="round"/>
  <ellipse cx="118" cy="40" rx="18" ry="10" fill="#6FBF59" transform="rotate(25 118 40)"/>
  <path d="M100 56 C60 50 32 84 38 124 C44 168 90 178 100 158 C110 178 156 168 162 124 C168 84 140 50 100 56 Z" fill="#E63946"/>
  <path d="M70 86 C62 100 64 124 76 138" stroke="#FFB1B1" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.6"/>
</svg>`,

  ant: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Ant">
  <rect width="200" height="200" fill="#FFEEDB"/>
  <ellipse cx="50" cy="100" rx="22" ry="20" fill="#3A2A1F"/>
  <ellipse cx="100" cy="100" rx="20" ry="18" fill="#3A2A1F"/>
  <ellipse cx="150" cy="100" rx="28" ry="24" fill="#3A2A1F"/>
  <circle cx="42" cy="92" r="3" fill="#FFF"/>
  <line x1="38" y1="82" x2="26" y2="62" stroke="#3A2A1F" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="80" x2="44" y2="58" stroke="#3A2A1F" stroke-width="3" stroke-linecap="round"/>
  <circle cx="26" cy="60" r="3" fill="#3A2A1F"/>
  <circle cx="44" cy="56" r="3" fill="#3A2A1F"/>
  <g stroke="#3A2A1F" stroke-width="4" stroke-linecap="round">
    <line x1="90" y1="108" x2="80" y2="140"/>
    <line x1="100" y1="116" x2="100" y2="148"/>
    <line x1="110" y1="108" x2="120" y2="140"/>
    <line x1="88" y1="92" x2="74" y2="70"/>
    <line x1="100" y1="84" x2="100" y2="60"/>
    <line x1="112" y1="92" x2="126" y2="70"/>
  </g>
</svg>`,

  airplane: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Airplane">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <circle cx="40" cy="50" r="14" fill="#FFF" opacity="0.9"/>
  <circle cx="55" cy="46" r="10" fill="#FFF" opacity="0.9"/>
  <circle cx="160" cy="160" r="12" fill="#FFF" opacity="0.9"/>
  <g transform="translate(100 100) rotate(-20)">
    <ellipse cx="0" cy="0" rx="70" ry="16" fill="#3D8BFD"/>
    <polygon points="-60,-4 -82,-30 -50,-12" fill="#1E5FBD"/>
    <polygon points="20,-4 50,-40 60,-6" fill="#1E5FBD"/>
    <polygon points="20,4 50,38 60,8" fill="#1E5FBD"/>
    <circle cx="-20" cy="-2" r="6" fill="#FFD93D"/>
    <circle cx="0" cy="-2" r="6" fill="#FFD93D"/>
    <circle cx="20" cy="-2" r="6" fill="#FFD93D"/>
    <polygon points="60,0 80,-6 80,6" fill="#1E5FBD"/>
  </g>
</svg>`,

  bear: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bear">
  <rect width="200" height="200" fill="#FFF1DA"/>
  <circle cx="56" cy="58" r="22" fill="#8B5A2B"/>
  <circle cx="144" cy="58" r="22" fill="#8B5A2B"/>
  <circle cx="56" cy="58" r="10" fill="#F2C79A"/>
  <circle cx="144" cy="58" r="10" fill="#F2C79A"/>
  <circle cx="100" cy="110" r="64" fill="#A0703D"/>
  <ellipse cx="100" cy="128" rx="36" ry="28" fill="#F2C79A"/>
  <circle cx="78" cy="96" r="7" fill="#2A1B0F"/>
  <circle cx="122" cy="96" r="7" fill="#2A1B0F"/>
  <circle cx="76" cy="94" r="2" fill="#FFF"/>
  <circle cx="120" cy="94" r="2" fill="#FFF"/>
  <ellipse cx="100" cy="120" rx="9" ry="7" fill="#2A1B0F"/>
  <path d="M100 128 Q100 140 90 142 M100 128 Q100 140 110 142" stroke="#2A1B0F" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,

  ball: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Ball">
  <rect width="200" height="200" fill="#E8F8FF"/>
  <defs>
    <radialGradient id="ballHi" cx="0.35" cy="0.3" r="0.7">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"/>
      <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="100" cy="105" r="72" fill="#FFD93D"/>
  <path d="M100 33 A72 72 0 0 1 172 105 L100 105 Z" fill="#FF6B6B"/>
  <path d="M100 33 A72 72 0 0 0 28 105 L100 105 Z" fill="#4ECDC4"/>
  <path d="M28 105 A72 72 0 0 0 100 177 L100 105 Z" fill="#5B8DEF"/>
  <circle cx="100" cy="105" r="12" fill="#FFF"/>
  <circle cx="100" cy="105" r="72" fill="url(#ballHi)"/>
  <ellipse cx="100" cy="186" rx="60" ry="6" fill="#000" opacity="0.1"/>
</svg>`,

  banana: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Banana">
  <rect width="200" height="200" fill="#FFFBE0"/>
  <path d="M40 70 Q50 160 150 158 Q170 158 172 144 Q150 150 110 130 Q70 108 60 64 Q56 56 48 58 Q40 62 40 70 Z" fill="#FFD93D" stroke="#C9A227" stroke-width="3"/>
  <path d="M52 70 Q60 130 130 150" stroke="#FFF3A0" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.7"/>
  <ellipse cx="48" cy="60" rx="6" ry="5" fill="#5C3A14"/>
  <ellipse cx="168" cy="148" rx="7" ry="5" fill="#5C3A14"/>
</svg>`,

  cow: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cow">
  <rect width="200" height="200" fill="#E6F7D9"/>
  <ellipse cx="40" cy="100" rx="20" ry="26" fill="#FFF" stroke="#222" stroke-width="3"/>
  <ellipse cx="160" cy="100" rx="20" ry="26" fill="#FFF" stroke="#222" stroke-width="3"/>
  <ellipse cx="40" cy="100" rx="10" ry="14" fill="#F4A7B9"/>
  <ellipse cx="160" cy="100" rx="10" ry="14" fill="#F4A7B9"/>
  <ellipse cx="100" cy="108" rx="58" ry="56" fill="#FFF" stroke="#222" stroke-width="3"/>
  <path d="M58 70 Q70 56 86 64 Q72 76 58 70 Z" fill="#222"/>
  <path d="M140 130 Q156 122 156 140 Q146 148 140 130 Z" fill="#222"/>
  <ellipse cx="100" cy="140" rx="34" ry="22" fill="#F4A7B9"/>
  <circle cx="88" cy="142" r="3" fill="#5A2D3A"/>
  <circle cx="112" cy="142" r="3" fill="#5A2D3A"/>
  <circle cx="80" cy="100" r="7" fill="#222"/>
  <circle cx="120" cy="100" r="7" fill="#222"/>
  <circle cx="82" cy="98" r="2" fill="#FFF"/>
  <circle cx="122" cy="98" r="2" fill="#FFF"/>
</svg>`,

  pig: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Pig">
  <rect width="200" height="200" fill="#FFE8F1"/>
  <polygon points="48,52 38,28 72,42" fill="#F4A7B9"/>
  <polygon points="152,52 162,28 128,42" fill="#F4A7B9"/>
  <circle cx="100" cy="110" r="64" fill="#F4A7B9"/>
  <ellipse cx="100" cy="130" rx="34" ry="24" fill="#E88BA3"/>
  <ellipse cx="88" cy="130" rx="5" ry="7" fill="#5A2D3A"/>
  <ellipse cx="112" cy="130" rx="5" ry="7" fill="#5A2D3A"/>
  <circle cx="82" cy="96" r="7" fill="#3B1B26"/>
  <circle cx="118" cy="96" r="7" fill="#3B1B26"/>
  <circle cx="84" cy="94" r="2" fill="#FFF"/>
  <circle cx="120" cy="94" r="2" fill="#FFF"/>
  <path d="M150 60 Q166 60 166 76 Q166 88 156 88" stroke="#E88BA3" stroke-width="6" fill="none" stroke-linecap="round"/>
</svg>`,

  sheep: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Sheep">
  <rect width="200" height="200" fill="#EAF6E1"/>
  <g fill="#2A2A2A">
    <rect x="62" y="150" width="10" height="22" rx="3"/>
    <rect x="86" y="150" width="10" height="22" rx="3"/>
    <rect x="110" y="150" width="10" height="22" rx="3"/>
    <rect x="134" y="150" width="10" height="22" rx="3"/>
  </g>
  <g fill="#FFF" stroke="#CFCFCF" stroke-width="2">
    <circle cx="60" cy="108" r="22"/>
    <circle cx="100" cy="86" r="24"/>
    <circle cx="140" cy="108" r="22"/>
    <circle cx="80" cy="130" r="22"/>
    <circle cx="120" cy="130" r="22"/>
    <circle cx="100" cy="118" r="26"/>
  </g>
  <ellipse cx="150" cy="118" rx="22" ry="20" fill="#2A2A2A"/>
  <circle cx="144" cy="114" r="4" fill="#FFF"/>
  <circle cx="158" cy="114" r="4" fill="#FFF"/>
  <circle cx="144" cy="115" r="2" fill="#000"/>
  <circle cx="158" cy="115" r="2" fill="#000"/>
  <ellipse cx="151" cy="128" rx="4" ry="3" fill="#F4A7B9"/>
</svg>`,

  orange: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Orange">
  <rect width="200" height="200" fill="#FFF1D6"/>
  <ellipse cx="124" cy="44" rx="22" ry="10" fill="#6FBF59" transform="rotate(20 124 44)"/>
  <path d="M100 50 Q104 38 96 32" stroke="#5C3A14" stroke-width="5" stroke-linecap="round" fill="none"/>
  <circle cx="100" cy="116" r="62" fill="#FF9F1C"/>
  <g stroke="#E07A0F" stroke-width="3" fill="none" stroke-linecap="round">
    <line x1="100" y1="60" x2="100" y2="172"/>
    <line x1="44" y1="116" x2="156" y2="116"/>
    <path d="M58 78 Q100 116 142 154"/>
    <path d="M142 78 Q100 116 58 154"/>
  </g>
  <circle cx="80" cy="92" r="10" fill="#FFD79B" opacity="0.7"/>
</svg>`,

  grape: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Grape">
  <rect width="200" height="200" fill="#F4ECFF"/>
  <path d="M70 36 Q110 26 130 46" stroke="#7A4A21" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M118 38 Q150 26 160 50 Q140 56 118 50 Z" fill="#6FBF59"/>
  <g fill="#7B3FA0">
    <circle cx="74" cy="70" r="14"/>
    <circle cx="100" cy="68" r="14"/>
    <circle cx="126" cy="70" r="14"/>
    <circle cx="86" cy="92" r="14"/>
    <circle cx="114" cy="92" r="14"/>
    <circle cx="100" cy="114" r="14"/>
    <circle cx="78" cy="114" r="14"/>
    <circle cx="122" cy="114" r="14"/>
    <circle cx="92" cy="136" r="14"/>
    <circle cx="108" cy="136" r="14"/>
    <circle cx="100" cy="158" r="14"/>
  </g>
  <g fill="#A66ECB" opacity="0.7">
    <circle cx="70" cy="66" r="4"/>
    <circle cx="96" cy="64" r="4"/>
    <circle cx="122" cy="66" r="4"/>
    <circle cx="82" cy="88" r="4"/>
    <circle cx="96" cy="110" r="4"/>
  </g>
</svg>`,

  red: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Red">
  <rect width="200" height="200" fill="#FFF3F0"/>
  <circle cx="100" cy="100" r="68" fill="#E63946"/>
  <circle cx="80" cy="80" r="16" fill="#FF8A93" opacity="0.7"/>
  <text x="100" y="184" text-anchor="middle" font-family="Comic Sans MS, 'Comic Sans', cursive, sans-serif" font-size="22" font-weight="bold" fill="#E63946">RED</text>
</svg>`,

  blue: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Blue">
  <rect width="200" height="200" fill="#EAF4FF"/>
  <circle cx="100" cy="100" r="68" fill="#3D8BFD"/>
  <circle cx="80" cy="80" r="16" fill="#A8CCFF" opacity="0.7"/>
  <text x="100" y="184" text-anchor="middle" font-family="Comic Sans MS, 'Comic Sans', cursive, sans-serif" font-size="22" font-weight="bold" fill="#1E5FBD">BLUE</text>
</svg>`,

  green: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Green">
  <rect width="200" height="200" fill="#EEFBE3"/>
  <circle cx="100" cy="100" r="68" fill="#4CAF50"/>
  <circle cx="80" cy="80" r="16" fill="#B8E6BA" opacity="0.7"/>
  <text x="100" y="184" text-anchor="middle" font-family="Comic Sans MS, 'Comic Sans', cursive, sans-serif" font-size="22" font-weight="bold" fill="#2E7D32">GREEN</text>
</svg>`,

  cat: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cat">
  <rect width="200" height="200" fill="#FFF3E0"/>
  <polygon points="44,54 70,42 76,82" fill="#F2A65A"/>
  <polygon points="156,54 130,42 124,82" fill="#F2A65A"/>
  <polygon points="50,58 68,52 70,74" fill="#FFD7BA"/>
  <polygon points="150,58 132,52 130,74" fill="#FFD7BA"/>
  <circle cx="100" cy="110" r="60" fill="#F2A65A"/>
  <circle cx="78" cy="100" r="8" fill="#1F1F1F"/>
  <circle cx="122" cy="100" r="8" fill="#1F1F1F"/>
  <circle cx="79" cy="98" r="2.5" fill="#FFF"/>
  <circle cx="123" cy="98" r="2.5" fill="#FFF"/>
  <path d="M94 124 Q100 130 106 124" stroke="#1F1F1F" stroke-width="3" fill="#F4A7B9" stroke-linecap="round"/>
  <path d="M100 126 Q92 138 84 134 M100 126 Q108 138 116 134" stroke="#1F1F1F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <g stroke="#1F1F1F" stroke-width="2" stroke-linecap="round">
    <line x1="68" y1="116" x2="44" y2="112"/>
    <line x1="68" y1="122" x2="44" y2="126"/>
    <line x1="132" y1="116" x2="156" y2="112"/>
    <line x1="132" y1="122" x2="156" y2="126"/>
  </g>
</svg>`,

  hat: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Hat">
  <rect width="200" height="200" fill="#F0E9FF"/>
  <ellipse cx="100" cy="156" rx="80" ry="14" fill="#2A2A2A"/>
  <path d="M60 156 L60 80 Q60 50 100 50 Q140 50 140 80 L140 156 Z" fill="#2A2A2A"/>
  <rect x="58" y="138" width="84" height="14" fill="#E63946"/>
  <rect x="118" y="138" width="14" height="14" fill="#FFD93D"/>
</svg>`,

  bag: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bag">
  <rect width="200" height="200" fill="#FFEEF6"/>
  <path d="M70 78 Q70 40 100 40 Q130 40 130 78" stroke="#7A4A21" stroke-width="8" fill="none" stroke-linecap="round"/>
  <rect x="40" y="78" width="120" height="90" rx="14" fill="#E07A5F"/>
  <rect x="40" y="78" width="120" height="20" fill="#C56245"/>
  <circle cx="100" cy="120" r="10" fill="#FFD93D"/>
  <rect x="96" y="120" width="8" height="22" fill="#FFD93D"/>
</svg>`,

  sit: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Sit">
  <rect width="200" height="200" fill="#FFF7E0"/>
  <rect x="60" y="120" width="80" height="14" rx="3" fill="#8B5A2B"/>
  <rect x="64" y="134" width="8" height="40" fill="#8B5A2B"/>
  <rect x="128" y="134" width="8" height="40" fill="#8B5A2B"/>
  <rect x="128" y="60" width="8" height="64" fill="#8B5A2B"/>
  <circle cx="92" cy="78" r="20" fill="#FFD7BA"/>
  <circle cx="86" cy="76" r="2.5" fill="#1F1F1F"/>
  <circle cx="98" cy="76" r="2.5" fill="#1F1F1F"/>
  <path d="M86 86 Q92 90 98 86" stroke="#1F1F1F" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M76 100 Q72 116 80 122 L110 122 Q118 116 114 100 Z" fill="#3D8BFD"/>
  <rect x="80" y="120" width="34" height="14" rx="4" fill="#1E5FBD"/>
  <rect x="80" y="134" width="10" height="22" fill="#3D8BFD"/>
  <rect x="104" y="134" width="10" height="22" fill="#3D8BFD"/>
  <rect x="78" y="156" width="14" height="6" rx="2" fill="#2A2A2A"/>
  <rect x="102" y="156" width="14" height="6" rx="2" fill="#2A2A2A"/>
</svg>`,

  big: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Big">
  <rect width="200" height="200" fill="#FFF1DA"/>
  <circle cx="155" cy="135" r="18" fill="#5B8DEF"/>
  <circle cx="80" cy="100" r="60" fill="#FF6B6B"/>
  <text x="80" y="118" text-anchor="middle" font-family="Comic Sans MS, 'Comic Sans', cursive, sans-serif" font-size="48" font-weight="bold" fill="#FFF">BIG</text>
</svg>`,

  star: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Star">
  <rect width="200" height="200" fill="#1B2A4E"/>
  <circle cx="40" cy="40" r="2" fill="#FFF"/>
  <circle cx="170" cy="60" r="2" fill="#FFF"/>
  <circle cx="160" cy="160" r="2" fill="#FFF"/>
  <circle cx="30" cy="150" r="2" fill="#FFF"/>
  <polygon points="100,28 122,86 184,86 134,122 152,180 100,144 48,180 66,122 16,86 78,86" fill="#FFD93D" stroke="#E0B41B" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="86" cy="92" r="8" fill="#FFF" opacity="0.8"/>
</svg>`,

  sun: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Sun">
  <rect width="200" height="200" fill="#E6F4FF"/>
  <g stroke="#FFA62B" stroke-width="8" stroke-linecap="round">
    <line x1="100" y1="20" x2="100" y2="42"/>
    <line x1="100" y1="158" x2="100" y2="180"/>
    <line x1="20" y1="100" x2="42" y2="100"/>
    <line x1="158" y1="100" x2="180" y2="100"/>
    <line x1="40" y1="40" x2="56" y2="56"/>
    <line x1="144" y1="144" x2="160" y2="160"/>
    <line x1="160" y1="40" x2="144" y2="56"/>
    <line x1="56" y1="144" x2="40" y2="160"/>
  </g>
  <circle cx="100" cy="100" r="48" fill="#FFD93D" stroke="#FFA62B" stroke-width="4"/>
  <circle cx="86" cy="94" r="5" fill="#5C3A14"/>
  <circle cx="114" cy="94" r="5" fill="#5C3A14"/>
  <path d="M84 114 Q100 128 116 114" stroke="#5C3A14" stroke-width="4" fill="none" stroke-linecap="round"/>
  <ellipse cx="78" cy="108" rx="6" ry="3" fill="#FF8FB1" opacity="0.7"/>
  <ellipse cx="122" cy="108" rx="6" ry="3" fill="#FF8FB1" opacity="0.7"/>
</svg>`,

  moon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Moon">
  <rect width="200" height="200" fill="#0E1B3D"/>
  <g fill="#FFF">
    <circle cx="30" cy="40" r="2"/>
    <circle cx="170" cy="36" r="2"/>
    <circle cx="40" cy="160" r="2"/>
    <circle cx="160" cy="170" r="2"/>
    <circle cx="60" cy="60" r="1.5"/>
    <circle cx="180" cy="120" r="1.5"/>
  </g>
  <polygon points="50,30 53,40 63,42 53,44 50,54 47,44 37,42 47,40" fill="#FFD93D"/>
  <polygon points="170,150 172,156 178,158 172,160 170,166 168,160 162,158 168,156" fill="#FFD93D"/>
  <path d="M130 40 A60 60 0 1 0 130 160 A50 50 0 1 1 130 40 Z" fill="#FFE9A8"/>
  <circle cx="118" cy="78" r="6" fill="#E2C77A" opacity="0.6"/>
  <circle cx="106" cy="112" r="9" fill="#E2C77A" opacity="0.6"/>
  <circle cx="124" cy="134" r="5" fill="#E2C77A" opacity="0.6"/>
</svg>`,
};

/** Color palette used for the generic fallback card. */
const FALLBACK_PALETTE: Array<{ bg: string; fg: string; accent: string }> = [
  { bg: '#FFE3E3', fg: '#E63946', accent: '#FF8A93' },
  { bg: '#FFF1D6', fg: '#FFA62B', accent: '#FFD79B' },
  { bg: '#FFF8C6', fg: '#C9A227', accent: '#FFE680' },
  { bg: '#E6F7D9', fg: '#4CAF50', accent: '#B8E6BA' },
  { bg: '#D9F0FF', fg: '#3D8BFD', accent: '#A8CCFF' },
  { bg: '#E8E1FF', fg: '#7B3FA0', accent: '#C7B3F0' },
  { bg: '#FFE8F1', fg: '#E07A8B', accent: '#FFB8CE' },
  { bg: '#D6F5F0', fg: '#1E9E91', accent: '#9BE0D6' },
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/** Generic, pretty card for any word that isn't in the curated SVG library. */
function buildGenericSvg(word: string): string {
  const trimmed = (word || '').trim();
  const initial = trimmed ? trimmed[0].toUpperCase() : '?';
  const palette = FALLBACK_PALETTE[hashCode(trimmed.toLowerCase()) % FALLBACK_PALETTE.length];
  const label = escapeXml(trimmed.slice(0, 12));
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="${label}">
  <rect width="200" height="200" fill="${palette.bg}"/>
  <circle cx="50" cy="50" r="22" fill="${palette.accent}" opacity="0.7"/>
  <circle cx="160" cy="60" r="14" fill="${palette.accent}" opacity="0.5"/>
  <circle cx="46" cy="160" r="18" fill="${palette.accent}" opacity="0.5"/>
  <circle cx="100" cy="100" r="62" fill="${palette.fg}"/>
  <circle cx="82" cy="84" r="14" fill="#FFFFFF" opacity="0.35"/>
  <text x="100" y="124" text-anchor="middle" font-family="Comic Sans MS, 'Comic Sans', cursive, sans-serif" font-size="72" font-weight="bold" fill="#FFFFFF">${escapeXml(initial)}</text>
  <text x="100" y="184" text-anchor="middle" font-family="Comic Sans MS, 'Comic Sans', cursive, sans-serif" font-size="20" font-weight="bold" fill="${palette.fg}">${label}</text>
</svg>`;
}

function toDataUrl(svg: string): string {
  // Collapse whitespace to keep the data URL compact.
  const compact = svg.replace(/\s+/g, ' ').trim();
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(compact);
}

/**
 * Normalizes a word for lookup: lowercase, trim, strip a trailing plural "s"
 * so that "Apples" still matches the "apple" illustration.
 */
function normalize(word: string): string {
  const w = (word || '').trim().toLowerCase();
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) {
    return w.slice(0, -1);
  }
  return w;
}

/**
 * Returns a high-quality SVG data URL for the given word. Always returns a
 * usable, child-friendly illustration: a hand-crafted SVG for known words, or
 * a colored generic card displaying the word's initial otherwise.
 */
export function getWordImage(word: string): string {
  const key = normalize(word);
  const svg = SVGS[key] ?? buildGenericSvg(word);
  return toDataUrl(svg);
}

/** Exposed for tests / debugging. */
export function hasCuratedImage(word: string): boolean {
  return Object.prototype.hasOwnProperty.call(SVGS, normalize(word));
}
