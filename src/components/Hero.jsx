import React from 'react';
import { ArrowRight, Award, GraduationCap, CheckCircle2, Sparkles, Brain } from 'lucide-react';

export default function Hero({ setView, scrollToSection }) {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-primary overflow-hidden hero-radial-glow">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#3B82F6]/5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-7 text-left flex flex-col items-start fade-in-up">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-widest mb-8 animate-float">
              <Award className="w-4 h-4 text-gold" />
              <span>Kerala's Premier Career Guidance Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-header font-black text-white mb-6 leading-[1.1] tracking-tight">
              Design Your Future <br />
              <span className="gold-gradient-text">To Your Paths</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-sans">
              Scientifically mapping student potential through expert aptitude assessment,
              psychological evaluation, and personalized career roadmaps. Featured by CIGI.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                id="hero-btn-start-test"
                onClick={() => setView('test')}
                className="px-8 py-4.5 bg-gold text-primary rounded-xl font-header font-black text-base shadow-lg shadow-gold/20 hover:bg-gold-light hover:shadow-gold/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Start Free Aptitude Test</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                id="hero-btn-book"
                onClick={() => scrollToSection('inquiry')}
                className="px-8 py-4.5 bg-white/5 border border-white/20 text-white rounded-xl font-header font-bold text-base hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Book a Consultation
              </button>
            </div>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10 w-full">
              <div>
                <div className="text-3xl md:text-4xl font-header font-black text-gold">500+</div>
                <div className="text-xs md:text-sm font-semibold text-slate-400 mt-1">Students Mentored</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-header font-black text-gold">100%</div>
                <div className="text-xs md:text-sm font-semibold text-slate-400 mt-1">Career Clarity</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-header font-black text-gold">CIGI</div>
                <div className="text-xs md:text-sm font-semibold text-slate-400 mt-1">Featured Framework</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Mockup or Graphic */}
          <div className="lg:col-span-5 relative flex justify-center items-center">

            {/* Visual background circle */}
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-gold/10 to-blue-500/10 rounded-full blur-3xl"></div>

            {/* Decorative Stack of Premium Cards */}
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">

              {/* Card 1: Main Feature Card */}
              <div className="w-[85%] aspect-video bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-between absolute z-20 -rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-gold/15 rounded-xl text-gold">
                    <Brain className="w-8 h-8" />
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider rounded-full uppercase">
                    Scientific
                  </span>
                </div>
                <div>
                  <h3 className="font-header font-bold text-white text-lg leading-tight mb-1">Aptitude Discovery</h3>
                  <p className="text-slate-300 text-xs font-medium">Analyzing logical, linguistic, and spatial capabilities.</p>
                </div>
              </div>

              {/* Card 2: Support Card */}
              <div className="w-[80%] aspect-video bg-slate-900/60 backdrop-blur-lg border border-white/5 rounded-2xl p-6 shadow-xl flex flex-col justify-between absolute z-10 translate-y-16 translate-x-8 rotate-6 hover:rotate-0 transition-transform duration-500 hover:scale-105">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-blue-500/15 rounded-xl text-blue-400">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-wider rounded-full uppercase">
                    Mentoring
                  </span>
                </div>
                <div>
                  <h3 className="font-header font-bold text-white text-base leading-tight mb-1">Class 8 - 12 Roadmap</h3>
                  <p className="text-slate-400 text-xs">Curated pathways matching future market demand.</p>
                </div>
              </div>

              {/* Card 3: Floating mini success badge */}
              <div className="absolute top-4 right-4 z-30 bg-white text-primary rounded-xl p-3.5 shadow-2xl flex items-center gap-3 animate-float border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-left leading-none">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Psychology-First</p>
                  <p className="text-sm font-black text-primary mt-0.5">Verified Counseling</p>
                </div>
              </div>

              {/* Sparkle decorative */}
              <div className="absolute bottom-10 left-4 z-30 text-gold animate-pulse-slow">
                <Sparkles className="w-6 h-6" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
