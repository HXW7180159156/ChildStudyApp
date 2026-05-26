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

  car: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Car">
  <rect width="200" height="200" fill="#FFEFD6"/>
  <rect x="20" y="160" width="160" height="6" fill="#8C8C8C"/>
  <path d="M30 130 L60 90 L140 90 L170 130 Z" fill="#E63946"/>
  <rect x="20" y="128" width="160" height="32" rx="8" fill="#E63946"/>
  <rect x="66" y="98" width="28" height="26" fill="#A8CCFF"/>
  <rect x="106" y="98" width="28" height="26" fill="#A8CCFF"/>
  <circle cx="60" cy="160" r="16" fill="#222"/>
  <circle cx="140" cy="160" r="16" fill="#222"/>
  <circle cx="60" cy="160" r="6" fill="#BBB"/>
  <circle cx="140" cy="160" r="6" fill="#BBB"/>
  <circle cx="36" cy="138" r="5" fill="#FFD93D"/>
</svg>`,

  dog: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Dog">
  <rect width="200" height="200" fill="#FFF1DA"/>
  <ellipse cx="56" cy="80" rx="18" ry="28" fill="#7A4A21"/>
  <ellipse cx="144" cy="80" rx="18" ry="28" fill="#7A4A21"/>
  <circle cx="100" cy="110" r="60" fill="#C68A4C"/>
  <ellipse cx="100" cy="130" rx="36" ry="26" fill="#F2D5A8"/>
  <circle cx="80" cy="100" r="6" fill="#2A1B0F"/>
  <circle cx="120" cy="100" r="6" fill="#2A1B0F"/>
  <ellipse cx="100" cy="122" rx="8" ry="6" fill="#2A1B0F"/>
  <path d="M100 128 Q100 142 92 144 M100 128 Q100 142 108 144" stroke="#2A1B0F" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M160 60 Q176 50 178 36" stroke="#7A4A21" stroke-width="10" fill="none" stroke-linecap="round"/>
</svg>`,

  duck: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Duck">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <ellipse cx="90" cy="130" rx="60" ry="40" fill="#FFD93D"/>
  <circle cx="140" cy="80" r="30" fill="#FFD93D"/>
  <path d="M160 78 L196 72 L196 92 L160 90 Z" fill="#FF7A00"/>
  <circle cx="146" cy="74" r="4" fill="#2A1B0F"/>
  <path d="M60 142 L36 156 L60 158 Z" fill="#FF7A00"/>
  <path d="M40 168 Q60 162 80 168" stroke="#9BC8E6" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M110 170 Q130 164 150 170" stroke="#9BC8E6" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,

  drum: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Drum">
  <rect width="200" height="200" fill="#FFEEDB"/>
  <ellipse cx="100" cy="60" rx="64" ry="18" fill="#FFF6E0" stroke="#7A4A21" stroke-width="3"/>
  <rect x="36" y="60" width="128" height="80" fill="#E63946"/>
  <ellipse cx="100" cy="140" rx="64" ry="18" fill="#C42934"/>
  <path d="M44 70 L60 130 L80 70 L100 130 L120 70 L140 130 L156 70" stroke="#FFD93D" stroke-width="4" fill="none"/>
  <line x1="40" y1="50" x2="20" y2="20" stroke="#7A4A21" stroke-width="5" stroke-linecap="round"/>
  <line x1="160" y1="50" x2="180" y2="20" stroke="#7A4A21" stroke-width="5" stroke-linecap="round"/>
  <circle cx="20" cy="20" r="6" fill="#7A4A21"/>
  <circle cx="180" cy="20" r="6" fill="#7A4A21"/>
</svg>`,

  egg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Egg">
  <rect width="200" height="200" fill="#FFF8E6"/>
  <ellipse cx="100" cy="110" rx="56" ry="70" fill="#FFFCF2" stroke="#E8DCC0" stroke-width="3"/>
  <ellipse cx="78" cy="80" rx="14" ry="8" fill="#F4ECD8" opacity="0.7"/>
</svg>`,

  elephant: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Elephant">
  <rect width="200" height="200" fill="#E8F2F7"/>
  <ellipse cx="110" cy="120" rx="70" ry="44" fill="#9AB0BD"/>
  <circle cx="60" cy="90" r="32" fill="#9AB0BD"/>
  <path d="M40 110 Q20 130 32 158 Q44 152 46 132" fill="#9AB0BD"/>
  <ellipse cx="36" cy="90" rx="14" ry="18" fill="#7E96A4"/>
  <circle cx="60" cy="86" r="4" fill="#2A1B0F"/>
  <rect x="80" y="160" width="14" height="14" fill="#7E96A4"/>
  <rect x="110" y="160" width="14" height="14" fill="#7E96A4"/>
  <rect x="140" y="160" width="14" height="14" fill="#7E96A4"/>
  <path d="M170 100 Q180 92 178 80" stroke="#7E96A4" stroke-width="6" fill="none" stroke-linecap="round"/>
</svg>`,

  ear: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Ear">
  <rect width="200" height="200" fill="#FFEDE0"/>
  <path d="M120 30 C70 30 50 70 60 120 C66 150 80 170 100 170 C116 170 122 158 120 144 C118 132 130 130 138 120 C156 100 160 30 120 30 Z" fill="#F2C79A" stroke="#B98E63" stroke-width="3"/>
  <path d="M110 70 C92 72 84 90 90 110 C94 124 104 130 112 124" stroke="#B98E63" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M104 120 Q98 132 108 138" stroke="#B98E63" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`,

  fish: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Fish">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <path d="M30 100 Q60 50 130 60 Q170 70 170 100 Q170 130 130 140 Q60 150 30 100 Z" fill="#FF9F1C"/>
  <polygon points="170,100 195,70 195,130" fill="#FF7A00"/>
  <circle cx="60" cy="92" r="6" fill="#FFF"/>
  <circle cx="60" cy="92" r="3" fill="#2A1B0F"/>
  <path d="M90 80 Q110 90 90 100" stroke="#E07A0F" stroke-width="3" fill="none"/>
  <path d="M110 90 Q130 100 110 110" stroke="#E07A0F" stroke-width="3" fill="none"/>
  <circle cx="22" cy="60" r="4" fill="#A8CCFF"/>
  <circle cx="34" cy="160" r="4" fill="#A8CCFF"/>
</svg>`,

  frog: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Frog">
  <rect width="200" height="200" fill="#EAF6E1"/>
  <ellipse cx="100" cy="130" rx="70" ry="44" fill="#6FBF59"/>
  <circle cx="62" cy="80" r="28" fill="#6FBF59"/>
  <circle cx="138" cy="80" r="28" fill="#6FBF59"/>
  <circle cx="62" cy="80" r="14" fill="#FFF"/>
  <circle cx="138" cy="80" r="14" fill="#FFF"/>
  <circle cx="62" cy="82" r="7" fill="#2A1B0F"/>
  <circle cx="138" cy="82" r="7" fill="#2A1B0F"/>
  <path d="M70 140 Q100 160 130 140" stroke="#2A1B0F" stroke-width="4" fill="none" stroke-linecap="round"/>
  <ellipse cx="40" cy="172" rx="20" ry="8" fill="#4F9C45"/>
  <ellipse cx="160" cy="172" rx="20" ry="8" fill="#4F9C45"/>
</svg>`,

  flower: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Flower">
  <rect width="200" height="200" fill="#F4ECFF"/>
  <line x1="100" y1="100" x2="100" y2="180" stroke="#4F9C45" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="80" cy="150" rx="18" ry="8" fill="#4F9C45" transform="rotate(-30 80 150)"/>
  <ellipse cx="120" cy="140" rx="18" ry="8" fill="#4F9C45" transform="rotate(30 120 140)"/>
  <g fill="#E63946">
    <ellipse cx="100" cy="60" rx="18" ry="26"/>
    <ellipse cx="100" cy="100" rx="18" ry="26"/>
    <ellipse cx="60" cy="80" rx="26" ry="18"/>
    <ellipse cx="140" cy="80" rx="26" ry="18"/>
    <ellipse cx="72" cy="56" rx="20" ry="20" transform="rotate(-45 72 56)"/>
    <ellipse cx="128" cy="56" rx="20" ry="20" transform="rotate(45 128 56)"/>
  </g>
  <circle cx="100" cy="80" r="16" fill="#FFD93D"/>
</svg>`,

  goat: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Goat">
  <rect width="200" height="200" fill="#F2F0E6"/>
  <ellipse cx="110" cy="120" rx="60" ry="36" fill="#FFFCF2" stroke="#8C8C8C" stroke-width="3"/>
  <circle cx="56" cy="100" r="26" fill="#FFFCF2" stroke="#8C8C8C" stroke-width="3"/>
  <path d="M44 82 Q30 60 38 50" stroke="#5C3A14" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M64 82 Q78 60 70 50" stroke="#5C3A14" stroke-width="5" fill="none" stroke-linecap="round"/>
  <circle cx="48" cy="100" r="3" fill="#2A1B0F"/>
  <ellipse cx="46" cy="112" rx="6" ry="4" fill="#F4A7B9"/>
  <path d="M38 122 Q34 138 40 144" stroke="#5C3A14" stroke-width="3" fill="none" stroke-linecap="round"/>
  <rect x="80" y="148" width="8" height="20" fill="#5C3A14"/>
  <rect x="100" y="148" width="8" height="20" fill="#5C3A14"/>
  <rect x="130" y="148" width="8" height="20" fill="#5C3A14"/>
  <rect x="150" y="148" width="8" height="20" fill="#5C3A14"/>
</svg>`,

  giraffe: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Giraffe">
  <rect width="200" height="200" fill="#FFF6D6"/>
  <rect x="90" y="40" width="24" height="100" fill="#FFD66B"/>
  <ellipse cx="120" cy="40" rx="22" ry="18" fill="#FFD66B"/>
  <ellipse cx="100" cy="150" rx="50" ry="22" fill="#FFD66B"/>
  <rect x="70" y="160" width="10" height="22" fill="#FFD66B"/>
  <rect x="120" y="160" width="10" height="22" fill="#FFD66B"/>
  <g fill="#A87331">
    <circle cx="100" cy="60" r="5"/>
    <circle cx="106" cy="80" r="5"/>
    <circle cx="96" cy="100" r="5"/>
    <circle cx="108" cy="118" r="5"/>
    <circle cx="80" cy="150" r="6"/>
    <circle cx="110" cy="156" r="6"/>
    <circle cx="130" cy="146" r="6"/>
    <circle cx="124" cy="40" r="3"/>
  </g>
  <circle cx="126" cy="36" r="2" fill="#2A1B0F"/>
  <line x1="116" y1="22" x2="114" y2="14" stroke="#A87331" stroke-width="3" stroke-linecap="round"/>
  <line x1="124" y1="22" x2="126" y2="14" stroke="#A87331" stroke-width="3" stroke-linecap="round"/>
</svg>`,

  horse: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Horse">
  <rect width="200" height="200" fill="#FFF1DA"/>
  <ellipse cx="110" cy="120" rx="60" ry="34" fill="#A87331"/>
  <path d="M150 90 L180 60 L184 100 L168 110 Z" fill="#A87331"/>
  <path d="M178 60 L170 78 L184 88" fill="#5C3A14"/>
  <path d="M60 88 Q40 70 56 60 Q64 80 76 90" fill="#5C3A14"/>
  <rect x="70" y="150" width="10" height="24" fill="#5C3A14"/>
  <rect x="100" y="150" width="10" height="24" fill="#5C3A14"/>
  <rect x="130" y="150" width="10" height="24" fill="#5C3A14"/>
  <rect x="150" y="150" width="10" height="24" fill="#5C3A14"/>
  <circle cx="176" cy="76" r="3" fill="#2A1B0F"/>
  <ellipse cx="184" cy="92" rx="3" ry="2" fill="#2A1B0F"/>
</svg>`,

  house: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="House">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <polygon points="40,100 100,40 160,100" fill="#E63946"/>
  <rect x="50" y="100" width="100" height="70" fill="#FFD79B"/>
  <rect x="86" y="120" width="28" height="50" fill="#7A4A21"/>
  <rect x="58" y="116" width="20" height="20" fill="#A8CCFF"/>
  <rect x="122" y="116" width="20" height="20" fill="#A8CCFF"/>
  <rect x="120" y="50" width="14" height="22" fill="#8C5A2B"/>
  <circle cx="106" cy="146" r="2" fill="#FFD93D"/>
</svg>`,

  ice: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Ice">
  <rect width="200" height="200" fill="#EAF7FF"/>
  <polygon points="50,40 150,40 160,60 40,60" fill="#BEE6FA" opacity="0.9"/>
  <polygon points="40,60 160,60 150,160 50,160" fill="#A8DDF5" opacity="0.85"/>
  <polygon points="50,160 150,160 140,176 60,176" fill="#7CC4E6" opacity="0.9"/>
  <line x1="70" y1="60" x2="60" y2="170" stroke="#FFF" stroke-width="6" opacity="0.6"/>
  <line x1="120" y1="60" x2="130" y2="170" stroke="#FFF" stroke-width="4" opacity="0.5"/>
  <polygon points="160,50 168,40 168,56" fill="#FFF" opacity="0.7"/>
</svg>`,

  igloo: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Igloo">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <rect x="0" y="150" width="200" height="50" fill="#FFFCF2"/>
  <path d="M30 150 A70 70 0 0 1 170 150 Z" fill="#E8F4FB" stroke="#9BC8E6" stroke-width="3"/>
  <g stroke="#9BC8E6" stroke-width="2" fill="none">
    <path d="M30 150 Q100 150 170 150"/>
    <path d="M40 124 Q100 124 160 124"/>
    <path d="M52 100 Q100 100 148 100"/>
    <line x1="60" y1="124" x2="60" y2="150"/>
    <line x1="100" y1="124" x2="100" y2="150"/>
    <line x1="140" y1="124" x2="140" y2="150"/>
    <line x1="80" y1="100" x2="80" y2="124"/>
    <line x1="120" y1="100" x2="120" y2="124"/>
  </g>
  <path d="M82 150 A24 24 0 0 1 118 150 Z" fill="#5A8DB0"/>
</svg>`,

  insect: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Insect">
  <rect width="200" height="200" fill="#EAF6E1"/>
  <ellipse cx="100" cy="110" rx="44" ry="56" fill="#E63946"/>
  <line x1="100" y1="54" x2="100" y2="166" stroke="#2A1B0F" stroke-width="4"/>
  <g fill="#2A1B0F">
    <circle cx="80" cy="82" r="7"/>
    <circle cx="120" cy="82" r="7"/>
    <circle cx="78" cy="120" r="9"/>
    <circle cx="122" cy="120" r="9"/>
    <circle cx="86" cy="150" r="6"/>
    <circle cx="114" cy="150" r="6"/>
  </g>
  <circle cx="100" cy="44" r="18" fill="#2A1B0F"/>
  <line x1="92" y1="28" x2="80" y2="14" stroke="#2A1B0F" stroke-width="3" stroke-linecap="round"/>
  <line x1="108" y1="28" x2="120" y2="14" stroke="#2A1B0F" stroke-width="3" stroke-linecap="round"/>
  <circle cx="80" cy="14" r="3" fill="#2A1B0F"/>
  <circle cx="120" cy="14" r="3" fill="#2A1B0F"/>
</svg>`,

  jam: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Jam">
  <rect width="200" height="200" fill="#FFEDE0"/>
  <rect x="50" y="70" width="100" height="110" rx="8" fill="#A8CCFF" opacity="0.5" stroke="#9BB0C2" stroke-width="3"/>
  <rect x="50" y="100" width="100" height="80" fill="#C42934"/>
  <rect x="46" y="58" width="108" height="18" rx="4" fill="#7A4A21"/>
  <rect x="60" y="120" width="80" height="40" fill="#FFFCF2"/>
  <text x="100" y="148" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="20" font-weight="bold" fill="#C42934">JAM</text>
</svg>`,

  jet: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Jet">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <g transform="translate(100 100) rotate(-25)">
    <ellipse cx="0" cy="0" rx="78" ry="14" fill="#3D8BFD"/>
    <polygon points="78,0 92,-8 92,8" fill="#1E5FBD"/>
    <polygon points="-30,0 -54,-30 -10,-8" fill="#1E5FBD"/>
    <polygon points="-30,0 -54,30 -10,8" fill="#1E5FBD"/>
    <polygon points="-60,-6 -78,-22 -56,-6" fill="#1E5FBD"/>
    <ellipse cx="40" cy="-2" rx="20" ry="6" fill="#A8CCFF"/>
    <ellipse cx="-78" cy="0" rx="6" ry="10" fill="#FFD93D"/>
  </g>
  <path d="M30 150 Q60 144 90 150" stroke="#FFF" stroke-width="3" fill="none" opacity="0.7"/>
</svg>`,

  juice: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Juice">
  <rect width="200" height="200" fill="#FFF6D6"/>
  <path d="M60 60 L140 60 L130 180 L70 180 Z" fill="#FFFCF2" stroke="#C8C0AA" stroke-width="3"/>
  <path d="M62 70 L138 70 L132 130 L68 130 Z" fill="#FF9F1C"/>
  <ellipse cx="100" cy="70" rx="38" ry="6" fill="#FFD79B"/>
  <line x1="120" y1="40" x2="116" y2="80" stroke="#E63946" stroke-width="6" stroke-linecap="round"/>
  <circle cx="84" cy="92" r="5" fill="#FFD79B" opacity="0.7"/>
</svg>`,

  king: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="King">
  <rect width="200" height="200" fill="#F4ECFF"/>
  <polygon points="50,70 70,40 90,70 100,30 110,70 130,40 150,70 150,90 50,90" fill="#FFD93D" stroke="#C9A227" stroke-width="3"/>
  <circle cx="70" cy="60" r="5" fill="#E63946"/>
  <circle cx="100" cy="50" r="5" fill="#3D8BFD"/>
  <circle cx="130" cy="60" r="5" fill="#4CAF50"/>
  <circle cx="100" cy="120" r="32" fill="#F2C79A"/>
  <rect x="68" y="150" width="64" height="30" fill="#7B3FA0"/>
  <circle cx="90" cy="118" r="3" fill="#2A1B0F"/>
  <circle cx="110" cy="118" r="3" fill="#2A1B0F"/>
  <path d="M88 132 Q100 138 112 132" stroke="#2A1B0F" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,

  kite: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Kite">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <polygon points="100,30 150,90 100,150 50,90" fill="#E63946"/>
  <line x1="100" y1="30" x2="100" y2="150" stroke="#FFF" stroke-width="2"/>
  <line x1="50" y1="90" x2="150" y2="90" stroke="#FFF" stroke-width="2"/>
  <polygon points="50,90 100,30 100,90" fill="#FFD93D" opacity="0.7"/>
  <polygon points="100,90 150,90 100,150" fill="#3D8BFD" opacity="0.7"/>
  <path d="M100 150 Q90 160 100 170 Q110 180 100 190" stroke="#7A4A21" stroke-width="2" fill="none"/>
  <path d="M88 162 L78 158 M88 162 L82 168" stroke="#E63946" stroke-width="2"/>
  <path d="M104 178 L96 178 M104 178 L98 184" stroke="#FFD93D" stroke-width="2"/>
</svg>`,

  key: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Key">
  <rect width="200" height="200" fill="#FFF6D6"/>
  <circle cx="60" cy="100" r="36" fill="#FFD93D" stroke="#C9A227" stroke-width="4"/>
  <circle cx="60" cy="100" r="14" fill="#FFF6D6" stroke="#C9A227" stroke-width="3"/>
  <rect x="92" y="92" width="86" height="16" fill="#FFD93D" stroke="#C9A227" stroke-width="3"/>
  <rect x="140" y="108" width="10" height="18" fill="#FFD93D" stroke="#C9A227" stroke-width="3"/>
  <rect x="160" y="108" width="10" height="14" fill="#FFD93D" stroke="#C9A227" stroke-width="3"/>
</svg>`,

  lion: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Lion">
  <rect width="200" height="200" fill="#FFF6D6"/>
  <circle cx="100" cy="110" r="64" fill="#C8851F"/>
  <circle cx="100" cy="110" r="46" fill="#FFD79B"/>
  <g fill="#C8851F">
    <circle cx="50" cy="80" r="14"/>
    <circle cx="50" cy="110" r="14"/>
    <circle cx="50" cy="140" r="14"/>
    <circle cx="150" cy="80" r="14"/>
    <circle cx="150" cy="110" r="14"/>
    <circle cx="150" cy="140" r="14"/>
    <circle cx="68" cy="56" r="12"/>
    <circle cx="100" cy="46" r="12"/>
    <circle cx="132" cy="56" r="12"/>
    <circle cx="68" cy="164" r="12"/>
    <circle cx="132" cy="164" r="12"/>
  </g>
  <circle cx="84" cy="100" r="6" fill="#2A1B0F"/>
  <circle cx="116" cy="100" r="6" fill="#2A1B0F"/>
  <ellipse cx="100" cy="120" rx="8" ry="6" fill="#2A1B0F"/>
  <path d="M100 126 Q100 138 90 140 M100 126 Q100 138 110 140" stroke="#2A1B0F" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,

  leaf: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Leaf">
  <rect width="200" height="200" fill="#EAF6E1"/>
  <path d="M40 160 C40 80 80 40 160 40 C160 120 120 160 40 160 Z" fill="#4CAF50"/>
  <path d="M40 160 C80 110 130 70 160 40" stroke="#2E7D32" stroke-width="4" fill="none" stroke-linecap="round"/>
  <g stroke="#2E7D32" stroke-width="2" fill="none">
    <path d="M80 130 Q100 110 116 96"/>
    <path d="M70 144 Q92 130 106 116"/>
    <path d="M96 116 Q116 100 130 88"/>
    <path d="M110 100 Q124 86 138 76"/>
  </g>
</svg>`,

  lemon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Lemon">
  <rect width="200" height="200" fill="#FFFCE0"/>
  <ellipse cx="100" cy="110" rx="64" ry="50" fill="#FFE94D" transform="rotate(-20 100 110)"/>
  <ellipse cx="48" cy="78" rx="14" ry="8" fill="#E0CC2A" transform="rotate(-20 48 78)"/>
  <ellipse cx="152" cy="142" rx="14" ry="8" fill="#E0CC2A" transform="rotate(-20 152 142)"/>
  <ellipse cx="78" cy="86" rx="14" ry="6" fill="#FFF6A8" opacity="0.7" transform="rotate(-20 78 86)"/>
  <path d="M40 70 Q44 56 56 56" stroke="#4F9C45" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`,

  milk: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Milk">
  <rect width="200" height="200" fill="#EAF4FF"/>
  <polygon points="60,40 140,40 140,60 150,80 150,180 50,180 50,80 60,60" fill="#FFFCF2" stroke="#C8C0AA" stroke-width="3"/>
  <polygon points="60,40 140,40 130,30 70,30" fill="#A8CCFF"/>
  <rect x="74" y="100" width="52" height="60" fill="#3D8BFD" opacity="0.85"/>
  <text x="100" y="138" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="22" font-weight="bold" fill="#FFF">MILK</text>
</svg>`,

  mouse: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Mouse">
  <rect width="200" height="200" fill="#F2F0E6"/>
  <circle cx="60" cy="80" r="22" fill="#B0B0B0"/>
  <circle cx="140" cy="80" r="22" fill="#B0B0B0"/>
  <circle cx="60" cy="80" r="12" fill="#F4A7B9"/>
  <circle cx="140" cy="80" r="12" fill="#F4A7B9"/>
  <ellipse cx="100" cy="118" rx="56" ry="44" fill="#B0B0B0"/>
  <circle cx="82" cy="108" r="5" fill="#2A1B0F"/>
  <circle cx="118" cy="108" r="5" fill="#2A1B0F"/>
  <circle cx="100" cy="128" r="6" fill="#F4A7B9"/>
  <line x1="80" y1="132" x2="60" y2="130" stroke="#2A1B0F" stroke-width="2"/>
  <line x1="80" y1="136" x2="60" y2="142" stroke="#2A1B0F" stroke-width="2"/>
  <line x1="120" y1="132" x2="140" y2="130" stroke="#2A1B0F" stroke-width="2"/>
  <line x1="120" y1="136" x2="140" y2="142" stroke="#2A1B0F" stroke-width="2"/>
  <path d="M156 140 Q176 142 184 122" stroke="#B0B0B0" stroke-width="6" fill="none" stroke-linecap="round"/>
</svg>`,

  nest: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Nest">
  <rect width="200" height="200" fill="#EAF6E1"/>
  <ellipse cx="100" cy="140" rx="74" ry="34" fill="#8C5A2B"/>
  <ellipse cx="100" cy="130" rx="58" ry="22" fill="#5C3A14"/>
  <g stroke="#5C3A14" stroke-width="3" fill="none" stroke-linecap="round">
    <path d="M40 130 Q70 110 100 120"/>
    <path d="M60 150 Q90 140 130 150"/>
    <path d="M100 120 Q140 110 160 130"/>
    <path d="M50 160 Q80 168 120 158"/>
    <path d="M130 160 Q150 156 160 144"/>
  </g>
  <ellipse cx="86" cy="120" rx="14" ry="11" fill="#A8CCFF"/>
  <ellipse cx="110" cy="116" rx="14" ry="11" fill="#FFF6A8"/>
  <ellipse cx="128" cy="124" rx="14" ry="11" fill="#FFEDE0"/>
</svg>`,

  nose: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Nose">
  <rect width="200" height="200" fill="#FFEDE0"/>
  <path d="M100 30 Q92 80 80 130 Q80 160 110 162 Q140 160 134 138 Q120 100 110 30 Z" fill="#F2C79A" stroke="#B98E63" stroke-width="3"/>
  <ellipse cx="96" cy="148" rx="6" ry="4" fill="#2A1B0F"/>
  <ellipse cx="122" cy="148" rx="6" ry="4" fill="#2A1B0F"/>
</svg>`,

  net: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Net">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <line x1="40" y1="170" x2="120" y2="40" stroke="#7A4A21" stroke-width="6" stroke-linecap="round"/>
  <circle cx="140" cy="90" r="44" fill="none" stroke="#7A4A21" stroke-width="6"/>
  <g stroke="#7A4A21" stroke-width="2" fill="none">
    <line x1="100" y1="64" x2="180" y2="116"/>
    <line x1="104" y1="76" x2="176" y2="124"/>
    <line x1="110" y1="60" x2="164" y2="120"/>
    <line x1="120" y1="50" x2="172" y2="106"/>
    <line x1="100" y1="90" x2="180" y2="100"/>
    <line x1="100" y1="100" x2="176" y2="88"/>
  </g>
</svg>`,

  owl: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Owl">
  <rect width="200" height="200" fill="#FFE8C2"/>
  <polygon points="50,50 60,30 76,46" fill="#8C5A2B"/>
  <polygon points="150,50 140,30 124,46" fill="#8C5A2B"/>
  <ellipse cx="100" cy="110" rx="60" ry="68" fill="#8C5A2B"/>
  <ellipse cx="100" cy="130" rx="36" ry="40" fill="#E8C58A"/>
  <circle cx="76" cy="88" r="20" fill="#FFF"/>
  <circle cx="124" cy="88" r="20" fill="#FFF"/>
  <circle cx="76" cy="88" r="10" fill="#2A1B0F"/>
  <circle cx="124" cy="88" r="10" fill="#2A1B0F"/>
  <circle cx="78" cy="86" r="3" fill="#FFF"/>
  <circle cx="126" cy="86" r="3" fill="#FFF"/>
  <polygon points="100,100 92,116 108,116" fill="#FF9F1C"/>
  <path d="M62 160 L60 178 M82 168 L80 184 M118 168 L120 184 M138 160 L140 178" stroke="#FF9F1C" stroke-width="3" stroke-linecap="round"/>
</svg>`,

  octopus: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Octopus">
  <rect width="200" height="200" fill="#D6F5F0"/>
  <ellipse cx="100" cy="80" rx="56" ry="50" fill="#E07A8B"/>
  <g stroke="#E07A8B" stroke-width="14" fill="none" stroke-linecap="round">
    <path d="M56 110 Q40 140 30 170"/>
    <path d="M76 122 Q70 160 60 180"/>
    <path d="M100 126 Q100 162 96 184"/>
    <path d="M124 122 Q130 160 140 180"/>
    <path d="M144 110 Q160 140 170 170"/>
  </g>
  <circle cx="82" cy="74" r="7" fill="#FFF"/>
  <circle cx="118" cy="74" r="7" fill="#FFF"/>
  <circle cx="82" cy="76" r="3" fill="#2A1B0F"/>
  <circle cx="118" cy="76" r="3" fill="#2A1B0F"/>
  <path d="M88 96 Q100 104 112 96" stroke="#2A1B0F" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,

  pizza: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Pizza">
  <rect width="200" height="200" fill="#FFF1D6"/>
  <circle cx="100" cy="100" r="80" fill="#E8B86F"/>
  <circle cx="100" cy="100" r="68" fill="#FFD693"/>
  <circle cx="100" cy="100" r="60" fill="#E63946" opacity="0.9"/>
  <g fill="#FFFCF2">
    <circle cx="74" cy="80" r="9"/>
    <circle cx="120" cy="76" r="9"/>
    <circle cx="80" cy="124" r="9"/>
    <circle cx="124" cy="124" r="9"/>
    <circle cx="100" cy="104" r="9"/>
  </g>
  <g fill="#4F9C45">
    <ellipse cx="90" cy="100" rx="5" ry="3"/>
    <ellipse cx="116" cy="108" rx="5" ry="3"/>
    <ellipse cx="76" cy="108" rx="5" ry="3"/>
  </g>
</svg>`,

  pear: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Pear">
  <rect width="200" height="200" fill="#EEFBE3"/>
  <path d="M100 30 Q108 38 104 50" stroke="#5C3A14" stroke-width="5" stroke-linecap="round" fill="none"/>
  <ellipse cx="120" cy="44" rx="14" ry="8" fill="#6FBF59" transform="rotate(25 120 44)"/>
  <path d="M100 56 C82 56 80 80 90 96 C76 110 64 134 80 158 C96 178 132 174 142 152 C156 124 138 104 124 92 C134 78 124 56 100 56 Z" fill="#9BD174"/>
  <ellipse cx="86" cy="120" rx="10" ry="20" fill="#C0E89A" opacity="0.6"/>
</svg>`,

  queen: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Queen">
  <rect width="200" height="200" fill="#FFE8F1"/>
  <polygon points="55,72 70,40 100,60 130,40 145,72 145,92 55,92" fill="#FFD93D" stroke="#C9A227" stroke-width="3"/>
  <circle cx="70" cy="40" r="6" fill="#E63946"/>
  <circle cx="100" cy="56" r="6" fill="#7B3FA0"/>
  <circle cx="130" cy="40" r="6" fill="#3D8BFD"/>
  <ellipse cx="100" cy="118" rx="30" ry="32" fill="#F2C79A"/>
  <path d="M70 110 Q70 80 100 80 Q130 80 130 110 Q126 88 100 86 Q74 88 70 110" fill="#5C3A14"/>
  <circle cx="88" cy="116" r="3" fill="#2A1B0F"/>
  <circle cx="112" cy="116" r="3" fill="#2A1B0F"/>
  <path d="M88 132 Q100 140 112 132" stroke="#2A1B0F" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M70 160 L100 150 L130 160 L130 180 L70 180 Z" fill="#E07A8B"/>
</svg>`,

  quilt: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Quilt">
  <rect width="200" height="200" fill="#F4ECFF"/>
  <rect x="30" y="40" width="140" height="120" rx="10" fill="#FFFCF2" stroke="#8C8C8C" stroke-width="3"/>
  <rect x="30" y="40" width="46" height="40" fill="#E63946"/>
  <rect x="76" y="40" width="48" height="40" fill="#3D8BFD"/>
  <rect x="124" y="40" width="46" height="40" fill="#FFD93D"/>
  <rect x="30" y="80" width="46" height="40" fill="#4CAF50"/>
  <rect x="76" y="80" width="48" height="40" fill="#FFD93D"/>
  <rect x="124" y="80" width="46" height="40" fill="#E07A8B"/>
  <rect x="30" y="120" width="46" height="40" fill="#7B3FA0"/>
  <rect x="76" y="120" width="48" height="40" fill="#FF9F1C"/>
  <rect x="124" y="120" width="46" height="40" fill="#3D8BFD"/>
  <g stroke="#FFFCF2" stroke-width="2" stroke-dasharray="4 4" fill="none">
    <line x1="30" y1="80" x2="170" y2="80"/>
    <line x1="30" y1="120" x2="170" y2="120"/>
    <line x1="76" y1="40" x2="76" y2="160"/>
    <line x1="124" y1="40" x2="124" y2="160"/>
  </g>
</svg>`,

  rabbit: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Rabbit">
  <rect width="200" height="200" fill="#F2F0E6"/>
  <ellipse cx="76" cy="44" rx="14" ry="36" fill="#FFFCF2" stroke="#C8C0AA" stroke-width="3"/>
  <ellipse cx="124" cy="44" rx="14" ry="36" fill="#FFFCF2" stroke="#C8C0AA" stroke-width="3"/>
  <ellipse cx="76" cy="44" rx="6" ry="22" fill="#F4A7B9"/>
  <ellipse cx="124" cy="44" rx="6" ry="22" fill="#F4A7B9"/>
  <circle cx="100" cy="120" r="56" fill="#FFFCF2" stroke="#C8C0AA" stroke-width="3"/>
  <circle cx="82" cy="112" r="6" fill="#2A1B0F"/>
  <circle cx="118" cy="112" r="6" fill="#2A1B0F"/>
  <ellipse cx="100" cy="128" rx="6" ry="4" fill="#F4A7B9"/>
  <path d="M100 132 L100 140 M88 144 Q100 152 112 144" stroke="#2A1B0F" stroke-width="2" fill="none" stroke-linecap="round"/>
  <line x1="76" y1="130" x2="56" y2="130" stroke="#2A1B0F" stroke-width="2"/>
  <line x1="124" y1="130" x2="144" y2="130" stroke="#2A1B0F" stroke-width="2"/>
  <circle cx="158" cy="146" r="14" fill="#FFFCF2" stroke="#C8C0AA" stroke-width="3"/>
</svg>`,

  rainbow: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Rainbow">
  <rect width="200" height="200" fill="#EAF4FF"/>
  <g fill="none" stroke-width="14">
    <path d="M20 160 A80 80 0 0 1 180 160" stroke="#E63946"/>
    <path d="M34 160 A66 66 0 0 1 166 160" stroke="#FF9F1C"/>
    <path d="M48 160 A52 52 0 0 1 152 160" stroke="#FFD93D"/>
    <path d="M62 160 A38 38 0 0 1 138 160" stroke="#4CAF50"/>
    <path d="M76 160 A24 24 0 0 1 124 160" stroke="#3D8BFD"/>
  </g>
  <ellipse cx="40" cy="170" rx="20" ry="10" fill="#FFF"/>
  <ellipse cx="160" cy="170" rx="20" ry="10" fill="#FFF"/>
</svg>`,

  robot: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Robot">
  <rect width="200" height="200" fill="#EAF4FF"/>
  <line x1="100" y1="20" x2="100" y2="40" stroke="#8C8C8C" stroke-width="3"/>
  <circle cx="100" cy="20" r="6" fill="#E63946"/>
  <rect x="60" y="40" width="80" height="60" rx="8" fill="#A8B5BD" stroke="#6C7A82" stroke-width="3"/>
  <circle cx="80" cy="64" r="8" fill="#3D8BFD"/>
  <circle cx="120" cy="64" r="8" fill="#3D8BFD"/>
  <rect x="78" y="82" width="44" height="8" rx="3" fill="#2A1B0F"/>
  <rect x="50" y="104" width="100" height="70" rx="6" fill="#8C9AA2" stroke="#6C7A82" stroke-width="3"/>
  <rect x="68" y="120" width="64" height="36" fill="#3D8BFD" opacity="0.5"/>
  <rect x="20" y="116" width="20" height="44" rx="4" fill="#6C7A82"/>
  <rect x="160" y="116" width="20" height="44" rx="4" fill="#6C7A82"/>
</svg>`,

  snake: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Snake">
  <rect width="200" height="200" fill="#EAF6E1"/>
  <path d="M30 170 Q30 110 80 110 Q130 110 130 70 Q130 40 100 40 Q70 40 70 70" stroke="#4CAF50" stroke-width="22" fill="none" stroke-linecap="round"/>
  <path d="M30 170 Q30 110 80 110 Q130 110 130 70 Q130 40 100 40 Q70 40 70 70" stroke="#9BD174" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="6 10"/>
  <circle cx="62" cy="70" r="4" fill="#2A1B0F"/>
  <path d="M58 80 L48 90 M58 80 L52 92" stroke="#E63946" stroke-width="2"/>
</svg>`,

  tree: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Tree">
  <rect width="200" height="200" fill="#EAF6E1"/>
  <rect x="88" y="120" width="24" height="60" fill="#7A4A21"/>
  <circle cx="100" cy="90" r="50" fill="#4CAF50"/>
  <circle cx="68" cy="100" r="34" fill="#4CAF50"/>
  <circle cx="132" cy="100" r="34" fill="#4CAF50"/>
  <circle cx="84" cy="70" r="26" fill="#6FBF59"/>
  <circle cx="116" cy="70" r="26" fill="#6FBF59"/>
  <circle cx="100" cy="60" r="22" fill="#6FBF59"/>
  <ellipse cx="60" cy="180" rx="40" ry="6" fill="#4F9C45" opacity="0.5"/>
  <ellipse cx="140" cy="180" rx="40" ry="6" fill="#4F9C45" opacity="0.5"/>
</svg>`,

  tiger: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Tiger">
  <rect width="200" height="200" fill="#FFF1D6"/>
  <polygon points="56,60 50,38 76,52" fill="#FF9F1C"/>
  <polygon points="144,60 150,38 124,52" fill="#FF9F1C"/>
  <circle cx="100" cy="110" r="64" fill="#FF9F1C"/>
  <ellipse cx="100" cy="128" rx="38" ry="28" fill="#FFFCF2"/>
  <g stroke="#2A1B0F" stroke-width="4" stroke-linecap="round">
    <line x1="50" y1="86" x2="40" y2="80"/>
    <line x1="50" y1="100" x2="36" y2="100"/>
    <line x1="50" y1="114" x2="40" y2="120"/>
    <line x1="150" y1="86" x2="160" y2="80"/>
    <line x1="150" y1="100" x2="164" y2="100"/>
    <line x1="150" y1="114" x2="160" y2="120"/>
    <path d="M100 50 L96 70"/>
    <path d="M100 50 L104 70"/>
  </g>
  <circle cx="82" cy="100" r="6" fill="#2A1B0F"/>
  <circle cx="118" cy="100" r="6" fill="#2A1B0F"/>
  <ellipse cx="100" cy="120" rx="8" ry="6" fill="#2A1B0F"/>
  <path d="M100 126 Q100 138 90 140 M100 126 Q100 138 110 140" stroke="#2A1B0F" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,

  train: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Train">
  <rect width="200" height="200" fill="#EAF4FF"/>
  <rect x="10" y="160" width="180" height="6" fill="#5C3A14"/>
  <rect x="20" y="100" width="90" height="60" fill="#E63946"/>
  <rect x="110" y="80" width="60" height="80" fill="#E63946"/>
  <rect x="120" y="90" width="40" height="34" fill="#A8CCFF"/>
  <rect x="30" y="110" width="20" height="20" fill="#A8CCFF"/>
  <rect x="60" y="110" width="20" height="20" fill="#A8CCFF"/>
  <rect x="130" y="60" width="20" height="20" fill="#7A4A21"/>
  <ellipse cx="140" cy="50" rx="22" ry="10" fill="#CFCFCF" opacity="0.8"/>
  <ellipse cx="148" cy="38" rx="14" ry="6" fill="#CFCFCF" opacity="0.6"/>
  <circle cx="40" cy="166" r="12" fill="#222"/>
  <circle cx="80" cy="166" r="12" fill="#222"/>
  <circle cx="130" cy="166" r="12" fill="#222"/>
  <circle cx="160" cy="166" r="12" fill="#222"/>
</svg>`,

  umbrella: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Umbrella">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <path d="M20 110 Q100 30 180 110 Z" fill="#E63946"/>
  <g fill="#C42934">
    <path d="M20 110 Q40 100 60 110 Q40 80 20 110 Z"/>
    <path d="M100 70 Q120 100 140 110 Q120 100 100 70 Z"/>
    <path d="M180 110 Q160 100 140 110 Q160 80 180 110 Z"/>
  </g>
  <line x1="100" y1="110" x2="100" y2="170" stroke="#7A4A21" stroke-width="5"/>
  <path d="M100 170 Q100 184 114 184" stroke="#7A4A21" stroke-width="5" fill="none" stroke-linecap="round"/>
  <g fill="#A8CCFF">
    <circle cx="40" cy="40" r="3"/>
    <circle cx="60" cy="160" r="3"/>
    <circle cx="160" cy="160" r="3"/>
    <circle cx="170" cy="40" r="3"/>
  </g>
</svg>`,

  unicorn: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Unicorn">
  <rect width="200" height="200" fill="#F4ECFF"/>
  <ellipse cx="110" cy="130" rx="60" ry="32" fill="#FFFCF2"/>
  <circle cx="58" cy="100" r="28" fill="#FFFCF2"/>
  <polygon points="50,72 56,40 70,76" fill="#FFD93D"/>
  <line x1="50" y1="72" x2="62" y2="78" stroke="#E0CC2A" stroke-width="2"/>
  <line x1="56" y1="60" x2="68" y2="74" stroke="#E0CC2A" stroke-width="2"/>
  <ellipse cx="68" cy="76" rx="6" ry="10" fill="#FFFCF2"/>
  <path d="M44 78 Q24 84 28 110 Q40 100 50 96" fill="#E07A8B"/>
  <path d="M50 100 Q34 104 36 124 Q46 116 56 112" fill="#7B3FA0"/>
  <circle cx="52" cy="100" r="3" fill="#2A1B0F"/>
  <rect x="78" y="160" width="10" height="20" fill="#FFFCF2"/>
  <rect x="98" y="160" width="10" height="20" fill="#FFFCF2"/>
  <rect x="128" y="160" width="10" height="20" fill="#FFFCF2"/>
  <rect x="148" y="160" width="10" height="20" fill="#FFFCF2"/>
  <path d="M170 110 Q186 116 188 132 Q180 130 168 126" fill="#3D8BFD"/>
</svg>`,

  van: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Van">
  <rect width="200" height="200" fill="#EAF4FF"/>
  <rect x="20" y="160" width="160" height="6" fill="#8C8C8C"/>
  <rect x="20" y="80" width="120" height="80" rx="6" fill="#3D8BFD"/>
  <path d="M140 100 L180 110 L180 160 L140 160 Z" fill="#3D8BFD"/>
  <rect x="30" y="90" width="100" height="26" fill="#A8CCFF"/>
  <rect x="148" y="116" width="26" height="20" fill="#A8CCFF"/>
  <circle cx="50" cy="166" r="14" fill="#222"/>
  <circle cx="150" cy="166" r="14" fill="#222"/>
  <circle cx="50" cy="166" r="5" fill="#BBB"/>
  <circle cx="150" cy="166" r="5" fill="#BBB"/>
  <rect x="76" y="120" width="2" height="40" fill="#FFFCF2"/>
</svg>`,

  vase: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Vase">
  <rect width="200" height="200" fill="#FFF1D6"/>
  <ellipse cx="100" cy="48" rx="30" ry="6" fill="#3D8BFD" opacity="0.5"/>
  <line x1="100" y1="48" x2="100" y2="20" stroke="#4F9C45" stroke-width="4"/>
  <line x1="90" y1="44" x2="80" y2="22" stroke="#4F9C45" stroke-width="4"/>
  <line x1="110" y1="44" x2="120" y2="22" stroke="#4F9C45" stroke-width="4"/>
  <circle cx="100" cy="20" r="10" fill="#E63946"/>
  <circle cx="80" cy="22" r="8" fill="#FFD93D"/>
  <circle cx="120" cy="22" r="8" fill="#E07A8B"/>
  <path d="M70 60 Q60 90 70 130 Q80 170 100 174 Q120 170 130 130 Q140 90 130 60 Q120 56 100 56 Q80 56 70 60 Z" fill="#7B3FA0"/>
  <path d="M70 60 Q100 70 130 60" stroke="#5A2D85" stroke-width="3" fill="none"/>
  <ellipse cx="86" cy="100" rx="8" ry="20" fill="#A66ECB" opacity="0.6"/>
</svg>`,

  violin: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Violin">
  <rect width="200" height="200" fill="#FFEEDB"/>
  <g transform="translate(100 100) rotate(-25)">
    <path d="M-40 -70 L-40 -40 Q-60 -40 -60 -10 Q-60 20 -40 30 Q-40 60 0 70 Q40 60 40 30 Q60 20 60 -10 Q60 -40 40 -40 L40 -70 Q30 -76 0 -76 Q-30 -76 -40 -70 Z" fill="#A0623A"/>
    <rect x="-6" y="-76" width="12" height="60" fill="#5C3A14"/>
    <rect x="-6" y="-90" width="12" height="14" rx="2" fill="#3A1F0A"/>
    <g stroke="#FFD93D" stroke-width="1.2">
      <line x1="-3" y1="-90" x2="-3" y2="60"/>
      <line x1="-1" y1="-90" x2="-1" y2="60"/>
      <line x1="1" y1="-90" x2="1" y2="60"/>
      <line x1="3" y1="-90" x2="3" y2="60"/>
    </g>
    <path d="M-22 0 Q-26 6 -22 14 M22 0 Q26 6 22 14" stroke="#3A1F0A" stroke-width="2" fill="none"/>
  </g>
</svg>`,

  whale: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Whale">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <path d="M30 110 Q60 60 130 70 Q180 76 180 110 Q180 144 130 150 Q60 156 30 110 Z" fill="#5A8DB0"/>
  <ellipse cx="100" cy="130" rx="60" ry="22" fill="#A8CCFF"/>
  <polygon points="180,110 200,90 198,130" fill="#5A8DB0"/>
  <circle cx="64" cy="100" r="5" fill="#FFF"/>
  <circle cx="64" cy="100" r="2" fill="#2A1B0F"/>
  <path d="M50 100 Q60 110 50 118" stroke="#3A6A88" stroke-width="2" fill="none"/>
  <g stroke="#A8CCFF" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M100 56 Q96 40 88 30"/>
    <path d="M100 56 Q104 40 112 30"/>
  </g>
</svg>`,

  watermelon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Watermelon">
  <rect width="200" height="200" fill="#EEFBE3"/>
  <path d="M20 130 Q100 30 180 130 Z" fill="#E63946"/>
  <path d="M20 130 Q100 30 180 130" stroke="#FFFCF2" stroke-width="8" fill="none"/>
  <path d="M20 130 Q100 30 180 130" stroke="#4CAF50" stroke-width="6" fill="none" transform="translate(0 8)"/>
  <g fill="#2A1B0F">
    <ellipse cx="70" cy="100" rx="4" ry="6" transform="rotate(-20 70 100)"/>
    <ellipse cx="100" cy="86" rx="4" ry="6"/>
    <ellipse cx="130" cy="100" rx="4" ry="6" transform="rotate(20 130 100)"/>
    <ellipse cx="60" cy="120" rx="4" ry="6" transform="rotate(-30 60 120)"/>
    <ellipse cx="140" cy="120" rx="4" ry="6" transform="rotate(30 140 120)"/>
    <ellipse cx="100" cy="116" rx="4" ry="6"/>
  </g>
</svg>`,

  window: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Window">
  <rect width="200" height="200" fill="#FFF1DA"/>
  <rect x="36" y="36" width="128" height="128" rx="4" fill="#7A4A21"/>
  <rect x="44" y="44" width="112" height="112" fill="#A8CCFF"/>
  <rect x="96" y="44" width="8" height="112" fill="#7A4A21"/>
  <rect x="44" y="96" width="112" height="8" fill="#7A4A21"/>
  <path d="M60 80 Q70 70 80 80" stroke="#FFF" stroke-width="3" fill="none" opacity="0.7"/>
  <path d="M114 130 Q124 120 134 130" stroke="#FFF" stroke-width="3" fill="none" opacity="0.7"/>
  <circle cx="130" cy="64" r="10" fill="#FFD93D"/>
</svg>`,

  xylophone: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Xylophone">
  <rect width="200" height="200" fill="#F4ECFF"/>
  <g stroke="#5C3A14" stroke-width="4" fill="none">
    <line x1="20" y1="60" x2="180" y2="50"/>
    <line x1="20" y1="160" x2="180" y2="150"/>
  </g>
  <g stroke="#5C3A14" stroke-width="2">
    <rect x="28" y="64" width="22" height="92" fill="#E63946"/>
    <rect x="54" y="66" width="22" height="88" fill="#FF9F1C"/>
    <rect x="80" y="68" width="22" height="84" fill="#FFD93D"/>
    <rect x="106" y="70" width="22" height="80" fill="#4CAF50"/>
    <rect x="132" y="72" width="22" height="76" fill="#3D8BFD"/>
    <rect x="158" y="74" width="22" height="72" fill="#7B3FA0"/>
  </g>
  <line x1="40" y1="20" x2="60" y2="80" stroke="#7A4A21" stroke-width="3" stroke-linecap="round"/>
  <circle cx="40" cy="20" r="6" fill="#FFFCF2" stroke="#7A4A21" stroke-width="2"/>
  <line x1="160" y1="20" x2="140" y2="80" stroke="#7A4A21" stroke-width="3" stroke-linecap="round"/>
  <circle cx="160" cy="20" r="6" fill="#FFFCF2" stroke="#7A4A21" stroke-width="2"/>
</svg>`,

  box: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Box">
  <rect width="200" height="200" fill="#FFF6D6"/>
  <polygon points="30,70 100,40 170,70 170,160 30,160" fill="#C68A4C"/>
  <polygon points="30,70 100,40 170,70 100,100" fill="#E8B86F"/>
  <polygon points="100,100 170,70 170,160 100,190" fill="#A0703D"/>
  <polygon points="100,100 30,70 30,160 100,190" fill="#C68A4C"/>
  <rect x="92" y="40" width="16" height="150" fill="#E63946"/>
  <rect x="30" y="100" width="140" height="14" fill="#E63946"/>
  <path d="M96 40 Q86 26 80 36 Q80 46 92 44 Z" fill="#E63946"/>
  <path d="M104 40 Q114 26 120 36 Q120 46 108 44 Z" fill="#E63946"/>
</svg>`,

  fox: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Fox">
  <rect width="200" height="200" fill="#FFEDE0"/>
  <polygon points="40,60 60,30 78,68" fill="#FF7A00"/>
  <polygon points="160,60 140,30 122,68" fill="#FF7A00"/>
  <polygon points="48,52 60,38 70,60" fill="#FFFCF2"/>
  <polygon points="152,52 140,38 130,60" fill="#FFFCF2"/>
  <circle cx="100" cy="110" r="60" fill="#FF7A00"/>
  <path d="M100 130 L70 168 L130 168 Z" fill="#FFFCF2"/>
  <circle cx="80" cy="100" r="6" fill="#2A1B0F"/>
  <circle cx="120" cy="100" r="6" fill="#2A1B0F"/>
  <polygon points="100,128 92,140 108,140" fill="#2A1B0F"/>
  <path d="M100 140 L100 150 M88 154 Q100 162 112 154" stroke="#2A1B0F" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M170 100 Q190 80 184 60" stroke="#FF7A00" stroke-width="22" fill="none" stroke-linecap="round"/>
  <path d="M188 64 Q192 56 188 50" stroke="#FFFCF2" stroke-width="12" fill="none" stroke-linecap="round"/>
</svg>`,

  yellow: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Yellow">
  <rect width="200" height="200" fill="#FFFCE0"/>
  <circle cx="100" cy="100" r="68" fill="#FFD93D"/>
  <circle cx="80" cy="80" r="16" fill="#FFF6A8" opacity="0.7"/>
  <text x="100" y="184" text-anchor="middle" font-family="Comic Sans MS, 'Comic Sans', cursive, sans-serif" font-size="22" font-weight="bold" fill="#C9A227">YELLOW</text>
</svg>`,

  'yo-yo': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Yo-yo">
  <rect width="200" height="200" fill="#EAF4FF"/>
  <line x1="100" y1="20" x2="100" y2="100" stroke="#7A4A21" stroke-width="3"/>
  <circle cx="100" cy="20" r="6" fill="#7A4A21"/>
  <circle cx="100" cy="130" r="56" fill="#E63946"/>
  <circle cx="100" cy="130" r="40" fill="#FFD93D"/>
  <circle cx="100" cy="130" r="22" fill="#E63946"/>
  <circle cx="100" cy="130" r="8" fill="#FFFCF2"/>
  <path d="M86 110 Q100 102 114 110" stroke="#FFF" stroke-width="2" fill="none" opacity="0.6"/>
</svg>`,

  yak: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Yak">
  <rect width="200" height="200" fill="#F2F0E6"/>
  <ellipse cx="110" cy="120" rx="64" ry="40" fill="#3A2A1F"/>
  <g stroke="#5C3A14" stroke-width="3" fill="none" stroke-linecap="round">
    <path d="M50 100 Q40 130 50 158"/>
    <path d="M70 130 Q60 156 70 170"/>
    <path d="M110 156 Q108 172 116 176"/>
    <path d="M150 156 Q156 172 164 176"/>
    <path d="M170 100 Q176 130 170 158"/>
  </g>
  <circle cx="56" cy="96" r="28" fill="#3A2A1F"/>
  <path d="M40 80 Q28 64 40 56 Q48 70 56 80" fill="#FFFCF2"/>
  <path d="M72 80 Q84 64 72 56 Q64 70 56 80" fill="#FFFCF2"/>
  <circle cx="50" cy="98" r="3" fill="#FFD93D"/>
  <ellipse cx="44" cy="112" rx="6" ry="4" fill="#5C3A14"/>
</svg>`,

  zebra: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Zebra">
  <rect width="200" height="200" fill="#F4ECFF"/>
  <ellipse cx="110" cy="120" rx="60" ry="34" fill="#FFFCF2" stroke="#2A1B0F" stroke-width="3"/>
  <g fill="#2A1B0F">
    <rect x="60" y="88" width="6" height="34" transform="rotate(-10 60 88)"/>
    <rect x="78" y="86" width="6" height="38"/>
    <rect x="96" y="86" width="6" height="38"/>
    <rect x="114" y="86" width="6" height="38"/>
    <rect x="132" y="86" width="6" height="38"/>
    <rect x="150" y="88" width="6" height="34" transform="rotate(10 150 88)"/>
  </g>
  <path d="M150 90 L180 60 L184 100 L168 110 Z" fill="#FFFCF2" stroke="#2A1B0F" stroke-width="3"/>
  <g fill="#2A1B0F">
    <rect x="156" y="68" width="4" height="12" transform="rotate(20 156 68)"/>
    <rect x="166" y="74" width="4" height="14" transform="rotate(20 166 74)"/>
    <rect x="176" y="82" width="4" height="14" transform="rotate(20 176 82)"/>
  </g>
  <rect x="70" y="150" width="8" height="24" fill="#2A1B0F"/>
  <rect x="100" y="150" width="8" height="24" fill="#2A1B0F"/>
  <rect x="130" y="150" width="8" height="24" fill="#2A1B0F"/>
  <rect x="150" y="150" width="8" height="24" fill="#2A1B0F"/>
  <circle cx="176" cy="78" r="3" fill="#2A1B0F"/>
</svg>`,

  alien: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Alien">
  <rect width="200" height="200" fill="#E8FFE0"/>
  <path d="M100 30 C60 30 44 64 50 100 C56 138 80 168 100 168 C120 168 144 138 150 100 C156 64 140 30 100 30 Z" fill="#7BC96F"/>
  <line x1="76" y1="34" x2="64" y2="14" stroke="#3A6E2F" stroke-width="4" stroke-linecap="round"/>
  <line x1="124" y1="34" x2="136" y2="14" stroke="#3A6E2F" stroke-width="4" stroke-linecap="round"/>
  <circle cx="64" cy="14" r="6" fill="#FFD93D"/>
  <circle cx="136" cy="14" r="6" fill="#FFD93D"/>
  <ellipse cx="76" cy="96" rx="14" ry="20" fill="#1A1A1A"/>
  <ellipse cx="124" cy="96" rx="14" ry="20" fill="#1A1A1A"/>
  <ellipse cx="72" cy="90" rx="4" ry="6" fill="#FFFFFF"/>
  <ellipse cx="120" cy="90" rx="4" ry="6" fill="#FFFFFF"/>
  <path d="M84 138 Q100 148 116 138" stroke="#3A6E2F" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`,

  arm: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Arm">
  <rect width="200" height="200" fill="#FFF1E0"/>
  <path d="M30 130 Q40 80 90 70 L130 70 Q150 70 150 50 Q150 30 130 30 L100 30" stroke="#F2C79A" stroke-width="36" fill="none" stroke-linecap="round"/>
  <circle cx="92" cy="30" r="22" fill="#F2C79A"/>
  <path d="M76 28 Q86 18 96 26 M96 26 Q104 18 112 28 M112 28 Q120 22 124 32" stroke="#E0A877" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="120" cy="110" rx="14" ry="10" fill="#E0A877" opacity="0.5"/>
</svg>`,

  astronaut: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Astronaut">
  <rect width="200" height="200" fill="#0E1A40"/>
  <circle cx="40" cy="40" r="2" fill="#FFF"/>
  <circle cx="170" cy="50" r="2" fill="#FFF"/>
  <circle cx="160" cy="160" r="2" fill="#FFF"/>
  <circle cx="30" cy="150" r="2" fill="#FFF"/>
  <rect x="60" y="100" width="80" height="70" rx="12" fill="#F0F0F0"/>
  <circle cx="100" cy="70" r="40" fill="#F0F0F0"/>
  <path d="M70 70 Q70 38 100 38 Q130 38 130 70 L130 86 Q100 96 70 86 Z" fill="#9BD3FF" opacity="0.9"/>
  <rect x="78" y="62" width="44" height="22" rx="6" fill="#2A4A7F"/>
  <circle cx="92" cy="73" r="4" fill="#A8CCFF"/>
  <rect x="50" y="120" width="14" height="32" rx="4" fill="#DADADA"/>
  <rect x="136" y="120" width="14" height="32" rx="4" fill="#DADADA"/>
  <circle cx="100" cy="135" r="8" fill="#E63946"/>
</svg>`,

  aunt: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Aunt">
  <rect width="200" height="200" fill="#FFE8F1"/>
  <path d="M58 70 Q58 30 100 30 Q142 30 142 70 L142 96 Q100 110 58 96 Z" fill="#5A3A2A"/>
  <circle cx="100" cy="76" r="34" fill="#F2C79A"/>
  <circle cx="88" cy="74" r="3" fill="#2A1B0F"/>
  <circle cx="112" cy="74" r="3" fill="#2A1B0F"/>
  <path d="M88 88 Q100 96 112 88" stroke="#C04060" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="80" cy="82" r="4" fill="#FFB1B1" opacity="0.6"/>
  <circle cx="120" cy="82" r="4" fill="#FFB1B1" opacity="0.6"/>
  <path d="M60 180 Q60 120 100 120 Q140 120 140 180 Z" fill="#E07AAA"/>
  <circle cx="100" cy="148" r="6" fill="#FFD93D"/>
</svg>`,

  baby: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Baby">
  <rect width="200" height="200" fill="#FFF1F6"/>
  <circle cx="100" cy="100" r="68" fill="#F8D2B5"/>
  <path d="M80 50 Q90 30 100 50 Q110 30 120 50" stroke="#7A4A21" stroke-width="6" fill="none" stroke-linecap="round"/>
  <circle cx="82" cy="100" r="6" fill="#2A1B0F"/>
  <circle cx="118" cy="100" r="6" fill="#2A1B0F"/>
  <circle cx="80" cy="98" r="2" fill="#FFF"/>
  <circle cx="116" cy="98" r="2" fill="#FFF"/>
  <circle cx="66" cy="118" r="8" fill="#FFB1B1" opacity="0.7"/>
  <circle cx="134" cy="118" r="8" fill="#FFB1B1" opacity="0.7"/>
  <path d="M86 130 Q100 144 114 130" stroke="#C04060" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`,

  balloon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Balloon">
  <rect width="200" height="200" fill="#E8F4FF"/>
  <ellipse cx="100" cy="80" rx="50" ry="60" fill="#E63946"/>
  <ellipse cx="84" cy="60" rx="12" ry="18" fill="#FFFFFF" opacity="0.4"/>
  <polygon points="92,140 108,140 100,150" fill="#9B2030"/>
  <path d="M100 150 Q90 170 100 184 Q110 198 100 200" stroke="#3A3A3A" stroke-width="2" fill="none"/>
</svg>`,

  bath: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bath">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <path d="M30 110 L170 110 Q170 160 130 160 L70 160 Q30 160 30 110 Z" fill="#FFFFFF" stroke="#4A6FA5" stroke-width="4"/>
  <ellipse cx="100" cy="118" rx="64" ry="8" fill="#9BD3FF"/>
  <circle cx="70" cy="100" r="10" fill="#FFFFFF" opacity="0.9"/>
  <circle cx="100" cy="90" r="14" fill="#FFFFFF" opacity="0.9"/>
  <circle cx="130" cy="100" r="10" fill="#FFFFFF" opacity="0.9"/>
  <circle cx="86" cy="76" r="6" fill="#FFFFFF" opacity="0.8"/>
  <circle cx="118" cy="76" r="6" fill="#FFFFFF" opacity="0.8"/>
  <rect x="34" y="160" width="8" height="20" fill="#4A6FA5"/>
  <rect x="158" y="160" width="8" height="20" fill="#4A6FA5"/>
</svg>`,

  beach: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Beach">
  <rect width="200" height="120" fill="#9BD3FF"/>
  <rect y="120" width="200" height="80" fill="#FFE7B3"/>
  <circle cx="160" cy="40" r="22" fill="#FFD93D"/>
  <path d="M0 120 Q50 110 100 120 T200 120 L200 130 L0 130 Z" fill="#3D8BFD" opacity="0.6"/>
  <path d="M60 130 L60 70 Q90 50 120 70 L120 130 Z" fill="#E63946"/>
  <line x1="60" y1="70" x2="120" y2="70" stroke="#FFFFFF" stroke-width="2"/>
  <line x1="90" y1="60" x2="90" y2="160" stroke="#7A4A21" stroke-width="4"/>
  <circle cx="40" cy="160" r="6" fill="#FFC59B"/>
  <circle cx="160" cy="170" r="6" fill="#FFC59B"/>
</svg>`,

  bed: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bed">
  <rect width="200" height="200" fill="#FFF3D6"/>
  <rect x="20" y="80" width="40" height="80" fill="#8B5A2B"/>
  <rect x="20" y="120" width="160" height="40" fill="#A0703D"/>
  <rect x="30" y="100" width="50" height="30" rx="6" fill="#FFFFFF"/>
  <rect x="80" y="110" width="100" height="20" fill="#3D8BFD"/>
  <path d="M80 120 L180 120 L180 130 L80 130 Z" fill="#2A5FBD"/>
  <rect x="20" y="155" width="10" height="20" fill="#5A3A1F"/>
  <rect x="170" y="155" width="10" height="20" fill="#5A3A1F"/>
  <text x="44" y="60" font-size="36" text-anchor="middle">💤</text>
</svg>`,

  bell: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bell">
  <rect width="200" height="200" fill="#FFF8C6"/>
  <rect x="92" y="28" width="16" height="14" rx="4" fill="#7A4A21"/>
  <path d="M60 140 Q60 60 100 60 Q140 60 140 140 Z" fill="#FFB52E"/>
  <ellipse cx="100" cy="60" rx="14" ry="6" fill="#D88A0F"/>
  <ellipse cx="100" cy="140" rx="44" ry="10" fill="#D88A0F"/>
  <circle cx="100" cy="160" r="10" fill="#7A4A21"/>
  <path d="M70 110 Q70 80 100 76" stroke="#FFE49A" stroke-width="6" fill="none" stroke-linecap="round"/>
</svg>`,

  bike: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bike">
  <rect width="200" height="200" fill="#E8F4FF"/>
  <circle cx="50" cy="140" r="30" fill="none" stroke="#2A2A2A" stroke-width="6"/>
  <circle cx="150" cy="140" r="30" fill="none" stroke="#2A2A2A" stroke-width="6"/>
  <circle cx="50" cy="140" r="4" fill="#2A2A2A"/>
  <circle cx="150" cy="140" r="4" fill="#2A2A2A"/>
  <g stroke="#E63946" stroke-width="5" stroke-linecap="round" fill="none">
    <line x1="50" y1="140" x2="100" y2="140"/>
    <line x1="100" y1="140" x2="150" y2="140"/>
    <line x1="100" y1="140" x2="120" y2="80"/>
    <line x1="50" y1="140" x2="120" y2="80"/>
    <line x1="120" y1="80" x2="150" y2="140"/>
  </g>
  <line x1="115" y1="68" x2="135" y2="68" stroke="#2A2A2A" stroke-width="5" stroke-linecap="round"/>
  <line x1="125" y1="68" x2="125" y2="82" stroke="#2A2A2A" stroke-width="4"/>
  <ellipse cx="98" cy="135" rx="14" ry="5" fill="#2A2A2A"/>
  <g stroke="#9BB8DD" stroke-width="2">
    <line x1="50" y1="140" x2="80" y2="140"/>
    <line x1="50" y1="140" x2="50" y2="110"/>
    <line x1="50" y1="140" x2="20" y2="140"/>
    <line x1="50" y1="140" x2="50" y2="170"/>
  </g>
</svg>`,

  bird: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bird">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <ellipse cx="100" cy="120" rx="50" ry="40" fill="#3D8BFD"/>
  <circle cx="140" cy="90" r="28" fill="#3D8BFD"/>
  <circle cx="148" cy="86" r="5" fill="#FFFFFF"/>
  <circle cx="150" cy="86" r="2.5" fill="#1A1A1A"/>
  <polygon points="166,92 184,90 166,100" fill="#FFB52E"/>
  <path d="M70 110 Q40 90 36 130 Q60 130 80 130 Z" fill="#1E5FBD"/>
  <line x1="110" y1="158" x2="108" y2="180" stroke="#FFB52E" stroke-width="3"/>
  <line x1="130" y1="158" x2="128" y2="180" stroke="#FFB52E" stroke-width="3"/>
</svg>`,

  black: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Black">
  <rect width="200" height="200" fill="#F0F0F0"/>
  <circle cx="100" cy="100" r="70" fill="#1A1A1A"/>
  <circle cx="76" cy="76" r="14" fill="#3A3A3A"/>
  <text x="100" y="178" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="20" font-weight="bold" fill="#1A1A1A">Black</text>
</svg>`,

  block: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Block">
  <rect width="200" height="200" fill="#FFF3D6"/>
  <rect x="40" y="110" width="60" height="60" fill="#E63946" stroke="#9B2030" stroke-width="3"/>
  <text x="70" y="152" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="36" font-weight="bold" fill="#FFFFFF">A</text>
  <rect x="100" y="110" width="60" height="60" fill="#3D8BFD" stroke="#1E5FBD" stroke-width="3"/>
  <text x="130" y="152" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="36" font-weight="bold" fill="#FFFFFF">B</text>
  <rect x="70" y="50" width="60" height="60" fill="#FFD93D" stroke="#C9A227" stroke-width="3"/>
  <text x="100" y="92" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="36" font-weight="bold" fill="#7A4A21">C</text>
</svg>`,

  boat: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Boat">
  <rect width="200" height="120" fill="#9BD3FF"/>
  <rect y="120" width="200" height="80" fill="#3D8BFD"/>
  <path d="M30 130 L170 130 L150 170 L50 170 Z" fill="#8B5A2B"/>
  <rect x="98" y="50" width="6" height="80" fill="#7A4A21"/>
  <polygon points="104,50 104,120 160,120" fill="#FFFFFF"/>
  <polygon points="98,60 98,120 50,120" fill="#FFE0E0"/>
  <path d="M0 160 Q50 150 100 160 T200 160" stroke="#FFFFFF" stroke-width="3" fill="none" opacity="0.7"/>
</svg>`,

  book: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Book">
  <rect width="200" height="200" fill="#FFF3D6"/>
  <path d="M20 50 L100 60 L180 50 L180 160 L100 170 L20 160 Z" fill="#FFFFFF" stroke="#3A3A3A" stroke-width="3"/>
  <line x1="100" y1="60" x2="100" y2="170" stroke="#3A3A3A" stroke-width="3"/>
  <g stroke="#9BB8DD" stroke-width="2">
    <line x1="34" y1="80" x2="88" y2="86"/>
    <line x1="34" y1="100" x2="88" y2="104"/>
    <line x1="34" y1="120" x2="88" y2="122"/>
    <line x1="34" y1="140" x2="88" y2="140"/>
    <line x1="112" y1="86" x2="166" y2="80"/>
    <line x1="112" y1="104" x2="166" y2="100"/>
    <line x1="112" y1="122" x2="166" y2="120"/>
    <line x1="112" y1="140" x2="166" y2="140"/>
  </g>
  <path d="M20 50 Q100 30 180 50 L180 60 Q100 40 20 60 Z" fill="#E63946"/>
</svg>`,

  boot: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Boot">
  <rect width="200" height="200" fill="#E6F7D9"/>
  <path d="M70 30 L130 30 L130 130 L170 130 L170 170 L70 170 Z" fill="#7A4A21" stroke="#3A2A1F" stroke-width="4"/>
  <rect x="70" y="160" width="100" height="14" fill="#3A2A1F"/>
  <g stroke="#FFD93D" stroke-width="3">
    <line x1="84" y1="60" x2="116" y2="60"/>
    <line x1="84" y1="80" x2="116" y2="80"/>
    <line x1="84" y1="100" x2="116" y2="100"/>
  </g>
  <circle cx="84" cy="60" r="3" fill="#FFD93D"/>
  <circle cx="116" cy="60" r="3" fill="#FFD93D"/>
  <circle cx="84" cy="80" r="3" fill="#FFD93D"/>
  <circle cx="116" cy="80" r="3" fill="#FFD93D"/>
</svg>`,

  bread: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bread">
  <rect width="200" height="200" fill="#FFF1D6"/>
  <path d="M30 80 Q40 50 70 50 Q80 30 110 40 Q140 30 150 60 Q180 60 175 100 L170 150 Q170 170 150 170 L50 170 Q30 170 30 150 Z" fill="#D4A574" stroke="#7A4A21" stroke-width="4"/>
  <path d="M50 120 L170 120" stroke="#A0703D" stroke-width="2"/>
  <ellipse cx="80" cy="90" rx="6" ry="3" fill="#7A4A21" opacity="0.4"/>
  <ellipse cx="120" cy="80" rx="6" ry="3" fill="#7A4A21" opacity="0.4"/>
  <ellipse cx="140" cy="100" rx="6" ry="3" fill="#7A4A21" opacity="0.4"/>
</svg>`,

  brother: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Brother">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <circle cx="100" cy="70" r="36" fill="#F2C79A"/>
  <path d="M64 64 Q64 36 100 36 Q136 36 136 64 L136 72 L64 72 Z" fill="#3A2A1F"/>
  <circle cx="88" cy="72" r="3" fill="#2A1B0F"/>
  <circle cx="112" cy="72" r="3" fill="#2A1B0F"/>
  <path d="M88 86 Q100 94 112 86" stroke="#C04060" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M50 180 Q50 110 100 110 Q150 110 150 180 Z" fill="#3D8BFD"/>
  <rect x="92" y="120" width="16" height="40" fill="#FFD93D"/>
</svg>`,

  brown: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Brown">
  <rect width="200" height="200" fill="#F0E5D8"/>
  <circle cx="100" cy="100" r="70" fill="#8B5A2B"/>
  <circle cx="76" cy="76" r="14" fill="#A0703D"/>
  <text x="100" y="178" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="20" font-weight="bold" fill="#8B5A2B">Brown</text>
</svg>`,

  brush: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Brush">
  <rect width="200" height="200" fill="#E8F4FF"/>
  <rect x="40" y="80" width="80" height="40" rx="8" fill="#E63946"/>
  <rect x="116" y="92" width="60" height="16" rx="6" fill="#7A4A21"/>
  <g stroke="#FFFFFF" stroke-width="3">
    <line x1="50" y1="120" x2="50" y2="150"/>
    <line x1="62" y1="120" x2="62" y2="152"/>
    <line x1="74" y1="120" x2="74" y2="150"/>
    <line x1="86" y1="120" x2="86" y2="154"/>
    <line x1="98" y1="120" x2="98" y2="150"/>
    <line x1="110" y1="120" x2="110" y2="152"/>
  </g>
</svg>`,

  bug: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bug">
  <rect width="200" height="200" fill="#E6F7D9"/>
  <ellipse cx="100" cy="110" rx="60" ry="50" fill="#E63946"/>
  <path d="M100 60 L100 160" stroke="#1A1A1A" stroke-width="4"/>
  <circle cx="70" cy="90" r="8" fill="#1A1A1A"/>
  <circle cx="130" cy="90" r="8" fill="#1A1A1A"/>
  <circle cx="70" cy="130" r="8" fill="#1A1A1A"/>
  <circle cx="130" cy="130" r="8" fill="#1A1A1A"/>
  <circle cx="100" cy="150" r="6" fill="#1A1A1A"/>
  <ellipse cx="100" cy="60" rx="22" ry="16" fill="#1A1A1A"/>
  <line x1="88" y1="48" x2="80" y2="32" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/>
  <line x1="112" y1="48" x2="120" y2="32" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/>
  <circle cx="80" cy="32" r="3" fill="#1A1A1A"/>
  <circle cx="120" cy="32" r="3" fill="#1A1A1A"/>
  <g stroke="#1A1A1A" stroke-width="3" stroke-linecap="round">
    <line x1="44" y1="100" x2="20" y2="90"/>
    <line x1="44" y1="120" x2="20" y2="130"/>
    <line x1="156" y1="100" x2="180" y2="90"/>
    <line x1="156" y1="120" x2="180" y2="130"/>
  </g>
</svg>`,

  bus: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bus">
  <rect width="200" height="200" fill="#FFF8C6"/>
  <rect x="20" y="70" width="160" height="80" rx="10" fill="#FFB52E" stroke="#D88A0F" stroke-width="3"/>
  <rect x="30" y="84" width="30" height="26" fill="#9BD3FF" stroke="#2A5FBD" stroke-width="2"/>
  <rect x="68" y="84" width="30" height="26" fill="#9BD3FF" stroke="#2A5FBD" stroke-width="2"/>
  <rect x="106" y="84" width="30" height="26" fill="#9BD3FF" stroke="#2A5FBD" stroke-width="2"/>
  <rect x="144" y="84" width="28" height="26" fill="#9BD3FF" stroke="#2A5FBD" stroke-width="2"/>
  <rect x="30" y="120" width="140" height="6" fill="#D88A0F"/>
  <circle cx="60" cy="155" r="16" fill="#2A2A2A"/>
  <circle cx="140" cy="155" r="16" fill="#2A2A2A"/>
  <circle cx="60" cy="155" r="6" fill="#9BB8DD"/>
  <circle cx="140" cy="155" r="6" fill="#9BB8DD"/>
</svg>`,

  bush: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Bush">
  <rect width="200" height="200" fill="#E6F7D9"/>
  <ellipse cx="100" cy="170" rx="80" ry="10" fill="#7A4A21" opacity="0.4"/>
  <circle cx="60" cy="130" r="36" fill="#4CAF50"/>
  <circle cx="100" cy="110" r="44" fill="#5BBF60"/>
  <circle cx="140" cy="130" r="36" fill="#4CAF50"/>
  <circle cx="80" cy="150" r="28" fill="#6FCF70"/>
  <circle cx="120" cy="150" r="28" fill="#6FCF70"/>
  <circle cx="78" cy="100" r="4" fill="#E63946"/>
  <circle cx="120" cy="120" r="4" fill="#E63946"/>
  <circle cx="100" cy="140" r="4" fill="#FFD93D"/>
</svg>`,

  cake: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cake">
  <rect width="200" height="200" fill="#FFE8F1"/>
  <rect x="40" y="120" width="120" height="50" rx="6" fill="#FFB1B1"/>
  <rect x="60" y="80" width="80" height="40" rx="6" fill="#FFD0E0"/>
  <path d="M40 130 Q60 120 80 130 T120 130 T160 130" stroke="#FFFFFF" stroke-width="6" fill="none"/>
  <path d="M60 90 Q80 80 100 90 T140 90" stroke="#FFFFFF" stroke-width="6" fill="none"/>
  <rect x="96" y="50" width="8" height="30" fill="#FFD93D"/>
  <path d="M100 40 Q92 50 100 56 Q108 50 100 40 Z" fill="#FFB52E"/>
  <circle cx="60" cy="110" r="4" fill="#E63946"/>
  <circle cx="100" cy="150" r="4" fill="#E63946"/>
  <circle cx="140" cy="110" r="4" fill="#E63946"/>
</svg>`,

  chair: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Chair">
  <rect width="200" height="200" fill="#FFF3D6"/>
  <rect x="60" y="30" width="80" height="80" rx="6" fill="#A0703D"/>
  <rect x="50" y="100" width="100" height="20" fill="#8B5A2B"/>
  <rect x="56" y="120" width="10" height="60" fill="#7A4A21"/>
  <rect x="134" y="120" width="10" height="60" fill="#7A4A21"/>
  <rect x="68" y="40" width="64" height="6" fill="#7A4A21"/>
  <rect x="68" y="56" width="64" height="6" fill="#7A4A21"/>
  <rect x="68" y="72" width="64" height="6" fill="#7A4A21"/>
</svg>`,

  cheek: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cheek">
  <rect width="200" height="200" fill="#FFF1F6"/>
  <circle cx="100" cy="100" r="68" fill="#F8D2B5"/>
  <circle cx="82" cy="90" r="6" fill="#2A1B0F"/>
  <circle cx="118" cy="90" r="6" fill="#2A1B0F"/>
  <ellipse cx="70" cy="118" rx="14" ry="10" fill="#FF8AA0" opacity="0.85"/>
  <ellipse cx="130" cy="118" rx="14" ry="10" fill="#FF8AA0" opacity="0.85"/>
  <path d="M86 132 Q100 142 114 132" stroke="#C04060" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="100" cy="110" r="6" fill="#F2C79A"/>
</svg>`,

  cheese: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cheese">
  <rect width="200" height="200" fill="#FFF8C6"/>
  <polygon points="30,150 170,150 170,90 30,150" fill="#FFD93D" stroke="#C9A227" stroke-width="3"/>
  <polygon points="30,150 170,90 30,90" fill="#FFE680" stroke="#C9A227" stroke-width="3"/>
  <circle cx="80" cy="130" r="8" fill="#FFF8C6"/>
  <circle cx="120" cy="120" r="6" fill="#FFF8C6"/>
  <circle cx="100" cy="142" r="5" fill="#FFF8C6"/>
  <circle cx="140" cy="135" r="6" fill="#FFF8C6"/>
  <circle cx="70" cy="110" r="5" fill="#FFE680"/>
</svg>`,

  cherry: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cherry">
  <rect width="200" height="200" fill="#FFE8F1"/>
  <path d="M80 40 Q90 80 70 120" stroke="#5A8B3F" stroke-width="4" fill="none"/>
  <path d="M120 40 Q110 80 130 120" stroke="#5A8B3F" stroke-width="4" fill="none"/>
  <path d="M80 40 Q100 30 120 40 Q124 50 110 56 Q100 50 80 40 Z" fill="#5A8B3F"/>
  <ellipse cx="60" cy="138" rx="32" ry="34" fill="#E63946"/>
  <ellipse cx="140" cy="138" rx="32" ry="34" fill="#E63946"/>
  <ellipse cx="52" cy="124" rx="8" ry="6" fill="#FFB1B1" opacity="0.7"/>
  <ellipse cx="132" cy="124" rx="8" ry="6" fill="#FFB1B1" opacity="0.7"/>
</svg>`,

  chick: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Chick">
  <rect width="200" height="200" fill="#FFF8C6"/>
  <ellipse cx="100" cy="130" rx="54" ry="44" fill="#FFD93D"/>
  <circle cx="100" cy="80" r="38" fill="#FFE680"/>
  <circle cx="88" cy="74" r="5" fill="#1A1A1A"/>
  <circle cx="112" cy="74" r="5" fill="#1A1A1A"/>
  <circle cx="86" cy="72" r="2" fill="#FFFFFF"/>
  <circle cx="110" cy="72" r="2" fill="#FFFFFF"/>
  <polygon points="92,88 108,88 100,98" fill="#FF8A2B"/>
  <path d="M92 56 L100 40 L108 56 Z" fill="#FFB52E"/>
  <line x1="86" y1="170" x2="84" y2="186" stroke="#FF8A2B" stroke-width="4" stroke-linecap="round"/>
  <line x1="114" y1="170" x2="116" y2="186" stroke="#FF8A2B" stroke-width="4" stroke-linecap="round"/>
</svg>`,

  chicken: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Chicken">
  <rect width="200" height="200" fill="#FFF3D6"/>
  <ellipse cx="110" cy="120" rx="58" ry="46" fill="#FFFFFF" stroke="#C9A227" stroke-width="3"/>
  <circle cx="60" cy="80" r="28" fill="#FFFFFF" stroke="#C9A227" stroke-width="3"/>
  <path d="M42 60 Q44 46 56 50 Q58 40 70 48 Q74 42 80 54" fill="#E63946"/>
  <polygon points="36,80 22,86 36,90" fill="#FFB52E"/>
  <circle cx="52" cy="78" r="3" fill="#1A1A1A"/>
  <path d="M64 96 Q70 110 60 110" fill="#E63946"/>
  <path d="M150 120 Q170 100 168 90 Q156 100 150 100" fill="#FFE680"/>
  <line x1="90" y1="170" x2="88" y2="186" stroke="#FFB52E" stroke-width="4" stroke-linecap="round"/>
  <line x1="120" y1="170" x2="122" y2="186" stroke="#FFB52E" stroke-width="4" stroke-linecap="round"/>
</svg>`,

  chin: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Chin">
  <rect width="200" height="200" fill="#FFF1E0"/>
  <ellipse cx="100" cy="100" rx="64" ry="76" fill="#F8D2B5"/>
  <circle cx="82" cy="84" r="5" fill="#2A1B0F"/>
  <circle cx="118" cy="84" r="5" fill="#2A1B0F"/>
  <path d="M86 110 Q100 116 114 110" stroke="#C04060" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M70 150 Q100 180 130 150" stroke="#E63946" stroke-width="4" fill="none" stroke-linecap="round"/>
  <ellipse cx="100" cy="158" rx="20" ry="6" fill="#FF8AA0" opacity="0.5"/>
</svg>`,

  chip: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Chip">
  <rect width="200" height="200" fill="#FFF8C6"/>
  <path d="M60 60 Q40 80 50 110 Q40 140 70 160 Q100 170 130 160 Q160 150 160 120 Q170 90 150 70 Q120 50 90 56 Z" fill="#FFD79B" stroke="#A0703D" stroke-width="3"/>
  <ellipse cx="80" cy="90" rx="6" ry="4" fill="#A0703D" opacity="0.5"/>
  <ellipse cx="120" cy="100" rx="6" ry="4" fill="#A0703D" opacity="0.5"/>
  <ellipse cx="100" cy="130" rx="5" ry="3" fill="#A0703D" opacity="0.5"/>
  <ellipse cx="140" cy="130" rx="5" ry="3" fill="#A0703D" opacity="0.5"/>
</svg>`,

  chocolate: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Chocolate">
  <rect width="200" height="200" fill="#FFF1D6"/>
  <rect x="40" y="50" width="120" height="100" rx="6" fill="#6F3A1A"/>
  <g fill="#8B4A22">
    <rect x="50" y="60" width="30" height="22"/>
    <rect x="86" y="60" width="30" height="22"/>
    <rect x="122" y="60" width="30" height="22"/>
    <rect x="50" y="88" width="30" height="22"/>
    <rect x="86" y="88" width="30" height="22"/>
    <rect x="122" y="88" width="30" height="22"/>
    <rect x="50" y="116" width="30" height="22"/>
    <rect x="86" y="116" width="30" height="22"/>
    <rect x="122" y="116" width="30" height="22"/>
  </g>
  <path d="M40 50 L160 50 L150 60 L50 60 Z" fill="#A0653A"/>
</svg>`,

  circle: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Circle">
  <rect width="200" height="200" fill="#D9F0FF"/>
  <circle cx="100" cy="100" r="70" fill="#3D8BFD" stroke="#1E5FBD" stroke-width="5"/>
  <circle cx="80" cy="80" r="14" fill="#FFFFFF" opacity="0.45"/>
</svg>`,

  clock: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Clock">
  <rect width="200" height="200" fill="#FFF3D6"/>
  <circle cx="100" cy="105" r="74" fill="#FFFFFF" stroke="#2A2A2A" stroke-width="5"/>
  <g fill="#2A2A2A" font-family="Comic Sans MS, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">
    <text x="100" y="48">12</text>
    <text x="166" y="112">3</text>
    <text x="100" y="178">6</text>
    <text x="34" y="112">9</text>
  </g>
  <line x1="100" y1="105" x2="100" y2="64" stroke="#2A2A2A" stroke-width="5" stroke-linecap="round"/>
  <line x1="100" y1="105" x2="140" y2="120" stroke="#E63946" stroke-width="4" stroke-linecap="round"/>
  <circle cx="100" cy="105" r="6" fill="#E63946"/>
  <rect x="86" y="20" width="10" height="14" rx="2" fill="#2A2A2A"/>
  <rect x="104" y="20" width="10" height="14" rx="2" fill="#2A2A2A"/>
</svg>`,

  cloud: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cloud">
  <rect width="200" height="200" fill="#9BD3FF"/>
  <circle cx="60" cy="110" r="34" fill="#FFFFFF"/>
  <circle cx="90" cy="86" r="36" fill="#FFFFFF"/>
  <circle cx="130" cy="86" r="32" fill="#FFFFFF"/>
  <circle cx="150" cy="116" r="28" fill="#FFFFFF"/>
  <ellipse cx="100" cy="124" rx="60" ry="20" fill="#FFFFFF"/>
</svg>`,

  coat: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Coat">
  <rect width="200" height="200" fill="#E8F4FF"/>
  <path d="M70 40 L100 60 L130 40 L170 80 L150 110 L150 180 L50 180 L50 110 L30 80 Z" fill="#7B3FA0" stroke="#4A2370" stroke-width="3"/>
  <path d="M100 60 L100 180" stroke="#4A2370" stroke-width="2"/>
  <circle cx="110" cy="90" r="4" fill="#FFD93D"/>
  <circle cx="110" cy="120" r="4" fill="#FFD93D"/>
  <circle cx="110" cy="150" r="4" fill="#FFD93D"/>
  <path d="M70 40 L100 60 L80 80 Z" fill="#9B5FC0"/>
  <path d="M130 40 L100 60 L120 80 Z" fill="#9B5FC0"/>
</svg>`,

  comet: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Comet">
  <rect width="200" height="200" fill="#0E1A40"/>
  <circle cx="40" cy="40" r="2" fill="#FFF"/>
  <circle cx="170" cy="160" r="2" fill="#FFF"/>
  <circle cx="160" cy="40" r="2" fill="#FFF"/>
  <path d="M150 60 Q90 90 30 170" stroke="#FFE680" stroke-width="20" fill="none" stroke-linecap="round" opacity="0.4"/>
  <path d="M150 60 Q100 90 50 150" stroke="#FFB52E" stroke-width="10" fill="none" stroke-linecap="round" opacity="0.7"/>
  <circle cx="150" cy="60" r="22" fill="#FFE680"/>
  <circle cx="150" cy="60" r="14" fill="#FFB52E"/>
  <circle cx="148" cy="58" r="6" fill="#FFFFFF"/>
</svg>`,

  cookie: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cookie">
  <rect width="200" height="200" fill="#FFF1D6"/>
  <circle cx="100" cy="100" r="70" fill="#D4A574" stroke="#7A4A21" stroke-width="3"/>
  <circle cx="74" cy="80" r="9" fill="#3A2A1F"/>
  <circle cx="120" cy="74" r="8" fill="#3A2A1F"/>
  <circle cx="130" cy="120" r="9" fill="#3A2A1F"/>
  <circle cx="80" cy="130" r="8" fill="#3A2A1F"/>
  <circle cx="100" cy="100" r="6" fill="#3A2A1F"/>
  <circle cx="60" cy="110" r="6" fill="#3A2A1F"/>
  <circle cx="146" cy="96" r="6" fill="#3A2A1F"/>
</svg>`,

  cousin: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cousin">
  <rect width="200" height="200" fill="#FFE8F1"/>
  <circle cx="70" cy="80" r="28" fill="#F2C79A"/>
  <path d="M46 76 Q46 52 70 52 Q94 52 94 76 L94 82 L46 82 Z" fill="#7A4A21"/>
  <circle cx="62" cy="82" r="3" fill="#2A1B0F"/>
  <circle cx="78" cy="82" r="3" fill="#2A1B0F"/>
  <path d="M62 92 Q70 98 78 92" stroke="#C04060" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M40 180 Q40 120 70 120 Q100 120 100 180 Z" fill="#3D8BFD"/>
  <circle cx="140" cy="80" r="28" fill="#F2C79A"/>
  <path d="M114 76 Q120 50 140 50 Q160 50 166 76 Q170 90 158 88 Q146 80 132 88 Q120 90 114 76 Z" fill="#E07A8B"/>
  <circle cx="132" cy="82" r="3" fill="#2A1B0F"/>
  <circle cx="148" cy="82" r="3" fill="#2A1B0F"/>
  <path d="M132 92 Q140 98 148 92" stroke="#C04060" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M110 180 Q110 120 140 120 Q170 120 170 180 Z" fill="#E63946"/>
</svg>`,

  crab: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Crab">
  <rect width="200" height="200" fill="#FFE7B3"/>
  <ellipse cx="100" cy="110" rx="60" ry="40" fill="#E63946"/>
  <circle cx="80" cy="90" r="8" fill="#FFFFFF"/>
  <circle cx="120" cy="90" r="8" fill="#FFFFFF"/>
  <circle cx="80" cy="90" r="4" fill="#1A1A1A"/>
  <circle cx="120" cy="90" r="4" fill="#1A1A1A"/>
  <line x1="80" y1="82" x2="78" y2="68" stroke="#9B2030" stroke-width="3"/>
  <line x1="120" y1="82" x2="122" y2="68" stroke="#9B2030" stroke-width="3"/>
  <path d="M88 124 Q100 132 112 124" stroke="#9B2030" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M40 110 Q24 100 18 80 Q12 96 24 110 Q14 116 24 124 Q34 122 44 116 Z" fill="#E63946"/>
  <path d="M160 110 Q176 100 182 80 Q188 96 176 110 Q186 116 176 124 Q166 122 156 116 Z" fill="#E63946"/>
  <g stroke="#9B2030" stroke-width="4" stroke-linecap="round">
    <line x1="60" y1="140" x2="50" y2="160"/>
    <line x1="80" y1="148" x2="72" y2="170"/>
    <line x1="120" y1="148" x2="128" y2="170"/>
    <line x1="140" y1="140" x2="150" y2="160"/>
  </g>
</svg>`,

  crayon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Crayon">
  <rect width="200" height="200" fill="#FFF8C6"/>
  <g transform="rotate(-25 100 100)">
    <rect x="40" y="80" width="100" height="40" fill="#E63946"/>
    <rect x="40" y="80" width="100" height="8" fill="#FFFFFF" opacity="0.4"/>
    <rect x="40" y="80" width="14" height="40" fill="#FFFFFF"/>
    <rect x="124" y="80" width="14" height="40" fill="#FFFFFF"/>
    <polygon points="140,80 170,100 140,120" fill="#FFE0E0"/>
    <polygon points="160,90 170,100 160,110" fill="#9B2030"/>
  </g>
</svg>`,

  crescent: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Crescent">
  <rect width="200" height="200" fill="#0E1A40"/>
  <circle cx="50" cy="40" r="2" fill="#FFF"/>
  <circle cx="170" cy="60" r="2" fill="#FFF"/>
  <circle cx="160" cy="160" r="2" fill="#FFF"/>
  <path d="M100 30 A70 70 0 1 0 100 170 A50 70 0 1 1 100 30 Z" fill="#FFE680"/>
  <circle cx="76" cy="80" r="6" fill="#FFC59B" opacity="0.6"/>
  <circle cx="86" cy="120" r="5" fill="#FFC59B" opacity="0.6"/>
</svg>`,

  cup: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Cup">
  <rect width="200" height="200" fill="#E8F4FF"/>
  <path d="M50 60 L150 60 L142 170 Q140 180 130 180 L70 180 Q60 180 58 170 Z" fill="#FFFFFF" stroke="#3D8BFD" stroke-width="4"/>
  <ellipse cx="100" cy="60" rx="50" ry="10" fill="#9BD3FF"/>
  <path d="M150 90 Q180 90 180 120 Q180 150 150 150" stroke="#3D8BFD" stroke-width="6" fill="none"/>
  <ellipse cx="100" cy="74" rx="40" ry="6" fill="#FFFFFF" opacity="0.6"/>
</svg>`,

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

/** Returns the exact-lowercase form, plus the de-pluralized form, in priority order. */
function lookupKeys(word: string): string[] {
  const lower = (word || '').trim().toLowerCase();
  const stripped = normalize(word);
  return lower === stripped ? [lower] : [lower, stripped];
}

/**
 * Returns a high-quality SVG data URL for the given word. Always returns a
 * usable, child-friendly illustration: a hand-crafted SVG for known words, or
 * a colored generic card displaying the word's initial otherwise.
 */
export function getWordImage(word: string): string {
  for (const key of lookupKeys(word)) {
    if (SVGS[key]) return toDataUrl(SVGS[key]);
  }
  return toDataUrl(buildGenericSvg(word));
}

/** Exposed for tests / debugging. */
export function hasCuratedImage(word: string): boolean {
  return lookupKeys(word).some((k) => Object.prototype.hasOwnProperty.call(SVGS, k));
}
