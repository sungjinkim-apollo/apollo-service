export interface GameTemplate {
  title: string;
  tags: string;
  icon: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  pattern: string;
  hoverBorder: string;
  hoverShadow: string;
  hoverText: string;
  patternOpacity: string;
  patternBlend: string;
  visualSize?: string;
}

export const PATTERNS = {
  CIRCUIT: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuB-6AnsYVw1f5OLe0uoAcuW2Vn6k4r0B5PInKXmRdwabNS_rHA-oOvfTMRCFOY5W8Mm3VdG6Jc2v1_c9wfuZE5LOB6M2tWXTIscIYg8uF_b08cb-HgFaRhp25WQAq07t2QMsE3EmL3K7wePXlrnjr5yjPCD4vWOxcI1WrHOMCYBgW5cEvpqosVasF2AbFpX6IeVUW0e6b-ooRD9_ZjMwL8o4Z-Q1VUSwiVKgApL5qBoqEz5OFcXfoqCAqSsiTm4CWMlbAJXGICY5SQ5)",
  RUNIC: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDJ_4-PkC7x0vfbB0ttZBfdElnzLjk9X7qgm6uiDYQ-XHUOy0Pil9eTQiltl2Ax4nDam5nhEYOf2xZYNMNmAjOIY3gRKYTtxIOpqnOhhgjOv0gsK9R2zG2s5qjMHFBxuIptZ62vkwL7sQxMWY-p8hhTz37-ZMsXdjNRLVjpFj8KNHrzaaj9a0y724HCjCiRaiZUX975ZTrWVbZQrQJQ541E8hKOt8LTgbj4s8ifTda4WGOvhoCxS2qMYZBHCveLGPyRwd6HqdP52bgG)",
  HEX: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDSZZ55Dn_yHa_Nf0D8Kf-ZlXvDx8ywrcIOa8GaoCGK-IOAvI_ZLkX8W2rI1svp9Jk8zYOWgUfIzg536Xt3nSHvl-uOfyxZjuF3fw8XtM79rYdSEoSEjWDkVP1bNReUuk7FtwM7tY-0ZS7ZXtaX4Cl7aC0Y7jw4-VzeNAdQw8z1GoUaODijbfBH4RNJNM13I8mGn9UVWhfJeb_gEbyZ1DRAti8E9fPbcAGSDzSHYOMPw3uTJEcqIhzBCTbOxzLK4NQdJjyTyFbAG9NA)",
  GRID: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuA46KlA1DGzElrdfdZL9oIINvem8YD1lbvc_bwGKPx4WXlU5d3qTF13o0yxfNcILFHmqukjlz8rMf32l2Y7-5MpRSDkkthLmhTFEzUq1Dcjn1NEcm7SoPUh7aI7r8_EG-I4B8wIffrhf0M4fSPiYwu5we_xbUmd3NYZwKMhDhOaSzM4YD4EwvOjkrBuz-cKTJraySPkvkCoWOXQjpr-wYBxFNWJm38Z9r3dTmOyOij7vXoIgyr7sMX8T5jAiCajXfjlp-DbQoBfXcvq)",
  VISUAL: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)"
};

export const GAME_TEMPLATES: GameTemplate[] = [
  {
    title: "Cyber Arena",
    tags: "FPS / Multiplayer / Sci-Fi",
    icon: "memory",
    gradientFrom: "from-indigo-950",
    gradientVia: "via-purple-900",
    gradientTo: "to-indigo-800",
    pattern: PATTERNS.CIRCUIT,
    patternOpacity: "opacity-40",
    patternBlend: "mix-blend-overlay",
    hoverBorder: "hover:border-primary/50",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(58,191,248,0.1)]",
    hoverText: "group-hover:text-primary",
    visualSize: "50px"
  },
  {
    title: "Mystic Lands",
    tags: "MMORPG / Open World",
    icon: "auto_awesome",
    gradientFrom: "from-red-950",
    gradientVia: "via-red-900",
    gradientTo: "to-orange-950",
    pattern: PATTERNS.RUNIC,
    patternOpacity: "opacity-30",
    patternBlend: "mix-blend-soft-light",
    hoverBorder: "hover:border-red-500/50",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(239,68,68,0.1)]",
    hoverText: "group-hover:text-red-400",
    visualSize: "200px"
  },
  {
    title: "Block Survivor",
    tags: "Voxel / Survival / Crafting",
    icon: "grid_view",
    gradientFrom: "from-emerald-950",
    gradientVia: "via-emerald-900",
    gradientTo: "to-teal-950",
    pattern: PATTERNS.GRID,
    patternOpacity: "opacity-30",
    patternBlend: "mix-blend-overlay",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]",
    hoverText: "group-hover:text-emerald-400"
  },
  {
    title: "Space Racer",
    tags: "Simulation / Racing / Galaxy",
    icon: "rocket_launch",
    gradientFrom: "from-blue-950",
    gradientVia: "via-blue-900",
    gradientTo: "to-cyan-950",
    pattern: PATTERNS.HEX,
    patternOpacity: "opacity-30",
    patternBlend: "mix-blend-overlay",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]",
    hoverText: "group-hover:text-blue-400"
  },
  {
    title: "Pixel Dungeon",
    tags: "2D RPG / Roguelike",
    icon: "castle",
    gradientFrom: "from-yellow-900",
    gradientVia: "via-orange-900",
    gradientTo: "to-yellow-950",
    pattern: PATTERNS.VISUAL,
    patternOpacity: "opacity-40",
    patternBlend: "mix-blend-soft-light",
    hoverBorder: "hover:border-yellow-500/50",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(234,179,8,0.1)]",
    hoverText: "group-hover:text-yellow-400",
    visualSize: "12px"
  },
  {
    title: "Sky Wars",
    tags: "Battle Royale / PVP",
    icon: "air",
    gradientFrom: "from-cyan-950",
    gradientVia: "via-teal-900",
    gradientTo: "to-cyan-900",
    pattern: PATTERNS.VISUAL,
    patternOpacity: "opacity-30",
    patternBlend: "mix-blend-normal", // Default if not specified
    hoverBorder: "hover:border-cyan-500/50",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]",
    hoverText: "group-hover:text-cyan-400",
    visualSize: "24px"
  },
];
