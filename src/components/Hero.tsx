import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExplore: () => void;
  onShopNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onShopNow }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Container with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="Modern luxury living room interior with warm minimalist furniture"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Editorial Gradients: warm beige/cream vignette ensuring pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-transparent sm:to-[#FAF7F2]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Animated Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/90 border border-[#C5A059]/40 backdrop-blur-xs shadow-xs mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2C221E]">
              New Spring 2026 Collection
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2C221E] tracking-tight leading-[1.08] mb-6"
          >
            Beautiful Furniture <br />
            <span className="italic font-normal text-[#8C6D38]">for Beautiful Homes</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-[#3D2E28]/85 max-w-xl font-light leading-relaxed mb-9"
          >
            Modern designs. Timeless comfort. Made for your space. Handcrafted with sustainable natural woods, Italian fabrics, and architectural grace.
          </motion.p>

          {/* Buttons: Explore Collection & Shop Now */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14"
          >
            <button
              id="hero-btn-explore"
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2C221E] text-[#FAF7F2] font-medium text-sm sm:text-base hover:bg-[#3D2E28] hover:shadow-lg transition-all duration-200 group border border-[#2C221E]"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-btn-shop-now"
              onClick={onShopNow}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 text-[#2C221E] font-medium text-sm sm:text-base hover:bg-white hover:text-[#C5A059] border border-[#D8C9BC] backdrop-blur-xs shadow-xs transition-all duration-200"
            >
              <span>Shop Now</span>
            </button>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D8C9BC]/60 max-w-xl"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#C5A059] shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#2C221E]">Free White Glove</span>
                <span className="text-[11px] text-[#8C7A6B]">In-home assembly</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#C5A059] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#2C221E]">10-Year Warranty</span>
                <span className="text-[11px] text-[#8C7A6B]">Solid wood frames</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#C5A059] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#2C221E]">30-Day Trial</span>
                <span className="text-[11px] text-[#8C7A6B]">Risk-free comfort</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
