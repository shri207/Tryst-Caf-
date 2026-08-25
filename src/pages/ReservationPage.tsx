import React, { useState } from 'react';
import { PageId, ReservationData } from '../types';
import { OrnamentalDivider, OrnamentalFrame } from '../components/OrnamentalBorder';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { Calendar, Clock, Users, Phone, MapPin, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReservationPageProps {
  onNavigate: (page: PageId) => void;
  prefillDish?: string | null;
}

export const ReservationPage: React.FC<ReservationPageProps> = ({ onNavigate, prefillDish }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM - Morning Brunch',
    guests: 2,
    seatingPreference: 'indoor-cozy',
    occasion: '',
    specialRequests: prefillDish ? `I would love to enjoy the ${prefillDish}.` : '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const timeSlots = [
    '08:00 AM — Morning Breakfast',
    '09:30 AM — Mid-Morning Coffee',
    '11:00 AM — Morning Brunch',
    '12:30 PM — Lunch Service',
    '02:00 PM — Late Lunch',
    '04:00 PM — High Tea & Patisserie',
    '06:30 PM — Early Dinner',
    '08:00 PM — Prime Dinner',
    '09:15 PM — Late Dinner',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `TRYST-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setBookingConfirmed(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Masthead Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.35em] text-[#77736B] font-medium">
            Tryst Café · Neelankarai
          </span>
          <h1 className="font-serif-display text-5xl sm:text-6xl font-normal text-[#0B0B0B] mt-2 mb-3">
            Reserve a Table
          </h1>
          <OrnamentalDivider label="A Table Awaits" />
          <p className="font-editorial italic text-2xl text-[#77736B]">
            “We'll save you a seat.”
          </p>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {bookingConfirmed ? (
            /* Confirmation Ticket Card */
            <motion.div
              key="confirmation-ticket"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F7F5EF] border border-[#171717] p-8 sm:p-12 shadow-xl max-w-2xl mx-auto"
            >
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 14, stiffness: 200, delay: 0.1 }}
                  className="w-14 h-14 rounded-full bg-[#0B0B0B] text-[#F7F5EF] flex items-center justify-center mx-auto mb-2"
                >
                  <CheckCircle size={28} />
                </motion.div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#77736B]">
                  Reservation Confirmed
                </span>
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B0B0B]">
                  We look forward to welcoming you, {formData.name}.
                </h2>

                <div className="bg-[#EFECE4] border border-[#171717]/15 p-6 my-6 text-left space-y-3">
                  <div className="flex justify-between items-baseline border-b border-[#171717]/15 pb-2">
                    <span className="text-xs uppercase tracking-wider text-[#77736B]">Booking Ref</span>
                    <span className="font-mono text-sm font-bold text-[#0B0B0B]">{confirmationCode}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#77736B] block">Date:</span>
                      <strong className="text-[#0B0B0B] text-sm">{formData.date}</strong>
                    </div>
                    <div>
                      <span className="text-[#77736B] block">Time Slot:</span>
                      <strong className="text-[#0B0B0B] text-sm">{formData.timeSlot}</strong>
                    </div>
                    <div>
                      <span className="text-[#77736B] block">Party Size:</span>
                      <strong className="text-[#0B0B0B] text-sm">{formData.guests} Guests</strong>
                    </div>
                    <div>
                      <span className="text-[#77736B] block">Seating Area:</span>
                      <strong className="text-[#0B0B0B] text-sm capitalize">
                        {formData.seatingPreference.replace('-', ' ')}
                      </strong>
                    </div>
                  </div>
                  {formData.specialRequests && (
                    <div className="pt-2 border-t border-[#171717]/10 text-xs">
                      <span className="text-[#77736B] block">Special Request:</span>
                      <p className="text-[#0B0B0B] italic">{formData.specialRequests}</p>
                    </div>
                  )}
                </div>

                <p className="text-xs text-[#77736B] leading-relaxed">
                  A confirmation SMS / email reminder has been prepared. For immediate changes or directions, please call us directly at <strong>091506 22287</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onNavigate('menu')}
                    className="px-6 py-3 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-widest"
                  >
                    Explore Menu While You Wait
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setBookingConfirmed(false)}
                    className="px-6 py-3 border border-[#171717] text-[#171717] text-xs uppercase tracking-widest hover:bg-[#EFECE4]"
                  >
                    Make Another Reservation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* The Reservation Form */
            <ScrollReveal delay={0.1}>
              <div className="bg-[#EFECE4] border border-[#171717]/25 p-6 sm:p-12 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#77736B] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Iyer"
                        className="w-full p-3 text-xs bg-[#F7F5EF] border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#77736B] mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 098400 12345"
                        className="w-full p-3 text-xs bg-[#F7F5EF] border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#77736B] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@example.com"
                        className="w-full p-3 text-xs bg-[#F7F5EF] border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#77736B] mb-2">
                        Number of Guests *
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                        className="w-full p-3 text-xs bg-[#F7F5EF] border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#77736B] mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full p-3 text-xs bg-[#F7F5EF] border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#77736B] mb-2">
                        Time Slot *
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full p-3 text-xs bg-[#F7F5EF] border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                      >
                        {timeSlots.map((slot, idx) => (
                          <option key={idx} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Seating Preference & Occasion */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#77736B] mb-2">
                        Seating Area Preference
                      </label>
                      <select
                        value={formData.seatingPreference}
                        onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value as any })}
                        className="w-full p-3 text-xs bg-[#F7F5EF] border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                      >
                        <option value="indoor-cozy">Cozy Indoor Air-Conditioned</option>
                        <option value="outdoor-open-air">Open-Air Green Courtyard</option>
                        <option value="patio-corner">Quiet Veranda / Corner</option>
                        <option value="no-preference">First Available Table</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#77736B] mb-2">
                        Occasion (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        placeholder="e.g. Birthday, Anniversary, Casual Brunch"
                        className="w-full p-3 text-xs bg-[#F7F5EF] border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#77736B] mb-2">
                      Special Requests / Dietary Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="High chair needed, quiet table for laptop work, food allergies..."
                      className="w-full p-3 text-xs bg-[#F7F5EF] border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4 space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full py-4 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#171717] transition-colors shadow-sm cursor-pointer"
                    >
                      Request a Reservation
                    </motion.button>

                    {/* Direct Call hotline option */}
                    <div className="text-center pt-2 text-xs text-[#77736B]">
                      Prefer to speak with our host immediately? Call{' '}
                      <a
                        href="tel:09150622287"
                        className="text-[#0B0B0B] font-bold underline underline-offset-4"
                      >
                        091506 22287
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

