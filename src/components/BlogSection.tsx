import React from 'react';
import { BlogPost } from '../types';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogSectionProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts, onSelectPost }) => {
  return (
    <section id="blog" className="py-24 bg-[#FAF7F2] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            The Living Journal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C221E] mt-3 mb-4">
            Interior Insights & Stories
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-4" />
          <p className="text-base text-[#6B5E55] font-light leading-relaxed">
            Expert styling perspectives, architectural ergonomics, and artisanal material guides curated by our studio team.
          </p>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectPost(post)}
            >
              <div>
                {/* Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F5EFEB]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-semibold text-[#2C221E] border border-[#E8DFD8] shadow-xs">
                    {post.tag}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#8C7A6B] mb-3">
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

                  <h3 className="font-display text-xl font-bold text-[#2C221E] group-hover:text-[#C5A059] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#6B5E55] font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="px-6 py-4 border-t border-[#F5EFEB] bg-[#FAF7F2]/50 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#2C221E] block">
                    {post.author}
                  </span>
                  <span className="text-[10px] text-[#8C7A6B] block">
                    {post.authorRole}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2C221E] group-hover:text-[#C5A059] transition-colors">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
