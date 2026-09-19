import { Category, Product, GalleryItem, Testimonial, BlogPost } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'sofas',
    name: 'Sofas',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    itemCount: 24,
    description: 'Cloud-soft comfort wrapped in bouclé, textured linen, and Italian top-grain leather.'
  },
  {
    id: 'beds',
    name: 'Beds',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    itemCount: 18,
    description: 'Serene platform beds and upholstered headboards designed for restorative slumber.'
  },
  {
    id: 'dining-tables',
    name: 'Dining Tables',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    itemCount: 16,
    description: 'Solid travertine stone, walnut, and warm oak centerpieces for lingering dinners.'
  },
  {
    id: 'chairs',
    name: 'Chairs',
    image: 'https://images.unsplash.com/photo-1580481077190-7361296dd02f?auto=format&fit=crop&w=800&q=80',
    itemCount: 32,
    description: 'Sculptural lounge chairs, curved armchairs, and ergonomic minimalist dining seats.'
  },
  {
    id: 'wardrobes',
    name: 'Wardrobes',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    itemCount: 14,
    description: 'Architectural fluted wood wardrobes and modular closet cabinetry.'
  },
  {
    id: 'tv-units',
    name: 'TV Units',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    itemCount: 12,
    description: 'Low-profile media consoles with brass hardware and cable management.'
  },
  {
    id: 'office-furniture',
    name: 'Office Furniture',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    itemCount: 19,
    description: 'Executive walnut desks, leather task seating, and tailored shelving suites.'
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    itemCount: 45,
    description: 'Ceramic vessels, warm alabaster table lamps, organic wool rugs, and mirrors.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'Aura Curved Bouclé Sofa',
    category: 'sofas',
    price: 149000,
    originalPrice: 185000,
    rating: 4.9,
    reviewCount: 48,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Organic crescent silhouette wrapped in tactile cream bouclé with down-fill cushions.',
    description: 'The Aura Curved Sofa brings fluid architectural poetry into modern living spaces. Handcrafted with kiln-dried FSC-certified hardwood, reinforced corner blocks, and multi-layer high-resiliency foam capped with organic goose-down blend for lasting resilience and cloud-like comfort.',
    dimensions: '94"W × 42"D × 31"H (Seat Height: 18")',
    material: 'Cream Ivory Bouclé / Solid Oak Internal Frame / Brass Plinth',
    colors: ['#F5EFEB', '#D8C9BC', '#3D2E28'],
    inStock: true,
    featured: true,
    badge: 'Best Seller'
  },
  {
    id: 'p-2',
    name: 'Elysian Walnut Floating Bed',
    category: 'beds',
    price: 169000,
    originalPrice: 205000,
    rating: 5.0,
    reviewCount: 36,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Minimalist platform bed crafted from solid American walnut with integrated night ledges.',
    description: 'The Elysian Bed appears to hover effortlessly above your floorboards, anchored by an inset cantilevered base. Includes an extended angled headboard in oiled walnut with hidden cable pass-throughs.',
    dimensions: 'King: 88"W × 92"L × 38"H (Platform Height: 11")',
    material: 'Solid American Walnut / Natural Hardwax Oil / Heavy-gauge Steel Brackets',
    colors: ['#3D2E28', '#C4B5A5', '#FAF7F2'],
    inStock: true,
    featured: true,
    badge: 'Staff Pick'
  },
  {
    id: 'p-3',
    name: 'Siena Fluted Travertine Dining Table',
    category: 'dining-tables',
    price: 195000,
    originalPrice: 245000,
    rating: 4.8,
    reviewCount: 29,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Monolithic oval tabletop in warm Roman travertine resting on dual fluted stone pedestals.',
    description: 'Mined from historic Italian quarries, each Siena table showcases unique earthen veining, subtle cavernous apertures, and a honed silky matte finish sealed against everyday dining spills.',
    dimensions: '86"L × 44"W × 30"H (Comfortably seats 8)',
    material: 'Roman Travertine Stone / Fluted Cylindrical Bases',
    colors: ['#FAF7F2', '#E8DFD8'],
    inStock: true,
    featured: true,
    badge: '30% Off'
  },
  {
    id: 'p-4',
    name: 'Brutalist Nordic Lounge Chair',
    category: 'chairs',
    price: 59000,
    originalPrice: 75000,
    rating: 4.9,
    reviewCount: 52,
    image: 'https://images.unsplash.com/photo-1580481077190-7361296dd02f?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Generous ergonomic seat wrapped in buttery saddle-leather on a solid ashwood geometry.',
    description: 'An homage to mid-century Scandinavian simplicity, the Brutalist Nordic Lounge chair strikes a balance between striking silhouette and plush ergonomic lumbar support.',
    dimensions: '32"W × 34"D × 29"H',
    material: 'Cognac Full-Grain Leather / Smoked Ashwood / Brass Fasteners',
    colors: ['#A06235', '#2C221E', '#E8DFD8'],
    inStock: true,
    featured: true,
    badge: 'New Arrival'
  },
  {
    id: 'p-5',
    name: 'Lumière Linear Oak Media Console',
    category: 'tv-units',
    price: 98000,
    originalPrice: 125000,
    rating: 4.7,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Slatted tambour sliding doors in blonde white oak with brushed champagne gold hardware.',
    description: 'Designed for discrete acoustic transparency, the Lumière console lets remote signals pass through seamlessly while concealing entertainment electronics and soundbars.',
    dimensions: '74"W × 19"D × 22"H',
    material: 'Solid White Oak / Slatted Tambour / Champagne Gold Metal Feet',
    colors: ['#E8DFD8', '#3D2E28'],
    inStock: true,
    featured: false
  },
  {
    id: 'p-6',
    name: 'Atelier Solid Walnut Executive Desk',
    category: 'office-furniture',
    price: 129000,
    originalPrice: 155000,
    rating: 4.9,
    reviewCount: 31,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Spacious workspace featuring soft chamfered edges, dual soft-close drawers, and leather inlay.',
    description: 'Created for creative focus and executive presence. Built from sustainable North American walnut with hand-rubbed Danish oil finish and an integrated cable trough.',
    dimensions: '66"W × 30"D × 30"H',
    material: 'Solid Black Walnut / Vegetable-tanned Leather Writing Pad',
    colors: ['#3D2E28', '#2C221E'],
    inStock: true,
    featured: true
  },
  {
    id: 'p-7',
    name: 'Vanguard Fluted 4-Door Wardrobe',
    category: 'wardrobes',
    price: 225000,
    originalPrice: 269000,
    rating: 4.8,
    reviewCount: 19,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Subtle fluted door profiles, soft-touch interior illumination, and solid brass slender pulls.',
    description: 'Transform bedroom organization into architectural art. Configured with dual hanging rails, five adjustable shelves, and velvety jewelry drawers.',
    dimensions: '82"W × 24"D × 88"H',
    material: 'Warm Taupe Lacquer / Ribbed Ash / Warm Gold Accents',
    colors: ['#E8DFD8', '#FAF7F2', '#3D2E28'],
    inStock: true,
    featured: false
  },
  {
    id: 'p-8',
    name: 'Alabaster Column Floor Lamp',
    category: 'home-decor',
    price: 36000,
    originalPrice: 45000,
    rating: 4.9,
    reviewCount: 41,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Spanish carved alabaster cylinder casting an ethereal, warm ambient glow.',
    description: 'Each piece of natural Spanish alabaster exhibits one-of-a-kind mineral crystallization. Paired with dimmable warm 2700K LED core and satin brass hardware.',
    dimensions: '10" Dia × 56"H',
    material: 'Natural Spanish Alabaster / Satin Brushed Brass',
    colors: ['#FAF7F2', '#C5A059'],
    inStock: true,
    featured: true,
    badge: 'Popular'
  },
  {
    id: 'p-9',
    name: 'Palermo Italian Velvet Sectional',
    category: 'sofas',
    price: 249000,
    originalPrice: 299000,
    rating: 5.0,
    reviewCount: 64,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Deep modular lounge sectional upholstered in stain-resistant espresso velvet.',
    description: 'An entertainer’s dream. Reversible chaise configuration with memory-foam core wrapped in hypoallergenic micro-fiber fill and ultra-plush velvet sheen.',
    dimensions: '120"W × 68"D × 32"H',
    material: 'Italian Cotton-Blend Velvet / Hardwood Frame',
    colors: ['#3D2E28', '#2C221E', '#D8C9BC'],
    inStock: true,
    featured: false
  },
  {
    id: 'p-10',
    name: 'Kyoto Woven Rattan Dining Chairs (Set of 2)',
    category: 'chairs',
    price: 48000,
    originalPrice: 59000,
    rating: 4.8,
    reviewCount: 38,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1580481077190-7361296dd02f?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Hand-woven French cane weave backrest cradled in steamed bentwood walnut frame.',
    description: 'Lightweight yet incredibly sturdy, the Kyoto chairs blend timeless coastal mid-century charm with effortless everyday dining ergonomics.',
    dimensions: '21"W × 22"D × 32"H (Seat Height: 18.5")',
    material: 'Solid Indonesian Rattan / Steamed Beechwood / Linen Seat Cushion',
    colors: ['#D8C9BC', '#3D2E28'],
    inStock: true,
    featured: false
  },
  {
    id: 'p-11',
    name: 'Solarium Ribbed Ceramic Table Lamp',
    category: 'home-decor',
    price: 18500,
    originalPrice: 24000,
    rating: 4.9,
    reviewCount: 27,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Matte chalk ceramic base with a coarse natural linen empire drum shade.',
    description: 'Wheel-thrown artisanal form finished in a chalky sand glaze. Warm rotary switch with brass hardware accents.',
    dimensions: '14" Dia × 22"H',
    material: 'Textured Stoneware Ceramic / Natural Belgian Linen',
    colors: ['#FAF7F2', '#D8C9BC'],
    inStock: true,
    featured: false
  },
  {
    id: 'p-12',
    name: 'Arles Bouclé Upholstered Bedstead',
    category: 'beds',
    price: 155000,
    originalPrice: 189000,
    rating: 4.9,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80',
    altImages: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'Soft pillow-back headboard upholstered in high-density, stain-resistant vanilla bouclé.',
    description: 'Designed as a sanctuary for reading and restful sleep, with an all-around padded chassis and hidden solid pine support slats.',
    dimensions: 'Queen: 68"W × 88"L × 44"H',
    material: 'Warm Vanilla Bouclé / Solid Pine Slats / Matte Gold Legs',
    colors: ['#FAF7F2', '#E8DFD8', '#C4B5A5'],
    inStock: true,
    featured: false,
    badge: 'Trending'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Sun-Drenched Minimalist Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'Featuring our Aura Curved Bouclé Sofa paired with organic travertine coffee tables and warm linen drapes.',
    featuredPiece: 'Aura Curved Bouclé Sofa'
  },
  {
    id: 'g-2',
    title: 'Warm Sanctuary Master Bedroom',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    description: 'The Elysian Walnut Bed creates a floating focal point amidst limewash walls and wool textiles.',
    featuredPiece: 'Elysian Walnut Floating Bed'
  },
  {
    id: 'g-3',
    title: 'Architectural Stone Dining Haven',
    category: 'Dining Area',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    description: 'The Siena Fluted Table paired with Kyoto Woven Rattan Chairs for warm communal gatherings.',
    featuredPiece: 'Siena Travertine Table'
  },
  {
    id: 'g-4',
    title: 'Modern Executive Workspace',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    description: 'Quiet contemplation in the Atelier Walnut Executive Desk surrounded by modular shelving.',
    featuredPiece: 'Atelier Executive Desk'
  },
  {
    id: 'g-5',
    title: 'Curated Sculptural Lounge Corner',
    category: 'Modern Interiors',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    description: 'Nordic armchairs, organic ceramic plinths, and warm alabaster ambient floor illumination.',
    featuredPiece: 'Nordic Lounge Chair'
  },
  {
    id: 'g-6',
    title: 'Open-Concept Neutral Great Room',
    category: 'Modern Interiors',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Harmonious integration of walnut cabinetry, textured cream sofas, and large-format art.',
    featuredPiece: 'Palermo Sectional Suite'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Elena Vance',
    role: 'Interior Designer',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    text: 'CasaCraft transformed our entire penthouse project. The craftsmanship of the travertine dining table and the curved bouclé sofa is indistinguishable from European heritage ateliers costing four times as much.',
    purchasedItem: 'Aura Curved Bouclé Sofa & Siena Table'
  },
  {
    id: 't-2',
    name: 'Marcus Sterling',
    role: 'Architectural Partner',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    text: 'The Elysian floating bed is a marvel of joinery. Zero creaks, flawless grain alignment, and delivery was executed with immaculate white-glove assembly. It makes walking into the bedroom feel like a boutique hotel.',
    purchasedItem: 'Elysian Walnut Floating Bed'
  },
  {
    id: 't-3',
    name: 'Sophia Chen',
    role: 'Art Director',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    text: 'From the tactile fabric samples to the final delivery, CasaCraft sets a gold standard. The warm cream and muted brass tones anchor our modern home with so much character and soul.',
    purchasedItem: 'Brutalist Nordic Lounge Chair'
  },
  {
    id: 't-4',
    name: 'David Reynolds',
    role: 'Residential Architect',
    location: 'Denver, CO',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    text: 'Unmatched proportion and balance. CasaCraft understands how furniture interacts with natural daylight and spatial rhythm. The solid wood finishes are smooth as silk.',
    purchasedItem: 'Atelier Executive Desk Suite'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b-1',
    title: 'How to Choose the Perfect Sofa for Everyday Luxury',
    excerpt: 'Navigate seat depth, frame construction, and bouclé vs. linen performance to invest in a centerpiece that elevates your lifestyle.',
    content: [
      'A sofa is the undisputed anchor of your home—it is where conversations linger, where evening rituals unfold, and where your design aesthetic takes physical form.',
      '1. Frame Integrity First: Look for kiln-dried FSC-certified hardwoods with double-doweled and corner-blocked joints. This prevents warping and ensures decades of structural silence.',
      '2. The Golden Ratio of Seat Depth: For formal entertaining, a 36-38 inch depth provides poised posture. For relaxed lounging, seek 42-44 inches with multi-density foam and goose-down crowns.',
      '3. Tactile Materials: Textured bouclé and brushed Belgian linens invite touch. Ensure performance coatings are woven into the yarn rather than sprayed on top.'
    ],
    author: 'Clara Moreau',
    authorRole: 'Head of Interior Styling',
    date: 'March 12, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    tag: 'Living Room'
  },
  {
    id: 'b-2',
    title: '5 Ideas for a Modern Living Room That Exudes Warmth',
    excerpt: 'Move away from cold sterile minimalism. Discover how warm woods, tactile bouclés, and sculptural lighting create an inviting haven.',
    content: [
      'Modernism has entered a warmer, more humane chapter. Gone are stark clinical whites and glossy chrome; in their place is the tactile embrace of earthen textures and low-contrast palettes.',
      '1. Embrace Low Slung Profiles: Lowering visual height fosters relaxation and highlights the architecture of the room.',
      '2. Mix Curvature with Linear Forms: If your sofa features soft crescent curves, ground it with a monolithic geometric stone coffee table.',
      '3. The Rule of 3 Lighting Temperatures: Combine overhead concealed dimmable architectural cove light, eye-level alabaster sconces, and low floor lamps at 2700K Kelvin.',
      '4. Celebrate Negative Space: Resist the urge to fill every perimeter. Space around furniture gives your signature pieces room to breathe.',
      '5. Organic Earth Accents: Introduce handmade ceramic vessels, dried botanical branches, and natural travertine stone.'
    ],
    author: 'Julian Thorne',
    authorRole: 'Architectural Historian',
    date: 'March 04, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
    tag: 'Design Guide'
  },
  {
    id: 'b-3',
    title: 'Furniture Trends for Modern Homes: Timeless Over Trendy',
    excerpt: 'An exploration of fluted wood, monolithic travertine pedestals, and quiet luxury tailoring defining contemporary interior design.',
    content: [
      'The modern home is transitioning toward an heirloom mentality. Discerning homeowners are trading fast consumer pieces for enduring artisanal honesty.',
      '1. Fluted & Tambour Details: Subtle vertical ribbing adds rhythm and depth to cabinetry without visual clutter.',
      '2. Monolithic Natural Stones: Roman travertine and honed Calacatta Viola are emerging as sculptural statement materials in dining and coffee tables.',
      '3. Tactile Neutrals: Cream, taupe, camel, and espresso are replacing cool greys, establishing calming sanctuary environments.',
      '4. Honest Joinery: Visible bridle joints, through-tenons, and solid brass dowels celebrate the craft of the woodworker.'
    ],
    author: 'Seraphina Lin',
    authorRole: 'Trend & Materials Curator',
    date: 'February 22, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80',
    tag: 'Trends'
  }
];
