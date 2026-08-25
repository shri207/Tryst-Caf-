import React from 'react';
import { MenuItem } from '../types';
import { X, Sparkles, Clock, Utensils, Coffee } from 'lucide-react';
import { OrnamentalFrame } from './OrnamentalBorder';
import { motion, AnimatePresence } from 'motion/react';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onReserveForDish?: (dishName: string) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  onReserveForDish,
}) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 28,
            }}
            className="relative w-full max-w-2xl bg-[#F7F5EF] text-[#171717] overflow-hidden shadow-2xl border border-[#171717]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-[#F7F5EF]/90 border border-[#171717]/20 text-[#171717] hover:bg-[#171717] hover:text-[#F7F5EF] transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </motion.button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 sm:h-full min-h-[260px] overflow-hidden bg-[#EFECE4]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
                {item.isChefSpecial && (
                  <span className="absolute top-3 left-3 bg-[#0B0B0B] text-[#F7F5EF] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium">
                    Chef's Signature
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-[#171717]/10 pb-2">
                    <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#77736B]">
                      {item.categoryTitle}
                    </span>
                    <span className="font-serif-display text-2xl font-bold text-[#0B0B0B]">
                      ₹{item.price}
                      {item.priceSecondary && (
                        <span className="text-sm font-normal text-[#77736B]">
                          {' '}/ ₹{item.priceSecondary}
                        </span>
                      )}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl sm:text-3xl font-normal leading-snug text-[#0B0B0B]">
                    {item.name}
                  </h3>

                  <p className="font-sans text-sm text-[#77736B] leading-relaxed">
                    {item.description}
                  </p>

                  {item.timing && (
                    <p className="flex items-center gap-1.5 text-xs text-[#171717] font-medium pt-1">
                      <Clock size={13} className="text-[#77736B]" />
                      <span>Service window: {item.timing}</span>
                    </p>
                  )}

                  {item.pairing && (
                    <div className="bg-[#EFECE4] p-3 border-l-2 border-[#0B0B0B] text-xs space-y-0.5">
                      <span className="uppercase tracking-widest text-[10px] text-[#77736B] font-medium flex items-center gap-1">
                        <Coffee size={12} /> Recommended Pairing
                      </span>
                      <p className="font-medium text-[#0B0B0B]">{item.pairing}</p>
                    </div>
                  )}

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] tracking-wider uppercase bg-[#EFECE4] text-[#171717] px-2 py-0.5 border border-[#B8B4AA]/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-[#171717]/10 flex items-center gap-3">
                  {onReserveForDish && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        onReserveForDish(item.name);
                        onClose();
                      }}
                      className="flex-1 py-2.5 px-4 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-medium text-center border border-[#0B0B0B] hover:bg-transparent hover:text-[#0B0B0B] transition-colors"
                    >
                      Reserve a Table for This
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onClose}
                    className="py-2.5 px-4 bg-transparent text-[#77736B] text-xs uppercase tracking-[0.15em] hover:text-[#0B0B0B] border border-transparent hover:border-[#171717]/20 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

