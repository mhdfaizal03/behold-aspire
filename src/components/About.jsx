import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Behold Aspire helped my daughter choose the right stream after 10th. Their scientific approach is unmatched in Kerala.",
    author: "Shaji PK",
    role: "Parent, Trivandrum",
    stars: 5
  },
  {
    quote: "I was extremely confused between Design and Computer Science. The aptitude test and follow-up consultation cleared all my doubts.",
    author: "Anjana S.",
    role: "Student, Kochi",
    stars: 5
  },
  {
    quote: "The psychology-first approach helped our son handle CBSE board exam pressure while preparing for entrance timelines.",
    author: "Dr. Rajesh Kumar",
    role: "Parent, Calicut",
    stars: 5
  }
];

const PARTNERS = ["CIGI", "CAREER360", "KERALA_EDU", "MIND_HUB"];

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Partners Slider / Trust Indicators */}
        <div className="mb-24 text-center">
          <p className="text-xs font-header font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
            Our Frameworks & Recognitions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 hover:opacity-80 transition-opacity duration-300">
            {PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="text-2xl md:text-3xl font-header font-black tracking-tighter text-primary hover:text-gold transition-colors duration-200"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Testimonial & Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] sm:aspect-square bg-primary rounded-[48px] overflow-hidden relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover mix-blend-luminosity opacity-40 hover:scale-105 transition-transform duration-700"
                alt="Students studying career guidance paths"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>

              {/* Testimonials Slider Overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                <div className="p-6 md:p-8 bg-slate-900/80 backdrop-blur-md rounded-3xl border border-white/10 text-left">

                  <Quote className="w-8 h-8 text-gold/30 mb-3" />

                  <p className="text-white italic text-base md:text-lg mb-4 font-sans font-medium leading-relaxed">
                    "{TESTIMONIALS[currentTestimonial].quote}"
                  </p>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                    <div>
                      <h5 className="text-white font-header font-bold text-sm md:text-base">
                        {TESTIMONIALS[currentTestimonial].author}
                      </h5>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {TESTIMONIALS[currentTestimonial].role}
                      </p>
                    </div>

                    <div className="flex gap-1.5">
                      {Array.from({ length: TESTIMONIALS[currentTestimonial].stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                  </div>

                  {/* Slider Buttons */}
                  <div className="flex gap-2 mt-4 justify-end">
                    <button
                      id="testimonial-prev"
                      onClick={prevTestimonial}
                      className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-gold hover:text-primary transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      id="testimonial-next"
                      onClick={nextTestimonial}
                      className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-gold hover:text-primary transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-6 -right-6 p-6 bg-white shadow-2xl rounded-3xl border border-slate-100 hidden sm:block text-left animate-float">
              <div className="text-4xl font-header font-black text-gold">500+</div>
              <div className="text-sm font-header font-extrabold text-primary mt-1">Students Guided</div>
              <p className="text-[10px] font-sans font-bold text-slate-400 uppercase mt-0.5 tracking-wider">Across Kerala Districts</p>
            </div>
          </div>

          {/* Right Column: Copy & Differentiators */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-sm font-header font-black text-gold tracking-[0.25em] uppercase mb-4">
              The Behold Difference
            </h2>
            <h3 className="text-3xl md:text-5xl font-header font-black text-primary mb-8 leading-tight">
              Genuine Guidance for <span className="gold-gradient-text">Real Success.</span>
            </h3>

            <div className="space-y-8">
              {[
                {
                  t: "Genuine Aptitude Assessment",
                  d: "We utilize testing standards featured by CIGI. No generic computer templates—our tests measure genuine cognitive parameters."
                },
                {
                  t: "Psychology-First Approach",
                  d: "Career selection isn't just about grades; it's a deep psychological alignment. Our qualified counseling psychologists analyze every result."
                },
                {
                  t: "Lifetime Guidance Ecosystem",
                  d: "We don't just hand over a report and walk away. Behold Aspire provides continuous university counseling, webinars, and roadmap updates."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold mt-1">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-header font-extrabold text-primary mb-1.5">
                      {item.t}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-sans">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
