import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Phone, Heart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  onSelectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Furniture', href: '#furniture' },
    { name: 'Collections', href: '#categories' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#furniture') {
      onSelectCategory('all');
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD8] py-3.5'
          : 'bg-[#FAF7F2]/80 backdrop-blur-xs py-5 border-b border-[#E8DFD8]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="nav-logo"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-full bg-[#2C221E] text-[#C5A059] flex items-center justify-center font-display font-semibold text-xl tracking-tight shadow-xs transition-transform duration-300 group-hover:scale-105 border border-[#C5A059]/30">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-[#2C221E] leading-none">
                CasaCraft
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium mt-1">
                Furniture Atelier
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-medium text-[#2C221E]/80 hover:text-[#2C221E] transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Search, Phone, Cart, Mobile Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Bar Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-white border border-[#D8C9BC] rounded-full px-3 py-1.5 shadow-xs transition-all w-48 sm:w-64">
                  <Search className="w-4 h-4 text-[#8C7A6B] mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search furniture..."
                    className="w-full text-xs text-[#2C221E] placeholder-[#8C7A6B] bg-transparent focus:outline-hidden"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      onSearchChange('');
                    }}
                    className="text-[#8C7A6B] hover:text-[#2C221E] ml-1"
                    title="Close search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  id="btn-open-search"
                  onClick={() => setSearchOpen(true)}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#2C221E]/80 hover:text-[#2C221E] hover:bg-[#E8DFD8]/60 transition-colors"
                  aria-label="Search furniture"
                  title="Search items"
                >
                  <Search className="w-4.5 h-4.5" />
                </button>
              )}
            </div>

            {/* Currency Badge */}
            <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-[#2C221E] bg-[#F5EFEB] px-2.5 py-1 rounded-full border border-[#D8C9BC]">
              <span className="text-[#C5A059] font-bold">₹</span>
              <span>INR</span>
            </div>

            {/* Concierge Call / WhatsApp quick hint */}
            <a
              href="tel:+919820022722"
              className="hidden md:flex items-center gap-1.5 text-xs font-medium text-[#2C221E]/80 hover:text-[#C5A059] transition-colors py-1.5 px-3 rounded-full border border-[#D8C9BC]/60 bg-[#F5EFEB]/50"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Concierge</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              id="btn-open-cart"
              onClick={onOpenCart}
              className="relative w-10 h-10 rounded-full flex items-center justify-center bg-[#2C221E] text-white hover:bg-[#3D2E28] transition-all shadow-xs group"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4.5 h-4.5 text-[#FAF7F2] transition-transform group-hover:scale-110" />
              {cartCount > 0 && (
                <span
                  id="cart-badge-count"
                  className="absolute -top-1.5 -right-1.5 bg-[#C5A059] text-[#2C221E] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF7F2] shadow-xs animate-in zoom-in-75 duration-200"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#2C221E] hover:bg-[#E8DFD8]/60 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden fixed inset-x-0 top-full bg-[#FAF7F2] border-b border-[#E8DFD8] shadow-lg px-6 py-6 transition-all duration-300 animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-base font-medium text-[#2C221E] hover:text-[#C5A059] transition-colors py-1.5 border-b border-[#E8DFD8]/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#C5A059] text-xs font-serif italic">Explore</span>
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between text-xs text-[#8C7A6B]">
              <span>Need styling advice?</span>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#C5A059] font-medium underline">
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
