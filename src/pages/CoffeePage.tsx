import React from 'react';
import { PageId, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { OrnamentalDivider, OrnamentalFrame } from '../components/OrnamentalBorder';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { Coffee, Droplets, Sparkles, Flame, Leaf, Sun } from 'lucide-react';
import { motion } from 'motion/react';

interface CoffeePageProps {
  onNavigate: (page: PageId) => void;
  onSelectItem: (item: MenuItem) => void;
}

export const CoffeePage: React.FC<CoffeePageProps> = ({ onNavigate, onSelectItem }) => {
  const hotCoffees = MENU_ITEMS.filter((i) => i.category === 'coffee-hot-beverages');
  const coldBeverages = MENU_ITEMS.filter((i) => i.category === 'cold-shakes-coolers');

  return (
    <div className="min-h-screen bg-[#F7F5EF] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Masthead Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#77736B] font-medium">
            Specialty Roastery & Fresh Juices
          </span>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#0B0B0B] mt-2 mb-3">
            Stay for Coffee.
          </h1>
          <OrnamentalDivider label="100% Arabica & Cold Pressed" />
          <p className="font-editorial italic text-2xl text-[#77736B]">
            “Dialed in, roasted with care, and extracted without haste.”
          </p>
        </ScrollReveal>

        {/* Editorial Photo Trio Banner with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative aspect-[3/4] overflow-hidden bg-[#171717] group border border-[#171717]/15"
            >
              <img
                src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=85"
                alt="Fresh Espresso extraction"
                className="w-full h-full object-cover object-center img-editorial group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8B4AA]">
                  Espresso Bar
                </span>
                <h3 className="font-serif-display text-xl text-white font-light">
                  Single Origin Extractions
                </h3>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative aspect-[3/4] overflow-hidden bg-[#171717] group border border-[#171717]/15"
            >
              <img
                src="https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85"
                alt="Velvety Latte Art"
                className="w-full h-full object-cover object-center img-editorial group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8B4AA]">
                  Micro Foam
                </span>
                <h3 className="font-serif-display text-xl text-white font-light">
                  Velvety Steamed Milk
                </h3>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative aspect-[3/4] overflow-hidden bg-[#171717] group border border-[#171717]/15"
            >
              <img
                src="https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=800&q=85"
                alt="Cold pressed juices"
                className="w-full h-full object-cover object-center img-editorial group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8B4AA]">
                  Fresh Daily
                </span>
                <h3 className="font-serif-display text-xl text-white font-light">
                  Cold Pressed ECR Coolers
                </h3>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* 2-Column Editorial Spread: Hot Coffee on Left, Cold Coolers on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column: Hot Specialty Coffees */}
          <ScrollReveal direction="left" className="bg-[#F7F5EF] border border-[#171717]/25 p-6 sm:p-10">
            <div className="flex items-center gap-3 border-b border-[#171717]/15 pb-4 mb-6">
              <Flame size={20} className="text-[#171717]" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736B]">
                  Hot Brews
                </span>
                <h3 className="font-serif-display text-3xl text-[#0B0B0B]">
                  Specialty Coffee & Teas
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {hotCoffees.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 4 }}
                  onClick={() => onSelectItem(item)}
                  className="group cursor-pointer border-b border-[#171717]/10 pb-4 hover:bg-[#EFECE4]/50 p-2 -mx-2 transition-colors"
                >
                  <div className="flex justify-between items-baseline gap-4">
                    <h4 className="font-serif-display text-xl text-[#0B0B0B] group-hover:underline underline-offset-4 decoration-1">
                      {item.name}
                    </h4>
                    <span className="font-serif-display text-xl font-bold text-[#0B0B0B] shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#77736B] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Cold Shakes & Fresh Coolers */}
          <ScrollReveal direction="right" delay={0.15} className="bg-[#F7F5EF] border border-[#171717]/25 p-6 sm:p-10">
            <div className="flex items-center gap-3 border-b border-[#171717]/15 pb-4 mb-6">
              <Droplets size={20} className="text-[#171717]" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736B]">
                  Chilled & Cold Pressed
                </span>
                <h3 className="font-serif-display text-3xl text-[#0B0B0B]">
                  Shakes, Coolers & Vitality
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {coldBeverages.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 4 }}
                  onClick={() => onSelectItem(item)}
                  className="group cursor-pointer border-b border-[#171717]/10 pb-4 hover:bg-[#EFECE4]/50 p-2 -mx-2 transition-colors"
                >
                  <div className="flex justify-between items-baseline gap-4">
                    <h4 className="font-serif-display text-xl text-[#0B0B0B] group-hover:underline underline-offset-4 decoration-1">
                      {item.name}
                    </h4>
                    <span className="font-serif-display text-xl font-bold text-[#0B0B0B] shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#77736B] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Coffee Philosophy Callout */}
        <ScrollReveal className="bg-[#0B0B0B] text-[#F7F5EF] p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 border border-[#171717]">
          <span className="text-xs uppercase tracking-[0.3em] text-[#77736B]">
            From Bean to Cup
          </span>
          <h3 className="font-serif-display text-3xl sm:text-4xl text-white font-normal">
            Brewed to order, every single time.
          </h3>
          <p className="font-sans text-sm text-[#EFECE4] max-w-xl mx-auto leading-relaxed">
            We use calibrated water filtration, precise extraction ratios, and milk steamed at optimal sweetness temperatures (60-65°C) to highlight the natural profile of each coffee bean.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('bakery')}
              className="px-6 py-3 bg-[#F7F5EF] text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#EFECE4] transition-colors"
            >
              Pair with Bakehouse Pastries
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('reservation')}
              className="px-6 py-3 border border-[#77736B] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-medium hover:border-white transition-colors"
            >
              Reserve a Coffee Table
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

