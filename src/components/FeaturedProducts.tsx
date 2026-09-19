import React, { useState } from 'react';
import { Product } from '../types';
import { Star, ShoppingBag, Eye, Check, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatINR } from '../utils/currency';

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onAddToCart,
  onViewDetails
}) => {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = [
    { id: 'all', label: 'All Furniture' },
    { id: 'sofas', label: 'Sofas' },
    { id: 'beds', label: 'Beds' },
    { id: 'dining-tables', label: 'Dining Tables' },
    { id: 'chairs', label: 'Chairs' },
    { id: 'wardrobes', label: 'Wardrobes' },
    { id: 'tv-units', label: 'TV Units' },
    { id: 'office-furniture', label: 'Office' },
    { id: 'home-decor', label: 'Home Decor' },
  ];

  // Filter products by category and search query
  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section id="furniture" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            Handcrafted Masterpieces
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C221E] mt-3 mb-4">
            Featured Products
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-4" />
          <p className="text-base text-[#6B5E55] font-light leading-relaxed">
            Every piece is sculpted with tactile richness, calibrated comfort, and architectural longevity.
          </p>
        </div>

        {/* Filter and Sorting Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8DFD8]">
          {/* Category Filter Pills (Scrollable on small screens) */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-pill-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#2C221E] text-white shadow-xs'
                    : 'bg-white text-[#6B5E55] hover:text-[#2C221E] hover:bg-[#F5EFEB] border border-[#E8DFD8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Selector and Result Count */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4 shrink-0 text-xs text-[#6B5E55]">
            <span className="font-medium">
              Showing <strong className="text-[#2C221E]">{sortedProducts.length}</strong> items
            </span>
            <div className="flex items-center gap-1.5 bg-white border border-[#E8DFD8] rounded-full px-3 py-1.5 shadow-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#C5A059]" />
              <select
                id="sort-products-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products"
                className="bg-transparent text-xs text-[#2C221E] font-medium focus:outline-hidden cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E8DFD8] p-8 max-w-lg mx-auto">
            <SlidersHorizontal className="w-12 h-12 text-[#C4B5A5] mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-[#2C221E] mb-2">
              No matching furniture found
            </h3>
            <p className="text-xs text-[#6B5E55] mb-6">
              Try adjusting your category filter or search query to discover our artisan collection.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
              }}
              className="px-6 py-2.5 rounded-full bg-[#2C221E] text-white text-xs font-semibold hover:bg-[#3D2E28] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {sortedProducts.map((product) => {
              const isAdded = addedIds[product.id];
              const discountPercent = product.originalPrice
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : null;

              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8DFD8] shadow-xs hover:shadow-xl hover:border-[#D8C9BC] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-[#F5EFEB]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-106"
                      loading="lazy"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3.5 left-3.5 bg-[#2C221E] text-[#FAF7F2] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs border border-[#C5A059]/30">
                        {product.badge}
                      </span>
                    )}

                    {/* Discount Badge */}
                    {discountPercent && (
                      <span className="absolute top-3.5 right-3.5 bg-[#C5A059] text-[#2C221E] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        -{discountPercent}%
                      </span>
                    )}

                    {/* Quick View Hover Button */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <button
                        id={`btn-quick-view-${product.id}`}
                        onClick={() => onViewDetails(product)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 text-[#2C221E] text-xs font-semibold shadow-md hover:bg-[#2C221E] hover:text-white transition-all transform -translate-y-2 group-hover:translate-y-0 duration-300"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating & Review */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                          <span className="text-xs font-semibold text-[#2C221E]">
                            {product.rating}
                          </span>
                          <span className="text-[11px] text-[#8C7A6B]">
                            ({product.reviewCount})
                          </span>
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-wider text-[#8C7A6B]">
                          {product.category.replace('-', ' ')}
                        </span>
                      </div>

                      {/* Product Title */}
                      <h3
                        onClick={() => onViewDetails(product)}
                        className="font-display text-lg font-semibold text-[#2C221E] hover:text-[#C5A059] transition-colors cursor-pointer leading-snug line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-[#6B5E55] font-light mt-1.5 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="pt-4 mt-4 border-t border-[#F5EFEB]">
                      <div className="flex items-baseline justify-between mb-3.5">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-[#2C221E]">
                            {formatINR(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-[#8C7A6B] line-through font-light">
                              {formatINR(product.originalPrice)}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-[#4E7D52] font-medium">In Stock</span>
                      </div>

                      {/* Action Buttons: Add to Cart & View Details */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          id={`btn-view-details-${product.id}`}
                          onClick={() => onViewDetails(product)}
                          className="py-2.5 px-3 rounded-xl text-xs font-medium text-[#2C221E] bg-[#FAF7F2] hover:bg-[#E8DFD8] transition-colors border border-[#E8DFD8] text-center"
                        >
                          View Details
                        </button>

                        <button
                          id={`btn-add-cart-${product.id}`}
                          onClick={() => handleAddToCart(product)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs ${
                            isAdded
                              ? 'bg-[#4E7D52] text-white'
                              : 'bg-[#2C221E] text-white hover:bg-[#3D2E28]'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5 text-[#C5A059]" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
