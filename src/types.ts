export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  altImages?: string[];
  shortDescription: string;
  description: string;
  dimensions: string;
  material: string;
  colors: string[];
  inStock: boolean;
  featured?: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living Room' | 'Bedroom' | 'Dining Area' | 'Office' | 'Modern Interiors';
  image: string;
  description: string;
  featuredPiece: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  purchasedItem: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  tag: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}
