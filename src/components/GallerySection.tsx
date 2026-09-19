import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GallerySectionProps {
  items: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const tabs = ['All', 'Living Room', 'Bedroom', 'Dining Area', 'Office', 'Modern Interiors'];

  const filteredItems = activeTab === 'All'
    ? items
    : items.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            Inspiration & Spaces
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C221E] mt-3 mb-4">
            Curated Gallery
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-4" />
          <p className="text-base text-[#6B5E55] font-light leading-relaxed">
            Witness how our handcrafted furniture shapes residences with natural daylight, tactile warmth, and spatial elegance.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`gallery-tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 shrink-0 ${
                activeTab === tab
                  ? 'bg-[#2C221E] text-white shadow-xs'
                  : 'bg-white text-[#6B5E55] hover:text-[#2C221E] hover:bg-[#F5EFEB] border border-[#E8DFD8]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#F5EFEB] aspect-4/3 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 border border-[#E8DFD8]"
              >
                {/* Image with zoom effect */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  <span className="bg-white/90 backdrop-blur-xs text-[#2C221E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#2C221E] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-sm">
                  <Maximize2 className="w-4 h-4 text-[#C5A059]" />
                </div>

                {/* Bottom Content on Hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-display text-lg font-semibold leading-tight mb-1 drop-shadow-xs">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E8DFD8] line-clamp-1 font-light">
                    Featured: <strong className="text-white font-medium">{item.featuredPiece}</strong>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          id="gallery-lightbox-backdrop"
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            id="gallery-lightbox-card"
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF7F2] rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-[#D8C9BC] animate-in zoom-in-95 duration-200"
          >
            <div className="relative aspect-16/10 w-full overflow-hidden bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                id="btn-close-gallery-lightbox"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                  {selectedItem.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#2C221E] mt-1">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#6B5E55] mt-2 max-w-xl font-light leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="bg-[#F5EFEB] px-4 py-3 rounded-2xl border border-[#E8DFD8] shrink-0">
                <span className="text-[10px] text-[#8C7A6B] block uppercase tracking-wider">
                  Featured Atelier Piece
                </span>
                <span className="text-sm font-semibold text-[#2C221E]">
                  {selectedItem.featuredPiece}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
