import React, { useState } from 'react';
import { PageId } from '../types';
import { OrnamentalDivider, OrnamentalFrame } from '../components/OrnamentalBorder';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { MapPin, Phone, Clock, Mail, Instagram, ExternalLink, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [sent, setSent] = useState(false);
  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#77736B] font-medium">
            Find Us on East Coast Road
          </span>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#0B0B0B] mt-2 mb-3">
            Visit Tryst Café
          </h1>
          <OrnamentalDivider label="Neelankarai · Chennai" />
          <p className="font-editorial italic text-2xl text-[#77736B]">
            “An easy drive along the coast, steps from the sea air.”
          </p>
        </ScrollReveal>

        {/* Location & Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left 5 cols: Details */}
          <ScrollReveal direction="left" className="lg:col-span-5 space-y-8">
            <div className="bg-[#EFECE4] border border-[#171717]/15 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736B]">
                  Location & Address
                </span>
                <h3 className="font-serif-display text-2xl text-[#0B0B0B] mt-1 mb-2">
                  Tryst Café
                </h3>
                <p className="font-sans text-sm text-[#171717] leading-relaxed flex items-start gap-2.5">
                  <MapPin size={18} className="text-[#0B0B0B] shrink-0 mt-0.5" />
                  <span>
                    359, East Coast Road, Saraswathi Nagar, Neelankarai, Chennai, Tamil Nadu 600115
                  </span>
                </p>
                <div className="mt-4 pt-4 border-t border-[#171717]/10">
                  <a
                    href="https://maps.google.com/?q=Tryst+Cafe+Neelankarai+Chennai"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#0B0B0B] hover:underline"
                  >
                    Open in Google Maps <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <div className="border-t border-[#171717]/10 pt-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736B]">
                  Phone & Direct Inquiries
                </span>
                <p className="font-sans text-lg text-[#0B0B0B] font-medium mt-1 flex items-center gap-2.5">
                  <Phone size={18} className="text-[#0B0B0B]" />
                  <a href="tel:09150622287" className="hover:underline">
                    091506 22287
                  </a>
                </p>
                <span className="text-xs text-[#77736B] block mt-1">
                  Call for table reservations, pre-orders, and takeaway
                </span>
              </div>

              <div className="border-t border-[#171717]/10 pt-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736B]">
                  Service Timings
                </span>
                <div className="mt-2 space-y-2 text-xs text-[#171717]">
                  <p className="flex justify-between items-center">
                    <span>Café & Bakehouse:</span>
                    <strong className="text-[#0B0B0B]">Opens 7:30 AM Daily</strong>
                  </p>
                  <p className="flex justify-between items-center">
                    <span>Breakfast Service:</span>
                    <span>7:30 AM — 11:00 AM</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span>All-Day Mains & Dinner:</span>
                    <span>12:00 PM — 10:30 PM</span>
                  </p>
                </div>
              </div>

              <div className="border-t border-[#171717]/10 pt-6 flex items-center justify-between">
                <span className="text-xs text-[#77736B]">Follow along:</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] hover:opacity-75"
                >
                  <Instagram size={16} /> @trystcafe_chennai
                </a>
              </div>
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('reservation')}
                className="w-full py-3.5 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#171717] transition-colors"
              >
                Book a Table Now
              </motion.button>
            </div>
          </ScrollReveal>

          {/* Right 7 cols: Interactive Map + Quick Message Form */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-7 space-y-8">
            {/* Embedded Responsive Map */}
            <div className="border border-[#171717]/25 overflow-hidden bg-[#EFECE4] relative">
              <div className="p-3 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-widest flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MapPin size={14} /> Tryst Café on East Coast Road
                </span>
                <span className="text-[10px] text-[#B8B4AA]">Neelankarai, Chennai</span>
              </div>
              <iframe
                title="Tryst Cafe Neelankarai Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.751307686523!2d80.25203347594958!3d12.923707787387346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0c8b2111c1%3A0xe5a1b3be5d414e0!2sTryst%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-72 sm:h-80 border-0 filter grayscale-[20%] contrast-[1.05]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Contact / Feedback Form */}
            <div className="bg-[#F7F5EF] border border-[#171717]/20 p-6 sm:p-8">
              <h3 className="font-serif-display text-2xl text-[#0B0B0B] mb-2">
                Send a Message to the Team
              </h3>
              <p className="font-sans text-xs text-[#77736B] mb-6">
                Have a feedback, inquiry, or custom catering question? Send us a quick note.
              </p>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent-box"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-6 bg-[#EFECE4] border border-[#171717] text-center space-y-2"
                  >
                    <Check size={20} className="mx-auto text-[#0B0B0B]" />
                    <h4 className="font-serif-display text-xl text-[#0B0B0B]">Message Received</h4>
                    <p className="text-xs text-[#77736B]">
                      Thank you for reaching out. We will get back to you soon.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-[11px] uppercase tracking-widest text-[#0B0B0B] underline pt-2 cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleMessageSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#77736B] mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={messageForm.name}
                          onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                          className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#77736B] mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={messageForm.email}
                          onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                          className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#77736B] mb-1">
                        Message *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={messageForm.message}
                        onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                        placeholder="How can we assist you?"
                        className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none transition-colors"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-6 py-3 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#171717] transition-colors cursor-pointer"
                    >
                      Send Note
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

