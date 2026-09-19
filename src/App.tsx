import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { SpecialSection } from './components/SpecialSection';
import { OffersBanner } from './components/OffersBanner';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BlogModal } from './components/BlogModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';

import {
  CATEGORIES,
  PRODUCTS,
  GALLERY_ITEMS,
  TESTIMONIALS,
  BLOG_POSTS
} from './data/furnitureData';
import { Product, BlogPost, CartItem } from './types';
import { Check } from 'lucide-react';
import { trackAddToCart } from './utils/analytics';

export default function App() {
  // Cart state with localStorage persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('casacraft_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('casacraft_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Cart total count
  const cartTotalCount = cart.reduce((total, item) => total + item.quantity, 0);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add to cart
  const handleAddToCart = (product: Product, quantity: number = 1, selectedColor?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [...prev, { product, quantity, selectedColor }];
      }
    });
    trackAddToCart(product.name, product.category, product.price, quantity);
    showToast(`Added "${product.name}" to your cart.`);
  };

  // Update quantity
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove item
  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Clear cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Scroll helpers
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E] selection:bg-[#C5A059] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="app-toast-notification"
          className="fixed top-20 right-6 z-50 bg-[#2C221E] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-[#C5A059]/40 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="w-5 h-5 rounded-full bg-[#C5A059] text-[#2C221E] flex items-center justify-center">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span className="text-xs font-medium">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-xs text-[#C5A059] font-bold underline ml-2 hover:text-white transition-colors"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Sticky Navigation */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q) {
            scrollToSection('furniture');
          }
        }}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('furniture');
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplore={() => scrollToSection('categories')}
          onShopNow={() => {
            setSelectedCategory('all');
            scrollToSection('furniture');
          }}
        />

        {/* 8 Categories Grid */}
        <CategoriesSection
          categories={CATEGORIES}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            scrollToSection('furniture');
          }}
        />

        {/* Featured Products with Search and Filtering */}
        <FeaturedProducts
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onViewDetails={(product) => setDetailProduct(product)}
        />

        {/* Special Brand Story Section */}
        <SpecialSection />

        {/* Promotional Offers Banner */}
        <OffersBanner
          onShopOffers={() => {
            setSelectedCategory('all');
            scrollToSection('furniture');
          }}
        />

        {/* Gallery with Hover Zoom and Lightbox */}
        <GallerySection items={GALLERY_ITEMS} />

        {/* Customer Reviews */}
        <TestimonialsSection testimonials={TESTIMONIALS} />

        {/* Blog / Journal Section */}
        <BlogSection
          posts={BLOG_POSTS}
          onSelectPost={(post) => setReadingPost(post)}
        />

        {/* Contact and Showrooms */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Quick View / Detail Modal */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Blog Article Reader Modal */}
      <BlogModal
        post={readingPost}
        onClose={() => setReadingPost(null)}
      />

      {/* WhatsApp Floating Contact Widget */}
      <WhatsAppButton />

      {/* Back to Top Smooth Floating Button */}
      <BackToTop />
    </div>
  );
}
