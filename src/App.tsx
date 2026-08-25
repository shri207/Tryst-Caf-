import React, { useState, useEffect } from 'react';
import { PageId, MenuItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ItemDetailModal } from './components/ItemDetailModal';
import { ScrollProgressBar } from './components/animations/ScrollProgressBar';
import { BackToTop } from './components/animations/BackToTop';
import { AnimatePresence, motion } from 'motion/react';

// Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { StoryPage } from './pages/StoryPage';
import { BakeryPage } from './pages/BakeryPage';
import { CoffeePage } from './pages/CoffeePage';
import { GalleryPage } from './pages/GalleryPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import { ReservationPage } from './pages/ReservationPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [prefillDish, setPrefillDish] = useState<string | null>(null);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleReserveForDish = (dishName: string) => {
    setPrefillDish(dishName);
    setCurrentPage('reservation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync title and SEO meta dynamically with page navigation
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Tryst Café — Bakehouse, Specialty Coffee & All-Day Dining | Neelankarai, Chennai',
      menu: 'The Full Menu & Prices — Tryst Café | Neelankarai, ECR',
      story: 'The Story Behind Tryst — Unhurried Living on ECR | Chennai',
      bakery: 'The Bakehouse & Patisserie — French Viennoiserie & Breads | Tryst Café',
      coffee: 'Stay for Coffee — Specialty Roasts & Coolers | Tryst Café',
      gallery: 'Visual Gallery — Moments & Life at Tryst | Neelankarai',
      events: 'Private Events & Gatherings — Celebrations & Brunches | Tryst Café',
      contact: 'Location & Contact — 359 East Coast Road, Neelankarai | Tryst Café',
      reservation: 'Reserve a Table — Book Online | Tryst Café Neelankarai',
    };

    document.title = titles[currentPage] || 'Tryst Café — Neelankarai, Chennai';
  }, [currentPage]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 12,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#171717] flex flex-col font-sans selection:bg-[#171717] selection:text-[#F7F5EF] relative">
      {/* 60fps Reading/Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Global Sticky Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content Area with 60fps Transition Support */}
      <main className="flex-1 w-full relative" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {currentPage === 'home' && (
              <HomePage onNavigate={handleNavigate} onSelectItem={handleSelectItem} />
            )}
            {currentPage === 'menu' && (
              <MenuPage onSelectItem={handleSelectItem} onNavigate={handleNavigate} />
            )}
            {currentPage === 'story' && (
              <StoryPage onNavigate={handleNavigate} />
            )}
            {currentPage === 'bakery' && (
              <BakeryPage onNavigate={handleNavigate} onSelectItem={handleSelectItem} />
            )}
            {currentPage === 'coffee' && (
              <CoffeePage onNavigate={handleNavigate} onSelectItem={handleSelectItem} />
            )}
            {currentPage === 'gallery' && (
              <GalleryPage />
            )}
            {currentPage === 'events' && (
              <EventsPage onNavigate={handleNavigate} />
            )}
            {currentPage === 'contact' && (
              <ContactPage onNavigate={handleNavigate} />
            )}
            {currentPage === 'reservation' && (
              <ReservationPage onNavigate={handleNavigate} prefillDish={prefillDish} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Quick Dish Inspection Modal */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onReserveForDish={handleReserveForDish}
      />

      {/* Floating 60fps Back-to-Top Button */}
      <BackToTop />

      {/* Global Oversized Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

