import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCategory, PageId } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { OrnamentalDivider, OrnamentalFrame } from '../components/OrnamentalBorder';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { Search, Filter, Sparkles, Clock, Leaf, UtensilsCrossed, Download, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuPageProps {
  onSelectItem: (item: MenuItem) => void;
  onNavigate: (page: PageId) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onSelectItem, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'chef-special'>('all');

  const categories: { id: MenuCategory | 'all'; label: string; timing?: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'healthy-bowls', label: 'Healthy Bowls' },
    { id: 'breakfast-eggs', label: 'Breakfast & Eggs', timing: '7:30 AM — 11:00 AM' },
    { id: 'take-your-time', label: 'Take Your Time' },
    { id: 'chicken-steak', label: 'Chicken Steak', timing: '12:00 PM – 10:30 PM' },
    { id: 'seafood', label: 'Sea Food' },
    { id: 'lamb-steak', label: 'Lamb Steak' },
    { id: 'bakery-patisserie', label: 'Bakehouse & Patisserie' },
    { id: 'coffee-hot-beverages', label: 'Coffee & Hot' },
    { id: 'cold-shakes-coolers', label: 'Cold Shakes & Coolers' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category Match
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary Match
      let matchesDietary = true;
      if (dietaryFilter === 'veg') matchesDietary = !!item.isVegetarian;
      if (dietaryFilter === 'non-veg') matchesDietary = !!item.isNonVeg;
      if (dietaryFilter === 'chef-special') matchesDietary = !!item.isChefSpecial;

      // Search Query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.categoryTitle.toLowerCase().includes(query) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  // Group by category for the full digital printed view
  const groupedCategories = useMemo(() => {
    const map = new Map<string, MenuItem[]>();
    filteredItems.forEach((item) => {
      if (!map.has(item.categoryTitle)) {
        map.set(item.categoryTitle, []);
      }
      map.get(item.categoryTitle)!.push(item);
    });
    return Array.from(map.entries());
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-[#F7F5EF] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.35em] text-[#77736B] font-medium">
            Tryst Café · Neelankarai · ECR
          </span>
          <h1 className="font-serif-display text-5xl sm:text-6xl font-normal text-[#0B0B0B] mt-2 mb-3">
            The Digital Menu
          </h1>
          <OrnamentalDivider label="A La Carte & Beverages" />
          <p className="font-editorial italic text-lg sm:text-xl text-[#77736B]">
            “Prepared with care, unhurried culinary craft, and wholesome ingredients.”
          </p>
        </ScrollReveal>

        {/* Filter and Search Bar Controls */}
        <div className="sticky top-20 z-30 bg-[#F7F5EF]/95 backdrop-blur-md border border-[#171717]/20 p-4 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#77736B]" />
              <input
                type="text"
                placeholder="Search dishes, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white/80 border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none placeholder:text-[#77736B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#77736B] hover:text-black"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-[11px] uppercase tracking-wider text-[#77736B] mr-1 hidden sm:inline">
                Dietary:
              </span>
              {[
                { id: 'all', label: 'All Dishes' },
                { id: 'veg', label: 'Vegetarian' },
                { id: 'non-veg', label: 'Non-Vegetarian' },
                { id: 'chef-special', label: 'Chef Specials' },
              ].map((filter) => (
                <motion.button
                  key={filter.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setDietaryFilter(filter.id as any)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors border ${
                    dietaryFilter === filter.id
                      ? 'bg-[#0B0B0B] text-[#F7F5EF] border-[#0B0B0B]'
                      : 'bg-transparent text-[#77736B] border-[#171717]/20 hover:text-[#0B0B0B] hover:border-[#0B0B0B]'
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Category Horizontal Scroll Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-3 border-t border-[#171717]/10 no-scrollbar">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative whitespace-nowrap px-3.5 py-1 text-xs uppercase tracking-[0.15em] font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B0B0B] text-[#F7F5EF]'
                    : 'bg-[#EFECE4] text-[#77736B] hover:text-[#0B0B0B] hover:bg-[#EFECE4]/80'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Results Stats */}
        <div className="flex items-center justify-between text-xs text-[#77736B] tracking-wider mb-8 px-1">
          <span>
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'}
          </span>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center gap-1.5 text-[#0B0B0B] hover:underline"
          >
            <Printer size={13} /> Print Menu Sheet
          </motion.button>
        </div>

        {/* PRINTED EDITORIAL MENU FORMAT */}
        <AnimatePresence mode="wait">
          {groupedCategories.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="text-center py-20 bg-[#EFECE4] border border-[#171717]/15 p-8"
            >
              <p className="font-serif-display text-2xl text-[#0B0B0B]">No dishes matched your criteria.</p>
              <p className="font-sans text-xs text-[#77736B] mt-2">
                Try searching with different keywords or clearing active filters.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setDietaryFilter('all');
                }}
                className="mt-4 px-4 py-2 text-xs uppercase tracking-widest bg-[#0B0B0B] text-[#F7F5EF]"
              >
                Reset Filters
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key={`${selectedCategory}-${dietaryFilter}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-16"
            >
              {groupedCategories.map(([catTitle, items]) => (
                <ScrollReveal
                  key={catTitle}
                  className="bg-[#F7F5EF] border border-[#171717]/25 p-6 sm:p-10 relative"
                >
                  {/* Category Header with Geometric Rules */}
                  <div className="text-center mb-8">
                    <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#77736B]">
                      TRYST CAFÉ · SPECIALTY SELECTION
                    </span>
                    <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B0B0B] font-normal uppercase tracking-wider mt-1">
                      {catTitle}
                    </h2>
                    <div className="flex items-center justify-center gap-3 my-3">
                      <div className="w-16 h-[1px] bg-[#171717]/40" />
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <polygon points="4,0 8,4 4,8 0,4" fill="#171717" />
                      </svg>
                      <div className="w-16 h-[1px] bg-[#171717]/40" />
                    </div>
                  </div>

                  {/* 2-Column Responsive Menu Item Listing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ x: 3 }}
                        onClick={() => onSelectItem(item)}
                        className="group cursor-pointer flex flex-col justify-between p-3 -m-3 hover:bg-[#EFECE4]/60 transition-colors border border-transparent hover:border-[#171717]/15 rounded-none"
                      >
                        <div>
                          {/* Title and Price aligned right */}
                          <div className="flex items-baseline justify-between gap-4 border-b border-[#171717]/15 pb-1">
                            <h3 className="font-serif-display text-xl sm:text-2xl text-[#0B0B0B] font-normal group-hover:underline underline-offset-4 decoration-1 leading-tight">
                              {item.name}
                            </h3>
                            <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B0B0B] shrink-0">
                              ₹{item.price}
                              {item.priceSecondary && (
                                <span className="text-sm font-normal text-[#77736B]">
                                  {' '}/ ₹{item.priceSecondary}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-sans text-xs text-[#77736B] leading-relaxed mt-2">
                            {item.description}
                          </p>
                        </div>

                        {/* Micro Tags & Details */}
                        <div className="flex items-center justify-between pt-2 mt-2 text-[10px] uppercase tracking-wider text-[#77736B]">
                          <div className="flex items-center gap-2">
                            {item.isVegetarian && (
                              <span className="text-emerald-800 font-semibold flex items-center gap-1">
                                ● Veg
                              </span>
                            )}
                            {item.isChefSpecial && (
                              <span className="text-[#0B0B0B] font-semibold flex items-center gap-0.5">
                                ★ Chef's Special
                              </span>
                            )}
                            {item.timing && <span>{item.timing}</span>}
                          </div>
                          <span className="group-hover:text-[#0B0B0B] group-hover:translate-x-0.5 transition-all text-xs">
                            Details →
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Footer Note */}
        <ScrollReveal delay={0.2} className="mt-16 text-center border-t border-[#171717]/15 pt-8 max-w-2xl mx-auto space-y-4">
          <p className="font-editorial italic text-base text-[#77736B]">
            “Please let your server know of any dietary restrictions or food allergies prior to ordering. Prices are in Indian Rupees (INR), taxes extra as applicable.”
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('reservation')}
              className="px-8 py-3 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-medium"
            >
              Reserve a Table to Dine
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

