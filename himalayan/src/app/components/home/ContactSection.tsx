"use client";

import { useState } from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/data/team";
import { MapPin, Phone, Mail, Clock, Send, Crown, CheckCircle2, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    guests: "200-500",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "Wedding",
        guests: "200-500",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative z-30 w-full bg-cream py-20 text-ink sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        {/* Leadership / Team Section Header */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Meet the <span className="italic text-gold-secondary">Visionaries</span>
          </h2>
          <p className="mt-4 text-sm text-ink/75 sm:text-base leading-relaxed">
            The dedicated minds crafting unforgettable moments, world-class hospitality, and seamless grand events at Himalayan Durbar.
          </p>
        </header>

        {/* Team Members Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/70 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold-secondary/50 hover:shadow-2xl"
            >
              {/* Photo Wrapper */}
              <div className="relative h-80 w-full overflow-hidden bg-ink/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink shadow-md">
                    {member.role}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-white drop-shadow-md">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-xs leading-relaxed text-ink/80 sm:text-sm">
                  {member.bio}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-xs font-medium uppercase tracking-wider text-gold-secondary">
                  <span>Himalayan Durbar</span>
                  <span className="text-xs font-semibold">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 h-[1px] w-full bg-gradient-to-r from-transparent via-ink/20 to-transparent" />

        {/* Contact Details & Inquiry Form */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Venue Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.42em] text-gold-secondary">
                Get In Touch
              </p>
              <h3 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
                Book Your Event
              </h3>
              <p className="mt-4 text-sm text-ink/75 leading-relaxed">
                Whether planning a majestic wedding reception, corporate gala, or private celebration, our management team is at your service.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href="https://maps.app.goo.gl/wPJ3GaRp3vTGba2m7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 cursor-pointer"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold-secondary/30 bg-gold-secondary/10 text-gold-secondary transition-colors group-hover:bg-gold-secondary group-hover:text-ink">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-sm group-hover:text-gold-secondary transition-colors flex items-center gap-1.5">
                      <span>Location</span>
                      <ExternalLink className="h-3.5 w-3.5 text-gold-secondary" />
                    </h4>
                    <p className="text-xs text-ink/75 mt-0.5 font-medium group-hover:underline">Himalayan Durbar Banquet & Events</p>
                    <p className="text-xs text-ink/60">Hetauda / Nepal (Click to open map)</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold-secondary/30 bg-gold-secondary/10 text-gold-secondary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-sm">Direct Phone & WhatsApp</h4>
                    <p className="text-xs text-ink/75 mt-0.5 font-medium">
                      <a href="tel:+9779851142423" className="hover:text-gold-secondary hover:underline">+977 985-1142423</a>
                      {" / "}
                      <a href="tel:+9779845638119" className="hover:text-gold-secondary hover:underline">+977 984-5638119</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold-secondary/30 bg-gold-secondary/10 text-gold-secondary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-sm">Email Inquiries</h4>
                    <p className="text-xs text-ink/75 mt-0.5">events@himalayandurbar.com</p>
                    <p className="text-xs text-ink/60">info@himalayandurbar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold-secondary/30 bg-gold-secondary/10 text-gold-secondary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-sm">Office & Tour Hours</h4>
                    <p className="text-xs text-ink/75 mt-0.5">Sun - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 rounded-3xl border border-ink/10 bg-white/90 p-8 shadow-xl backdrop-blur-lg sm:p-10">
            <h3 className="font-display text-3xl text-ink">
              Send an Event Inquiry
            </h3>
            <p className="mt-1 text-xs text-ink/70">
              Fill out the details below and Manager Dipak Sapkota & team will connect with you promptly.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center rounded-2xl bg-gold/15 p-10 text-center border border-gold/40">
                <CheckCircle2 className="h-12 w-12 text-gold-secondary" />
                <h4 className="mt-4 font-display text-2xl text-ink">Inquiry Received!</h4>
                <p className="mt-2 text-xs text-ink/80 max-w-sm">
                  Thank you for reaching out. Our team at Himalayan Durbar will contact you within 24 hours to discuss your event plans.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ram Shrestha"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold-secondary focus:outline-none focus:ring-1 focus:ring-gold-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+977 98XXXXXXXX"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold-secondary focus:outline-none focus:ring-1 focus:ring-gold-secondary"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold-secondary focus:outline-none focus:ring-1 focus:ring-gold-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/80 mb-1">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold-secondary focus:outline-none focus:ring-1 focus:ring-gold-secondary"
                    >
                      <option value="Wedding">Grand Wedding</option>
                      <option value="Reception">Reception & Banquet</option>
                      <option value="Corporate">Corporate Gala</option>
                      <option value="Private">Private Party / Birthday</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/80 mb-1">
                    Event Details & Special Requests
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event date, estimated guest count, and catering preferences..."
                    className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold-secondary focus:outline-none focus:ring-1 focus:ring-gold-secondary"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-xs uppercase tracking-widest text-gold shadow-lg transition-all duration-300 hover:bg-gold-secondary hover:text-ink font-semibold"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Event Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
