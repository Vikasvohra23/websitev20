import { useEffect } from 'react'

const SITE_URL = 'https://www.srrelocationservices.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/sr-logo.png`

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.head.querySelector(`script[data-jsonld="${id}"]`)
  if (!data) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-jsonld', id)
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Sets per-page <title>, meta description, canonical URL, Open Graph/
 * Twitter tags, and an optional JSON-LD block. Cleans up the JSON-LD
 * block (but not the persistent meta tags) on unmount so navigating
 * away doesn't leave a stale structured-data block from a sub-page.
 *
 * path should be the absolute pathname, e.g. '/services/household-relocation'
 */
export function useDocumentHead({ title, description, path = '/', jsonLd = null, jsonLdId = 'page' }) {
  useEffect(() => {
    if (title) document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', `${SITE_URL}${path}`)
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertCanonical(`${SITE_URL}${path}`)
    if (jsonLd) upsertJsonLd(jsonLdId, jsonLd)

    return () => {
      if (jsonLd) upsertJsonLd(jsonLdId, null)
    }
  }, [title, description, path, jsonLd, jsonLdId])
}

export { SITE_URL }
