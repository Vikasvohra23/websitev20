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
          {doubled.map((c, i) => (
            <div key={i} className="logo-slider__item">
              <div style={{ textAlign:'center' }}>
                <div className="logo-slider__name">{c.name}</div>
                <div className="logo-slider__sub">{c.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
