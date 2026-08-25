import React from 'react';
import { TrystLogo } from './TrystLogo';
import { OrnamentalDivider } from './OrnamentalBorder';
import { PageId } from '../types';
import { MapPin, Phone, Clock, Instagram, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-[#F7F5EF] pt-20 pb-12 border-t border-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center Editorial Masthead */}
        <div className="flex flex-col items-center text-center mb-12">
          <TrystLogo variant="light" size="xl" onClick={scrollToTop} />
          <p className="font-editorial italic text-lg sm:text-xl text-[#EFECE4] mt-4 tracking-wide font-light max-w-md">
            “Good food. Good coffee. Take your time.”
          </p>
          <span className="text-xs uppercase tracking-[0.35em] text-[#77736B] mt-2">
            Neelankarai · East Coast Road · Chennai
          </span>
        </div>

        {/* Geometric Ornamental Border Detail */}
        <div className="w-full max-w-3xl mx-auto my-8">
          <OrnamentalDivider variant="light" label="Bakehouse & All-Day Dining" />
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10 border-y border-[#171717]/80 my-8">
          {/* Col 1: Brand Concept */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#EFECE4] font-medium">
              The Café
            </h4>
            <p className="text-sm font-sans text-[#77736B] leading-relaxed">
              A serene coastal dining sanctuary on ECR offering handcrafted artisan breads,
              specialty roasted coffee, French viennoiserie, nourishing bowls, and continental dinner mains.
            </p>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#EFECE4] font-medium">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#77736B]">
              <li>
                <button
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="hover:text-[#F7F5EF] transition-colors"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('menu'); scrollToTop(); }}
                  className="hover:text-[#F7F5EF] transition-colors"
                >
                  Full Menu & Prices
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('story'); scrollToTop(); }}
                  className="hover:text-[#F7F5EF] transition-colors"
                >
                  Our Story & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('bakery'); scrollToTop(); }}
                  className="hover:text-[#F7F5EF] transition-colors"
                >
                  The Bakehouse & Patisserie
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('coffee'); scrollToTop(); }}
                  className="hover:text-[#F7F5EF] transition-colors"
                >
                  Specialty Coffee & Drinks
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('gallery'); scrollToTop(); }}
                  className="hover:text-[#F7F5EF] transition-colors"
                >
                  Visual Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Service */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#EFECE4] font-medium">
              Timings & Service
            </h4>
            <div className="space-y-3 text-sm text-[#77736B]">
              <div>
                <p className="text-xs text-[#EFECE4] font-medium">Breakfast & Coffee</p>
                <p>7:30 AM — 11:00 AM Daily</p>
              </div>
              <div>
                <p className="text-xs text-[#EFECE4] font-medium">All-Day Dining & Mains</p>
                <p>12:00 PM — 10:30 PM</p>
              </div>
              <div>
                <p className="text-xs text-[#EFECE4] font-medium">Artisan Bakehouse</p>
                <p>Fresh batches starting 6:30 AM</p>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#EFECE4] font-medium">
              Visit & Inquiries
            </h4>
            <div className="space-y-2 text-sm text-[#77736B]">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-[#EFECE4] shrink-0 mt-0.5" />
                <span>359, East Coast Road, Saraswathi Nagar, Neelankarai, Chennai, Tamil Nadu 600115</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone size={16} className="text-[#EFECE4] shrink-0" />
                <a href="tel:09150622287" className="text-[#F7F5EF] hover:underline">
                  091506 22287
                </a>
              </p>
              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[#171717] hover:border-[#77736B] text-[#EFECE4] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <button
                  onClick={() => { onNavigate('reservation'); scrollToTop(); }}
                  className="text-xs uppercase tracking-[0.15em] text-[#F7F5EF] underline underline-offset-4 hover:opacity-80"
                >
                  Book A Table →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-[#77736B] gap-4">
          <p>© {new Date().getFullYear()} Tryst Café Neelankarai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => { onNavigate('events'); scrollToTop(); }}
              className="hover:text-[#F7F5EF] transition-colors"
            >
              Private Events
            </button>
            <button
              onClick={() => { onNavigate('contact'); scrollToTop(); }}
              className="hover:text-[#F7F5EF] transition-colors"
            >
              Location & Map
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#F7F5EF] transition-colors uppercase tracking-widest text-[11px]"
            >
              Back to Top <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
