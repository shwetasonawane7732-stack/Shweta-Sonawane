import React from 'react';
import { Category } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CategoriesSectionProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  onSelectCategory
}) => {
  return (
    <section id="categories" className="py-24 bg-[#FAF7F2] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            Curated Spaces
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C221E] mt-3 mb-4">
            Furniture Categories
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-4" />
          <p className="text-base text-[#6B5E55] font-light leading-relaxed">
            Explore meticulously designed living solutions crafted to bring harmony, warmth, and enduring luxury into every room.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#E8DFD8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Category Image */}
              <div className="relative h-60 w-full overflow-hidden bg-[#F5EFEB]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Item Count Tag */}
                <div className="absolute top-4 right-4 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#2C221E] border border-[#D8C9BC]/50 shadow-xs">
                  {category.itemCount} Designs
                </div>

                {/* Floating Category Name On Image for Mobile / Ambient */}
                <div className="absolute bottom-3 left-4 right-4 sm:hidden">
                  <span className="text-lg font-display font-semibold text-white drop-shadow-xs">
                    {category.name}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#2C221E] group-hover:text-[#C5A059] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#6B5E55] font-light mt-1.5 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* View Collection Button */}
                <div className="pt-4 mt-3 border-t border-[#F5EFEB]">
                  <button
                    id={`btn-cat-${category.id}`}
                    onClick={() => {
                      onSelectCategory(category.id);
                      const el = document.getElementById('furniture');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-semibold text-[#2C221E] bg-[#FAF7F2] hover:bg-[#2C221E] hover:text-[#FAF7F2] transition-colors duration-200 group/btn border border-[#E8DFD8]"
                  >
                    <span>View Collection</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
