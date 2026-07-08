import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/constants'
import { Reveal, SectionLabel } from './Shared'

const CAT_STYLES = {
  'Corporate':      { bg:'rgba(27,58,140,.1)',  color:'var(--sr-blue)' },
  'Industrial':     { bg:'rgba(184,90,16,.1)',  color:'#b85a10'        },
  'Export':         { bg:'rgba(21,122,64,.1)',  color:'#157a40'        },
  'Consumer Guide': { bg:'rgba(204,34,41,.1)',  color:'var(--sr-red)'  },
}

const POST_IMAGES = {
  'office-relocation-guide': '/images/blog-office.jpg',
  'machine-shifting-guide':  '/images/blog-machine.jpg',
  'export-packing-guide':    '/images/blog-export.jpg',
  'fraud-protection-guide':  '/images/blog-fraud.jpg',
}

function CatBadge({ cat }) {
  const s = CAT_STYLES[cat] || CAT_STYLES['Corporate']
  return <span className="blog-cat" style={{ background: s.bg, color: s.color }}>{cat}</span>
}

export default function BlogSection({ onBlogClick }) {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <section id="insights" className="section sec-off">
      <Reveal>
        <SectionLabel text="Insights" />
        <h2 style={{ marginTop:'.4rem' }}>Relocation <em>knowledge base.</em></h2>
        <p style={{ marginTop:'.8rem', maxWidth:500 }}>
          Practical guides for corporate, industrial and household relocation — written from real project experience.
        </p>
      </Reveal>

      {/* Featured + 3 cards grid */}
      <div className="blog-two-col" style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:'1.8rem', marginTop:'2.5rem' }}>

        {/* Featured — tall left card */}
        <Reveal>
          <Link
            to={`/insights/${featured.id}`}
            className="blog-featured"
            onClick={e => { e.preventDefault(); onBlogClick(featured.id) }}
            style={{ height:'100%', display:'flex', flexDirection:'column' }}
          >
            <div className="blog-featured__img" style={{ height:260 }}>
              <img src={POST_IMAGES[featured.id]} alt={featured.title} loading="lazy" />
            </div>
            <div className="blog-featured__body" style={{ flex:1, display:'flex', flexDirection:'column' }}>
              <CatBadge cat={featured.category} />
              <h3 className="blog-title" style={{ fontSize:'clamp(1.15rem,2.2vw,1.45rem)', marginBottom:'.8rem', flex:1 }}>
                {featured.title}
              </h3>
              <p className="blog-excerpt" style={{ fontSize:'.92rem' }}>{featured.excerpt}</p>
              <div className="blog-meta" style={{ marginTop:'1.2rem' }}>{featured.date} · {featured.readTime} · Read Article →</div>
            </div>
          </Link>
        </Reveal>

        {/* Right — 3 stacked small cards */}
        <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={i * 70}>
              <Link
                to={`/insights/${post.id}`}
                className="blog-card blog-side-card"
                onClick={e => { e.preventDefault(); onBlogClick(post.id) }}
                style={{ flexDirection:'row', display:'flex', height:'auto' }}
              >
                <div className="blog-side-card__img" style={{ width:140, minWidth:140, height:120, overflow:'hidden', flexShrink:0 }}>
                  <img
                    src={POST_IMAGES[post.id]}
                    alt={post.title}
                    loading="lazy"
                    style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .4s' }}
                    onMouseEnter={e => e.currentTarget.style.transform='scale(1.07)'}
                    onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                  />
                </div>
                <div className="blog-card__body" style={{ padding:'1rem 1.2rem' }}>
                  <CatBadge cat={post.category} />
                  <h4 className="blog-title" style={{ fontSize:'.95rem', margin:'.4rem 0 .4rem' }}>{post.title}</h4>
                  <div className="blog-meta">{post.readTime} →</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
