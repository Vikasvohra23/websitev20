// Gallery data now sources media directly from src/assets/gallery/*
// Import images and videos from the assets folder so the bundler
// handles them and we avoid mixing public images with src assets.

// ── President of India (src/assets/gallery/president) ───────
import pr1 from '../assets/gallery/president/1.jpg'
import pr2 from '../assets/gallery/president/2.jpg'
import pr3 from '../assets/gallery/president/3.jpg'
import pr4 from '../assets/gallery/president/4.jpg'

// ── EPCH Shilp Guru Awards (src/assets/gallery/epch)
import ep1 from '../assets/gallery/epch/1.mp4'
import ep2 from '../assets/gallery/epch/2.MP4'
import ep3 from '../assets/gallery/epch/3.MOV'
import ep4 from '../assets/gallery/epch/4.MOV'

// ── Maharaja Express (src/assets/gallery/maharaja)
import mx1 from '../assets/gallery/maharaja/1.MOV'
import mx2 from '../assets/gallery/maharaja/2.MOV'
import mx3 from '../assets/gallery/maharaja/3.MOV'
import mx4 from '../assets/gallery/maharaja/4.jpg'

// ── Office Shifting (src/assets/gallery/office)
import of1 from '../assets/gallery/office/1.MOV'
import of2 from '../assets/gallery/office/2.MOV'
import of3 from '../assets/gallery/office/3.MOV'
import of4 from '../assets/gallery/office/4.MP4'

// ── Industrial Shifting (src/assets/gallery/industrial)
import in1 from '../assets/gallery/industrial/1.MOV'
import in2 from '../assets/gallery/industrial/2.MOV'
import in3 from '../assets/gallery/industrial/3.MOV'
import in4 from '../assets/gallery/industrial/4.MOV'
import in5 from '../assets/gallery/industrial/5.MOV'

// ── Vacuum Packing (src/assets/gallery/vacuum)
import vp1 from '../assets/gallery/vacuum/1.jpg'
import vp2 from '../assets/gallery/vacuum/2.MOV'
import vp3 from '../assets/gallery/vacuum/3.mp4'
import vp4 from '../assets/gallery/vacuum/4.jpeg'

export const GALLERY_IMAGES = [
  // President
  { id: 'pr1', category: 'president', src: pr1, caption: 'Presidential Museum — packing & labelling artifacts' },
  { id: 'pr2', category: 'president', src: pr2, caption: 'Heritage sculpture wrapping, Rashtrapati Bhawan' },
  { id: 'pr3', category: 'president', src: pr3, caption: 'Art crating for the Presidential Museum display' },
  { id: 'pr4', category: 'president', src: pr4, caption: 'Careful handling of rare paintings' },

  // EPCH
  { id: 'ep1', category: 'epch', src: ep1, caption: 'EPCH Shilp Guru Awards — Vigyan Bhawan setup' },
  { id: 'ep2', category: 'epch', src: ep2, caption: 'National Handicrafts Awards display packing' },
  { id: 'ep3', category: 'epch', src: ep3, caption: 'G20 Summit exhibition logistics' },
  { id: 'ep4', category: 'epch', src: ep4, caption: 'EPCH handicraft pavilion — post-event dismantling' },

  // Maharaja Express
  { id: 'mx1', category: 'maharaja', src: mx1, caption: 'Maharaja Express — chandelier packing' },
  { id: 'mx2', category: 'maharaja', src: mx2, caption: 'Luxury train furniture wrapping' },
  { id: 'mx3', category: 'maharaja', src: mx3, caption: 'Custom fittings in transit protection' },
  { id: 'mx4', category: 'maharaja', src: mx4, caption: 'Annual interior restoration packing' },

  // Office
  { id: 'of1', category: 'office', src: of1, caption: 'Office furniture packing' },
  { id: 'of2', category: 'office', src: of2, caption: 'Office shifting' },
  { id: 'of3', category: 'office', src: of3, caption: 'Office cabins & partitions' },
  { id: 'of4', category: 'office', src: of4, caption: 'WHO South-East Asia office relocation' },

  // Industrial
  { id: 'in1', category: 'industrial', src: in1, caption: 'Air Tank relocation' },
  { id: 'in2', category: 'industrial', src: in2, caption: 'Vertical erection of air tanks' },
  { id: 'in3', category: 'industrial', src: in3, caption: 'Industrial machinery movement' },
  { id: 'in4', category: 'industrial', src: in4, caption: 'Careful handling' },
  { id: 'in5', category: 'industrial', src: in5, caption: 'Precise machine levelling after relocation' },

  // Vacuum
  { id: 'vp1', category: 'vacuum', src: vp1, caption: 'Export-grade vacuum packing — machinery' },
  { id: 'vp2', category: 'vacuum', src: vp2, caption: 'Industrial parts vacuum sealed for export' },
  { id: 'vp3', category: 'vacuum', src: vp3, caption: 'Wooden crating with vacuum wrap inner layer' },
  { id: 'vp4', category: 'vacuum', src: vp4, caption: '40HQ container loading — vacuum-packed goods' },
]
