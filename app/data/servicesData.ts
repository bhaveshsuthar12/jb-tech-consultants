export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "Geotechnical & Soil" | "Mining & Geology" | "Surveys & Structural" | "Laboratory Testing";
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  standards: string;
  parameters: string[];
  equipment: string[];
  deliverables: string[];
  keyHighlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "svc-01",
    slug: "mining-exploration",
    title: "Mining Exploration",
    category: "Mining & Geology",
    iconName: "Pickaxe",
    shortDesc: "Systematic geological mapping, surface sampling, trenching, ore reserve delineation, and technical exploration support for mining leases.",
    fullDesc: "JB Tech Consultants provides end-to-end technical mining exploration services to help mine owners, leaseholders, and project developers assess mineral potential, map geological formations, and delineate ore reserves across Rajasthan. We combine field geological mapping with core sample logging and resource modeling to support statutory mining plans and commercial development.",
    standards: "UNFC Guidelines, Indian Bureau of Mines (IBM) Standards, Mineral Conservation and Development Rules (MCDR)",
    parameters: [
      "Geological outcrop and structural mapping",
      "Lithological borehole logging & strata correlation",
      "Ore boundary delimitation and vein tracking",
      "Trenching, pitting, and channel sampling",
      "Specific gravity and ore grade modeling",
      "Strike, dip, and structural fault analysis"
    ],
    equipment: [
      "Heavy hydraulic diamond core drilling rigs",
      "Geological compass and clinometers",
      "High-precision GPS & DGPS receivers",
      "Petrographic inspection tools",
      "Mobile field exploration support vehicles"
    ],
    deliverables: [
      "Comprehensive Geological Exploration Report",
      "Surface geological maps & geological cross-sections",
      "Borehole strata correlation charts",
      "Grade-tonnage preliminary reserve estimates",
      "Compliance documentation for mining plan submissions"
    ],
    keyHighlights: [
      "Experienced field exploration across Rajasthan mineral belts",
      "Integrated drilling, sampling, and chemical assaying",
      "Full compliance with Indian Bureau of Mines guidelines"
    ]
  },
  {
    id: "svc-02",
    slug: "mineral-testing",
    title: "Mineral Testing",
    category: "Laboratory Testing",
    iconName: "Gem",
    shortDesc: "High-accuracy chemical and physical assaying of metallic and non-metallic mineral ores including limestone, marble, quartz, and feldspar.",
    fullDesc: "Our mineral testing laboratory offers precise chemical assaying and physical characterization for mineral miners, processors, and industrial buyers in Rajasthan. Whether evaluating high-calcium limestone for cement manufacturing or silica sand purity for glass industries, our laboratory delivers trustworthy analytical results.",
    standards: "IS 1760 (Limestone & Dolomite Testing), IS 1917 (Quartz & Feldspar), ASTM C25",
    parameters: [
      "Loss on Ignition (LOI) & moisture content",
      "Calcium Oxide (CaO) and Magnesium Oxide (MgO) assay",
      "Total Silica (SiO2) and Acid Insoluble Matter",
      "Iron Oxide (Fe2O3) & Alumina (Al2O3) content",
      "Specific gravity, bulk density, and porosity",
      "Whiteness, brightness index, and visual purity"
    ],
    equipment: [
      "High-temperature muffle furnaces (up to 1200°C)",
      "Digital precision analytical balances (0.1 mg accuracy)",
      "Wet chemical analysis & titration bench",
      "Flame photometer & spectrophotometer setup",
      "Standard sieve shakers & sample splitters"
    ],
    deliverables: [
      "Certified Mineral Assay Test Certificate",
      "Comparative grade report against industrial specifications",
      "Chemical composition breakdown table",
      "Sample storage and verification trail"
    ],
    keyHighlights: [
      "Rigorous quality control for industrial mineral verification",
      "Rapid turnaround for mining lease consignments",
      "Support for cement, glass, ceramic, and export grades"
    ]
  },
  {
    id: "svc-03",
    slug: "geotechnical-surveys",
    title: "Geotechnical Surveys",
    category: "Geotechnical & Soil",
    iconName: "Layers3",
    shortDesc: "Comprehensive subsurface ground investigations, borewell logging, safe bearing capacity evaluation, and foundation engineering guidance.",
    fullDesc: "JB Tech Consultants conducts comprehensive geotechnical investigations for industrial plants, multi-story buildings, bridges, and infrastructure projects across Rajasthan. We assess subsurface stratigraphy, rock mass quality, and groundwater levels to recommend optimized foundation designs that guarantee long-term structural safety.",
    standards: "IS 1892 (Subsurface Investigation), IS 2131 (Standard Penetration Test - SPT), IS 1498 (Soil Classification)",
    parameters: [
      "Standard Penetration Test (SPT 'N' value profiling)",
      "Continuous core recovery and RQD (Rock Quality Designation)",
      "Subsurface stratigraphy and layer thickness logging",
      "Groundwater table depth monitoring and fluctuations",
      "Safe Bearing Capacity (SBC) calculation for shallow & deep foundations",
      "Settlement analysis and soil liquefaction potential"
    ],
    equipment: [
      "Rotary geotechnical drilling rigs",
      "Standard split spoon samplers & Shelby tubes",
      "Heavy hydraulic diamond core drills",
      "Dynamic cone penetration apparatus (DCPA)",
      "Electric groundwater level sounders"
    ],
    deliverables: [
      "Comprehensive Geotechnical Investigation Report",
      "Subsurface borehole lithological strata logs",
      "SPT 'N' value vs. depth graph profiles",
      "Recommended Safe Bearing Capacity (SBC) tables for isolated & raft footings",
      "Foundation design recommendations by qualified engineers"
    ],
    keyHighlights: [
      "Essential for bridge, highway, and high-rise foundation safety",
      "On-site drilling combined with in-house laboratory testing",
      "Trusted by civil contractors and infrastructure developers"
    ]
  },
  {
    id: "svc-04",
    slug: "soil-testing",
    title: "Soil Testing",
    category: "Geotechnical & Soil",
    iconName: "Mountain",
    shortDesc: "Precision physical, mechanical, and compaction testing of foundation soil for civil construction and earthworks validation.",
    fullDesc: "Accurate soil mechanics analysis is essential before initiating any civil construction project. JB Tech Consultants operates advanced testing protocols to analyze soil load-bearing limits, moisture-density relationships, shear strength, and consolidation behavior to protect your investment from post-construction settlement.",
    standards: "IS 2720 (Methods of Test for Soils - Parts 1 through 40), IS 1888 (Plate Load Test)",
    parameters: [
      "Safe Bearing Capacity (SBC) determination",
      "Standard & Modified Proctor Compaction (OMC & MDD)",
      "California Bearing Ratio (CBR) for road subgrade",
      "Atterberg limits (Liquid Limit, Plastic Limit, Plasticity Index)",
      "Grain size distribution via dry sieve & hydrometer analysis",
      "Direct shear test & unconfined compressive strength"
    ],
    equipment: [
      "Motorized direct shear testing machine",
      "Proctor compaction molds and automatic rammers",
      "CBR testing loading frame with proving rings",
      "Motorized sieve shaker with certified sieves",
      "Casagrande liquid limit apparatus & cone penetrometer"
    ],
    deliverables: [
      "Certified Soil Mechanics Laboratory Test Certificate",
      "Moisture-Density Proctor Compaction curves",
      "Grain size distribution semi-logarithmic chart",
      "SBC calculations for shallow foundation depths",
      "Subgrade CBR test sheets for pavement design"
    ],
    keyHighlights: [
      "Accurate testing according to Bureau of Indian Standards (BIS)",
      "Fast report generation for building approval and structural design",
      "Field density testing (core cutter & sand replacement) available"
    ]
  },
  {
    id: "svc-05",
    slug: "infrastructure-agriculture",
    title: "Infrastructure & Agriculture",
    category: "Geotechnical & Soil",
    iconName: "Sprout",
    shortDesc: "Engineering support for rural roads, irrigation canals, check dams, and agricultural soil fertility testing for sustainable cultivation.",
    fullDesc: "Bridging civil engineering and agronomy, this dual service supports both infrastructure developers building rural connectivity and agricultural landowners optimizing soil fertility. We assess earthwork stability for canals, culverts, and village roads while providing nutrient profiling for farm land development.",
    standards: "IRC (Indian Roads Congress) Rural Road Specifications, ICAR Soil Testing Protocols",
    parameters: [
      "Soil pH, Electrical Conductivity (EC), and salinity",
      "Organic carbon (OC) and macronutrients (N, P, K)",
      "Secondary & micronutrient screening (Zinc, Iron, Manganese)",
      "Soil texture, bulk density, and water retention capacity",
      "Embankment compaction and subgrade stability",
      "Culvert, pond, and minor check-dam foundation suitability"
    ],
    equipment: [
      "Digital microprocessor-based pH and EC meters",
      "Spectrophotometer & flame photometer",
      "Core cutters for in-situ field density checking",
      "Certified brass soil sieve sets",
      "Digital soil moisture balances"
    ],
    deliverables: [
      "Comprehensive Soil Fertility Health Card",
      "Custom fertilizer & soil amendment recommendations",
      "Subgrade compaction test reports for rural roads",
      "Canal & check-dam embankment stability signoff"
    ],
    keyHighlights: [
      "Scientific soil testing for progressive farmers & orchards",
      "Civil testing support for PMGSY & state road works",
      "Practical guidance on soil reclamation and water efficiency"
    ]
  },
  {
    id: "svc-06",
    slug: "food-testing",
    title: "Food Testing",
    category: "Laboratory Testing",
    iconName: "FlaskConical",
    shortDesc: "Quality compliance testing for agricultural produce, grains, pulses, spices, and processed food materials.",
    fullDesc: "Ensuring food safety and nutritional standards for agricultural processors, traders, and grain storage facilities in southern Rajasthan. Our laboratory conducts fundamental physicochemical analysis to verify purity, moisture thresholds, and absence of adulterants in harvest batches.",
    standards: "FSSAI Guidelines, IS Standards for Food Grains & Agricultural Produce",
    parameters: [
      "Moisture content and foreign matter percentage",
      "Total ash, acid-insoluble ash, and mineral impurities",
      "Crude protein, carbohydrate, and fat estimation",
      "Free fatty acid (FFA) and peroxide value in edible oils",
      "Bulk density and physical grain uniformity",
      "Screening for visual mold and insect damage"
    ],
    equipment: [
      "Precision digital moisture analyzers",
      "Soxhlet extraction apparatus for fat content",
      "Kjeldahl digestion & distillation unit for protein",
      "High-temperature muffle furnace for ash analysis",
      "Digital refractometer & Abbe refractometer"
    ],
    deliverables: [
      "Certified Food Quality Analysis Certificate",
      "Batch compliance report against FSSAI quality benchmarks",
      "Adulteration check and moisture compliance summary",
      "Traceable quality records for procurement and trade"
    ],
    keyHighlights: [
      "Trusted by grain traders, millers, and food processing units",
      "Accurate testing to prevent storage spoilage and rejection",
      "Clear, actionable reports aligned with national food standards"
    ]
  },
  {
    id: "svc-07",
    slug: "raw-material-testing",
    title: "Raw Material Testing",
    category: "Laboratory Testing",
    iconName: "Search",
    shortDesc: "Rigorous quality inspection of construction raw materials including coarse aggregates, fine sand, cement, fly ash, and masonry bricks.",
    fullDesc: "Civil structures depend on the structural soundness of their basic building materials. JB Tech Consultants tests construction raw materials to verify compliance with National Building Code and CPWD specifications, preventing premature concrete degradation and structural failure.",
    standards: "IS 2386 (Aggregates Testing), IS 4031 (Cement Testing), IS 3495 (Clay Bricks)",
    parameters: [
      "Aggregate Crushing Value (ACV) & Impact Value (AIV)",
      "Los Angeles Abrasion value for road metalling",
      "Flakiness Index (FI) & Elongation Index (EI)",
      "Cement initial and final setting time, consistency, and fineness",
      "Compressive strength of cement mortar cubes (3, 7, 28 days)",
      "Silt and clay content in river and crushed manufactured sand (M-Sand)",
      "Water absorption and compressive strength of masonry bricks"
    ],
    equipment: [
      "Digital Compression Testing Machine (CTM - 2000 kN capacity)",
      "Aggregate impact testing apparatus",
      "Los Angeles abrasion testing machine",
      "Vicat apparatus with needles for cement testing",
      "Vibrating sieve shakers with certified test sieves"
    ],
    deliverables: [
      "Certified Material Compliance Test Certificate",
      "Aggregate physical soundness & gradation curves",
      "Concrete mix design raw material suitability review",
      "Contractor quality assurance compliance dossier"
    ],
    keyHighlights: [
      "Prevents structural failures by verifying raw material quality upfront",
      "Accepted by PWD, municipal, and commercial project auditors",
      "Fast turnaround on aggregate and cement batch checks"
    ]
  },
  {
    id: "svc-08",
    slug: "land-surveys",
    title: "Land Surveys",
    category: "Surveys & Structural",
    iconName: "Ruler",
    shortDesc: "High-precision digital land surveying using Total Stations and DGPS for boundary demarcation, contouring, and layout planning.",
    fullDesc: "From industrial plot boundary verification to complex topographical contour mapping for highways, mines, and solar plants, our surveying teams deliver millimeter-accurate geospatial data. We generate CAD-ready drawings that accelerate project approvals and eliminate costly boundary disputes.",
    standards: "Survey of India (SOI) Datum Referencing, GIS/CAD Cartographic Standards",
    parameters: [
      "Cadastral boundary demarcation and exact land area measurement",
      "Topographic elevation mapping and contour interval plotting",
      "Digital Elevation Models (DEM) and ground terrain profiling",
      "Route alignment surveys for roads, pipelines, and transmission corridors",
      "Grid spot level surveys for cut and fill earthwork volume estimation",
      "As-built surveys for completed civil works"
    ],
    equipment: [
      "Electronic Total Stations (1-second angle accuracy)",
      "Dual-frequency Differential GPS (DGPS) receivers",
      "Digital auto levels and precision invar leveling staves",
      "Optical prism targets, tripods, and tribrachs",
      "Specialized CAD and terrain modeling software workstations"
    ],
    deliverables: [
      "AutoCAD (.DWG / .DXF) topographical contour drawings",
      "Georeferenced KML / KMZ files for Google Earth integration",
      "Earthwork cut and fill volume calculation sheets",
      "Certified boundary demarcation and benchmark coordinates map",
      "Print-ready large format survey sheets"
    ],
    keyHighlights: [
      "Millimeter-level precision using advanced Total Station and DGPS",
      "Rapid field mobilization across Chittorgarh and Rajasthan",
      "Seamless integration with engineering design workflows"
    ]
  },
  {
    id: "svc-09",
    slug: "ground-water-surveys",
    title: "Ground Water Surveys",
    category: "Surveys & Structural",
    iconName: "Droplets",
    shortDesc: "Scientific geophysical resistivity surveying and hydrogeological analysis for pinpointing high-yield borewell drilling points.",
    fullDesc: "Avoid dry drilling losses with JB Tech Consultants' scientific groundwater investigation services. Utilizing Vertical Electrical Sounding (VES) and geological strata analysis, we identify prospective aquifer depths, water table thickness, and salinity levels before drilling commences.",
    standards: "Central Ground Water Board (CGWB) Exploration Guidelines",
    parameters: [
      "Apparent resistivity measurement through Schlumberger electrode arrays",
      "Identification of subsurface fracture zones and water-bearing jointing",
      "Static water table depth estimation and aquifer thickness modeling",
      "Projected discharge rate and seasonal yield estimation",
      "Groundwater quality screening (hardness & total dissolved solids)",
      "Site evaluation for artificial groundwater recharge structures"
    ],
    equipment: [
      "Deep digital signal-averaging resistivity meters",
      "Heavy-duty insulated cable reels and precision measuring tapes",
      "Non-polarizing potential electrodes and stainless steel current stakes",
      "Field calibration test units and high-capacity battery packs",
      "Computerized VES inversion and layer modeling software"
    ],
    deliverables: [
      "Scientific Hydrogeological Investigation Report",
      "Vertical Electrical Sounding (VES) resistivity curve graphs",
      "Pinpointed GPS coordinates for optimal borewell point",
      "Recommended drilling depth and casing installation advisory",
      "Aquifer strata prognosis chart"
    ],
    keyHighlights: [
      "Significantly increases borewell drilling success rates",
      "Cost-saving scientific solution before heavy rig mobilization",
      "Valuable for agricultural estates, industrial units, and townships"
    ]
  },
  {
    id: "svc-10",
    slug: "structural-consultancy",
    title: "Structural Consultancy",
    category: "Surveys & Structural",
    iconName: "Building2",
    shortDesc: "Engineering stability assessment, Non-Destructive Testing (NDT), retrofitting design, and structural audit for industrial and civil structures.",
    fullDesc: "Ensuring structural integrity, durability, and safety of existing and newly constructed buildings, bridges, and industrial plants. We conduct non-destructive testing (NDT), distress mapping, and structural load evaluations to extend the lifespan of civil assets and certify safety compliance.",
    standards: "IS 456 (Plain and Reinforced Concrete), IS 13311 (Non-Destructive Testing of Concrete), IS 1893 (Seismic Criteria)",
    parameters: [
      "Rebound hammer in-situ compressive strength indexing",
      "Ultrasonic Pulse Velocity (UPV) for concrete homogeneity and crack depth",
      "Core extraction and crushing strength verification for existing structures",
      "Visual distress mapping (spalling, corrosion, structural cracking)",
      "Structural load capacity review and column/beam adequacy check",
      "Retrofitting, jacketing, and structural strengthening recommendations"
    ],
    equipment: [
      "Calibrated digital Schmidt Rebound Hammer",
      "Ultrasonic Pulse Velocity (UPV) tester with transducers",
      "Electromagnetic rebar locator / cover meter",
      "Diamond core cutter for concrete core extraction",
      "Crack width measurement microscopes and gauges"
    ],
    deliverables: [
      "Certified Structural Stability & Health Audit Report",
      "Non-Destructive Testing (NDT) data tables and strength correlations",
      "Detailed structural distress mapping drawings",
      "Step-by-step structural repair and retrofitting guidelines",
      "Official certificate of structural fitness for statutory authorities"
    ],
    keyHighlights: [
      "Safety audits for commercial buildings, factories, and schools",
      "Non-invasive assessment of existing concrete quality",
      "Actionable engineering solutions for distressed structures"
    ]
  },
  {
    id: "svc-11",
    slug: "diamond-core-drilling-services",
    title: "Diamond Core Drilling Services",
    category: "Mining & Geology",
    iconName: "Compass",
    shortDesc: "Heavy-duty wireline diamond core drilling for mining exploration, mineral reserve estimation, and bedrock foundation investigation.",
    fullDesc: "JB Tech Consultants owns and operates specialized diamond core drilling equipment capable of penetrating hard crystalline rock formations to retrieve continuous solid cylindrical core samples. Our high core recovery rates ensure geologists and civil engineers obtain pristine samples for laboratory analysis and strata modeling.",
    standards: "IS 4464 (Presentation of Drilling Information), IS 11315 (Rock Mass Description in Boreholes)",
    parameters: [
      "NQ, HQ, and BQ continuous diamond core drilling",
      "High core recovery percentage (>90% in solid bedrock formations)",
      "Rock Quality Designation (RQD) logging and joint frequency profiling",
      "In-situ water loss and permeability testing during drilling runs",
      "Vertical and inclined exploratory borehole execution",
      "Geotechnical strata identification and bedrock refusal depth"
    ],
    equipment: [
      "Truck-mounted and skid-mounted heavy rotary diamond core drilling rigs",
      "High-pressure hydraulic reciprocating mud pumps",
      "Diamond impregnated core bits and reaming shells",
      "Double and triple tube wireline core barrels",
      "Sturdy galvanized metal core boxes with depth partition channels"
    ],
    deliverables: [
      "Systematic Core Box Storage with depth tagging and photographs",
      "Daily Drilling & Shift Run Log sheets",
      "Detailed Lithological Borehole Log with RQD and core recovery index",
      "Representative rock core samples prepared for laboratory crushing tests",
      "Final Diamond Core Drilling Summary Report"
    ],
    keyHighlights: [
      "Company-owned heavy drilling rigs and experienced drill crews",
      "Proven drilling in hard granite, quartzite, limestone, and marble",
      "Essential for dam foundations, bridge piers, and mining exploration"
    ]
  }
];

export const industriesData = [
  {
    name: "Mining & Mineral Extraction",
    icon: "Gem",
    tagline: "Exploration, Core Drilling & Mineral Assays",
    desc: "Supporting marble, limestone, granite, quartz, and mineral leaseholders across Rajasthan with accurate ore grade assays, exploration mapping, and high-recovery core drilling.",
    relevantServices: ["Mining Exploration", "Mineral Testing", "Diamond Core Drilling Services", "Land Surveys"]
  },
  {
    name: "Construction & Infrastructure",
    icon: "HardHat",
    tagline: "Geotechnical Surveys, Soil & Material Testing",
    desc: "Partnering with infrastructure contractors, highway authorities, and commercial builders to deliver verified soil bearing capacity (SBC), raw material checks, and structural audits.",
    relevantServices: ["Geotechnical Surveys", "Soil Testing", "Raw Material Testing", "Structural Consultancy"]
  },
  {
    name: "Agriculture & Soil Health",
    icon: "Sprout",
    tagline: "Soil Fertility, Irrigation & Rural Civil Works",
    desc: "Helping progressive farmers, agricultural cooperatives, and rural development projects with comprehensive soil nutrient profiling, check-dam stability, and farm land assessment.",
    relevantServices: ["Infrastructure & Agriculture", "Soil Testing", "Ground Water Surveys", "Food Testing"]
  },
  {
    name: "Water Resources & Groundwater",
    icon: "Droplets",
    tagline: "Geophysical Resistivity & Hydrogeology",
    desc: "Preventing costly dry borewells through scientific electrical resistivity surveying, water table depth profiling, and aquifer yield determination.",
    relevantServices: ["Ground Water Surveys", "Soil Testing", "Geotechnical Surveys"]
  },
  {
    name: "Manufacturing & Raw Materials",
    icon: "Building2",
    tagline: "Industrial Material Compliance & Testing",
    desc: "Verifying quality compliance for cement plants, aggregate crushing units, ready-mix concrete suppliers, and brick manufacturers.",
    relevantServices: ["Raw Material Testing", "Mineral Testing", "Structural Consultancy"]
  },
  {
    name: "Food & Grain Processing",
    icon: "FlaskConical",
    tagline: "Purity & Moisture Quality Assurance",
    desc: "Physicochemical analysis for grain storage warehouses, flour mills, oil seed processors, and food traders to ensure purity and prevent storage loss.",
    relevantServices: ["Food Testing", "Raw Material Testing"]
  },
  {
    name: "Land & Real Estate Development",
    icon: "MapPinned",
    tagline: "DGPS, Total Station & Topographical Surveys",
    desc: "Delivering millimeter-accurate boundary demarcation, contour interval surveys, and digital terrain mapping for commercial layouts, townships, and industrial estates.",
    relevantServices: ["Land Surveys", "Geotechnical Surveys", "Soil Testing"]
  }
];

export const clientReviewsData = [
  {
    name: "Kunal Gour",
    text: "Best soil testing agency in chittorgarh",
    stars: 5,
    tag: "Soil Testing"
  },
  {
    name: "sonu Mistry",
    text: "Best rock drilling agency",
    stars: 5,
    tag: "Core Drilling"
  },
  {
    name: "Ayush Jaiswal",
    text: "Best mineral lab in Chittorgarh",
    stars: 5,
    tag: "Mineral Testing"
  },
  {
    name: "akash garg",
    text: "best soil agency in chittorgarh",
    stars: 5,
    tag: "Geotechnical"
  },
  {
    name: "Santosh Suthar",
    text: "Best agriculture soil testing and construction soil testing agency in chittorgarh",
    stars: 5,
    tag: "Agri & Civil Testing"
  },
  {
    name: "Prakash Kumar Sen",
    text: "Best agency for bridge design & material testing",
    stars: 5,
    tag: "Bridge & Structural"
  },
  {
    name: "Vishal Sharma",
    text: "Accuracy 99.9 percent good lab and their results",
    stars: 5,
    tag: "Lab Precision"
  },
  {
    name: "illusion BAISA_HKM",
    text: "Good lab accurate results for food. Excellent 👌👌",
    stars: 5,
    tag: "Food Testing"
  },
  {
    name: "Abhishek Suthar",
    text: "Very professional soil testing lab. Accurate reports, fast service, and helpful staff. Highly recommended for construction and agricultural soil testing.",
    stars: 5,
    tag: "Professional Lab"
  },
  {
    name: "Devendra Singh Rao",
    text: "Professional and reliable Mineral & Civil Testing Consulting Agency. They provide accurate testing reports and excellent technical guidance. The team is knowledgeable and the service is timely and trustworthy. Highly recommended.",
    stars: 5,
    tag: "Civil & Mineral Testing"
  }
];

export const galleryPhotosData = [
  {
    src: "/images/jb-tech-01.jpg",
    title: "Heavy Hydraulic Diamond Core Rig Control Station",
    category: "Diamond Core Drilling",
    desc: "Rig operator control console and hydraulic pressure gauges on our company-owned heavy drilling rig during site operations."
  },
  {
    src: "/images/jb-tech-02.jpg",
    title: "Groundwater Borehole & Hydrogeological Testing Pipeline",
    category: "Site Surveys & Boreholes",
    desc: "Hydrogeological field setup and dual-discharge borehole testing lines assessing groundwater yield and strata permeability."
  },
  {
    src: "/images/jb-tech-03.jpg",
    title: "Geological Core Box with Depth-Tagged Rock Cores (21m - 27m)",
    category: "Mining & Geology",
    desc: "Precision extracted cylindrical bedrock core samples stored systematically in galvanized core boxes with clear run and depth markings."
  },
  {
    src: "/images/jb-tech-04.jpg",
    title: "Highway & Infrastructure Geotechnical Investigation Rig",
    category: "Site Surveys & Boreholes",
    desc: "Rotary drilling setup along road corridor conducting SPT standard penetration tests and subsurface soil profiling."
  },
  {
    src: "/images/jb-tech-05.jpg",
    title: "Mobile Field Exploration Rig for Desert & Rural Terrains",
    category: "Site Surveys & Boreholes",
    desc: "Specialized mobile exploration drill unit configured for rapid mobilization across remote rural and desert project sites in Rajasthan."
  },
  {
    src: "/images/jb-tech-06.jpg",
    title: "Mining Quarry & Rock Excavation Support",
    category: "Mining & Geology",
    desc: "Excavator positioning specialized rock drilling machinery along mineral quarry face for rock mass and structural assessment."
  },
  {
    src: "/images/jb-tech-07.jpg",
    title: "On-Site Engineering Crew Operating Drilling Mast",
    category: "Diamond Core Drilling",
    desc: "Experienced JB Tech drill crew hoisting drill rods and operating the rotary mast during deep subsurface exploratory coring."
  },
  {
    src: "/images/jb-tech-08.jpg",
    title: "Heavy Hydraulic Rig Setup & Project Inception",
    category: "Diamond Core Drilling",
    desc: "Mobilized hydraulic drilling unit set up on site, prepared for continuous diamond coring and stratum sampling."
  },
  {
    src: "/images/jb-tech-09.jpg",
    title: "Field Geologist Logging Borehole & Strata Data",
    category: "Site Surveys & Boreholes",
    desc: "Technical staff actively recording drill depth, penetration rates, and lithological characteristics on site."
  },
  {
    src: "/images/jb-tech-10.jpg",
    title: "Heavy-Duty Truck-Mounted Rotary Core Drilling Rig",
    category: "Diamond Core Drilling",
    desc: "High-capacity mobile rotary core drilling machine with hydraulic feed and heavy chuck assembly for deep mineral exploration."
  },
  {
    src: "/images/jb-tech-11.jpg",
    title: "Precision Extracted Cylindrical Rock & Mineral Cores",
    category: "Mining & Geology",
    desc: "Solid granite and mineral core samples with high recovery ratio retrieved for laboratory unconfined compressive strength testing."
  }
];

export const businessInfo = {
  name: "JB TECH CONSULTANTS",
  legalName: "JB Tech Consultants",
  leadPerson: "Niranjan Suthar",
  role: "Lead Consultant & Technical Director",
  phone: "+91 7728053323",
  phoneDisplay: "+91 7728053323",
  phoneRaw: "917728053323",
  address: "MP Setu Marg, Basant Nagar, Krishna Nagar, Chittorgarh, Rajasthan – 312001",
  addressShort: "MP Setu Marg, Basant Nagar, Chittorgarh",
  landmark: "Near JB Plywood & Hardware, opposite Bharat Bagh, Krishna Nagar",
  city: "Chittorgarh",
  state: "Rajasthan",
  pincode: "312001",
  country: "India",
  mapsUrl: "https://maps.app.goo.gl/EpYLHGk3XWV8uBSZ7?g_st=ac",
  waUrl: "https://wa.me/917728053323",
  hours: "Monday – Saturday: 9:00 AM – 7:30 PM (Sunday by Appointment)",
  serviceRegions: [
    "Chittorgarh (Headquarters)",
    "Bhilwara",
    "Udaipur",
    "Kota",
    "Rajsamand",
    "Nimbahera",
    "Pratapgarh",
    "Across Rajasthan"
  ]
};

export function createWhatsAppUrl(service?: string, customNote?: string): string {
  let message = `Hello Mr. Niranjan Suthar (JB Tech Consultants),\n`;
  if (service) {
    message += `I am interested in your service: ${service}.\n`;
  } else {
    message += `I would like to enquire about your engineering consultancy & testing services.\n`;
  }
  if (customNote) {
    message += `Project details: ${customNote}\n`;
  }
  message += `Please share technical specifications, process, and quotation.`;
  return `https://wa.me/917728053323?text=${encodeURIComponent(message)}`;
}
