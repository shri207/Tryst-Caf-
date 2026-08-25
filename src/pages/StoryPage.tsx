import React from 'react';
import { PageId } from '../types';
import { OrnamentalDivider, OrnamentalFrame } from '../components/OrnamentalBorder';
import { TrystLogo } from '../components/TrystLogo';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { Sun, Heart, Coffee, Utensils, Feather, Compass, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface StoryPageProps {
  onNavigate: (page: PageId) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F7F5EF] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Masthead Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#77736B] font-medium">
            Heritage & Atmosphere
          </span>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#0B0B0B] mt-2 mb-4">
            The story behind Tryst
          </h1>
          <OrnamentalDivider label="Neelankarai · ECR" />
          <p className="font-editorial italic text-2xl text-[#77736B] leading-relaxed">
            “A rendezvous designed for unhurried conversations, honest food, and time well spent.”
          </p>
        </ScrollReveal>

        {/* Editorial Narrative Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <ScrollReveal direction="left" className="lg:col-span-7 space-y-6 text-[#171717]">
            <span className="text-xs uppercase tracking-[0.25em] text-[#77736B] font-semibold">
              The Idea of a Sanctuary
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B0B0B] leading-tight">
              Where coastal air meets European bakehouse traditions.
            </h2>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#171717]">
              Along the stretch of East Coast Road, just minutes away from the rhythm of the Bay of Bengal, Tryst Café was founded as a quiet alternative to the rush of city life. The word <em>tryst</em> speaks of a meaningful meeting—an appointment made with intention, whether with an old friend, a loved one, or simply with oneself over a notebook and a fresh cup of coffee.
            </p>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#77736B]">
              From our very first batch of morning sourdough to the slow-braised mains that simmer through the evening, our kitchen is anchored in patience. We source wholesome ingredients, respect time-honored baking methods, and serve food that feels both comforting and distinctly refined.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-5">
            <OrnamentalFrame>
              <div className="aspect-[3/4] overflow-hidden bg-[#EFECE4]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=85"
                  alt="Cozy sunlit corner at Tryst Café"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[11px] font-sans text-[#77736B] tracking-wider uppercase">
                  Natural light & quiet spaces
                </span>
              </div>
            </OrnamentalFrame>
          </ScrollReveal>
        </div>

        {/* Full-width Pull Quote */}
        <ScrollReveal className="my-20 bg-[#EFECE4] border-y border-[#171717]/15 p-10 sm:p-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto text-[#171717]">
              <path d="M10 11H6a3 3 0 013-3V6a5 5 0 00-5 5v7h6v-7zM20 11h-4a3 3 0 013-3V6a5 5 0 00-5 5v7h6v-7z" fill="currentColor" />
            </svg>
            <blockquote className="font-serif-display text-3xl sm:text-4xl text-[#0B0B0B] font-light leading-snug">
              “We wanted to create a place where nobody watches the clock. Where you can come for breakfast at eight, stay through afternoon coffee, and leave only when you feel like it.”
            </blockquote>
            <span className="text-xs uppercase tracking-[0.25em] text-[#77736B] block pt-2">
              The Tryst Spirit
            </span>
          </div>
        </ScrollReveal>

        {/* Section: "Made for slow mornings and long evenings" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <ScrollReveal direction="left" className="lg:col-span-5 order-2 lg:order-1">
            <OrnamentalFrame>
              <div className="aspect-[4/5] overflow-hidden bg-[#EFECE4]">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=85"
                  alt="Evening dining ambiance at Tryst Café"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[11px] font-sans text-[#77736B] tracking-wider uppercase">
                  Warm evening dining
                </span>
              </div>
            </OrnamentalFrame>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#77736B] font-semibold">
              The Flow of the Day
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#0B0B0B] font-normal leading-tight">
              Made for slow mornings and long evenings.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#171717]">
              <p>
                <strong>At 7:30 AM</strong>, the aroma of freshly baked French butter croissants and espresso fills the air. Sunlight filters through the green canopy of our outdoor courtyard as the first breakfast tables receive their poached eggs and house-made chia bowls.
              </p>
              <p>
                <strong>By mid-day</strong>, the café settles into a gentle work-and-converse rhythm. Guests enjoy cold-pressed coolers, hearty bowls, and signature sandwiches.
              </p>
              <p>
                <strong>As dusk settles</strong> over the East Coast Road, the lighting softens. Wine glasses clink, acoustic melodies play softly, and the dinner service begins with Norwegian salmon, grilled chicken supreme, and slow-braised lamb shank.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('menu')}
                className="px-6 py-3 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-medium"
              >
                Browse Menu
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('reservation')}
                className="px-6 py-3 border border-[#0B0B0B] text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#0B0B0B] hover:text-[#F7F5EF] transition-colors"
              >
                Book Your Table
              </motion.button>
            </div>
          </ScrollReveal>
        </div>

        {/* 3 Brand Pillars */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#171717]/15">
          <StaggerItem>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-[#EFECE4] p-6 border border-[#171717]/10 space-y-2 h-full hover:border-[#171717] transition-colors"
            >
              <span className="text-xs font-mono text-[#77736B]">01</span>
              <h3 className="font-serif-display text-2xl text-[#0B0B0B]">Real Craft Baking</h3>
              <p className="font-sans text-xs text-[#77736B] leading-relaxed">
                No shortcuts. Real butter, wild sourdough ferments, and small-batch patisserie made fresh every morning.
              </p>
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-[#EFECE4] p-6 border border-[#171717]/10 space-y-2 h-full hover:border-[#171717] transition-colors"
            >
              <span className="text-xs font-mono text-[#77736B]">02</span>
              <h3 className="font-serif-display text-2xl text-[#0B0B0B]">Specialty Roast Coffee</h3>
              <p className="font-sans text-xs text-[#77736B] leading-relaxed">
                Ethically sourced 100% Arabica estate beans, dialed in and extracted with meticulous barista precision.
              </p>
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-[#EFECE4] p-6 border border-[#171717]/10 space-y-2 h-full hover:border-[#171717] transition-colors"
            >
              <span className="text-xs font-mono text-[#77736B]">03</span>
              <h3 className="font-serif-display text-2xl text-[#0B0B0B]">A Space to Breathe</h3>
              <p className="font-sans text-xs text-[#77736B] leading-relaxed">
                Generous outdoor courtyard seating, cozy indoor air-conditioned corners, and an atmosphere that honors relaxation.
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
};

