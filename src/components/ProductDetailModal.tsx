import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, Check, ShieldCheck, Truck, Sparkles, Ruler, Layers } from 'lucide-react';
import { formatINR } from '../utils/currency';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedColor?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const allImages = [product.image, ...(product.altImages || [])];

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedColor);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      id="product-detail-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        id="product-detail-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF7F2] rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-[#D8C9BC] my-auto animate-in zoom-in-95 duration-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 p-6 sm:p-8 bg-white border-b md:border-b-0 md:border-r border-[#E8DFD8] flex flex-col justify-between">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F5EFEB] mb-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#2C221E] text-[#FAF7F2] text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Row */}
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === img ? 'border-[#C5A059]' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Specifications & Actions */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Header with Close */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    {product.category.replace('-', ' ')}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2C221E] leading-tight">
                    {product.name}
                  </h3>
                </div>
                <button
                  id="btn-close-product-modal"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#6B5E55] hover:text-[#2C221E] hover:bg-[#F5EFEB] transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#C5A059] text-[#C5A059]'
                          : 'text-[#D8C9BC]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#2C221E]">
                  {product.rating}
                </span>
                <span className="text-xs text-[#8C7A6B]">
                  ({product.reviewCount} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-[#E8DFD8]">
                <span className="text-2xl font-bold text-[#2C221E]">
                  {formatINR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#8C7A6B] line-through">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-[#4E7D52] font-semibold bg-[#4E7D52]/10 px-2 py-0.5 rounded-full ml-auto">
                  Ready to Ship
                </span>
              </div>

              {/* Full Description */}
              <p className="text-xs sm:text-sm text-[#6B5E55] font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specifications Pills */}
              <div className="space-y-3 mb-6 bg-[#F5EFEB] p-4 rounded-2xl border border-[#E8DFD8]">
                <div className="flex items-start gap-2.5 text-xs text-[#2C221E]">
                  <Ruler className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Dimensions</strong>
                    <span className="text-[#6B5E55]">{product.dimensions}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#2C221E]">
                  <Layers className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Materials & Finish</strong>
                    <span className="text-[#6B5E55]">{product.material}</span>
                  </div>
                </div>
              </div>

              {/* Color Swatch Options */}
              <div className="mb-6">
                <span className="block text-xs font-semibold text-[#2C221E] mb-2">
                  Select Finish / Fabric Palette:
                </span>
                <div className="flex items-center gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-[#2C221E] scale-110 shadow-sm ring-2 ring-[#C5A059]/50'
                          : 'border-white opacity-80'
                      }`}
                      title={color}
                      aria-label={`Color option ${color}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Quantity + Add to Cart */}
            <div className="pt-4 border-t border-[#E8DFD8] flex items-center gap-4">
              <div className="flex items-center border border-[#D8C9BC] rounded-xl bg-white px-2 py-1.5 shadow-2xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 text-sm text-[#6B5E55] hover:text-[#2C221E]"
                >
                  -
                </button>
                <span className="px-3 text-xs font-semibold text-[#2C221E] min-w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 text-sm text-[#6B5E55] hover:text-[#2C221E]"
                >
                  +
                </button>
              </div>

              <button
                id="btn-modal-add-to-cart"
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm ${
                  added
                    ? 'bg-[#4E7D52] text-white'
                    : 'bg-[#2C221E] text-white hover:bg-[#3D2E28]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                    <span>Add to Cart • {formatINR(product.price * quantity)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
