import { Reveal, SectionLabel } from './Shared'

const CLIENTS = [
  { name:'WHO South-East Asia',  cat:"Int'l Org"    },
  { name:'Rashtrapati Bhawan',   cat:'Government'   },
  { name:'IRCTC',                cat:'Government'   },
  { name:'CCIC India',           cat:'Government'   },
  { name:'Ameriprise Financial', cat:'Finance'      },
  { name:'WNS Global',           cat:'BPO'          },
  { name:'Samsung India',        cat:'Electronics'  },
  { name:'Daikin India',         cat:'HVAC'         },
  { name:'GKN Driveline',        cat:'Automotive'   },
  { name:'Takahata Precision',   cat:'Automotive'   },
  { name:'Bando India',          cat:'Industrial'   },
  { name:'JTEKT India',          cat:'Automotive'   },
  { name:'Hankook Tires',        cat:'Automotive'   },
  { name:'Senior India',         cat:'Industrial'   },
  { name:'Unicharm India',       cat:'FMCG'         },
  { name:'Yakult Danone',        cat:'FMCG'         },
  { name:'Hyatt Hotels',         cat:'Hospitality'  },
  { name:'Denso India',          cat:'Automotive'   },
  { name:'Airtel India',         cat:'Telecom'      },
  { name:'JSW Energy',           cat:'Energy'       },
  { name:'Flyjac Logistics',     cat:'Logistics'    },
  { name:'Sun Pharma',           cat:'Pharma'       },
  { name:'Cheil India',          cat:'Marketing'    },
  { name:'CoinTribe',            cat:'Fintech'      },
]

const CLIENT_LOGOS = {
  'WHO South-East Asia': '/Client%20Logo/WHO.png',
  'Rashtrapati Bhawan': '/Client%20Logo/Rashtrapati_Bhavan_Logo.png',
  'IRCTC': '/Client%20Logo/IRCTC.png',
  'CCIC India': '/Client%20Logo/ccic.jpg',
  'Ameriprise Financial': '/Client%20Logo/ameriprise%20f.jpg',
  'WNS Global': '/Client%20Logo/wns.png',
  'Samsung India': '/Client%20Logo/samsung.png',
  'Daikin India': '/Client%20Logo/daikin.png',
  'GKN Driveline': '/Client%20Logo/gkn.jpg',
  'Hankook Tires': '/Client%20Logo/hankook.png',
  'Senior India': '/Client%20Logo/senior.jpg',
  'Yakult Danone': '/Client%20Logo/yakult.png',
  'Hyatt Hotels': '/Client%20Logo/hyatt.png',
  'Airtel India': '/Client%20Logo/airtel.jpg',
  'JSW Energy': '/Client%20Logo/jsw.png',
  'Flyjac Logistics': '/Client%20Logo/flyjack.jpg',
  'Bando India': '/Client%20Logo/bando.jpg',
  'Denso India': '/Client%20Logo/denso.png',
  'CoinTribe': '/Client%20Logo/coin%20tribe.jpg',
  'Cheil India': '/Client%20Logo/cheil.png',
  'JTEKT India': '/Client%20Logo/jk_logo_original.png',
  'Takahata Precision': '/Client%20Logo/takahata.png',
  'Sun Pharma': '/Client%20Logo/Sun%20Pharma.png',
  'Unicharm India': '/Client%20Logo/unicharm.png',
}

const doubled = [...CLIENTS, ...CLIENTS]

export default function ClientSlider() {
  return (
    <section style={{ background:'var(--off-white)', padding:'3.5rem 0', borderTop:'1px solid var(--border-lt)', borderBottom:'1px solid var(--border-lt)' }}>
      <Reveal>
        <div style={{ textAlign:'center', marginBottom:'2rem', padding:'0 var(--px)' }}>
          <SectionLabel text="Our Clients" />
          <h3 style={{ marginTop:'.4rem', fontSize:'clamp(1.2rem,2.5vw,1.6rem)' }}>
            Trusted by <em>India's most recognised names.</em>
          </h3>
        </div>
      </Reveal>

      <div className="logo-slider">
        <div className="logo-slider__track">
          {doubled.map((c, i) => {
            const logo = CLIENT_LOGOS[c.name]
            return (
              <div key={i} className="logo-slider__item">
                <div style={{ textAlign:'center' }}>
                  {logo ? (
                    <img src={logo} alt={c.name} style={{ maxHeight:48, maxWidth:'100%', objectFit:'contain', margin:'0 auto 0.75rem' }} />
                  ) : (
                    <div className="logo-slider__name">{c.name}</div>
                  )}
                  <div className="logo-slider__sub">{c.cat}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
