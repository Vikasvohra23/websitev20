import { CFT_ITEMS, RATE_PER_CFT } from '../data/constants'

/**
 * Given a qty map { itemId: quantity }, returns:
 *   totalCFT    – total cubic feet (shown to user)
 *   totalCost   – rupee estimate   (hidden from user; admin-only)
 *   lineItems   – array for display and WhatsApp message
 *   waItemText  – formatted string for WhatsApp (no CFT, no rate)
 */
export function calculateEstimate(qty = {}) {
  let totalCFT  = 0
  const lineItems = []

  CFT_ITEMS.forEach(item => {
    const q = parseInt(qty[item.id] || 0)
    if (q > 0) {
      const itemCFT = q * item.cft
      totalCFT += itemCFT
      lineItems.push({ label: item.label, qty: q, cft: itemCFT })
    }
  })

  const totalCost  = totalCFT * RATE_PER_CFT          // admin only
  const waItemText = lineItems
    .map(l => `  • ${l.label} × ${l.qty}`)
    .join('\n')

  return { totalCFT, totalCost, lineItems, waItemText }
}
