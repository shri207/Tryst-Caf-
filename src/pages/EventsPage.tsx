import React, { useState } from 'react';
import { PageId } from '../types';
import { OrnamentalDivider, OrnamentalFrame } from '../components/OrnamentalBorder';
import { Calendar, Users, Clock, Sparkles, Check, Phone, Mail, ArrowRight } from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: PageId) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Birthday Gathering',
    guestCount: '15-25 guests',
    preferredDate: '',
    timeSlot: 'Morning Brunch (9:30 AM - 12:30 PM)',
    seatingArea: 'Outdoor Green Courtyard',
    notes: '',
  });

  const eventTypes = [
    {
      title: 'Birthday & Family Celebrations',
      desc: 'Celebrate under the leafy canopy with custom whole cakes from our bakehouse, celebratory brunch platters, and coffee.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: 'Weekend Brunches & Socials',
      desc: 'Private high tea or leisurely all-day breakfast spreads with cold-pressed juices and French viennoiserie.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: 'Intimate Dinners & Gatherings',
      desc: 'Warm acoustic ambience, bespoke multi-course European continental menus, grilled steaks, and decadent dessert courses.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: 'Creative Meetups & Corporate',
      desc: 'Quiet, inspiring sunlit corners with high-speed Wi-Fi, artisanal espresso bars, and light healthy bowl lunch spreads.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=85',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#77736B] font-medium">
            Private Events & Gatherings
          </span>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#0B0B0B] mt-2 mb-3">
            Make it a little occasion.
          </h1>
          <OrnamentalDivider label="Bespoke Gathering Packages" />
          <p className="font-editorial italic text-2xl text-[#77736B]">
            “An unhurried space for birthdays, intimate brunches, and memorable dinners.”
          </p>
        </div>

        {/* 4 Gathering Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {eventTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F7F5EF] border border-[#171717]/20 p-6 flex flex-col justify-between group hover:border-[#171717] transition-all"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#EFECE4] mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#0B0B0B] font-normal mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#77736B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Event Inquiry Section */}
        <div className="bg-[#EFECE4] border border-[#171717]/25 p-8 sm:p-12 mb-16" id="inquiry-form">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#77736B] font-medium">
                Plan Your Gathering
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B0B0B]">
                Tell us about your occasion.
              </h2>
              <p className="font-sans text-xs text-[#77736B] leading-relaxed">
                Our café host will coordinate custom menu selections, custom bakehouse cakes, reserved table layouts, and timing tailored to your group.
              </p>

              <div className="border-t border-[#171717]/15 pt-4 space-y-3 text-xs text-[#171717]">
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-[#77736B]" /> Direct Event Hotline: <strong>091506 22287</strong>
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={14} className="text-[#77736B]" /> Event windows available daily
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-[#F7F5EF] border border-[#171717] p-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#0B0B0B] text-[#F7F5EF] flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h3 className="font-serif-display text-3xl text-[#0B0B0B]">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-xs text-[#77736B] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'Friend'}. Our event coordinator will review your requested date ({formData.preferredDate || 'Upcoming'}) for {formData.guestCount} and get back to you via phone/email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-widest"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-[#F7F5EF] p-6 border border-[#171717]/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#77736B] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none"
                        placeholder="e.g. Priya Sundaram"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#77736B] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none"
                        placeholder="e.g. 098401 23456"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#77736B] mb-1">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none"
                      >
                        <option>Birthday Gathering</option>
                        <option>Weekend Brunch Group</option>
                        <option>Family Celebration</option>
                        <option>Intimate Private Dinner</option>
                        <option>Corporate / Creative Meeting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#77736B] mb-1">
                        Estimated Guest Count
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none"
                      >
                        <option>6 - 12 guests</option>
                        <option>12 - 20 guests</option>
                        <option>20 - 35 guests</option>
                        <option>35+ guests (Partial Buyout)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#77736B] mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#77736B] mb-1">
                        Preferred Seating Area
                      </label>
                      <select
                        value={formData.seatingArea}
                        onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                        className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none"
                      >
                        <option>Outdoor Green Courtyard</option>
                        <option>Cozy Indoor Air-Conditioned</option>
                        <option>Open-Air Veranda</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#77736B] mb-1">
                      Notes / Custom Cake / Dietary Requests
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Let us know if you would like a custom cake message or specific food preferences..."
                      className="w-full p-2.5 text-xs bg-white border border-[#171717]/20 focus:border-[#0B0B0B] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0B0B0B] text-[#F7F5EF] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#171717] transition-colors"
                  >
                    Submit Event Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
