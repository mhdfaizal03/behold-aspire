import React, { useState } from 'react';
import {
  GraduationCap,
  BrainCircuit,
  HeartHandshake,
  Users,
  ChevronRight,
  X,
  CheckCircle2
} from 'lucide-react';

const SERVICES = [
  {
    id: "career",
    title: "Career Guidance",
    desc: "Personalized roadmaps for students from Class 8 to 12 based on future market trends.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    hoverColor: "group-hover:bg-blue-600",
    detailedDesc: "Our career guidance program helps middle and high school students filter through hundreds of career choices to identify their true match. We look beyond traditional paths to modern engineering, humanities, digital arts, and emerging scientific domains.",
    features: [
      "Stream Selection (Science, Commerce, Humanities)",
      "University and Entrance Exam mapping (JEE, NEET, CUET, CLAT)",
      "Personalized Academic Milestones planning",
      "Interactive sessions with both student and parents"
    ],
    target: "Students from Class 8 to 12 & College aspirants"
  },
  {
    id: "aptitude",
    title: "Aptitude Testing",
    desc: "Kerala's most genuine assessment featured by CIGI for scientific discovery.",
    icon: <BrainCircuit className="w-8 h-8" />,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    hoverColor: "group-hover:bg-amber-600",
    detailedDesc: "Utilizing the highly acclaimed CIGI (Centre for Information and Guidance India) testing framework, we provide a multi-dimensional assessment of a student's cognitive assets. The test measures logical, linguistic, spatial, numerical, and mechanical aptitudes.",
    features: [
      "Scientific multi-factorial testing",
      "Comprehensive 12-page PDF report with detailed scores",
      "Identification of cognitive strengths and blindspots",
      "CIGI-certified assessment standard"
    ],
    target: "Students from Class 8 onwards wanting structural clarity"
  },
  {
    id: "mentoring",
    title: "Lifetime Mentoring",
    desc: "Ongoing support ecosystem for students and parents throughout the journey.",
    icon: <HeartHandshake className="w-8 h-8" />,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    hoverColor: "group-hover:bg-emerald-600",
    detailedDesc: "Unlike transactional coaching centers, Behold Aspire acts as a long-term academic companion. We track student performance semester-over-semester, provide guidance during university admissions, and offer career realignment support.",
    features: [
      "Periodic progress check-ins and adjustment",
      "Guidance on building a stellar student profile",
      "College application assistance and essay review",
      "Quarterly webinars with industry leaders"
    ],
    target: "Families seeking continuous guidance through transition phases"
  },
  {
    id: "psychology",
    title: "Psychology Support",
    desc: "Expert mental health support and on-door psychology consultation services.",
    icon: <Users className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    hoverColor: "group-hover:bg-purple-600",
    detailedDesc: "Career success is deeply linked to mental well-being. We offer expert guidance to manage exam anxiety, boost concentration, improve parent-child communication, and resolve behavioral conflicts that affect educational growth.",
    features: [
      "One-on-one sessions with educational psychologists",
      "Exam anxiety and stress management protocols",
      "Parent-student relationship counseling",
      "On-door/home consulting for maximum comfort"
    ],
    target: "Students experiencing academic pressure or focus difficulties"
  }
];

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const openServiceDetails = (service) => {
    setActiveModal(service);
    document.body.style.overflow = 'hidden'; // Lock scrolling
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto'; // Unlock scrolling
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-header font-black text-gold tracking-[0.25em] uppercase mb-4">
            What We Offer
          </h2>
          <h3 className="text-3xl md:text-5xl font-header font-black text-primary leading-tight">
            Comprehensive Career Solutions
          </h3>
          <p className="text-slate-500 font-sans mt-4 max-w-xl mx-auto text-base">
            Equipping students with modern tools, scientific insights, and continuous human mentorship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              id={`service-card-${s.id}`}
              className="p-8 rounded-[32px] border border-slate-100 bg-white hover:border-gold hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between text-left cursor-pointer"
              onClick={() => openServiceDetails(s)}
            >
              <div>
                {/* Icon Box */}
                <div className={`w-16 h-16 ${s.color} border rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-primary group-hover:border-gold transition-all duration-300`}>
                  {s.icon}
                </div>
                <h4 className="text-xl font-header font-bold text-primary mb-3">
                  {s.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-sans">
                  {s.desc}
                </p>
              </div>

              <button
                id={`service-btn-learn-${s.id}`}
                onClick={(e) => { e.stopPropagation(); openServiceDetails(s); }}
                className="text-gold font-header font-black text-xs flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200 uppercase tracking-widest mt-auto self-start cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/45 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeModal}
          id="service-modal-overlay"
        >
          <div
            className="bg-white rounded-[32px] w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-8 duration-300 border border-slate-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
            id="service-modal"
          >
            {/* Modal Header Grid */}
            <div className="p-8 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${activeModal.color} flex items-center justify-center`}>
                  {activeModal.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-header font-black text-primary leading-none mb-1.5">
                    {activeModal.title}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase font-sans">
                    {activeModal.target}
                  </span>
                </div>
              </div>
              <button
                id="close-service-modal"
                className="p-2 hover:bg-slate-200 rounded-full text-slate-400 hover:text-primary transition-colors cursor-pointer"
                onClick={closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6 text-left overflow-y-auto max-h-[70vh]">
              <p className="text-slate-600 leading-relaxed font-sans text-base">
                {activeModal.detailedDesc}
              </p>

              <div>
                <h4 className="font-header font-bold text-primary text-sm uppercase tracking-wider mb-4">
                  Key Inclusions & Framework
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {activeModal.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-sans font-semibold text-slate-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                id="modal-btn-close"
                onClick={closeModal}
                className="px-6 py-2.5 bg-primary text-white hover:bg-primary-light rounded-xl font-header font-bold text-sm transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
