import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA({ setView }) {
  const handleGetStarted = () => {
    setView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContact = () => {
    // Scroll to inquiry section
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 select-none text-left">
      <div 
        className="bg-black text-white rounded-[4px] p-6 sm:p-12 md:p-24 relative overflow-hidden shadow-2xl border border-zinc-900"
      >
        {/* Futuristic glow elements */}
        <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-brand/20 rounded-[4px] glow-glow pointer-events-none" style={{ filter: 'blur(100px)' }} />
        <div className="absolute -bottom-1/3 -left-1/4 w-[450px] h-[450px] bg-brand/10 rounded-[4px] glow-glow pointer-events-none" style={{ filter: 'blur(90px)' }} />

        <div className="max-w-3xl space-y-8 relative z-10 flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xs border border-white/[0.08] rounded-[4px] text-[10px] font-extrabold uppercase tracking-widest text-brand w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>start today</span>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-6xl font-header font-black tracking-tight text-white leading-tight uppercase">
              Every Student Deserves <br />
              Clear Direction
            </h2>
            <p className="text-zinc-400 font-sans text-xs md:text-sm font-light max-w-xl leading-relaxed">
              Empowering young minds with confidence, clarity, and future-ready guidance. Unlock suitability roadmaps today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-4 pt-4 w-full">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-brand hover:bg-brand-dark text-black font-bold text-xs uppercase tracking-widest rounded-[4px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 border border-black/5 w-full sm:w-auto"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleContact}
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white hover:scale-[1.02] active:scale-[0.98] text-xs font-bold uppercase tracking-widest rounded-[4px] transition-all duration-300 cursor-pointer w-full sm:w-auto text-center"
            >
              Contact BEHOLD
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
