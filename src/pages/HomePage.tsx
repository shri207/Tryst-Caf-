import React, { useRef } from 'react';
import { PageId, MenuItem } from '../types';
import { FEATURED_DISHES, MENU_ITEMS } from '../data/menuData';
import { OrnamentalDivider, OrnamentalFrame } from '../components/OrnamentalBorder';
import { TrystLogo } from '../components/TrystLogo';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { ArrowRight, Clock, Coffee, MapPin, Sparkles, Utensils, Sun, Compass } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectItem: (item: MenuItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectItem }) => {
  const breakfastItems = MENU_ITEMS.filter((i) => i.category === 'breakfast-eggs').slice(0, 6);
  const dinnerItems = MENU_ITEMS.filter(
    (i) => i.category === 'chicken-steak' || i.category === 'seafood' || i.category === 'lamb-steak'
  ).slice(0, 4);

  // Parallax for Hero section
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroImageY = useTransform(heroScroll, [0, 1], ['0%', '22%']);
  const heroImageScale = useTransform(heroScroll, [0, 1], [1, 1.08]);
  const heroContentOpacity = useTransform(heroScroll, [0, 0.75], [1, 0]);
  const heroContentY = useTransform(heroScroll, [0, 0.75], [0, 40]);

  return (
    <div className="min-h-screen bg-[#F7F5EF] overflow-hidden">
      {/* 1. HERO SECTION - Cinematic 60fps Parallax & Refined Editorial Typography */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Background atmospheric image with 60fps GPU parallax */}
        <motion.div
          style={{ y: heroImageY, scale: heroImageScale }}
          className="absolute inset-0 z-0 origin-center gpu-layer"
        >
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85"
            alt="Tryst Café sunlit courtyard ambiance"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5EF] via-[#F7F5EF]/75 to-[#F7F5EF]/40" />
        </motion.div>

        {/* Hero Content Box with smooth entry and scroll opacity */}
        <motion.div
          style={{ opacity: heroContentOpacity, y: heroContentY }}
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gpu-layer"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-[#171717]/25 bg-[#F7F5EF]/80 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#171717]">
              Neelankarai · East Coast Road · Chennai
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="my-2 scale-110 sm:scale-125"
          >
            <TrystLogo variant="dark" size="xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-editorial italic text-2xl sm:text-4xl md:text-5xl font-light text-[#0B0B0B] mt-4 mb-3 tracking-tight max-w-2xl leading-tight"
          >
            Good food. Good coffee. Take your time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-xs sm:text-sm uppercase tracking-[0.28em] text-[#77736B] mb-8 font-medium"
          >
            Café · Bakehouse · Patisserie · All-Day Dining
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('reservation')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.22em] font-medium border border-[#0B0B0B] hover:bg-transparent hover:text-[#0B0B0B] transition-colors shadow-sm"
            >
              Reserve a Table
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[#0B0B0B] text-xs uppercase tracking-[0.22em] font-medium border border-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#F7F5EF] transition-colors"
            >
              Explore the Menu
            </motion.button>
          </motion.div>

          {/* Quick status badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 text-xs text-[#77736B] tracking-wider border-t border-[#171717]/15 pt-4"
          >
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#0B0B0B]" /> Open Daily from 7:30 AM
            </span>
            <span className="hidden sm:inline text-[#B8B4AA]">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Sun size={13} className="text-[#0B0B0B]" /> Indoor & Open-Air Seating
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. INTRO SECTION - "A little place to linger" (Asymmetrical Two-Column) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#171717]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Large Statement */}
          <ScrollReveal direction="left" className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#77736B] font-medium">
              Welcome to Tryst
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#0B0B0B]">
              A little place to linger on ECR.
            </h2>
            <div className="w-16 h-[1.5px] bg-[#0B0B0B] my-4" />
            <p className="font-editorial text-xl sm:text-2xl italic text-[#77736B] leading-relaxed">
              “A beautiful ECR café where you can slow down, eat well, drink good coffee, and stay awhile.”
            </p>
          </ScrollReveal>

          {/* Right Brand Narrative */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-6 space-y-6 lg:pl-6 border-l-0 lg:border-l border-[#171717]/15">
            <p className="font-sans text-base text-[#171717] leading-relaxed">
              Tryst Café is an unhurried sanctuary tucked into Neelankarai along Chennai's East Coast Road.
              Born from a love for true artisan baking, slow mornings, and honest European culinary traditions,
              we bring together fresh morning viennoiserie, specialty espresso, nourishing bowls, and satisfying dinner mains.
            </p>
            <p className="font-sans text-sm text-[#77736B] leading-relaxed">
              Whether you are meeting friends over shakshuka and fresh-baked croissants, working from a quiet sun-dappled corner with an iced latte, or settling in for an evening of grilled salmon and slow-braised lamb shank, Tryst is crafted for moments that should not be rushed.
            </p>
            <div className="pt-2">
              <motion.button
                whileHover={{ x: 3 }}
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#0B0B0B] hover:opacity-75 transition-opacity group"
              >
                Discover Our Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. SIGNATURE MENU SECTION - "From Our Kitchen" (6-8 Featured Dishes) */}
      <section className="py-20 bg-[#EFECE4] px-4 sm:px-6 lg:px-8 border-y border-[#171717]/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[#77736B] font-medium">
              Curated Offerings
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-[#0B0B0B] mt-2 mb-4">
              From Our Kitchen
            </h2>
            <OrnamentalDivider />
            <p className="font-sans text-sm text-[#77736B]">
              Handcrafted daily using fresh coastal produce, heritage grains, and French baking techniques.
            </p>
          </ScrollReveal>

          {/* Editorial Dish Cards Grid with Stagger */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {FEATURED_DISHES.map((dish) => (
              <StaggerItem key={dish.id}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectItem(dish)}
                  className="group cursor-pointer bg-[#F7F5EF] border border-[#171717]/15 p-4 flex flex-col justify-between hover:border-[#171717] transition-colors hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] h-full"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#EFECE4] mb-4">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover object-center img-editorial group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {dish.isChefSpecial && (
                        <span className="absolute top-2 left-2 bg-[#0B0B0B] text-[#F7F5EF] text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 font-medium">
                          Chef's Choice
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between gap-2 border-b border-[#171717]/10 pb-2 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#77736B]">
                        {dish.categoryTitle}
                      </span>
                      <span className="font-serif-display text-lg font-bold text-[#0B0B0B]">
                        ₹{dish.price}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-xl font-normal text-[#0B0B0B] group-hover:underline underline-offset-4 decoration-1 leading-snug">
                      {dish.name}
                    </h3>

                    <p className="font-sans text-xs text-[#77736B] mt-2 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#171717]/10 flex items-center justify-between text-[11px] uppercase tracking-wider text-[#0B0B0B] font-medium">
                    <span>View Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2} className="mt-14 text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('menu')}
              className="px-10 py-4 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.25em] font-medium border border-[#0B0B0B] hover:bg-transparent hover:text-[#0B0B0B] transition-colors"
            >
              View Full Menu & Pricing
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. ALL-DAY BREAKFAST SECTION (7:30 AM – 11:00 AM Spread) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Large Image with Ornamental Frame */}
          <ScrollReveal direction="left" className="lg:col-span-5 order-2 lg:order-1">
            <OrnamentalFrame>
              <div className="aspect-[4/5] overflow-hidden bg-[#EFECE4]">
                <img
                  src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85"
                  alt="Avocado Toast with Poached Eggs at Tryst"
                  className="w-full h-full object-cover object-center img-editorial"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-[#171717]/15 text-center">
                <span className="font-editorial italic text-base text-[#171717]">
                  Served daily with house sourdough & farm fresh eggs
                </span>
              </div>
            </OrnamentalFrame>
          </ScrollReveal>

          {/* Right Structured Breakfast Menu */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#77736B] font-medium">
                Morning Service · 7:30 AM — 11:00 AM
              </span>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-[#0B0B0B] mt-2 mb-3">
                Breakfast, whenever you feel like it.
              </h2>
              <p className="font-sans text-sm text-[#77736B] leading-relaxed">
                From golden-yolked farm eggs Benedict to spiced Akkuri pav and warm Parisian Croque Monsieur, our morning kitchen is built around fresh sourdough, cultured butter, and slow mornings.
              </p>
            </div>

            <div className="divide-y divide-[#171717]/15 border-y border-[#171717]/15">
              {breakfastItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 4 }}
                  onClick={() => onSelectItem(item)}
                  className="py-3.5 flex items-baseline justify-between gap-4 group cursor-pointer hover:bg-[#EFECE4]/50 px-2 transition-colors"
                >
                  <div className="space-y-0.5">
                    <h3 className="font-serif-display text-lg sm:text-xl text-[#0B0B0B] group-hover:text-black group-hover:underline underline-offset-4 decoration-1">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-[#77736B] line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-serif-display text-lg font-bold text-[#0B0B0B] shrink-0">
                    ₹{item.price}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('menu')}
                className="px-6 py-3 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-[#0B0B0B] border border-[#0B0B0B] transition-colors"
              >
                See All Breakfast Items
              </motion.button>
              <motion.button
                whileHover={{ x: 2 }}
                onClick={() => onNavigate('reservation')}
                className="text-xs uppercase tracking-[0.18em] font-medium text-[#0B0B0B] underline underline-offset-4 hover:opacity-75"
              >
                Reserve Morning Table →
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. BAKERY & PATISSERIE SECTION - "Fresh from the Bakehouse" (Irregular Editorial Layout) */}
      <section className="py-20 bg-[#0B0B0B] text-[#F7F5EF] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#171717]">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#77736B] font-medium">
                Artisan Viennoiserie & Patisserie
              </span>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-[#F7F5EF] mt-2">
                Fresh from the Bakehouse
              </h2>
            </div>
            <p className="font-editorial italic text-base text-[#EFECE4] mt-4 md:mt-0 max-w-md text-right md:text-left">
              “Flaky croissants, molten Basque cheesecakes, and wild sourdough loaves baked fresh every single sunrise.”
            </p>
          </ScrollReveal>

          {/* Irregular Editorial Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Big Left Feature */}
            <ScrollReveal direction="left" className="md:col-span-7 relative group overflow-hidden bg-[#171717] min-h-[380px] sm:min-h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85"
                alt="Fresh Butter Croissants at Tryst"
                className="w-full h-full object-cover object-center img-editorial group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#B8B4AA]">
                  Daily at 6:30 AM
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-light mt-1">
                  100% French Butter Laminated Croissants
                </h3>
                <p className="font-sans text-xs text-[#EFECE4] mt-2 max-w-lg">
                  Twenty-seven micro layers of pure cultured butter, hand rolled and baked to an airy, golden honeycomb crumb.
                </p>
              </div>
            </ScrollReveal>

            {/* Right 2 Stacked Cards */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Stack 1 */}
              <ScrollReveal direction="right" delay={0.1} className="relative group overflow-hidden bg-[#171717] min-h-[220px] flex-1">
                <img
                  src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85"
                  alt="San Sebastian Basque Cheesecake"
                  className="w-full h-full object-cover object-center img-editorial group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8B4AA]">
                    Patisserie
                  </span>
                  <h4 className="font-serif-display text-xl text-white font-normal">
                    San Sebastián Basque Cheesecake
                  </h4>
                  <span className="text-xs font-mono text-[#F7F5EF] mt-1">₹320</span>
                </div>
              </ScrollReveal>

              {/* Stack 2 */}
              <ScrollReveal direction="right" delay={0.2} className="relative group overflow-hidden bg-[#171717] min-h-[220px] flex-1">
                <img
                  src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=85"
                  alt="Artisanal Sourdough Loaf"
                  className="w-full h-full object-cover object-center img-editorial group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8B4AA]">
                    Bakehouse Loaves
                  </span>
                  <h4 className="font-serif-display text-xl text-white font-normal">
                    36-Hour Fermented Country Sourdough
                  </h4>
                  <span className="text-xs font-mono text-[#F7F5EF] mt-1">₹220</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.15} className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#171717]">
            <p className="text-xs text-[#77736B] tracking-wider uppercase">
              Takeaway loaves, whole cakes, and catering boxes available on pre-order.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('bakery')}
              className="px-6 py-3 bg-[#F7F5EF] text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#EFECE4] transition-colors"
            >
              Explore Bakehouse Selection →
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. COFFEE & BEVERAGES SECTION - "Stay for Coffee." */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#77736B] font-medium">
            Specialty Roasts & Cold Brews
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-[#0B0B0B] mt-2 mb-3">
            Stay for Coffee.
          </h2>
          <OrnamentalDivider />
          <p className="font-sans text-sm text-[#77736B]">
            From velvety double cappuccinos to single-estate pour overs, cold-pressed vitality juices, and thick nut shakes.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Coffee List Column 1 */}
          <ScrollReveal direction="left" className="lg:col-span-4 bg-[#EFECE4] p-6 sm:p-8 border border-[#171717]/15 space-y-4">
            <h3 className="font-serif-display text-2xl text-[#0B0B0B] border-b border-[#171717]/15 pb-2">
              Hot Specialty Coffee
            </h3>
            <ul className="divide-y divide-[#171717]/10 text-sm">
              <li className="py-2.5 flex justify-between items-center">
                <span>Cappuccino</span>
                <span className="font-serif-display font-bold">₹240</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Café Latte</span>
                <span className="font-serif-display font-bold">₹240</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Americano</span>
                <span className="font-serif-display font-bold">₹200</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Double Espresso</span>
                <span className="font-serif-display font-bold">₹240</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Café Mocha</span>
                <span className="font-serif-display font-bold">₹240</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Belgian Hot Chocolate</span>
                <span className="font-serif-display font-bold">₹270</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Hazelnut / Caramel Coffee</span>
                <span className="font-serif-display font-bold">₹270</span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Center Image Feature */}
          <ScrollReveal delay={0.1} className="lg:col-span-4 aspect-[3/4] overflow-hidden bg-[#171717] relative border border-[#171717]/20">
            <img
              src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=85"
              alt="Barista pulling fresh espresso at Tryst"
              className="w-full h-full object-cover object-center img-editorial"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <p className="font-editorial italic text-white text-lg">
                “100% Arabica, extracted to perfection.”
              </p>
            </div>
          </ScrollReveal>

          {/* Cold Shakes & Coolers Column 2 */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-4 bg-[#EFECE4] p-6 sm:p-8 border border-[#171717]/15 space-y-4">
            <h3 className="font-serif-display text-2xl text-[#0B0B0B] border-b border-[#171717]/15 pb-2">
              Cold Shakes & Fresh Coolers
            </h3>
            <ul className="divide-y divide-[#171717]/10 text-sm">
              <li className="py-2.5 flex justify-between items-center">
                <span>Immunity Booster Cold-Pressed</span>
                <span className="font-serif-display font-bold">₹260</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Watermelon Basil Fresh</span>
                <span className="font-serif-display font-bold">₹220</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Nuts Shake (Almond & Date)</span>
                <span className="font-serif-display font-bold">₹280</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Avocado & Dates Shake</span>
                <span className="font-serif-display font-bold">₹290</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Pomegranate Apple Sunset</span>
                <span className="font-serif-display font-bold">₹240</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Lemon Mint Cooler / Soda</span>
                <span className="font-serif-display font-bold">₹180</span>
              </li>
              <li className="py-2.5 flex justify-between items-center">
                <span>Organic Whole Leaf Tea</span>
                <span className="font-serif-display font-bold">₹110</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('coffee')}
            className="px-8 py-3 border border-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-medium text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#F7F5EF] transition-colors"
          >
            View Full Beverage Menu →
          </motion.button>
        </ScrollReveal>
      </section>

      {/* 7. "TAKE YOUR TIME" SECTION - Philosophy Spread */}
      <section className="py-24 bg-[#EFECE4] px-4 sm:px-6 lg:px-8 border-y border-[#171717]/15 text-center relative overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-[#77736B] font-medium">
            The Tryst Philosophy
          </span>
          <h2 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#0B0B0B] mt-4 mb-4 tracking-tight">
            TAKE YOUR TIME
          </h2>
          <p className="font-editorial italic text-2xl sm:text-3xl text-[#77736B] mb-8">
            “Good food doesn't need to be rushed.”
          </p>
          <div className="w-24 h-[1.5px] bg-[#0B0B0B] mx-auto mb-8" />
          <p className="font-sans text-sm sm:text-base text-[#171717] max-w-2xl mx-auto leading-relaxed">
            In a fast-paced city, Tryst is built as an antidote. We believe the best meals are accompanied by good books, lingering conversations, fresh sea breezes from the ECR coast, and another cup of coffee.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-[#77736B] font-medium">
            <span>Free Wi-Fi</span>
            <span>•</span>
            <span>Outdoor Courtyard</span>
            <span>•</span>
            <span>Pet Friendly Patio</span>
            <span>•</span>
            <span>All-Day Dining</span>
          </div>
        </ScrollReveal>
      </section>

      {/* 8. DINNER / MAIN COURSES (12:00 PM – 10:30 PM) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#77736B] font-medium">
              Afternoon & Evening Dining · 12:00 PM – 10:30 PM
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-[#0B0B0B] mt-2">
              Comforting Mains & Steaks
            </h2>
          </div>
          <p className="font-sans text-sm text-[#77736B] mt-4 md:mt-0 max-w-md">
            Hearty European continental plates, fresh coastal seafood, and slow-braised steaks prepared to order.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dinnerItems.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectItem(item)}
                className="bg-[#F7F5EF] border border-[#171717]/15 p-4 flex flex-col justify-between group cursor-pointer hover:border-[#171717] transition-colors hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] h-full"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#EFECE4] mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#171717]/10 pb-1.5 mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#77736B]">
                      {item.categoryTitle}
                    </span>
                    <span className="font-serif-display text-lg font-bold text-[#0B0B0B]">
                      ₹{item.price}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl text-[#0B0B0B] leading-snug group-hover:underline underline-offset-4">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs text-[#77736B] mt-1.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#171717]/10 text-[11px] uppercase tracking-wider text-[#0B0B0B] font-medium flex justify-between items-center">
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 9. LOCATION & RESERVATION BANNER */}
      <section className="py-16 bg-[#0B0B0B] text-[#F7F5EF] px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B8B4AA]">
              Join Us in Neelankarai
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl text-white font-light">
              We'll save you a seat.
            </h3>
            <p className="text-sm text-[#77736B] max-w-md">
              359, East Coast Road, Neelankarai, Chennai · Call 091506 22287
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('reservation')}
              className="px-8 py-3.5 bg-[#F7F5EF] text-[#0B0B0B] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#EFECE4] transition-colors"
            >
              Book a Table Online
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 border border-[#77736B] text-[#F7F5EF] text-xs uppercase tracking-[0.22em] font-medium hover:border-[#F7F5EF] transition-colors"
            >
              Directions & Map
            </motion.button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

