import React from 'react';
import { Brain, FileText, Compass, HeartHandshake } from 'lucide-react';

const STEPS = [
  {
    num: "01",
    title: "Scientific Assessment",
    desc: "Start with our certified aptitude and cognitive testing to isolate core intelligence domains.",
    icon: <Brain className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600"
  },
  {
    num: "02",
    title: "Psychological Review",
    desc: "Our registered educational psychologists evaluate testing profiles against personality indices.",
    icon: <FileText className="w-6 h-6" />,
    color: "from-amber-500 to-orange-600"
  },
  {
    num: "03",
    title: "Custom Roadmapping",
    desc: "Students receive a 12-page roadmap detailing exact streams, college options, and exam timelines.",
    icon: <Compass className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600"
  },
  {
    num: "04",
    title: "Lifetime Support",
    desc: "Access quarterly mentoring meetups, university admissions support, and resource libraries.",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "from-purple-500 to-pink-600"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-header font-black text-gold tracking-[0.25em] uppercase mb-4">
            How It Works
          </h2>
          <h3 className="text-3xl md:text-5xl font-header font-black text-primary leading-tight">
            Your Roadmap to Certainty
          </h3>
          <p className="text-slate-500 font-sans mt-4 max-w-xl mx-auto text-base">
            Four simple phases designed to guide students from confusion to a focused, scientific career track.
          </p>
        </div>

        {/* Timeline Process */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>

          {STEPS.map((step, index) => (
            <div
              key={index}
              id={`process-step-${index + 1}`}
              className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Node Icon Box */}
              <div className="flex justify-between items-center w-full mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
                <span className="text-4xl font-header font-black text-slate-200">
                  {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="text-xl font-header font-bold text-primary mb-3">
                {step.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
