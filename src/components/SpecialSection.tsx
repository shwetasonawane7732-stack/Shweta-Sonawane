import React from 'react';
import { Award, Compass, Feather, Hammer, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const SpecialSection: React.FC = () => {
  const pillars = [
    {
      icon: Hammer,
      title: 'Artisanal Joinery',
      description: 'Kiln-dried hardwoods shaped with traditional mortise-and-tenon craftsmanship to withstand generations.'
    },
    {
      icon: Feather,
      title: 'Sensory Comfort',
      description: 'Curated natural bouclé, Belgian linen, and vegetable-tanned leathers that soften gracefully with age.'
    },
    {
      icon: Compass,
      title: 'Architectural Harmony',
      description: 'Proportions calculated to complement natural light, ceiling volumes, and serene interior flow.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F5EFEB] border-y border-[#E8DFD8] relative overflow-hidden">
      {/* Subtle Background Accent Texture */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#C5A059]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Interior Visuals */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
                alt="Architectural living interior with handcrafted walnut and boucle furnishings"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center transform hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Editorial Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-8 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl border border-[#D8C9BC] max-w-[280px] sm:max-w-[320px]"
            >
              <div className="flex items-center gap-2 text-[#C5A059] mb-1.5">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2C221E]">
                  Bespoke Craft
                </span>
              </div>
              <p className="text-xs text-[#6B5E55] font-light leading-relaxed">
                “A home is an intimate portrait of those who inhabit it. We build furniture that listens to your lifestyle.”
              </p>
              <div className="mt-3 pt-3 border-t border-[#F5EFEB] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#2C221E]">CasaCraft Design Studio</span>
                <span className="text-[10px] text-[#C5A059] font-medium">Est. 2018</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 lg:pl-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              The CasaCraft Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C221E] mt-3 mb-6 leading-tight">
              Designed to Make Your Home <br />
              <span className="italic font-normal text-[#8C6D38]">Feel Like You</span>
            </h2>

            <p className="text-base text-[#6B5E55] font-light leading-relaxed mb-6">
              True luxury does not clamor for attention; it rests in the quiet confidence of noble materials, balanced proportions, and effortless touch. At CasaCraft, every piece is sculpted to enhance the sanctuary of daily life.
            </p>

            <p className="text-sm text-[#6B5E55] font-light leading-relaxed mb-10">
              We collaborate exclusively with master woodcarvers, Italian tanneries, and sustainable stonemasons. By bypassing mass-market compromises, we craft heirlooms that age with authentic patina and soulful beauty.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-6 pt-2">
              {pillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#D8C9BC] flex items-center justify-center text-[#C5A059] group-hover:bg-[#2C221E] group-hover:text-white transition-colors duration-200 shrink-0 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-semibold text-[#2C221E]">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#6B5E55] font-light mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quality Seal */}
            <div className="mt-10 pt-6 border-t border-[#D8C9BC] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xs text-[#3D2E28] font-medium">
                Sustainably certified timber & zero-VOC organic finishes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
