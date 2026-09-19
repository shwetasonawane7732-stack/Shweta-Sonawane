import React from 'react';
import { BlogPost } from '../types';
import { X, Calendar, Clock, User, Share2 } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      id="blog-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        id="blog-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF7F2] rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-[#D8C9BC] my-auto animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
      >
        {/* Cover Image Header */}
        <div className="relative aspect-21/9 w-full overflow-hidden bg-[#2C221E] shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/30 to-black/60" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="bg-[#C5A059] text-[#2C221E] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
              {post.tag}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1">
          <div className="flex items-center gap-4 text-xs text-[#8C7A6B] mb-4 pb-4 border-b border-[#E8DFD8]">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#C5A059]" />
              <strong>{post.author}</strong> ({post.authorRole})
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              {post.readTime}
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2C221E] leading-tight mb-6">
            {post.title}
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#3D2E28] font-light leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[#E8DFD8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2C221E] text-[#C5A059] flex items-center justify-center font-display font-semibold">
                C
              </div>
              <div>
                <span className="text-xs font-semibold text-[#2C221E] block">
                  CasaCraft Design Editorial
                </span>
                <span className="text-[11px] text-[#8C7A6B] block">
                  Published for mindful living
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#2C221E] text-white text-xs font-semibold hover:bg-[#3D2E28] transition-colors"
            >
              Back to Journal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
