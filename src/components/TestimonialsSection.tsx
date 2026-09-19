import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="reviews" className="py-24 bg-[#F5EFEB] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            Real Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C221E] mt-3 mb-4">
            Customer Reviews
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-4" />
          <p className="text-base text-[#6B5E55] font-light leading-relaxed">
            Discover why design connoisseurs, residential architects, and homeowners trust CasaCraft for their most cherished rooms.
          </p>
        </div>

        {/* Testimonials Grid (3-4 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFD8] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon */}
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#C5A059] mb-4">
                  <Quote className="w-4 h-4 fill-[#C5A059]/30" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#3D2E28] font-light italic leading-relaxed mb-6">
                  “{t.text}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#F5EFEB]">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#D8C9BC]"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-display font-semibold text-sm text-[#2C221E]">
                        {t.name}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7D52]" title="Verified Buyer" />
                    </div>
                    <span className="text-[11px] text-[#8C7A6B] block">
                      {t.role} • {t.location}
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-dashed border-[#E8DFD8]">
                  <span className="text-[10px] text-[#8C7A6B] block">
                    Verified Purchase: <strong className="text-[#2C221E] font-medium">{t.purchasedItem}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
