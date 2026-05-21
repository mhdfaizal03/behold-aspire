import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, ArrowRight, Award } from 'lucide-react';

export default function Footer({ setView }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollToSection = (id) => {
    setView('landing');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <footer className="bg-primary text-white py-20 border-t border-white/5 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo and Info */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('landing')}>
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-primary text-xl shadow-lg">
                B
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-header font-black tracking-tight">BEHOLD ASPIRE</span>
                <span className="text-[9px] text-gold tracking-[0.22em] font-bold mt-0.5">TO YOUR PATHS</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Kerala's premium, student-first educational mentoring ecosystem. We map cognitive capacities, provide psychological support, and design lifelong career roadmaps.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://wa.me/919497174011" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gold hover:text-primary hover:border-gold transition-all duration-300 cursor-pointer"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="mailto:beholdaspire@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gold hover:text-primary hover:border-gold transition-all duration-300 cursor-pointer"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 text-left space-y-6">
            <h4 className="text-sm font-header font-black tracking-wider uppercase text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-slate-400 text-sm font-semibold">
              <li>
                <button onClick={() => setView('landing')} className="hover:text-gold transition-colors cursor-pointer">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-gold transition-colors cursor-pointer">About Us</button>
              </li>
              <li>
                <button onClick={() => setView('test')} className="hover:text-gold transition-colors cursor-pointer">Aptitude Test</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('inquiry')} className="hover:text-gold transition-colors cursor-pointer">Book Consultation</button>
              </li>
            </ul>
          </div>

          {/* Our Offerings */}
          <div className="lg:col-span-3 text-left space-y-6">
            <h4 className="text-sm font-header font-black tracking-wider uppercase text-gold">
              Our Services
            </h4>
            <ul className="space-y-3.5 text-slate-400 text-sm font-semibold">
              <li className="hover:text-white transition-colors cursor-default">Career Guidance (8-12)</li>
              <li className="hover:text-white transition-colors cursor-default">CIGI Aptitude Profiling</li>
              <li className="hover:text-white transition-colors cursor-default">Educational Mentorship</li>
              <li className="hover:text-white transition-colors cursor-default">Psychology & Stress Support</li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 text-left p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1 text-[10px] text-gold font-bold uppercase tracking-widest mb-2">
                <Award className="w-3.5 h-3.5" /> Newsletter
              </div>
              <h4 className="text-base font-header font-bold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Receive notifications on upcoming entrance exams and parent webinars.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <label htmlFor="newsletter-email" className="sr-only">Parent Email Address</label>
              <input 
                required
                type="email" 
                id="newsletter-email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter parent email" 
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl focus:ring-1 focus:ring-gold outline-none text-xs font-semibold text-white placeholder-slate-500 transition-all"
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-gold hover:bg-gold-light text-primary font-header font-black text-xs rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {subscribed && (
                <p className="text-[10px] font-sans font-bold text-emerald-400 text-center mt-2">
                  ✓ Subscribed! Thank you for joining.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Behold Aspire. Developed in partnership with Kerala Educational Networks.</p>
          <div className="flex gap-6 font-semibold">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
