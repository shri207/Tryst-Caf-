import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/galleryData';
import { OrnamentalDivider } from '../components/OrnamentalBorder';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'food', label: 'Food' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'outdoor', label: 'Outdoor' },
    { id: 'people', label: 'Atmosphere' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.35em] text-[#77736B] font-medium">
            Visual Vignettes
          </span>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#0B0B0B] mt-2 mb-3">
            Life at Tryst
          </h1>
          <OrnamentalDivider label="Moments & Aesthetics" />
          <p className="font-editorial italic text-2xl text-[#77736B]">
            “Sunlight on table tops, fresh bakes, and the gentle coastal pace.”
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12 border-b border-[#171717]/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0B0B0B] text-[#F7F5EF]'
                  : 'bg-transparent text-[#77736B] hover:text-[#0B0B0B] hover:bg-[#EFECE4]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Dynamic Editorial Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer break-inside-avoid relative overflow-hidden bg-[#EFECE4] border border-[#171717]/15 hover:border-[#171717] transition-all"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover img-editorial group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Caption Overlay */}
              <div className="p-4 bg-[#F7F5EF] border-t border-[#171717]/10">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#77736B]">
                    {item.category}
                  </span>
                  <Maximize2 size={13} className="text-[#77736B] group-hover:text-[#0B0B0B] transition-colors" />
                </div>
                <h3 className="font-serif-display text-lg text-[#0B0B0B] mt-0.5">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#77736B] mt-1 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox */}
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-white z-20 pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#B8B4AA]">
                {activeLightboxIndex + 1} of {filteredItems.length} — {filteredItems[activeLightboxIndex].category}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 text-white hover:opacity-75 transition-opacity"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>
            </div>

            {/* Center Image View with Prev/Next Controls */}
            <div
              className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevImage}
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 text-white bg-black/50 hover:bg-black border border-white/20 transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="max-h-[75vh] overflow-hidden flex flex-col items-center">
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="max-h-[70vh] w-auto object-contain shadow-2xl"
                />
              </div>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 text-white bg-black/50 hover:bg-black border border-white/20 transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Caption Bottom Bar */}
            <div
              className="text-center text-white max-w-xl mx-auto pt-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif-display text-2xl font-light">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="font-sans text-xs text-[#B8B4AA] mt-1">
                {filteredItems[activeLightboxIndex].caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
