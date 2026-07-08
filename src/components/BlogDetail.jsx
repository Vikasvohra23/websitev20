import { Link, useNavigate } from 'react-router-dom'
import { BLOG_POSTS, YOUR_WA_NUMBER } from '../data/constants'
import { WaIcon } from './Shared'
import { useDocumentHead, SITE_URL } from '../hooks/useDocumentHead'

const CAT_COLORS = { 'Corporate':'#1B3A8C', 'Industrial':'#b85a10', 'Export':'#157a40', 'Consumer Guide':'#CC2229' }
const POST_IMAGES = {
  'office-relocation-guide': '/images/blog-office.jpg',
  'machine-shifting-guide':  '/images/blog-machine.jpg',
  'export-packing-guide':    '/images/blog-export.jpg',
  'fraud-protection-guide':  '/images/blog-fraud.jpg',
}

export default function BlogDetail({ postId, onBack }) {
  const post = BLOG_POSTS.find(p => p.id === postId)
  const navigate = useNavigate()

  const articleLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: POST_IMAGES[post.id],
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Shree Radhey Relocation Services', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Shree Radhey Relocation Services', logo: { '@type': 'ImageObject', url: `${SITE_URL}/sr-logo.png` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/insights/${postId}` },
  } : null

  const breadcrumbLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/#insights` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/insights/${postId}` },
    ],
  } : null

  useDocumentHead({
    title: post ? `${post.title} | Shree Radhey Relocation Services` : 'Article Not Found',
    description: post?.excerpt,
    path: `/insights/${postId}`,
    jsonLd: post ? [articleLd, breadcrumbLd] : null,
    jsonLdId: 'blog-detail',
  })

  if (!post) return null
  const col = CAT_COLORS[post.category] || '#1B3A8C'

  return (
    <main className="page-enter" itemScope itemType="https://schema.org/Article">
      {/* ── Sticky breadcrumb below nav ── */}
      <div className="breadcrumb-bar">
        <button className="breadcrumb-btn" onClick={onBack}>Back to Insights</button>
      </div>

      {/* ── SEO ── */}
      <span className="seo-text" itemProp="headline">{post.title}</span>
      <span className="seo-text" itemProp="author" itemScope itemType="https://schema.org/Organization">
        <span itemProp="name">Shree Radhey Relocation Services</span>
      </span>
      <span className="seo-text" itemProp="datePublished">{post.date}</span>

      {/* ── Hero ── */}
      <div style={{ position:'relative', height:'clamp(260px,38vw,500px)', overflow:'hidden' }}>
        <img src={POST_IMAGES[post.id]} alt={post.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(8,15,36,.05) 0%, rgba(8,15,36,.92) 88%)' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'2rem var(--px)', maxWidth:840 }}>
          <span style={{ display:'inline-block', fontSize:'.62rem', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', padding:'.25rem .8rem', borderRadius:4, background:`${col}33`, color:'rgba(255,255,255,.9)', border:`1px solid ${col}66`, marginBottom:'1rem' }}>
            {post.category}
          </span>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'clamp(1.6rem,4vw,3rem)', color:'#fff', lineHeight:1.15 }}>{post.title}</h1>
          <div style={{ marginTop:'.8rem', fontSize:'.72rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.55)' }}>
            {post.date} · {post.readTime}
          </div>
        </div>
      </div>

      {/* ── Article ── */}
      <div style={{ background:'var(--off-white)', padding:'var(--py) var(--px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr min(720px,100%) 1fr' }}>
          <div />
          <article itemProp="articleBody">
            {post.body?.map((b, i) => {
              if (b.type === 'h3') return (
                <h3 key={i} style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'clamp(1.15rem,2.5vw,1.45rem)', marginTop:'2.5rem', marginBottom:'.8rem', color:'var(--txt-dark)' }}>{b.text}</h3>
              )
              if (b.type === 'p') return (
                <p key={i} style={{ fontSize:'1.02rem', lineHeight:1.9, color:'var(--txt-body)', marginBottom:'1.2rem' }}>{b.text}</p>
              )
              return null
            })}

            {/* CTA */}
            <div style={{ margin:'3rem 0', padding:'2rem', background:'#fff', borderRadius:'var(--radius)', border:'1.5px solid var(--border-lt)', boxShadow:'var(--shadow-md)' }}>
              <div style={{ fontSize:'.7rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--sr-blue)', marginBottom:'.5rem' }}>Need Professional Help?</div>
              <h4 style={{ fontSize:'1.2rem', marginBottom:'.6rem', color:'var(--txt-dark)' }}>Talk to our team about your project.</h4>
              <p style={{ fontSize:'.92rem', marginBottom:'1.2rem', color:'var(--txt-body)' }}>
                ISO certified. WHO, Rashtrapati Bhawan, IRCTC and 100+ industrial clients trust us. We respond within the hour.
              </p>
              <a href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I read your article and need a quote.')}`}
                 target="_blank" rel="noopener noreferrer" className="btn btn--wa">
                <WaIcon /> Get a Free Quote
              </a>
            </div>

            {/* More articles */}
            <div style={{ marginTop:'3rem' }}>
              <h4 style={{ marginBottom:'1.2rem', color:'var(--txt-dark)' }}>More Articles</h4>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap:'1rem' }}>
                {BLOG_POSTS.filter(p => p.id !== postId).slice(0,3).map(p => (
                  <Link key={p.id}
                    to={`/insights/${p.id}`}
                    onClick={() => window.scrollTo(0,0)}
                    className="hover-float"
                    style={{ display:'block', background:'#fff', borderRadius:'var(--radius-sm)', border:'1.5px solid var(--border-lt)', cursor:'pointer', overflow:'hidden', transition:'border-color .2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor='var(--sr-blue)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor=''}>
                    <div style={{ height:100, overflow:'hidden' }}>
                      <img src={POST_IMAGES[p.id]} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .4s' }}
                           onMouseEnter={e => e.currentTarget.style.transform='scale(1.06)'}
                           onMouseLeave={e => e.currentTarget.style.transform=''} />
                    </div>
                    <div style={{ padding:'1rem' }}>
                      <div style={{ fontSize:'.58rem', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color: CAT_COLORS[p.category]||'var(--sr-blue)', marginBottom:'.4rem' }}>{p.category}</div>
                      <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'.9rem', color:'var(--txt-dark)', lineHeight:1.3, marginBottom:'.4rem' }}>{p.title}</div>
                      <div style={{ fontSize:'.68rem', fontWeight:700, color:'var(--sr-red)', textTransform:'uppercase', letterSpacing:'.1em' }}>Read →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </article>
          <div />
        </div>
      </div>
    </main>
  )
}
