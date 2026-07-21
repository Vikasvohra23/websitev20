// Probes a project's media folder at runtime and returns only the files that
// actually exist — so new photos/videos dropped into a project folder show up
// automatically, in any mix, without editing this codebase per project.
const IMG_EXTS = ['jpg', 'jpeg', 'png', 'webp']
const VID_EXTS = ['mp4', 'webm', 'mov']

function probeImage(src) {
  return new Promise(resolve => {
    const img = new Image()
    img.onload  = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

function probeVideo(src) {
  return new Promise(resolve => {
    const v = document.createElement('video')
    v.preload = 'metadata'
    v.onloadedmetadata = () => resolve(true)
    v.onerror = () => resolve(false)
    v.src = src
  })
}

// Tries slot n as an image first (all known extensions), then as a video.
// Returns { type:'image'|'video', src } or null if nothing exists at that slot.
async function resolveSlot(basePath, n) {
  for (const ext of IMG_EXTS) {
    const src = `${basePath}/${n}.${ext}`
    if (await probeImage(src)) return { type: 'image', src }
  }
  for (const ext of VID_EXTS) {
    const src = `${basePath}/${n}.${ext}`
    if (await probeVideo(src)) return { type: 'video', src }
  }
  return null
}

// Resolves all existing media (up to maxSlots) in a project folder, in order.
export async function resolveProjectMedia(basePath, maxSlots = 8) {
  const slots = await Promise.all(
    Array.from({ length: maxSlots }, (_, i) => resolveSlot(basePath, i + 1))
  )
  return slots.filter(Boolean)
}

// Cover image only — skips any video slots and returns the first real image found.
export async function resolveProjectCover(basePath, maxSlots = 8) {
  for (let n = 1; n <= maxSlots; n++) {
    for (const ext of IMG_EXTS) {
      const src = `${basePath}/${n}.${ext}`
      if (await probeImage(src)) return src
    }
  }
  return null
}
