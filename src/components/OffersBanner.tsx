import React, { useState } from 'react';
import { Tag, ArrowRight, Copy, Check, Sparkles, Percent } from 'lucide-react';
import { motion } from 'motion/react';

interface OffersBannerProps {
  onShopOffers: () => void;
}

export const OffersBanner: React.FC<OffersBannerProps> = ({ onShopOffers }) => {
  const [copied, setCopied] = useState(false);
  const promoCode = 'CASA30';

  const copyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="offers" className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2C221E] via-[#3D2E28] to-[#1F1714] text-white shadow-2xl border border-[#C5A059]/30">
          {/* Subtle Golden Glow / Geometric Pattern */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#C5A059]/15 blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-20 w-60 h-60 rounded-full bg-[#C5A059]/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16 relative z-10">
            {/* Content Column */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/10 border border-[#C5A059]/40 backdrop-blur-xs mb-6">
                <Percent className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF7F2]">
                  Limited Seasonal Event
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
                Make Your Home Beautiful – <br className="hidden sm:inline" />
                <span className="text-[#C5A059] italic font-normal">Up to 30% Off</span>
              </h2>

              <p className="text-sm sm:text-base text-[#FAF7F2]/80 font-light max-w-xl leading-relaxed mb-8">
                Refresh your living sanctuary with timeless hand-finished dining tables, cloud-soft bouclé seating, and sculptural lighting at special seasonal pricing.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="btn-shop-offers"
                  onClick={onShopOffers}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A059] text-[#2C221E] font-semibold text-sm hover:bg-[#D4AF37] transition-all shadow-md group"
                >
                  <span>Shop Offers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Promo Code Box */}
                <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-xs">
                  <span className="text-xs text-[#FAF7F2]/70 mr-2">Use code:</span>
                  <span className="font-mono font-bold text-sm tracking-wider text-[#C5A059] mr-3">
                    {promoCode}
                  </span>
                  <button
                    onClick={copyCode}
                    className="text-white hover:text-[#C5A059] transition-colors p-1"
                    title="Copy coupon code"
                    aria-label="Copy coupon code"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Visual Accent Column */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#C5A059]/40 shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80"
                  alt="Aura Bouclé Sofa Special Offer"
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold">
                    Featured Offer Piece
                  </span>
                  <span className="text-sm font-display font-medium text-white">
                    Aura Curved Bouclé Sofa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
