import React, { useState } from 'react';
import { ArrowRight, Check, Instagram, Facebook, Youtube, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#1F1714] text-[#FAF7F2] pt-20 pb-12 border-t border-[#3D2E28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#3D2E28]">
          {/* Brand & Mission */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#C5A059] text-[#1F1714] flex items-center justify-center font-display font-bold text-xl shadow-xs">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                  CasaCraft
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium mt-1">
                  Furniture Atelier
                </span>
              </div>
            </div>

            <p className="text-xs text-[#C4B5A5] font-light leading-relaxed max-w-sm mb-6">
              Modern designs. Timeless comfort. Handcrafted with sustainable noble woods, Italian textiles, and unhurried artisanal care for homes with soul.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C221E] border border-[#3D2E28] flex items-center justify-center text-[#C4B5A5] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C221E] border border-[#3D2E28] flex items-center justify-center text-[#C4B5A5] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2C221E] border border-[#3D2E28] flex items-center justify-center text-[#C4B5A5] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B5A5]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Furniture Collections
                </a>
              </li>
              <li>
                <a href="#furniture" className="hover:text-white transition-colors">
                  Featured Pieces
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-white transition-colors">
                  Seasonal Offers
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Curated Gallery
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  The Living Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059] mb-4">
              Atelier & Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B5A5]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Showroom Appointments
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Fabric Swatch Service
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Sustainable Sourcing
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Trade Program
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059] mb-3">
              Private Newsletter
            </h4>
            <p className="text-xs text-[#C4B5A5] font-light leading-relaxed mb-4">
              Receive private invitations to seasonal sample events, editorial room previews, and bespoke woodworking notes.
            </p>

            {subscribed ? (
              <div className="bg-[#2C221E] border border-[#C5A059]/40 rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-[#FAF7F2]">
                <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Thank you for subscribing to CasaCraft Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full text-xs px-4 py-3 rounded-l-xl bg-[#2C221E] border border-[#3D2E28] text-[#FAF7F2] placeholder-[#8C7A6B] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                />
                <button
                  type="submit"
                  id="btn-newsletter-submit"
                  className="bg-[#C5A059] text-[#1F1714] font-semibold text-xs px-4 py-3 rounded-r-xl hover:bg-[#D4AF37] transition-colors shrink-0 flex items-center gap-1"
                  aria-label="Subscribe to newsletter"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center gap-2 text-[11px] text-[#8C7A6B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Zero spam. Unsubscribe anytime with a single click.</span>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A6B] gap-4">
          <p>© 2026 CasaCraft Furniture Atelier Inc. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#about" className="hover:text-[#C5A059] transition-colors">
              Privacy Policy
            </a>
            <a href="#about" className="hover:text-[#C5A059] transition-colors">
              Terms of Craftsmanship
            </a>
            <a href="#about" className="hover:text-[#C5A059] transition-colors">
              Delivery & White Glove
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
