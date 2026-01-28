// ==========================================
// SITE CONFIGURATION
// Fortino's Landscaping
// ==========================================

const CONFIG = {
  // ================================
  // BRAND IDENTITY
  // ================================
  brand: {
    name: "Fortino's Landscaping",
    companySlug: "fortinos-landscaping",
    tagline: "Professional Landscaping & Hardscaping",
    phone: "(408) 555-0123",
    phoneRaw: "4085550123",
    email: "info@fortinoslandscaping.com",
    address: "San Jose, CA",
    hours: "Mon-Sat: 7AM - 6PM",
    license: "Licensed • Insured",
    logo: "/assets/clients/active/logo.png",
    logoIcon: "leaf",
    yearEstablished: null,
  },

  // ================================
  // THEME & COLORS
  // ================================
  theme: {
    primaryColor: "#1a5c32",
    primaryDark: "#0f3d21",
    primaryLight: "#2a8c4a",
    accentColor: "#c9a227",
    accentDark: "#a68620",
    accentLight: "#e0c060",
    gold: "#c9a227",
    green: "#1a5c32",
    gradientPrimary: "#1a5c32",
    gradientAccent: "#c9a227",
    glassBg: "rgba(255, 255, 255, 1)",
    shadowSoft: "0 4px 20px rgba(0, 0, 0, 0.08)",
    shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
    shadowStrong: "0 15px 50px rgba(0, 0, 0, 0.15)",
  },

  // ================================
  // NAVIGATION
  // ================================
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Our Work", href: "our-work.html" },
    { label: "Services", type: "servicesDropdown" },
    { label: "Service Areas", type: "serviceAreasDropdown" },
    { label: "Contact", href: "contact.html" },
  ],

  // ================================
  // TOP BAR
  // ================================
  topBar: {
        emergencyText: "Professional Landscaping Services",
        showAddress: true,
        showHours: true,
        hours: "Mon-Sat: 7AM-6PM",
        phoneLabel: "Call Now - Free Estimate",
    },

    // ==========================================
    // PROMO BANNER
    // ==========================================
    promoBanner: {
        enabled: false,
        text: "",
        linkText: "",
        linkHref: "#quote",
    },

    // ==========================================
    // TRUST LOGOS - Certifications bar under nav
    // ==========================================
    trustLogos: {
        enabled: true,
        title: "Trusted & Certified",
        logos: [
            { name: "Google", rating: "5.0" },
            { name: "Yelp", rating: null },
            { name: "HomeAdvisor", rating: null },
            { name: "Angi", rating: null },
        ],
    },

    // ==========================================
    // SEO
    // ==========================================
    seo: {
        home: {
            title: "Fortino's Landscaping | San Jose, CA",
            description: "Professional landscaping and hardscaping services in San Jose, CA. Pavers, lawn care, planting, and outdoor design. Call for a free estimate.",
        },
        about: {
            title: "About Us | Fortino's Landscaping",
            description: "San Jose's trusted landscaping company. We bring professional design and installation to your outdoor spaces.",
        },
        services: {
            title: "Landscaping Services | Fortino's Landscaping San Jose",
            description: "Paver installation, lawn care, planting, hardscaping, and landscape design in San Jose and surrounding areas.",
        },
        contact: {
            title: "Contact | Fortino's Landscaping",
            description: "Get your landscaping project started today. Call for a free estimate or request a quote online.",
        },
        serviceArea: {
            title: "Service Areas | Fortino's Landscaping",
            description: "Landscaping services in San Jose, Santa Clara, Sunnyvale, Campbell, Los Gatos, and surrounding areas.",
        },
        ourWork: {
            title: "Our Work | Fortino's Landscaping",
            description: "See examples of our recent landscaping projects in San Jose. Pavers, lawns, planting beds, and outdoor transformations.",
        },
    },

    // ==========================================
    // IMAGES
    // ==========================================
    images: {
        basePath: "/assets/clients/active/",
        hero: "/assets/clients/active/hero.jpg",
        about: "/assets/clients/active/about.jpg",
        whyUs: "/assets/clients/active/why-us.jpg",
        contact: "/assets/clients/active/contact.jpg",
        
        services: {
            "pavers-hardscaping": "/assets/clients/active/services/pavers.jpg",
            "lawn-installation": "/assets/clients/active/services/lawn.jpg",
            "planting-design": "/assets/clients/active/services/planting.jpg",
            "landscape-design": "/assets/clients/active/services/design.jpg",
            "pool-landscaping": "/assets/clients/active/services/pool.jpg",
            "maintenance": "/assets/clients/active/services/maintenance.jpg",
        },
        
        gallery: {
            enabled: true,
            title: "Recent Work",
            subtitle: "Real projects completed for homeowners",
            items: [
                { src: "/assets/clients/active/projects/01.jpg", alt: "Paver walkway with topiaries" },
                { src: "/assets/clients/active/projects/02.jpg", alt: "Backyard lawn installation" },
                { src: "/assets/clients/active/projects/03.jpg", alt: "Paver pathway with shrubs" },
                { src: "/assets/clients/active/projects/04.jpg", alt: "Pool area landscaping" },
                { src: "/assets/clients/active/projects/05.jpg", alt: "Front yard planting bed" },
                { src: "/assets/clients/active/projects/06.jpg", alt: "Backyard with stepping stones" },
                { src: "/assets/clients/active/projects/07.jpg", alt: "Lawn and paver patio" },
                { src: "/assets/clients/active/projects/08.jpg", alt: "Tropical pool landscaping" },
                { src: "/assets/clients/active/projects/09.jpg", alt: "Shrub border installation" },
                { src: "/assets/clients/active/projects/10.jpg", alt: "Planting bed with topiaries" }
            ],
        },
        fallback: "/assets/clients/active/fallback.jpg"
    },


    // ==========================================
    // HERO
    // ==========================================
    hero: {
        label: "Landscaping Services",
        badge: "Licensed • Insured • Local",
        headline: "Professional Landscaping in",
        headlineAccent: "San Jose, CA",
        subhead: "Pavers, lawns, planting, and outdoor design — built to last and look great. Free estimates.",
        backgroundImage: "/assets/clients/active/hero.jpg",
        features: [
            "Free Estimates",
            "Quality Workmanship",
            "Satisfaction Guaranteed"
        ],
        trustStrip: {
            enabled: true,
            items: [
                "Licensed & Insured",
                "5.0 ★ Google Rating",
                "Free Estimates",
                "Satisfaction Guaranteed",
                "Serving San Jose Area"
            ]
        },
        guaranteeBadge: {
            enabled: false,
            text: "",
            subtext: "",
        },
        ctaPrimary: {
            text: "Request Estimate",
            href: "#quote",
        },
        ctaSecondary: {
            text: "Call Now",
            href: "tel:4085550123",
        },
    },

    // ==========================================
    // LEAD CAPTURE FORM
    // ==========================================
    form: {
        title: "Request an Estimate",
        subtitle: "Tell us about your project and we'll provide a free, no-obligation estimate.",
        formTitle: "Get Your Free Quote",
        formSubtitle: "No spam, no hassle — just honest pricing",
        responseBadge: "We Respond Within 24 Hours",
        phoneCtaLabel: "Prefer to talk? Call us now:",
        submitText: "Request Estimate",
        privacyText: "Your information is secure and never shared.",
        messagePlaceholder: "Describe your landscaping project (yard size, materials, timeline)...",
        consentText: "I agree to receive text messages and calls about my inquiry.",
        ghlWebhook: "https://services.leadconnectorhq.com/hooks/9PkCOSdzwRxdCM7u0n9A/webhook-trigger/679eb1bc-b34d-4f72-bad9-50157b5fbc8f",
        successMessage: "Thanks — we got it. We'll be in touch soon.",
        fields: [
            { name: "name", label: "Full Name", type: "text", placeholder: "John Smith", required: true },
            { name: "phone", label: "Phone Number", type: "tel", placeholder: "(408) 555-0123", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: false },
        ],
        showServiceDropdown: true,
        serviceOptions: [
            { value: "", label: "Select Service Needed" },
            { value: "pavers-hardscaping", label: "Pavers & Hardscaping" },
            { value: "lawn-installation", label: "Lawn Installation" },
            { value: "planting-design", label: "Planting & Design" },
            { value: "landscape-design", label: "Landscape Design" },
            { value: "pool-landscaping", label: "Pool Area Landscaping" },
            { value: "maintenance", label: "Landscape Maintenance" },
            { value: "other", label: "Other / Not Sure" },
        ],
        features: [
            "Free Estimates",
            "Quality Materials",
            "No Obligation",
            "Licensed & Insured"
        ],
    },

    // ==========================================
    // TRUST BADGES
    // ==========================================
    trustBadges: [
        { icon: "leaf", text: "Professional Design" },
        { icon: "star", text: "5 Star Rated" },
        { icon: "clock", text: "On-Time Service" },
        { icon: "check", text: "Satisfaction Guaranteed" },
    ],

    // ==========================================
    // SERVICES
    // ==========================================
    services: {
        title: "Our Services",
        subtitle: "Professional landscaping and hardscaping for your home",
        viewAllText: "View All Services",
        viewAllLink: "services.html",
        learnMoreText: "Learn More",
        items: [
            {
                id: "pavers-hardscaping",
                title: "Pavers & Hardscaping",
                shortDesc: "Walkways, patios, driveways, and retaining walls.",
                fullDesc: "Professional paver installation for walkways, patios, driveways, and outdoor living spaces. We use quality materials and proper base preparation for long-lasting results.",
                icon: "hammer",
                image: "/assets/clients/active/services/pavers.jpg",
                features: [
                    "Paver Walkways",
                    "Patios & Driveways",
                    "Retaining Walls",
                    "Proper Drainage"
                ],
            },
            {
                id: "lawn-installation",
                title: "Lawn Installation",
                shortDesc: "Sod, seed, and artificial turf installation.",
                fullDesc: "Complete lawn installation including soil prep, grading, and sod or seed installation. We also offer artificial turf for low-maintenance alternatives.",
                icon: "home",
                image: "/assets/clients/active/services/lawn.jpg",
                features: [
                    "Sod Installation",
                    "Seeding",
                    "Artificial Turf",
                    "Soil Preparation"
                ],
            },
            {
                id: "planting-design",
                title: "Planting & Design",
                shortDesc: "Trees, shrubs, flowers, and planting beds.",
                fullDesc: "Professional planting services including trees, shrubs, perennials, and seasonal flowers. We design beds that look great and thrive in our climate.",
                icon: "leaf",
                image: "/assets/clients/active/services/planting.jpg",
                features: [
                    "Trees & Shrubs",
                    "Flower Beds",
                    "Topiaries",
                    "Mulch & Groundcover"
                ],
            },
            {
                id: "landscape-design",
                title: "Landscape Design",
                shortDesc: "Custom outdoor designs for your property.",
                fullDesc: "Full landscape design services to transform your outdoor space. We create plans that work with your property, budget, and lifestyle.",
                icon: "toolbox",
                image: "/assets/clients/active/services/design.jpg",
                features: [
                    "Custom Designs",
                    "3D Renderings",
                    "Plant Selection",
                    "Budget Planning"
                ],
            },
            {
                id: "pool-landscaping",
                title: "Pool Area Landscaping",
                shortDesc: "Beautiful surroundings for your pool area.",
                fullDesc: "Specialized landscaping for pool areas including tropical plants, pavers, privacy screening, and low-maintenance designs that complement your outdoor oasis.",
                icon: "wrench",
                image: "/assets/clients/active/services/pool.jpg",
                features: [
                    "Tropical Plants",
                    "Pool Deck Pavers",
                    "Privacy Screening",
                    "Low Maintenance"
                ],
            },
            {
                id: "maintenance",
                title: "Landscape Maintenance",
                shortDesc: "Keep your landscape looking its best.",
                fullDesc: "Regular maintenance services to keep your landscape healthy and beautiful. Mowing, trimming, pruning, and seasonal cleanups.",
                icon: "check-circle",
                image: "/assets/clients/active/services/maintenance.jpg",
                features: [
                    "Lawn Mowing",
                    "Hedge Trimming",
                    "Pruning",
                    "Seasonal Cleanup"
                ],
            }
        ]
    },

    // ==========================================
    // PROCESS / HOW IT WORKS
    // ==========================================
    process: {
        label: "How It Works",
        title: "Simple & Easy Process",
        steps: [
            {
                number: "1",
                title: "Request a Quote",
                desc: "Fill out our quick form or give us a call to schedule a consultation.",
            },
            {
                number: "2", 
                title: "On-Site Consultation",
                desc: "We visit your property, discuss your vision, and provide a detailed estimate.",
            },
            {
                number: "3",
                title: "Enjoy Your Landscape",
                desc: "Our team completes the work and you enjoy your transformed outdoor space.",
            },
        ],
    },

    // ==========================================
    // WHY CHOOSE US
    // ==========================================
    whyUs: {
        title: "Why Choose Fortino's Landscaping",
        subtitle: "We bring professional landscaping and hardscaping to your property. Quality work, fair pricing.",
        image: null,
        items: [
            {
                icon: "leaf",
                title: "Professional Design",
                description: "Expert landscape design that enhances your property and fits your lifestyle.",
            },
            {
                icon: "star",
                title: "5 Star Rated",
                description: "Our customers love the results we deliver. Quality work speaks for itself.",
            },
            {
                icon: "clock",
                title: "On-Time Service",
                description: "We show up when we say we will and complete projects on schedule.",
            },
            {
                icon: "check",
                title: "Satisfaction Guaranteed",
                description: "Not happy with the results? We'll make it right. That's our promise.",
            },
        ],
    },

    // ==========================================
    // OUR WORK / GALLERY
    // ==========================================
    ourWork: {
        label: "Our Work",
        title: "Recent Projects",
        subtitle: "See the quality and care we bring to every job.",
        images: [
            { src: "/assets/clients/active/projects/01.jpg", alt: "Paver walkway with topiaries" },
            { src: "/assets/clients/active/projects/02.jpg", alt: "Backyard lawn installation" },
            { src: "/assets/clients/active/projects/03.jpg", alt: "Paver pathway with shrubs" },
            { src: "/assets/clients/active/projects/04.jpg", alt: "Pool area landscaping" },
            { src: "/assets/clients/active/projects/05.jpg", alt: "Front yard planting bed" },
            { src: "/assets/clients/active/projects/06.jpg", alt: "Backyard with stepping stones" },
            { src: "/assets/clients/active/projects/07.jpg", alt: "Lawn and paver patio" },
            { src: "/assets/clients/active/projects/08.jpg", alt: "Tropical pool landscaping" },
            { src: "/assets/clients/active/projects/09.jpg", alt: "Shrub border installation" },
            { src: "/assets/clients/active/projects/10.jpg", alt: "Planting bed with topiaries" },
        ],
    },

    // ==========================================
    // STATISTICS
    // ==========================================
    stats: [
        { value: "Licensed", label: "& Insured" },
        { value: "Free", label: "Estimates" },
        { value: "Quality", label: "Materials" },
        { value: "100%", label: "Satisfaction" }
    ],

    // ==========================================
    // REVIEWS
    // ==========================================
    reviews: {
        title: "What Our Customers Say",
        subtitle: "Real reviews from real customers",
        google: {
            enabled: true,
            rating: 5.0,
            reviewCount: 25,
        },
        items: [
            {
                text: "Great work on our backyard pavers. Clean installation and the crew was professional.",
                author: "Mike T.",
                location: "San Jose, CA",
                rating: 5,
                avatar: null,
            },
            {
                text: "They transformed our front yard completely. Love the new lawn and planting beds.",
                author: "Jennifer L.",
                location: "Santa Clara, CA",
                rating: 5,
                avatar: null,
            },
            {
                text: "Professional from start to finish. Fair pricing and quality work.",
                author: "David R.",
                location: "Campbell, CA",
                rating: 5,
                avatar: null,
            }
        ],
    },

    // ==========================================
    // CTA SECTION
    // ==========================================
    cta: {
        title: "Ready to Get Started?",
        subtitle: "Get a free estimate for your landscaping project today.",
        buttonText: "Get Free Quote",
        buttonLink: "contact.html",
        showPhone: true,
    },

    // ==========================================
    // FAQ
    // ==========================================
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Got questions? We've got answers.",
        items: [
            {
                question: "How do I request an estimate?",
                answer: "Fill out our quick online form or call us directly. We'll schedule a time to visit your property and provide a detailed estimate.",
            },
            {
                question: "How long does a typical project take?",
                answer: "Timeline depends on project scope. Small planting jobs may take 1-2 days, while full landscape installations can take 1-2 weeks. We'll give you a timeline upfront.",
            },
            {
                question: "What areas do you serve?",
                answer: "We serve San Jose and surrounding areas including Santa Clara, Sunnyvale, Campbell, Los Gatos, Cupertino, and Milpitas. Contact us to confirm service in your area.",
            },
            {
                question: "Do you offer maintenance services?",
                answer: "Yes, we offer ongoing landscape maintenance to keep your property looking its best year-round.",
            },
            {
                question: "What forms of payment do you accept?",
                answer: "We accept cash, checks, and all major credit cards for your convenience.",
            },
        ],
    },

    // ==========================================
    // FOOTER
    // ==========================================
    footer: {
        description: "Professional landscaping and hardscaping services in San Jose, CA. Quality outdoor transformations.",
        copyrightYear: new Date().getFullYear(),
        quickLinksTitle: "Quick Links",
        quickLinks: [
            { label: "Home", href: "index.html" },
            { label: "Our Work", href: "our-work.html" },
            { label: "Services", href: "services.html" },
            { label: "Service Areas", href: "service-area.html" },
            { label: "Contact", href: "contact.html" },
        ],
        contactTitle: "Contact Us",
        socialTitle: "Follow Us",
        socialLinks: [
            { platform: "facebook", url: "#", icon: "facebook" },
            { platform: "instagram", url: "#", icon: "instagram" },
            { platform: "google", url: "#", icon: "google" },
        ],
    },

    // ==========================================
    // ABOUT PAGE
    // ==========================================
    about: {
        title: "About Fortino's Landscaping",
        subtitle: "Professional landscaping services in San Jose, CA",
        story: {
            title: "Our Story",
            image: null,
            paragraphs: [
                "Fortino's Landscaping provides professional landscaping and hardscaping services to homeowners in the San Jose area.",
                "We specialize in paver installations, lawn care, planting design, and complete landscape transformations. Our team takes pride in quality workmanship and attention to detail.",
                "From small planting projects to full backyard renovations, we bring the same level of care and professionalism to every job.",
            ],
        },
        values: {
            title: "Why We're Different",
            subtitle: "What sets Fortino's Landscaping apart",
            items: [
                {
                    icon: "leaf",
                    title: "Quality Work",
                    description: "Professional installation using quality materials for lasting results.",
                },
                {
                    icon: "star",
                    title: "Attention to Detail",
                    description: "We take pride in the details that make your landscape stand out.",
                },
                {
                    icon: "check",
                    title: "Customer Focused",
                    description: "Your satisfaction is our priority. We work with you every step of the way.",
                },
            ],
        },
        team: {
            title: "Meet Our Team",
            subtitle: "The experts behind our exceptional service",
            showTeam: false,
            members: [],
        },
    },

    // ==========================================
    // CONTACT PAGE
    // ==========================================
    contact: {
        title: "Contact Us",
        subtitle: "Ready to get your project started? Get in touch!",
        showMap: true,
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202406.7225658266!2d-122.0016315!3d37.3382082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus",
        infoTitle: "Get In Touch",
        infoSubtitle: "Have questions? We'd love to hear from you.",
        hoursTitle: "Business Hours",
        hours: [
            { days: "Monday - Friday", time: "7:00 AM - 6:00 PM" },
            { days: "Saturday", time: "7:00 AM - 6:00 PM" },
            { days: "Sunday", time: "Closed" },
        ],
        emergencyNote: "Call or text anytime for scheduling",
        formTitle: "Request a Quote",
        formSubtitle: "We'll get back to you within 24 hours",
        formFields: [
            { name: "name", type: "text", placeholder: "Your Name", required: true, halfWidth: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true, halfWidth: true },
            { name: "email", type: "email", placeholder: "Email Address", required: false, halfWidth: false },
            { name: "address", type: "text", placeholder: "Service Address", required: false, halfWidth: false },
            { name: "message", type: "textarea", placeholder: "Describe your landscaping project...", required: false, halfWidth: false, rows: 4 },
        ],
        formSubmitText: "Request Quote",
    },

    // ==========================================
    // SERVICE AREA PAGE
    // ==========================================
    serviceArea: {
        title: "Areas We Serve",
        subtitle: "Landscaping services throughout San Jose and surrounding areas",
        description: "We provide professional landscaping services throughout the San Jose area and surrounding communities. If you don't see your area listed, give us a call—we may still be able to help!",
        showMap: true,
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202406.7225658266!2d-122.0016315!3d37.3382082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus",
        primaryAreas: {
            title: "Primary Service Areas",
            subtitle: "Full service available",
            areas: [
                "San Jose",
                "Santa Clara",
                "Sunnyvale",
                "Campbell",
                "Cupertino",
            ],
        },
        secondaryAreas: {
            title: "Extended Service Areas",
            subtitle: "Service available with advance scheduling",
            areas: [
                "Los Gatos",
                "Milpitas",
                "Mountain View",
                "Saratoga",
                "Los Altos",
            ],
        },
        ctaTitle: "Not Sure If We Service Your Area?",
        ctaSubtitle: "Give us a call and we'll let you know!",
    },

    // ==========================================
    // INDIVIDUAL SERVICE AREA PAGES
    // ==========================================
    serviceAreas: [
        {
            id: "san-jose",
            name: "San Jose",
            slug: "san-jose",
            headline: "Landscaping Services in San Jose, CA",
            description: "Professional landscaping and hardscaping services in San Jose. Pavers, lawns, planting, and complete landscape design.",
            features: [
                "Free estimates",
                "Quality workmanship",
                "Licensed & insured",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Willow Glen",
                "Almaden Valley",
                "Rose Garden",
                "Evergreen",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=San+Jose,+CA&output=embed",
        },
        {
            id: "santa-clara",
            name: "Santa Clara",
            slug: "santa-clara",
            headline: "Landscaping Services in Santa Clara, CA",
            description: "Professional landscaping services in Santa Clara. From pavers to planting, we transform outdoor spaces.",
            features: [
                "Free estimates",
                "On-time service",
                "Quality materials",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Old Quad",
                "Rivermark",
                "Scott Park",
                "Homestead",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Santa+Clara,+CA&output=embed",
        },
        {
            id: "sunnyvale",
            name: "Sunnyvale",
            slug: "sunnyvale",
            headline: "Landscaping Services in Sunnyvale, CA",
            description: "Trusted landscaping services in Sunnyvale for pavers, lawns, planting, and outdoor design.",
            features: [
                "Free estimates",
                "Professional design",
                "Quality installation",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Downtown Sunnyvale",
                "Cherry Chase",
                "Ponderosa",
                "Lakewood",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Sunnyvale,+CA&output=embed",
        },
        {
            id: "campbell",
            name: "Campbell",
            slug: "campbell",
            headline: "Landscaping Services in Campbell, CA",
            description: "Local landscaping help in Campbell for pavers, lawns, and outdoor transformations.",
            features: [
                "Free estimates",
                "Licensed & insured",
                "Professional crews",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Downtown Campbell",
                "San Tomas",
                "Pruneyard",
                "West Campbell",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Campbell,+CA&output=embed",
        },
        {
            id: "cupertino",
            name: "Cupertino",
            slug: "cupertino",
            headline: "Landscaping Services in Cupertino, CA",
            description: "Professional landscaping services in Cupertino. Pavers, planting, and complete landscape design.",
            features: [
                "Free estimates",
                "Quality materials",
                "Attention to detail",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Rancho Rinconada",
                "Monta Vista",
                "Garden Gate",
                "Oak Valley",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Cupertino,+CA&output=embed",
        },
        {
            id: "los-gatos",
            name: "Los Gatos",
            slug: "los-gatos",
            headline: "Landscaping Services in Los Gatos, CA",
            description: "Premium landscaping services in Los Gatos. Custom designs, quality installation, and attention to detail.",
            features: [
                "Free estimates",
                "Custom designs",
                "Quality workmanship",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Downtown Los Gatos",
                "Blossom Hill",
                "Shannon",
                "Belgatos",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Los+Gatos,+CA&output=embed",
        }
    ],

    // ==========================================
    // UI TEXT
    // ==========================================
    ui: {
        callNow: "Call Now",
        callNowShort: "Call Now",
        freeQuoteShort: "Free Quote",
        phoneLabel: "Call Now - Free Estimate",
        getQuote: "Get Quote",
        learnMore: "Learn More",
        viewAll: "View All",
        readMore: "Read More",
        submitForm: "Submit",
        loading: "Loading...",
        success: "Success!",
        error: "Something went wrong. Please try again.",
        required: "Required",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        followUs: "Follow Us",
        allRightsReserved: "All rights reserved.",
        emergencyService: "Professional Service",
        freeEstimate: "Free Estimate",
        satisfactionGuarantee: "Satisfaction Guaranteed"
    }
};

// Make CONFIG globally available
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
