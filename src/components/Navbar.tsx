import React, { useState, useEffect } from 'react';
import { TrystLogo } from './TrystLogo';
import { PageId } from '../types';
import { Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Story' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F5EF]/95 backdrop-blur-md border-b border-[#171717]/15 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            : 'bg-[#F7F5EF]/85 backdrop-blur-sm border-b border-[#171717]/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on the left */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center cursor-pointer"
          >
            <TrystLogo
              variant="dark"
              size="md"
              onClick={() => handleNavClick('home')}
            />
          </motion.div>

          {/* Desktop Navigation Links with animated layout indicator */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[13px] tracking-[0.18em] uppercase transition-colors relative py-1.5 font-medium ${
                    isActive
                      ? 'text-[#0B0B0B] font-semibold'
                      : 'text-[#77736B] hover:text-[#0B0B0B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0B0B0B]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right side: Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleNavClick('reservation')}
              className={`hidden sm:inline-flex items-center justify-center px-4 py-2 text-[12px] uppercase tracking-[0.22em] font-medium border ${
                currentPage === 'reservation'
                  ? 'bg-[#0B0B0B] text-[#F7F5EF] border-[#0B0B0B]'
                  : 'bg-transparent text-[#0B0B0B] border-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#F7F5EF]'
              }`}
            >
              Reserve a Table
            </motion.button>

            {/* Mobile Menu Trigger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0B0B0B] hover:opacity-70 transition-opacity"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Mobile Menu with 60fps AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#F7F5EF] flex flex-col justify-between p-6 pt-24 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center text-center space-y-5 my-auto">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`font-display text-2xl tracking-wider transition-colors py-1 ${
                    currentPage === link.id
                      ? 'text-[#0B0B0B] font-semibold underline underline-offset-8 decoration-1'
                      : 'text-[#77736B] hover:text-[#0B0B0B]'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="pt-4 w-full max-w-xs"
              >
                <button
                  onClick={() => handleNavClick('reservation')}
                  className="w-full py-3.5 px-6 text-sm uppercase tracking-[0.2em] font-medium bg-[#0B0B0B] text-[#F7F5EF] border border-[#0B0B0B] hover:bg-transparent hover:text-[#0B0B0B] transition-colors"
                >
                  Reserve a Table
                </button>
              </motion.div>
            </div>

            {/* Quick info in mobile footer */}
            <div className="border-t border-[#171717]/15 pt-6 text-center text-xs text-[#77736B] space-y-2">
              <p className="flex items-center justify-center gap-2">
                <MapPin size={13} /> 359 East Coast Road, Neelankarai, Chennai
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock size={13} /> Open Daily from 7:30 AM
              </p>
              <a
                href="tel:09150622287"
                className="inline-flex items-center gap-2 text-[#0B0B0B] font-medium mt-1 tracking-wider"
              >
                <Phone size={13} /> 091506 22287
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

