import { YOUR_WA_NUMBER } from '../data/constants'
import { WaIcon } from './Shared'

export default function WaFloat() {
  return (
    <a
      href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I need a relocation quote.')}`}
      target="_blank" rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <WaIcon />
    </a>
  )
}
