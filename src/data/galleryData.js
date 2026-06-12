// ─────────────────────────────────────────────────────────────
//  VIDEO PATHS (served from /public/gallery/videos/)
// ─────────────────────────────────────────────────────────────

// ── EPCH Shilp Guru Awards ───────────────────────────────────
const ep1 = '/gallery/videos/epch-1.mp4'
const ep2 = '/gallery/videos/epch-2.mp4'
const ep3 = '/gallery/videos/epch-3.mov'
const ep4 = '/gallery/videos/epch-4.mov'

// ── Maharaja Express ─────────────────────────────────────────
const mx1 = '/gallery/videos/maharaja-1.mov'
const mx2 = '/gallery/videos/maharaja-2.mov'
const mx3 = '/gallery/videos/maharaja-3.mov'

// ── Office Shifting ──────────────────────────────────────────
const of1 = '/gallery/videos/office-1.mov'
const of2 = '/gallery/videos/office-2.mov'
const of3 = '/gallery/videos/office-3.mov'
const of4 = '/gallery/videos/office-4.mp4'

// ── Industrial Shifting ──────────────────────────────────────
const in1 = '/gallery/videos/industrial-1.mov'
const in2 = '/gallery/videos/industrial-2.mov'
const in3 = '/gallery/videos/industrial-3.mov'
const in4 = '/gallery/videos/industrial-4.mov'
const in5 = '/gallery/videos/industrial-5.mov'

// ── Vacuum Packing ───────────────────────────────────────────
const vp2 = '/gallery/videos/vacuum-2.mov'
const vp3 = '/gallery/videos/vacuum-3.mp4'

// ─────────────────────────────────────────────────────────────
//  GALLERY DATA
//  NOTE: Image placeholders are shown for categories where the
//  source images were too large to include in the build package.
//  To add real images: place them in src/assets/gallery/<category>/
//  and import them here (see commented examples below).
//
//  Placeholder pattern (ready to replace when images are available):
//  import pr1 from '../assets/gallery/president/1.jpg'
// ─────────────────────────────────────────────────────────────

export const GALLERY_IMAGES = [
  // ── President of India ──────────────────────────────────────
  // These slots are reserved — add images to src/assets/gallery/president/
  { id:"pr1", category:"president",  src:null, caption:"Presidential Museum — packing & labelling artifacts" },
  { id:"pr2", category:"president",  src:null, caption:"Heritage sculpture wrapping, Rashtrapati Bhawan" },
  { id:"pr3", category:"president",  src:null, caption:"Art crating for the Presidential Museum display" },
  { id:"pr4", category:"president",  src:null, caption:"Careful handling of rare paintings" },

  // ── EPCH Shilp Guru Awards ───────────────────────────────────
  { id:"ep1", category:"epch",       src:ep1, caption:"EPCH Shilp Guru Awards — Vigyan Bhawan setup" },
  { id:"ep2", category:"epch",       src:ep2, caption:"National Handicrafts Awards display packing" },
  { id:"ep3", category:"epch",       src:ep3, caption:"G20 Summit exhibition logistics" },
  { id:"ep4", category:"epch",       src:ep4, caption:"EPCH handicraft pavilion — post-event dismantling" },

  // ── Maharaja Express ─────────────────────────────────────────
  { id:"mx1", category:"maharaja",   src:mx1, caption:"Maharaja Express — chandelier packing" },
  { id:"mx2", category:"maharaja",   src:mx2, caption:"Luxury train furniture wrapping" },
  { id:"mx3", category:"maharaja",   src:mx3, caption:"Custom fittings in transit protection" },
  // Placeholder: add src/assets/gallery/maharaja/4.jpg
  { id:"mx4", category:"maharaja",   src:null, caption:"Annual interior restoration packing" },

  // ── Office Shifting ──────────────────────────────────────────
  { id:"of1", category:"office",     src:of1, caption:"Office furniture packing" },
  { id:"of2", category:"office",     src:of2, caption:"Office shifting" },
  { id:"of3", category:"office",     src:of3, caption:"Office cabins & partitions" },
  { id:"of4", category:"office",     src:of4, caption:"WHO South-East Asia office relocation" },

  // ── Industrial Shifting ──────────────────────────────────────
  { id:"in1", category:"industrial", src:in1, caption:"Air Tank relocation" },
  { id:"in2", category:"industrial", src:in2, caption:"Vertical erection of air tanks" },
  { id:"in3", category:"industrial", src:in3, caption:"Industrial machinery movement" },
  { id:"in4", category:"industrial", src:in4, caption:"Careful handling" },
  { id:"in5", category:"industrial", src:in5, caption:"Precise machine levelling after relocation" },

  // ── Vacuum Packing ───────────────────────────────────────────
  // Placeholders for images: add src/assets/gallery/vacuum/1.jpg and 4.jpeg
  { id:"vp1", category:"vacuum",     src:null, caption:"Export-grade vacuum packing — machinery" },
  { id:"vp2", category:"vacuum",     src:vp2,  caption:"Industrial parts vacuum sealed for export" },
  { id:"vp3", category:"vacuum",     src:vp3,  caption:"Wooden crating with vacuum wrap inner layer" },
  { id:"vp4", category:"vacuum",     src:null, caption:"40HQ container loading — vacuum-packed goods" },
];
