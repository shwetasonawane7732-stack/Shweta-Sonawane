import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hello CasaCraft! I'd like to inquire about your furniture collection and custom options.");

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/919820022722?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-[#D8C9BC] overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#2C221E] text-white p-4 flex items-center justify-between border-b border-[#C5A059]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <div>
                <h4 className="font-semibold text-xs leading-tight">CasaCraft WhatsApp Concierge</h4>
                <span className="text-[10px] text-[#C5A059]">Typically replies in 5 mins</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#C4B5A5] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF7F2] space-y-3">
            <div className="bg-white p-3 rounded-xl border border-[#E8DFD8] text-xs text-[#3D2E28] shadow-2xs">
              <p className="font-light">
                Welcome to CasaCraft! How can we help you style your home today? Feel free to ask about custom finishes, stock, or delivery.
              </p>
            </div>

            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-[#D8C9BC] bg-white focus:outline-hidden focus:border-[#25D366] resize-none"
            />

            <button
              onClick={handleSend}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="btn-whatsapp-floating"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FAF7F2] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C5A059]"></span>
        </span>
      </button>
    </div>
  );
};
