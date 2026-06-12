import { YOUR_WA_NUMBER } from '../data/constants'

/**
 * Build a prefilled WhatsApp URL.
 * `lines` is an array of { key, value } pairs.
 */
export function buildWaUrl(lines = [], waNumber = YOUR_WA_NUMBER) {
  const body = lines
    .filter(l => l.value)
    .map(l => `${l.key}: ${l.value}`)
    .join('\n')

  const msg = encodeURIComponent(
    `Hello Shree Radhey Relocation Services! 🙏\n\n${body}\n\nPlease get in touch. Thank you!`
  )
  return `https://wa.me/${waNumber}?text=${msg}`
}

/** WhatsApp URL for the estimate lead (no rates/CFT exposed) */
export function buildEstimateWaUrl({ items, phone, moveType, origin, destination }) {
  const lines = [
    { key:'📱 Phone',       value: phone       },
    { key:'🚛 Move Type',   value: moveType    },
    { key:'📍 From',        value: origin      },
    { key:'📍 To',          value: destination },
    { key:'📦 Items',       value: '\n' + items },
  ]
  return buildWaUrl(lines)
}

/** WhatsApp URL for the contact form */
export function buildContactWaUrl(form) {
  const lines = [
    { key:'👤 Name',         value: form.name        },
    { key:'🏢 Organisation', value: form.org         },
    { key:'📱 Phone',        value: form.phone       },
    { key:'📧 Email',        value: form.email       },
    { key:'🔧 Service',      value: form.service     },
    { key:'📍 From',         value: form.from        },
    { key:'📍 To',           value: form.to          },
    { key:'📅 Date',         value: form.date        },
    { key:'📝 Notes',        value: form.notes       },
  ]
  return buildWaUrl(lines)
}

/** Mailto fallback for email notification */
export function buildMailtoUrl(subject, body, to) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
