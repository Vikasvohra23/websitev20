// ─── REPLACE THESE BEFORE GOING LIVE ───────────────────────
export const YOUR_WA_NUMBER   = "919319571414";
export const YOUR_EMAIL       = "sr.relocationservices@gmail.com";
export const ADMIN_PASSWORD   = "srrs2017";
export const RATE_PER_CFT     = 60;

// ─── NAV ────────────────────────────────────────────────────
export const NAV_LINKS = ["Home","Services","About","Projects","Gallery","Estimate","Contact"];

// ─── CFT ITEMS ───────────────────────────────────────────────
export const CFT_ITEMS = [
  { id:"bed",          label:"Bed (Double)",        cft:100 },
  { id:"half_bed",     label:"Bed (Single)",        cft:50  },
  { id:"wardrobe",     label:"Wardrobe",            cft:60  },
  { id:"sofa3",        label:"Sofa (3-Seater)",     cft:45  },
  { id:"sofa2",        label:"Sofa (2-Seater)",     cft:30  },
  { id:"sofa1",        label:"Sofa (1-Seater)",     cft:15  },
  { id:"center_table", label:"Center Table",        cft:12  },
  { id:"dining_table", label:"Dining Table",        cft:25  },
  { id:"chair",        label:"Chair",               cft:5   },
  { id:"fridge",       label:"Refrigerator",        cft:20  },
  { id:"washing",      label:"Washing Machine",     cft:25  },
  { id:"microwave",    label:"Microwave / OTG",     cft:6   },
  { id:"ac",           label:"AC (Split/Window)",   cft:12  },
  { id:"tv",           label:'TV (40"+)',            cft:30  },
  { id:"bike",         label:"Two-Wheeler",         cft:80  },
];

// ─── CORE SERVICES (home section) ───────────────────────────
export const SERVICES = [
  { num:"01", title:"Industrial Plant Relocation",  tags:["Rigging","No-Dismantle","Site-to-Site"],      desc:"Full plant moves, heavy machinery, robots, CMM machines, furnaces, production lines. Vacuum packing experts with imported saw & pine wood crating." },
  { num:"02", title:"Art, Heritage & Artifacts",    tags:["White Glove","Govt. Cleared","Climate-Safe"], desc:"Museum-grade handling of paintings, sculptures, and rare artifacts. Trusted by Rashtrapati Bhawan's Art Secretariat for the Presidential Museum." },
  { num:"03", title:"Export & International",       tags:["Vacuum Packing","Risk Free","Global"],        desc:"Vacuum packing, export-grade wooden crating. Shipments to USA, UK, Australia, Canada, South Africa, Scandinavia and Dubai." },
  { num:"04", title:"Corporate & IT Assets",        tags:["ESD-Safe","Chain of Custody","Zero Loss"],    desc:"Large-scale office moves. 100,000+ IT assets relocated for Ameriprise, WNS, Unicharm and WHO South-East Asia." },
  { num:"05", title:"Exhibition & Events",          tags:["Time-Critical","Govt. Events","Setup & Strike"], desc:"End-to-end logistics, setup and dismantling for G20 Summit, National Handicrafts Awards at Vigyan Bhawan." },
  { num:"06", title:"Premium & Specialty Moves",    tags:["High-Value","Recurring","Precision"],         desc:"Annual packing/unpacking of the Maharaja Express — heritage items, bespoke furniture and custom fittings. Also serving premium residences and hospitality clients." },
];

// ─── ALL SERVICES (expanded menu) ────────────────────────────
export const ALL_SERVICES = {
  residential: {
    label: "Residential",
    items: ["Household Relocation","Apartment Relocation","Local Shifting","Intercity Relocation","Packing & Unpacking","Furniture Handling"]
  },
  corporate: {
    label: "Corporate",
    items: ["Office Relocation","IT Asset Relocation","Corporate Relocation","Workspace Movement","Records & Document Movement"]
  },
  industrial: {
    label: "Industrial",
    items: ["Industrial Relocation","Factory Relocation","Plant Relocation","Machine Shifting","Machine Installation","Production Line Relocation","Heavy Equipment Handling"]
  },
  logistics: {
    label: "Logistics",
    items: ["Transportation Services","Project Logistics","Export Packing","Industrial Packing","Warehousing","Storage Solutions"]
  },
  specialized: {
    label: "Specialized",
    items: ["Exhibition Packing","Exhibition Logistics","Trade Show Logistics","Equipment Handling","Container Stuffing"]
  }
};

// ─── SERVICE DETAIL PAGES ────────────────────────────────────
export const SERVICE_PAGES = {
  "household-relocation": {
    title: "Household Relocation",
    tagline: "Your home, handled with the care it deserves.",
    metaDesc: "Professional household relocation services in Delhi. Local shifting, intercity moves, packing & unpacking. ISO certified movers trusted by hundreds of families.",
    hero: "Moving a home involves more than transporting furniture and cartons. It involves protecting memories, valuables and the belongings that define your space. Our household relocation services are designed to provide a stress-free moving experience through professional packing, careful handling and secure transportation.",
    services: ["Local House Shifting","Intercity Relocation","Apartment & Villa Relocation","Luxury Household Relocation","Packing & Unpacking","Furniture Dismantling & Reassembly","Fragile Goods Handling","Loading & Unloading","Transit Insurance Assistance"],
    process: [
      { step:"01", title:"Free Survey", desc:"We assess your home, inventory your belongings and plan the move in detail." },
      { step:"02", title:"Professional Packing", desc:"Our trained crew packs everything using the right materials for each item — bubble wrap, blankets, crates, LED boxes for TVs." },
      { step:"03", title:"Safe Transport", desc:"GPS-tracked vehicles. Dedicated fleet for your move — no co-loading of your goods with other consignments." },
      { step:"04", title:"Delivery & Placement", desc:"We unload, unwrap, place furniture and reassemble everything at your new home." },
    ],
    relatedCategory: "office",
  },
  "office-relocation": {
    title: "Office Relocation",
    tagline: "Business continuity is not optional. We deliver it.",
    metaDesc: "Professional office relocation services in Delhi NCR. Minimal downtime office shifting, IT asset relocation, weekend moves. Trusted by WHO, Ameriprise, WNS.",
    hero: "Business continuity is critical during office relocation. Our office shifting specialists ensure minimal downtime while safely relocating office furniture, workstations, IT assets and business records. We frequently execute corporate moves over weekends and night shifts to eliminate any disruption to your operations.",
    services: ["Office Furniture Relocation","IT Equipment Relocation (ESD-Safe)","Workstation Dismantling & Installation","Server Room Relocation","Records & File Movement","Corporate Planning & Phased Moves","Weekend & Night Shift Execution","Inventory & Labelling System"],
    process: [
      { step:"01", title:"Planning & Survey", desc:"We map your office layout, audit assets and create a phased movement plan designed around your operational schedule." },
      { step:"02", title:"Labelling & Inventory", desc:"Every item is tagged, documented and tracked. Nothing gets lost. Your IT team has a complete inventory on Day 1." },
      { step:"03", title:"Execution", desc:"Our teams work in shifts — often overnight or on weekends — to ensure your office is functional by Monday morning." },
      { step:"04", title:"Setup & Verification", desc:"Furniture assembled, workstations connected, records filed. We don't leave until your team can work." },
    ],
    relatedCategory: "industrial",
  },
  "industrial-relocation": {
    title: "Industrial Relocation",
    tagline: "Entire facilities moved. Zero compromise on safety.",
    metaDesc: "Expert industrial relocation services in India. Factory shifting, plant relocation, production line movement. Serving Daikin, Samsung, GKN Driveline, Takahata.",
    hero: "Industrial relocation requires technical planning, specialized equipment and experienced manpower. We provide end-to-end solutions for relocating factories, production lines, manufacturing facilities and industrial equipment across India. Our team has handled projects for automotive manufacturers, FMCG plants and precision engineering facilities.",
    services: ["Factory Relocation","Plant Relocation","Production Line Relocation","Manufacturing Equipment Movement","Utility Equipment Shifting","Shutdown & Turnaround Support","Industrial Asset Relocation","Post-move Alignment & Levelling"],
    process: [
      { step:"01", title:"Engineering Assessment", desc:"Site survey covering machine dimensions, weight distribution, access routes and floor load capacity." },
      { step:"02", title:"Movement Planning", desc:"Step-by-step shift sequence designed to minimize production downtime. Critical path analysis for multi-machine moves." },
      { step:"03", title:"Rigging & Execution", desc:"Hydraulic jacks, rollers, cranes and specialized lifting systems. Skilled riggers and machine handlers execute the plan." },
      { step:"04", title:"Installation & Commissioning Support", desc:"Post-relocation levelling, alignment and commissioning support to get production running quickly." },
    ],
    relatedCategory: "machine",
  },
  "machine-shifting": {
    title: "Machine Shifting & Installation",
    tagline: "Precision positioning. Zero damage. First time.",
    metaDesc: "Professional machine shifting and installation in India. Hydraulic jacks, rollers, cranes. Industrial machinery relocation experts serving manufacturing sector.",
    hero: "We specialize in moving and positioning heavy machinery with precision and safety. Our team utilizes hydraulic jacks, rollers, cranes and specialized lifting equipment for complex machine relocation projects — from single CNC machines to complete production lines.",
    services: ["Machine Loading & Unloading","Machine Transportation","Machine Placement & Positioning","Machine Erection","Machine Installation","Internal Plant Movement","Heavy Equipment Handling","Precision Levelling & Alignment"],
    process: [
      { step:"01", title:"Pre-move Assessment", desc:"Machine weight, dimensions, centre of gravity, connection points and floor specs all documented before any movement begins." },
      { step:"02", title:"Equipment Selection", desc:"Right equipment for the job — hydraulic skates, cranes, chain pulley blocks, rollers — selected based on machine type." },
      { step:"03", title:"Safe Movement", desc:"Controlled movement with continuous supervision. Riggers positioned at every stage. No improvisation." },
      { step:"04", title:"Precision Placement", desc:"Machine placed exactly as per layout drawing. Level checked, anchor bolts positioned, commissioning team briefed." },
    ],
    relatedCategory: "industrial",
  },
  "export-packing": {
    title: "Export Packing",
    tagline: "Your machinery arrives exactly as it left.",
    metaDesc: "Export packing services in Delhi. Vacuum packing, wooden crating, container stuffing. International shipping to USA, UK, Australia, Canada, Dubai.",
    hero: "Proper export packing protects valuable equipment during domestic and international transportation. Our export packing solutions are designed according to industry standards and built around the specific requirements of each consignment — from single machines to full container loads.",
    services: ["Vacuum Packing (VCI Film)","Wooden Crating (Pine & Saw Wood)","Moisture & Corrosion Protection","Export Cartons & Cushioning","Container Stuffing & Lashing","Machinery Packing","Heavy Equipment Crating","Documentation Support"],
    process: [
      { step:"01", title:"Packaging Assessment", desc:"We evaluate the item — weight, fragility, transit route, climate exposure — and design the right packaging solution." },
      { step:"02", title:"Vacuum Packing", desc:"VCI film or vacuum bags applied as inner protection. Desiccants added for moisture control during sea freight." },
      { step:"03", title:"Wooden Crating", desc:"Custom pine or saw wood crates built to exact dimensions. Foam or cribbing added for internal immobilization." },
      { step:"04", title:"Container Stuffing", desc:"Container loaded and lashed to prevent movement. Final documentation and export marking completed." },
    ],
    relatedCategory: "exhibition",
  },
  "exhibition-logistics": {
    title: "Exhibition Packing & Logistics",
    tagline: "Your display arrives on time. Every time.",
    metaDesc: "Exhibition logistics and packing services in Delhi. Trade show setup, display transportation, event dismantling. G20 Summit, EPCH Shilp Guru Awards.",
    hero: "We provide complete logistics support for exhibitions, trade shows and corporate events across India. From government ceremonies at Vigyan Bhawan to international trade fairs, our team handles time-critical movements with the precision that public events demand.",
    services: ["Exhibition Material Packing","Booth & Display Transportation","Complete Event Logistics","Display Equipment Handling","On-site Setup Support","Post-event Dismantling","Return Logistics","Time-critical Delivery"],
    process: [
      { step:"01", title:"Event Planning", desc:"We work with your event timeline. Every movement is planned around venue access windows, build-up and breakdown schedules." },
      { step:"02", title:"Careful Packing", desc:"Display items packed for protection during transit and fast unpacking on-site. Nothing gets opened in a rush." },
      { step:"03", title:"On-time Delivery", desc:"We know exhibitions wait for no one. Dedicated vehicles, confirmed slots, no delays." },
      { step:"04", title:"Setup & Dismantling", desc:"Our team handles physical setup and post-show dismantling so your staff can focus on the event itself." },
    ],
    relatedCategory: "export",
  },
  "transportation": {
    title: "Transportation Services",
    tagline: "Reliable movement across India.",
    metaDesc: "Commercial transportation services across India. Full truck load, part load, industrial cargo transport, time-critical deliveries. Pan India network.",
    hero: "Reliable transportation is the backbone of every successful relocation project. We provide transportation solutions for commercial goods, industrial equipment, project cargo and household belongings across India — backed by a trusted fleet and pan-India network.",
    services: ["Dedicated Vehicle Allocation","Full Truck Load (FTL)","Part Load Services (LTL)","Industrial Cargo Transport","Commercial Goods Transport","Time-Critical Deliveries","GPS-Tracked Consignments","Multi-point Distribution"],
    process: [
      { step:"01", title:"Route Planning", desc:"Optimal route selected based on cargo type, timeline and access restrictions." },
      { step:"02", title:"Vehicle Allocation", desc:"Right vehicle for the cargo — closed trucks for household goods, flatbeds for machinery, specialized trailers for oversized loads." },
      { step:"03", title:"GPS Tracking", desc:"Live tracking for all consignments. You know exactly where your goods are at every stage." },
      { step:"04", title:"Delivery & POD", desc:"Professional delivery, unloading at destination. Proof of delivery documented and shared." },
    ],
    relatedCategory: "warehousing",
  },
  "warehousing": {
    title: "Warehousing & Storage",
    tagline: "Safe storage. Whenever you need it.",
    metaDesc: "Warehousing and storage solutions in Delhi. Short-term and long-term storage for residential, commercial and industrial goods. Secure facilities.",
    hero: "Need temporary or long-term storage? Our warehousing solutions provide safe, secure and cost-effective storage options for residential, commercial and industrial goods. Whether you need a few weeks of storage during a home move or long-term industrial storage, we have the solution.",
    services: ["Short-term Storage","Long-term Storage","Residential Goods Storage","Commercial Goods Storage","Industrial Equipment Storage","Inventory Management","Secured & Monitored Facilities","Loading & Unloading Support"],
    process: [
      { step:"01", title:"Intake & Inventory", desc:"Every item documented on arrival. Photo inventory created. You have full visibility of what is stored." },
      { step:"02", title:"Safe Storage", desc:"Goods stored safely in dry, secure warehouses. Industrial items stored with appropriate precautions." },
      { step:"03", title:"Regular Updates", desc:"You can request updates on your goods at any time. Access available with prior notice." },
      { step:"04", title:"Delivery When Ready", desc:"We deliver your goods when you need them, wherever you need them." },
    ],
    relatedCategory: "transport",
  },
  "project-logistics": {
    title: "Project Logistics",
    tagline: "Complex logistics, professionally managed.",
    metaDesc: "Project logistics services in India. Industrial project logistics, multi-point coordination, government and commercial project support. Delhi based.",
    hero: "Project logistics requires coordinating multiple services — transportation, packing, handling, storage and installation — under a single timeline. Our project logistics team manages the complete supply chain for industrial, government and commercial projects across India.",
    services: ["Project Planning & Coordination","Multi-modal Transportation","Site-to-Site Logistics","Heavy Lift & Rigging","Industrial Project Support","Government Project Execution","Cross-country Movement","Documentation & Compliance"],
    process: [
      { step:"01", title:"Project Scoping", desc:"We understand the full scope — timeline, locations, cargo types, access restrictions — before committing to a plan." },
      { step:"02", title:"Resource Planning", desc:"Vehicles, equipment, manpower and timelines all aligned before execution begins." },
      { step:"03", title:"Coordinated Execution", desc:"Single point of contact throughout. You don't have to manage multiple vendors." },
      { step:"04", title:"Completion & Handover", desc:"Project documented, final report provided. Your team receives a complete record of all movements." },
    ],
    relatedCategory: "industrial",
  },
  "heritage-packing": {
    title: "Art, Heritage & Artifact Packing",
    tagline: "Museum-grade handling. Government trusted.",
    metaDesc: "Professional art and heritage packing services in Delhi. Trusted by Rashtrapati Bhawan's Art Secretariat. Sculptures, paintings, antiques, artifacts.",
    hero: "Some objects cannot be replaced if damaged. Heritage artifacts, rare sculptures, antique paintings and government collections demand a completely different standard of care. We are trusted by Rashtrapati Bhawan's Art Secretariat — the highest possible validation for heritage packing in India — and bring that same precision to every cultural and institutional project.",
    services: ["Museum-Grade Artifact Packing","Sculpture & Statue Handling","Painting & Canvas Protection","Antique Furniture Relocation","Government Collection Packing","Climate-Sensitive Packaging","Custom Crating for Irregular Shapes","White Glove Handling throughout"],
    process: [
      { step:"01", title:"Condition Assessment", desc:"Every item photographed and documented before it is touched. Fragility, weight distribution and mounting points all noted." },
      { step:"02", title:"Custom Packaging Design", desc:"Each artifact gets a packaging solution designed around its specific shape, fragility and climate sensitivity." },
      { step:"03", title:"Specialist Handling", desc:"Trained heritage handlers only. Helmets, gloves and correct lifting posture at every stage. Nothing is rushed." },
      { step:"04", title:"Placement & Documentation", desc:"Items placed exactly where required. Final condition documented and signed off by client representative." },
    ],
    relatedCategory: "government",
  },
  "premium-relocation": {
    title: "Premium & Specialty Relocation",
    tagline: "When the details matter, we deliver.",
    metaDesc: "Premium relocation services in Delhi. Luxury train interiors, high-value hospitality moves, recurring specialty contracts. IRCTC Maharaja Express partner.",
    hero: "Some projects require more than logistics — they require a team that understands the value of every item and the consequences of any mistake. From the annual packing of the Maharaja Express to high-value hospitality and recurring institutional contracts, we bring the same precision to every specialty move.",
    services: ["Luxury Train Interior Packing","Hospitality & Hotel Moves","High-Value Furniture Handling","Annual Recurring Contracts","Bespoke & Custom Fittings","Time-Sensitive Execution","Discreet & Professional Service","Reinstallation & Placement"],
    process: [
      { step:"01", title:"Pre-season Planning", desc:"For recurring contracts like Maharaja Express, we plan months ahead. Nothing is improvised when the timeline is fixed." },
      { step:"02", title:"Custom Packing", desc:"Bespoke crates, fabric wrapping and custom foam inserts for items that can't fit standard packaging." },
      { step:"03", title:"Careful Execution", desc:"Senior supervisors on every specialty move. No shortcuts, no substitutions, no junior-only crews on high-value jobs." },
      { step:"04", title:"Reinstallation", desc:"Every item returned to its exact original position. Clients shouldn't be able to tell anything moved." },
    ],
    relatedCategory: "luxury",
  },
};

// ─── PROJECT CATEGORIES ──────────────────────────────────────
export const PROJECT_CATEGORIES = [
  { id:"all",        label:"All Projects"         },
  { id:"government", label:"Government"           },
  { id:"corporate",  label:"Corporate"            },
  { id:"industrial", label:"Industrial"           },
  { id:"luxury",     label:"Luxury & Heritage"    },
  { id:"events",     label:"Events & Exhibitions" },
];

// ─── ALL PROJECTS ─────────────────────────────────────────────
export const ALL_PROJECTS = [
  { client:"Rashtrapati Bhawan",         title:"Presidential Museum",          tag:"Heritage",       category:"government",  year:"Ongoing",   desc:"Packing and shifting rare artifacts, paintings and sculptures for the Art Secretariat. Trusted by the Office of the President of India." },
  { client:"WHO South-East Asia",        title:"International Office Move",    tag:"International",  category:"government",  year:"2018–2026", desc:"8 consecutive years as the trusted relocation partner for WHO SEARO — a testament to consistent quality and professionalism." },
  { client:"IRCTC",                      title:"Maharaja Express Interiors",   tag:"Luxury",         category:"luxury",      year:"Recurring", desc:"Annual packing and reinstallation of heritage items, bespoke furniture and custom fittings for India's premier luxury train." },
  { client:"WNS / Cape Gemini",          title:"1 Lakh IT Asset Migration",    tag:"Corporate",      category:"corporate",   year:"2020–21",   desc:"Complete door-to-door relocation of 100,000+ IT assets including laptops, desktops, servers and networking hardware." },
  { client:"Ameriprise Financial",       title:"Corporate Office Relocation",  tag:"Finance",        category:"corporate",   year:"2022",      desc:"Sensitive IT infrastructure and workstation relocation for a global financial services company with zero data risk." },
  { client:"CCIC · EPCH",               title:"G20 Summit Exhibition",        tag:"Govt. Event",    category:"events",      year:"2023",      desc:"Complete setup and dismantling for the G20 handicraft pavilion at Bharat Mandapam. Full logistics, display packing and coordination." },
  { client:"EPCH · Min. of Textiles",   title:"Shilp Guru Awards",            tag:"Govt. Event",    category:"events",      year:"Recurring", desc:"National Handicrafts Awards ceremony logistics at Vigyan Bhawan. Display packing, transportation and full event support." },
  { client:"Industrial Client",         title:"13-Foot Production Line",      tag:"Industrial",     category:"industrial",  year:"2023",      desc:"Intact relocation of a 13-foot production line without disassembly — zero damage, precise levelling post-placement." },
  { client:"Industrial Client",         title:"Air Tank Vertical Erection",   tag:"Industrial",     category:"industrial",  year:"2022",      desc:"Specialized lifting, transportation and vertical erection of large industrial air tanks using hydraulic equipment." },
  { client:"Samsung",                   title:"Equipment Handling",           tag:"Electronics",    category:"corporate",   year:"2021",      desc:"Careful handling and relocation of sensitive electronics manufacturing equipment." },
  { client:"Daikin India",              title:"HVAC Equipment Move",          tag:"Industrial",     category:"industrial",  year:"2022",      desc:"Precision relocation of HVAC manufacturing and testing equipment." },
  { client:"GKN Driveline",             title:"Automotive Plant Support",     tag:"Automotive",     category:"industrial",  year:"2023",      desc:"Machine shifting and handling for automotive components manufacturer during plant optimization." },
  { client:"Hyatt",                     title:"Hotel Furniture Relocation",   tag:"Hospitality",    category:"luxury",      year:"2022",      desc:"High-value hotel furniture and fixtures carefully relocated with zero damage to premium goods." },
  { client:"Hankook Tires",             title:"Industrial Plant Support",     tag:"Automotive",     category:"industrial",  year:"2022",      desc:"Equipment movement and industrial support for one of Asia's leading tire manufacturers." },
  { client:"IRCTC",                     title:"Luxury Train Interiors",       tag:"Luxury",         category:"luxury",      year:"Recurring", desc:"Seasonal packing of heritage items & custom train fittings for the Maharaja Express." },
];

// ─── FAQ ─────────────────────────────────────────────────────
// ─── FAQ ─────────────────────────────────────────────────────
// Single source of truth for FAQ content — used by both the
// in-page accordion (FAQSection.jsx) and the homepage FAQPage
// JSON-LD schema (injected via useDocumentHead in App.jsx) so
// the two never drift out of sync.
export const FAQ_DATA = {
  General: [
    { q:'How long have you been in business?',         a:'Shree Radhey Relocation Services was established in 2017. We are ISO 9001:2015 certified and have been the trusted relocation partner for WHO South-East Asia for 8 consecutive years.' },
    { q:'Are you ISO certified?',                       a:'Yes. We hold ISO 9001:2015 certification, meaning our quality management systems, safety protocols and processes are independently audited and documented.' },
    { q:'Do you provide a free site survey?',           a:'Yes. Free on-site surveys are available for industrial, commercial and large residential projects. This helps us provide an accurate estimate and proper project plan.' },
    { q:'Do you serve locations outside Delhi?',        a:'Yes. We provide relocation and logistics services across India. Our transportation network covers all major cities and industrial corridors.' },
  ],
  Pricing: [
    { q:'How is relocation cost calculated?',          a:'Cost depends on distance, volume, manpower, equipment required and project scope. Use our Instant Estimate calculator for household moves, or request a free site survey for commercial and industrial projects.' },
    { q:'Do you provide transit insurance?',           a:'Yes. Transit insurance is available at 2.5% of declared value. We provide documentation from a named, verifiable insurer — not just a verbal assurance.' },
    { q:'Do you charge for packing materials?',        a:'Packing materials are included in the quotation. We use professional-grade materials suited to each item — bubble wrap, stretch film, wooden crates, vacuum packing, LED boxes for TVs and fabric sheets for furniture.' },
    { q:'Is a goods inventory provided?',              a:'Yes. A complete itemised inventory with photographs is provided at the packing stage, giving you full visibility of everything packed and a record for insurance purposes.' },
  ],
  Services: [
    { q:'Can you relocate industrial machinery?',      a:'Yes. Industrial relocation and machine shifting are core specialities. We use 30-ton hydraulic jacks, 40-ton rollers, cranes and specialised rigging systems for complex machinery projects.' },
    { q:'Do you handle export packing?',               a:'Yes. Vacuum packing, ISPM-15 certified wooden crating, moisture protection and container stuffing for international shipments to USA, UK, Australia, Canada, Dubai and more.' },
    { q:'Do you handle government projects?',          a:'Yes. We have worked with Rashtrapati Bhawan, WHO South-East Asia, IRCTC, EPCH and CCIC. Government clients are welcome to request references and credentials.' },
    { q:'Can you work weekends and night shifts?',     a:'Yes. We regularly execute projects during weekends, public holidays and overnight shifts to minimise disruption to business operations and household routines.' },
  ],
  Operations: [
    { q:'Do you co-load with other customers?',        a:'No. We never co-load your consignment with another customer\'s goods. Your move gets a dedicated vehicle — a key reason goods arrive without damage or delay.' },
    { q:'Is GPS tracking available?',                  a:'Yes. All vehicles carry GPS tracking and you can request live status updates on your consignment throughout transit.' },
    { q:'Do you provide warehousing?',                 a:'Yes. Short-term and long-term warehousing for residential, commercial and industrial goods. Secure, monitored facilities across Delhi NCR.' },
    { q:'Who is my point of contact during the move?', a:'You are assigned a dedicated Shifting Assistant — a single point of contact from Day 1 to final handover and feedback. No being passed between departments or teams.' },
  ],
};

// Flattened list (all 16 Q&As) — convenient for JSON-LD generation
export const FAQS = Object.values(FAQ_DATA).flat();

// ─── BLOG POSTS ──────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: "office-relocation-guide",
    title: "Complete Guide to Office Relocation Without Business Downtime",
    excerpt: "A successful office relocation starts with a detailed survey and project plan. Learn how professional planning eliminates disruption.",
    category: "Corporate",
    date: "March 2024",
    readTime: "5 min read",
    heroImage: "/images/blog-office.jpg",
    body: [
      { type:"p", text:"Office relocation is one of the most operationally complex tasks a business can undertake. Without proper planning, even a short move across the same city can cause days of downtime, lost productivity and frustrated employees." },
      { type:"h3", text:"Start with a complete asset audit" },
      { type:"p", text:"Before a single box is packed, your relocation team should document every workstation, monitor, server rack, phone system, furniture piece and document archive in the office. This inventory becomes the backbone of your entire move — it tells you how many vehicles you need, how many packing crew members are required, and how long the move will take." },
      { type:"h3", text:"Plan in phases, not one big move" },
      { type:"p", text:"The biggest mistake organisations make is trying to move everything at once. A phased approach — moving department by department over consecutive nights or weekends — keeps critical teams operational throughout the process. IT infrastructure typically moves last, since everything else depends on it being available for as long as possible." },
      { type:"h3", text:"Weekend and night shifts: the smart choice" },
      { type:"p", text:"Most corporate clients we work with — from WHO South-East Asia to large BPOs — choose to execute their moves over a Friday night and Saturday. By Sunday evening, workstations are set up and verified. Monday morning, staff walk into a functional office. This approach typically eliminates all business downtime entirely." },
      { type:"h3", text:"IT and server room relocation needs specialist handling" },
      { type:"p", text:"Standard movers cannot safely handle servers, networking switches, UPS systems and ESD-sensitive equipment. These items require anti-static packaging, precise labelling (so re-installation doesn't become a puzzle), and transport that avoids vibration and temperature extremes. Our corporate IT relocation team has handled over 1 lakh IT assets without a single data loss event." },
      { type:"h3", text:"Choose a relocation partner with a proven corporate track record" },
      { type:"p", text:"The difference between a smooth office move and a costly disaster is almost always the quality of the relocation company. Verify their corporate credentials, ask for specific case studies (not just testimonials), and confirm they have experience with your scale of move. A company that has successfully relocated WHO South-East Asia and Ameriprise Financial handles challenges that most movers have never encountered." },
    ]
  },
  {
    id: "machine-shifting-guide",
    title: "Why Professional Machine Shifting Requires More Than Just Transportation",
    excerpt: "Heavy machinery relocation demands engineering expertise and specialized equipment — not just a truck and a crew.",
    category: "Industrial",
    date: "February 2024",
    readTime: "6 min read",
    heroImage: "/images/blog-machine.jpg",
    body: [
      { type:"p", text:"Moving a CNC machine, injection moulding press, or air compressor system is fundamentally different from moving furniture. The consequences of getting it wrong — machine damage, facility damage, injury, extended downtime — are severe enough that this is never a job for a general moving company." },
      { type:"h3", text:"Engineering assessment before anything moves" },
      { type:"p", text:"Every machine relocation project should begin with a site assessment covering: machine weight and dimensions, the location of the centre of gravity, access route widths and heights, floor load capacity at both origin and destination, and any anchoring or utility connection requirements. Skipping this step is how expensive machines get damaged." },
      { type:"h3", text:"The right equipment makes all the difference" },
      { type:"p", text:"Hydraulic skates allow heavy machines to be moved horizontally with precision control. Hydraulic jacks lift without shock loading. Gantry cranes handle vertical movement indoors where overhead cranes aren't available. Choosing the wrong equipment for a machine's weight or footprint is a common cause of accidents. A machine that weighs 8 tonnes on paper may have a centre of gravity that makes it tip-prone — only experience identifies this in advance." },
      { type:"h3", text:"No-disassembly moves: sometimes the right call" },
      { type:"p", text:"Many clients assume that large machines must be disassembled to move. In practice, a well-equipped rigging team can often move machines intact — which means no reassembly, no recalibration and significantly shorter downtime. We recently relocated a 13-foot production line without any disassembly, saving the client weeks of reinstallation time." },
      { type:"h3", text:"Post-relocation: levelling and alignment are non-negotiable" },
      { type:"p", text:"Precision manufacturing equipment — lathes, CMMs, grinding machines — require precise levelling after any relocation. Errors of even fractions of a millimetre in level can result in dimensional inaccuracies in finished parts. Our machine shifting teams include experienced personnel who understand this and verify levelling before handing back." },
    ]
  },
  {
    id: "export-packing-guide",
    title: "Export Packing Standards: Protecting Your Machinery During International Shipment",
    excerpt: "Proper export packing protects valuable equipment during long international journeys. Understand the standards that matter.",
    category: "Export",
    date: "January 2024",
    readTime: "4 min read",
    heroImage: "/images/blog-export.jpg",
    body: [
      { type:"p", text:"A machine that costs ₹50 lakh cannot be adequately protected by standard packing materials. Yet every year, businesses ship expensive equipment internationally with inadequate packaging — and discover the true cost when it arrives damaged, or doesn't arrive in working order at all." },
      { type:"h3", text:"Understanding the transit environment" },
      { type:"p", text:"Sea freight subjects goods to humidity, condensation, salt air, vibration from engine and wave action, and the mechanical shock of container handling at ports. A 40-foot container travelling from India to Europe may spend 20–25 days at sea under these conditions. Your packaging needs to protect against all of them simultaneously." },
      { type:"h3", text:"VCI vacuum packing: the baseline for metal equipment" },
      { type:"p", text:"Volatile Corrosion Inhibitor (VCI) film creates a protective atmosphere around metal surfaces that prevents rust and corrosion without any surface contact. Combined with vacuum sealing to remove moisture-carrying air, this is the standard inner layer for any machinery export. Items we vacuum pack for export show zero corrosion on arrival even after months in transit." },
      { type:"h3", text:"Custom wooden crating: structural protection" },
      { type:"p", text:"The crate is the machine's armour during loading, transit and unloading. We fabricate crates from pine and saw wood to the exact dimensions of the equipment, with internal wooden skids that distribute the machine's weight evenly and prevent any movement inside the crate. Fumigation certificates (ISPM 15) are provided for all wooden packaging destined for export." },
      { type:"h3", text:"Container stuffing: the final critical step" },
      { type:"p", text:"How goods are loaded into a container determines how they fare during transit. Crates must be secured with lashing straps rated for the load, braced against the container walls to prevent movement, and stacked with heavier items at the bottom. Poor stuffing — the industry term for container loading — is responsible for a significant proportion of in-transit damage claims." },
      { type:"h3", text:"We export to USA, UK, Australia, Canada, South Africa and Dubai" },
      { type:"p", text:"Our export packing team has handled shipments to all major destinations. Whether your machinery is going to a sister facility, a customer, or an auction, it will arrive in the condition it left in." },
    ]
  },
  {
    id: "fraud-protection-guide",
    title: "How to Protect Yourself from Packers & Movers Fraud",
    excerpt: "Fake companies, hidden charges and damaged goods — the relocation industry has bad actors. Here's exactly how to protect yourself.",
    category: "Consumer Guide",
    date: "May 2024",
    readTime: "7 min read",
    heroImage: "/images/blog-fraud.jpg",
    body: [
      { type:"p", text:"Every year, thousands of Indians lose money — and sometimes irreplaceable belongings — to fraudulent or careless packers and movers. The industry has a well-known fraud problem, and understanding how it works is your best protection." },
      { type:"h3", text:"The most common scams to know" },
      { type:"p", text:"Low-ball estimates: A company quotes an attractive price, then dramatically increases the bill after your goods are loaded, holding them hostage until you pay. This is the most common scam in the industry. Never accept an estimate without a detailed written breakdown." },
      { type:"p", text:"Fake insurance: Companies promise insurance coverage but provide documentation that is either fake or from unregistered providers. Always ask for the insurer's name and policy number and verify it independently." },
      { type:"p", text:"Missing or damaged goods: Unlicensed companies operating without proper storage or handling sometimes result in goods going missing or being replaced with damaged items. An itemised photo inventory before packing is your best protection." },
      { type:"h3", text:"How to verify a relocation company" },
      { type:"p", text:"Check for GST registration — any legitimate business handling interstate movement of goods must have a valid GSTIN. Ask for it and verify on the government portal. A company that hesitates to share its GSTIN is a red flag." },
      { type:"p", text:"ISO certification is a meaningful signal. ISO 9001:2015 certification requires a company to maintain documented quality management systems — it cannot be faked, and certified companies have processes that protect customers." },
      { type:"p", text:"Ask for references from similar projects. A company that has successfully relocated WHO South-East Asia or Rashtrapati Bhawan will have verifiable references. Legitimate companies welcome this." },
      { type:"h3", text:"What to insist on in writing" },
      { type:"p", text:"Before any goods are moved, insist on: a detailed written estimate with item-by-item breakdown, a signed contract specifying pickup and delivery dates, a complete packing list / goods inventory with photographs, and clear transit insurance documentation from a named and verifiable insurer." },
      { type:"h3", text:"The right questions to ask" },
      { type:"p", text:"How many years have you been in operation? Can you share your GST number and ISO certificate? Who exactly will handle my goods — your own team, or sub-contractors? Do you co-load my goods with other customers' consignments? What is your claims process if something is damaged?" },
      { type:"p", text:"A legitimate company will answer every one of these questions without hesitation. Evasiveness on any of them is a signal to walk away." },
      { type:"h3", text:"Why Shree Radhey is different" },
      { type:"p", text:"We are ISO 9001:2015 certified, GST registered, and have been the trusted relocation partner for WHO South-East Asia for 8 consecutive years. We provide itemised inventories, transit insurance documentation and a personal shifting assistant on every project. We have nothing to hide — and we want you to ask hard questions." },
    ]
  },
];

// ─── GALLERY CATEGORIES ──────────────────────────────────────
export const GALLERY_CATEGORIES = [
  { id:"president",  label:"President of India",       desc:"Rashtrapati Bhawan · Art Secretariat" },
  { id:"epch",       label:"EPCH Shilp Guru Awards",   desc:"National Handicrafts Awards Ceremony" },
  { id:"maharaja",   label:"Maharaja Express",         desc:"Luxury Train — Annual Interior Move" },
  { id:"office",     label:"Office Shifting",          desc:"Corporate & IT Relocations" },
  { id:"industrial", label:"Industrial Shifting",      desc:"Plant & Machinery Relocations" },
  { id:"vacuum",     label:"Vacuum Packing",           desc:"Export-Grade Preservation Service" },
];

// ─── CLIENTS (full list from brochure) ──────────────────────
export const CLIENTS = [
  "Rashtrapati Bhawan","WHO South-East Asia","EPCH · Ministry of Textiles",
  "CCIC India Ltd","Ameriprise Financial","WNS","Minda","Continental","Takahata",
  "Senior Flexonics","Bando India","Yakult","Unicharm","IRCTC","Maharaja Express",
  "CASA Paradox","Flyjac","Amtech","Sunbeam","Camel","NCMG",
  "GKN Driveline","Daikin","Samsung","Airtel","Coin Tribe","JS Power",
  "Hankook Tires","Hyatt","Denso","Sun Pharma","Pikkol","Mahavir","JSW Energy",
  "Cheil","Agee Engineering","JTEKT India",
];

// ─── CREDENTIALS ─────────────────────────────────────────────
export const CREDENTIALS = [
  { org:"Rashtrapati Bhawan · Art Secretariat", desc:"Packing & shifting rare artifacts for Presidential Museum" },
  { org:"WHO South-East Asia",                  desc:"Office relocation partner — 2018 to 2026, ongoing" },
  { org:"EPCH · Ministry of Textiles",          desc:"G20 Summit, National Handicrafts Awards, Vigyan Bhawan" },
  { org:"Ameriprise / WNS",                     desc:"100,000+ IT assets, servers, switches & hubs" },
  { org:"IRCTC · Maharaja Express",             desc:"Annual luxury train packing — furniture & interiors" },
];

export const STATS = [
  { n:"2017", l:"Founded"           },
  { n:"100+", l:"Industrial Clients"},
  { n:"1L+",  l:"IT Assets Moved"   },
  { n:"8+",   l:"Years of Trust"    },
];

// ─── CONTACT INFO ────────────────────────────────────────────
export const CONTACT_INFO = [
  { label:"Company",    value:"Shree Radhey Relocation Services" },
  { label:"Address",    value:"WZ 283/309, Vishnu Garden, New Delhi — 110018" },
  { label:"WhatsApp",   value:"+91 9319571414 / 9810499121"       },
  { label:"Email",      value:"sr.relocationservices@gmail.com"   },
  { label:"Website",    value:"www.srrelocationservices.com"      },
  { label:"Since",      value:"Est. 2017 · ISO Certified"         },
];

export const SERVICE_TYPES = [
  "Industrial / Plant Relocation",
  "Art, Artifacts & Heritage",
  "Corporate / IT Asset Move",
  "Export & International",
  "Exhibition & Event Logistics",
  "Luxury / Specialty Move",
  "Vacuum Packing & Export",
  "Household Shifting",
  "Warehousing & Storage",
  "Car & Bike Relocation",
  "Other",
];

export const TRUST_ITEMS = [
  "Rashtrapati Bhawan · Art Secretariat",
  "WHO South-East Asia · 2018–2026",
  "G20 Summit · CCIC",
  "Shilp Guru Awards · EPCH",
  "Maharaja Express · IRCTC",
  "100+ MNCs & Institutions",
];
