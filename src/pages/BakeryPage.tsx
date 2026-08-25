import React from 'react';
import { PageId, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { OrnamentalDivider, OrnamentalFrame } from '../components/OrnamentalBorder';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { Sparkles, Clock, Coffee, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BakeryPageProps {
  onNavigate: (page: PageId) => void;
  onSelectItem: (item: MenuItem) => void;
}

export const BakeryPage: React.FC<BakeryPageProps> = ({ onNavigate, onSelectItem }) => {
  const bakeryItems = MENU_ITEMS.filter((i) => i.category === 'bakery-patisserie');

  const bakehouseHighlights = [
    {
      title: 'French Viennoiserie',
      subtitle: 'Rolled fresh before dawn',
      desc: 'Handcrafted with 100% pure butter and laminated into 27 crisp, flaky layers.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85',
      items: ['Classic French Butter Croissant', 'Almond Frangipane Croissant', 'Pain au Chocolat'],
    },
    {
      title: 'Patisserie & Gateaux',
      subtitle: 'Refined sweet craftsmanship',
      desc: 'Classic European entremets, molten Basque cheesecakes, and rich Belgian chocolate.',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85',
      items: ['San Sebastián Basque Cheesecake', 'Belgian Dark Chocolate Gateau', 'Lemon Curd Tart'],
    },
    {
      title: 'Savoury Tarts & Quiches',
      subtitle: 'Warm afternoon bites',
      desc: 'Flaky shortcrust shells filled with fresh greens, French chevre cheese, and herbs.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85',
      items: ['Spinach & Goat Cheese Quiche', 'Caramelized Onion Tart', 'Mushroom Galette'],
    },
    {
      title: 'Wild Yeast Sourdoughs',
      subtitle: 'Slow 36-hour cold ferment',
      desc: 'Baked in small batches with blistered, caramelized crusts and chewy open crumbs.',
      image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=85',
      items: ['Country White Sourdough', 'Seeded Rye Boule', 'Brioche Loaf'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5EF] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Hero */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#77736B] font-medium">
            Artisan Baking & Patisserie
          </span>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#0B0B0B] mt-2 mb-3">
            The Bakehouse
          </h1>
          <OrnamentalDivider label="Crafted with French Butter" />
          <p className="font-editorial italic text-2xl text-[#77736B]">
            “Freshly baked. Beautifully made.”
          </p>
        </ScrollReveal>

        {/* Daily Schedule Banner */}
        <ScrollReveal delay={0.1} className="bg-[#EFECE4] border border-[#171717]/15 p-6 sm:p-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#77736B]">6:30 AM First Pull</span>
              <p className="font-serif-display text-xl text-[#0B0B0B]">Butter Croissants & Breads</p>
            </div>
            <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-[#171717]/15 py-4 sm:py-0">
              <span className="text-xs uppercase tracking-[0.2em] text-[#77736B]">11:00 AM Midday</span>
              <p className="font-serif-display text-xl text-[#0B0B0B]">Quiches & Savoury Bakes</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#77736B]">3:00 PM Tea Time</span>
              <p className="font-serif-display text-xl text-[#0B0B0B]">Fresh Cakes & Basque Slices</p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Pillars of the Bakehouse Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {bakehouseHighlights.map((block, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-[#F7F5EF] border border-[#171717]/20 p-6 flex flex-col justify-between group hover:border-[#171717] transition-colors hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] h-full"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#EFECE4] mb-5">
                    <img
                      src={block.image}
                      alt={block.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736B]">
                    {block.subtitle}
                  </span>
                  <h3 className="font-serif-display text-3xl text-[#0B0B0B] font-normal mt-1 mb-2">
                    {block.title}
                  </h3>
                  <p className="font-sans text-xs text-[#77736B] leading-relaxed mb-4">
                    {block.desc}
                  </p>
                  <div className="border-t border-[#171717]/10 pt-3">
                    <ul className="text-xs space-y-1 text-[#171717] font-medium">
                      {block.items.map((it, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#171717]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Full Bakery Menu Items with Price List */}
        <ScrollReveal className="bg-[#0B0B0B] text-[#F7F5EF] p-8 sm:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[#77736B]">
              Daily Offerings & Pricing
            </span>
            <h2 className="font-serif-display text-4xl text-white mt-1">
              From the Bakehouse Counter
            </h2>
            <div className="w-16 h-[1px] bg-[#77736B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bakeryItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ x: 4 }}
                onClick={() => onSelectItem(item)}
                className="flex items-start justify-between gap-4 p-4 border border-[#171717] hover:border-[#77736B] cursor-pointer transition-colors"
              >
                <div className="space-y-1">
                  <h4 className="font-serif-display text-xl text-white hover:underline underline-offset-4">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs text-[#77736B] line-clamp-2">
                    {item.description}
                  </p>
                  {item.pairing && (
                    <span className="text-[10px] text-[#B8B4AA] uppercase tracking-wider block pt-1">
                      Pairing: {item.pairing}
                    </span>
                  )}
                </div>
                <span className="font-serif-display text-2xl font-bold text-white shrink-0">
                  ₹{item.price}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Coffee Pairing Callout */}
        <ScrollReveal delay={0.15} className="bg-[#EFECE4] border border-[#171717]/15 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <Coffee size={28} className="mx-auto text-[#171717]" />
          <h3 className="font-serif-display text-3xl text-[#0B0B0B]">
            The Perfect Companion
          </h3>
          <p className="font-sans text-sm text-[#77736B] leading-relaxed">
            Every pastry at Tryst has a recommended coffee pairing—from a sharp single-origin espresso cutting through the richness of our butter croissants, to a velvety latte alongside our dark chocolate gateau.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('coffee')}
              className="px-6 py-3 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-medium"
            >
              View Coffee Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('reservation')}
              className="px-6 py-3 border border-[#0B0B0B] text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#0B0B0B] hover:text-[#F7F5EF] transition-colors"
            >
              Reserve a Table
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

