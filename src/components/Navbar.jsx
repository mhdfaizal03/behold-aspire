import React, { useState } from 'react';
import { Menu, X, Award, ChevronRight } from 'lucide-react';

export default function Navbar({ setView, currentView }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setView('landing');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of fixed navbar
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
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel-dark text-white border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={handleLogoClick}
          id="nav-logo"
        >
          <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center font-bold text-primary text-xl shadow-md group-hover:rotate-6 transition-all duration-300">
            B
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-header font-black tracking-tight group-hover:text-gold transition-colors">
              BEHOLD ASPIRE
            </span>
            <span className="text-[9px] text-gold tracking-[0.22em] font-bold mt-0.5">
              TO YOUR PATHS
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <button
            id="nav-link-about"
            onClick={() => scrollToSection('about')}
            className="hover:text-gold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </button>
          <button
            id="nav-link-services"
            onClick={() => scrollToSection('services')}
            className="hover:text-gold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </button>
          <button
            id="nav-link-process"
            onClick={() => scrollToSection('process')}
            className="hover:text-gold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
          >
            Our Process
          </button>
          <button
            id="nav-link-inquiry"
            onClick={() => scrollToSection('inquiry')}
            className="hover:text-gold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </button>

          <button
            id="nav-btn-test"
            onClick={() => setView('test')}
            className={`px-6 py-2.5 rounded-xl font-bold font-header transition-all duration-300 shadow-md hover:shadow-gold/20 hover:-translate-y-0.5 ${currentView === 'test'
                ? 'bg-white text-primary hover:bg-gold hover:text-primary'
                : 'bg-gold text-primary hover:bg-gold-light'
              }`}
          >
            Take Test
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-lg border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <button
            id="mobile-nav-about"
            onClick={() => scrollToSection('about')}
            className="text-left font-header font-bold text-lg hover:text-gold transition-colors border-b border-white/5 pb-2"
          >
            About Us
          </button>
          <button
            id="mobile-nav-services"
            onClick={() => scrollToSection('services')}
            className="text-left font-header font-bold text-lg hover:text-gold transition-colors border-b border-white/5 pb-2"
          >
            Services
          </button>
          <button
            id="mobile-nav-process"
            onClick={() => scrollToSection('process')}
            className="text-left font-header font-bold text-lg hover:text-gold transition-colors border-b border-white/5 pb-2"
          >
            Our Process
          </button>
          <button
            id="mobile-nav-inquiry"
            onClick={() => scrollToSection('inquiry')}
            className="text-left font-header font-bold text-lg hover:text-gold transition-colors border-b border-white/5 pb-2"
          >
            Contact Support
          </button>

          <button
            id="mobile-nav-btn-test"
            onClick={() => { setView('test'); setIsMenuOpen(false); }}
            className="bg-gold text-primary font-header font-black py-4 rounded-xl shadow-lg hover:bg-gold-light active:scale-95 transition-all text-center flex items-center justify-center gap-2"
          >
            Start Aptitude Test <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </nav>
  );
}
