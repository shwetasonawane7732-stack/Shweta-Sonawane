import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatINR } from '../utils/currency';
import { trackBeginCheckout } from '../utils/analytics';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Math
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingThreshold = 150000;
  const isFreeShipping = subtotal >= shippingThreshold || subtotal === 0;
  const shippingCost = isFreeShipping ? 0 : 3500;
  const total = subtotal - discountAmount + shippingCost;
  const freeShippingProgress = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'CASA30') {
      setDiscountPercent(30);
      setPromoMessage('Promo code CASA30 applied (30% off)!');
    } else {
      setPromoMessage('Invalid promo code. Try CASA30.');
    }
  };

  const handleCheckout = () => {
    trackBeginCheckout(total, items.reduce((s, i) => s + i.quantity, 0));
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      onClearCart();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#D8C9BC] shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#E8DFD8] flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-bold text-[#2C221E]">
                    Your Cart
                  </h3>
                  <span className="text-xs bg-[#F5EFEB] px-2.5 py-0.5 rounded-full text-[#6B5E55] font-semibold border border-[#E8DFD8]">
                    {items.reduce((s, i) => s + i.quantity, 0)} items
                  </span>
                </div>
                <button
                  id="btn-close-cart"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#6B5E55] hover:text-[#2C221E] hover:bg-[#F5EFEB] transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Bar */}
              <div className="px-6 py-3.5 bg-[#F5EFEB] border-b border-[#E8DFD8]">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-1.5 text-[#2C221E] font-medium">
                    <Truck className="w-3.5 h-3.5 text-[#C5A059]" />
                    {isFreeShipping ? (
                      <span className="text-[#4E7D52] font-semibold">
                        You unlocked Free White-Glove Delivery!
                      </span>
                    ) : (
                      <span>
                        Add <strong className="text-[#2C221E]">{formatINR(shippingThreshold - subtotal)}</strong> for Free Delivery
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8C7A6B]">{freeShippingProgress}%</span>
                </div>
                <div className="w-full h-2 bg-[#D8C9BC]/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C5A059] transition-all duration-500 rounded-full"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {orderComplete ? (
                  <div className="text-center py-12 px-4">
                    <div className="w-14 h-14 rounded-full bg-[#4E7D52]/15 text-[#4E7D52] flex items-center justify-center mx-auto mb-4 border border-[#4E7D52]/30">
                      <Check className="w-7 h-7" />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-[#2C221E] mb-2">
                      Order Confirmed!
                    </h4>
                    <p className="text-xs text-[#6B5E55] leading-relaxed mb-6">
                      Thank you for choosing CasaCraft Furniture. We have sent your order details and delivery scheduling link to your email.
                    </p>
                    <button
                      onClick={() => {
                        setOrderComplete(false);
                        onClose();
                      }}
                      className="px-6 py-3 rounded-full bg-[#2C221E] text-white text-xs font-semibold hover:bg-[#3D2E28] transition-colors"
                    >
                      Continue Browsing
                    </button>
                  </div>
                ) : items.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-14 h-14 rounded-full bg-[#F5EFEB] flex items-center justify-center mx-auto mb-4 text-[#8C7A6B]">
                      <Sparkles className="w-6 h-6 text-[#C5A059]" />
                    </div>
                    <h4 className="font-display text-xl font-semibold text-[#2C221E] mb-1">
                      Your cart is empty
                    </h4>
                    <p className="text-xs text-[#6B5E55] max-w-xs mx-auto mb-6">
                      Explore our handcrafted sofas, platform beds, and dining sets to curate your dream space.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-[#2C221E] text-white text-xs font-semibold hover:bg-[#3D2E28] transition-colors"
                    >
                      Explore Furniture
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#E8DFD8] shadow-2xs"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-xl bg-[#F5EFEB] shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-display font-semibold text-sm text-[#2C221E] line-clamp-1">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-[#8C7A6B] hover:text-rose-600 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-[11px] text-[#8C7A6B] block">
                            {formatINR(item.product.price)} each
                          </span>
                        </div>

                        {/* Quantity and Line Total */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-[#D8C9BC] rounded-lg bg-[#FAF7F2]">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 text-[#6B5E55] hover:text-[#2C221E] transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold text-[#2C221E] px-2 min-w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 text-[#6B5E55] hover:text-[#2C221E] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-[#2C221E]">
                            {formatINR(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer (Summary & Checkout) */}
              {!orderComplete && items.length > 0 && (
                <div className="p-6 bg-white border-t border-[#E8DFD8] space-y-4">
                  {/* Promo Input */}
                  <form onSubmit={applyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Promo code (e.g. CASA30)"
                      className="flex-1 text-xs px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D8C9BC] focus:outline-hidden focus:border-[#C5A059] uppercase"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-xl bg-[#2C221E] text-white text-xs font-semibold hover:bg-[#3D2E28] transition-colors shrink-0"
                    >
                      Apply
                    </button>
                  </form>
                  {promoMessage && (
                    <p
                      className={`text-[11px] ${
                        discountPercent > 0 ? 'text-[#4E7D52]' : 'text-rose-600'
                      }`}
                    >
                      {promoMessage}
                    </p>
                  )}

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-[#6B5E55] pt-1">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-[#2C221E] font-medium">{formatINR(subtotal)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#4E7D52]">
                        <span>30% Seasonal Discount</span>
                        <span>-{formatINR(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>White-Glove Delivery</span>
                      <span>
                        {shippingCost === 0 ? (
                          <strong className="text-[#4E7D52]">FREE</strong>
                        ) : (
                          formatINR(shippingCost)
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-[#2C221E] pt-2 border-t border-[#F5EFEB]">
                      <span>Estimated Total</span>
                      <span>{formatINR(total)}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    id="btn-checkout"
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full py-4 rounded-xl bg-[#2C221E] text-[#FAF7F2] font-semibold text-sm hover:bg-[#3D2E28] transition-all flex items-center justify-center gap-2 shadow-md group disabled:opacity-50"
                  >
                    {isCheckingOut ? (
                      <span>Processing Order...</span>
                    ) : (
                      <>
                        <span>Proceed to White-Glove Checkout</span>
                        <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C7A6B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Safe 256-Bit SSL Encrypted Checkout</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
