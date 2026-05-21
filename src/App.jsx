import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import AptitudeTest from './components/AptitudeTest';
import Inquiry from './components/Inquiry';
import Footer from './components/Footer';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'test'
  const [testProfile, setTestProfile] = useState(null);

  const handleFinishTest = (dominantDomain, scores) => {
    // Save results
    setTestProfile({ dominantDomain, scores });
    // Navigate back to landing
    setView('landing');

    // Smoothly scroll to inquiry section
    setTimeout(() => {
      const element = document.getElementById('inquiry');
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
    }, 150);
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
    <div className="font-sans antialiased text-primary selection:bg-gold/30">
      {/* Premium Navbar */}
      <Navbar setView={setView} currentView={view} />

      {/* Route Views */}
      {view === 'landing' ? (
        <main className="fade-in-up">
          {/* Hero Section */}
          <Hero setView={setView} scrollToSection={scrollToSection} />

          {/* Services Section */}
          <Services />

          {/* Process Section */}
          <Process />

          {/* About Us & Testimonials Section */}
          <About />

          {/* Inquiry / Booking Section */}
          <Inquiry testProfile={testProfile} />
        </main>
      ) : (
        <AptitudeTest onFinishTest={handleFinishTest} />
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919497174011"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 hover:shadow-[#25D366]/30 transition-all duration-300 z-50 cursor-pointer"
        aria-label="Contact support on WhatsApp"
        id="whatsapp-float-btn"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Premium Footer */}
      <Footer setView={setView} />
    </div>
  );
}
