import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Living Room Consultation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'Living Room Consultation',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5EFEB] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            Visit & Connect
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C221E] mt-3 mb-4">
            Connect With Our Atelier
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-4" />
          <p className="text-base text-[#6B5E55] font-light leading-relaxed">
            Whether inquiring about custom dimensions, ordering fabric swatches, or scheduling a private showroom consultation, our design advisors are here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Showrooms */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-[#E8DFD8] shadow-xs">
              <h3 className="font-display text-xl font-bold text-[#2C221E] mb-5">
                Flagship Studio & Showroom
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#6B5E55]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#C5A059] shrink-0 border border-[#E8DFD8]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2C221E] block font-medium">CasaCraft Design Atelier & Gallery</strong>
                    <span>Level 3, Signature Design Tower, Bandra West</span>
                    <span className="block">Mumbai, Maharashtra 400050</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#C5A059] shrink-0 border border-[#E8DFD8]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2C221E] block font-medium">Concierge Inquiries</strong>
                    <a href="tel:+919820022722" className="hover:text-[#C5A059] transition-colors">
                      +91 98200 22722 / +91 (22) 2640-2272
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#C5A059] shrink-0 border border-[#E8DFD8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2C221E] block font-medium">Direct Email</strong>
                    <a href="mailto:concierge@casacraftfurniture.com" className="hover:text-[#C5A059] transition-colors">
                      concierge@casacraftfurniture.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#C5A059] shrink-0 border border-[#E8DFD8]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2C221E] block font-medium">Gallery Hours</strong>
                    <span>Monday – Saturday: 10:00 AM – 7:00 PM</span>
                    <span className="block">Sunday: 11:00 AM – 5:00 PM (By Appointment)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bespoke Swatch Service Banner */}
            <div className="bg-[#2C221E] text-white rounded-2xl p-6 border border-[#C5A059]/30 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                  Complimentary Service
                </span>
                <h4 className="font-display text-lg font-semibold text-white mt-1">
                  Complimentary Fabric Swatch Kit
                </h4>
                <p className="text-xs text-[#FAF7F2]/80 mt-1.5 font-light">
                  Touch our Italian leathers and organic bouclé fabrics at home before deciding. Free 2-day delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFD8] shadow-md">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-[#2C221E]">
                  Request a Consultation
                </h3>
                <p className="text-xs text-[#6B5E55] mt-1 font-light">
                  Speak directly with an interior designer to configure tailored dimensions, custom wood stains, or complete room layouts.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-[#FAF7F2] border border-[#C5A059]/50 rounded-2xl p-8 text-center animate-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-12 h-12 text-[#4E7D52] mx-auto mb-3" />
                  <h4 className="font-display text-xl font-bold text-[#2C221E]">
                    Inquiry Received
                  </h4>
                  <p className="text-xs text-[#6B5E55] mt-2 max-w-md mx-auto">
                    Thank you for reaching out. A dedicated CasaCraft design advisor will contact you within 24 hours to assist with your interior vision.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C221E] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Victoria Harrison"
                        className="w-full text-xs px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-[#2C221E] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2C221E] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="victoria@example.com"
                        className="w-full text-xs px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-[#2C221E] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C221E] mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full text-xs px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-[#2C221E] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2C221E] mb-1">
                        Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-[#2C221E] focus:outline-hidden focus:border-[#C5A059] transition-colors cursor-pointer"
                      >
                        <option value="Living Room Consultation">Living Room Consultation</option>
                        <option value="Dining Room Suites">Dining Room Suites</option>
                        <option value="Bedroom & Bedsteads">Bedroom & Bedsteads</option>
                        <option value="Custom Bespoke Dimensions">Custom Bespoke Dimensions</option>
                        <option value="Architect & Trade Accounts">Architect & Trade Accounts</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C221E] mb-1">
                      Project Notes / Specific Questions *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your space, dimensions, or specific pieces you are considering..."
                      className="w-full text-xs p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] text-[#2C221E] focus:outline-hidden focus:border-[#C5A059] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="btn-submit-contact-form"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#2C221E] text-white text-xs font-semibold hover:bg-[#3D2E28] transition-all flex items-center justify-center gap-2 shadow-xs group"
                  >
                    <span>Send Message to Atelier</span>
                    <Send className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
