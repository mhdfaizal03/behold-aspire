import React, { useState, useEffect } from 'react';
import { Phone, Mail, Navigation, ArrowRight, Loader2 } from 'lucide-react';

export default function Inquiry({ testProfile }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: 'Career Guidance',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // If the user completed the test and was redirected here, pre-populate their profile
  useEffect(() => {
    if (testProfile) {
      setFormData(prev => ({
        ...prev,
        service: 'Aptitude Test Booking',
        message: `I completed the online assessment! My dominant intelligence profile is: ${testProfile.dominantDomain}. Scores: Logical ${testProfile.scores.Logical}%, Linguistic ${testProfile.scores.Linguistic}%, Intrapersonal ${testProfile.scores.Intrapersonal}%. I would like to book a detailed CIGI consultation.`
      }));
    }
  }, [testProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errors.name = "Full name must be at least 3 characters";
    }
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      errors.mobile = "Please enter a valid 10-digit Indian mobile number";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        mobile: '',
        service: 'Career Guidance',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="inquiry" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div>
              <h2 className="text-sm font-header font-black text-gold tracking-[0.25em] uppercase mb-4">
                Get In Touch
              </h2>
              <h3 className="text-3xl md:text-5xl font-header font-black text-primary leading-tight">
                Take the First Step <br />
                <span className="gold-gradient-text">Towards Success</span>
              </h3>
              <p className="text-slate-500 font-sans mt-4 max-w-sm text-sm md:text-base leading-relaxed">
                Connect with our state coordinators to schedule in-office assessments, institutional tie-ups, or remote sessions.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <Phone className="w-5 h-5 text-primary" />,
                  label: "Call Us Today",
                  val: "+91 94971 74011",
                  link: "tel:+919497174011"
                },
                {
                  icon: <Mail className="w-5 h-5 text-primary" />,
                  label: "Send Email",
                  val: "beholdaspire@gmail.com",
                  link: "mailto:beholdaspire@gmail.com"
                },
                {
                  icon: <Navigation className="w-5 h-5 text-primary" />,
                  label: "Corporate Office",
                  val: "Trivandrum, Kerala, India",
                  link: "https://maps.google.com"
                }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:border-gold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-header font-black text-slate-400 uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-base md:text-lg font-sans font-bold text-primary mt-0.5">
                      {item.val}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gold/5 rounded-bl-full"></div>

              <h4 className="text-2xl font-header font-black text-primary mb-6">
                Consultation Request Form
              </h4>

              {/* Show Pre-filled Alert if they did test */}
              {testProfile && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-sans font-semibold">
                  ✓ Pre-filled with your diagnostic test scores ({testProfile.dominantDomain} profile).
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="text-xs font-header font-black text-primary uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name-input"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Student/Parent Name"
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-gold focus:bg-white outline-none font-sans font-medium text-sm transition-all ${formErrors.name ? 'border-red-400' : 'border-slate-100'
                        }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs font-sans font-semibold text-red-500">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Mobile Input */}
                  <div className="space-y-2">
                    <label htmlFor="mobile-input" className="text-xs font-header font-black text-primary uppercase tracking-wide">
                      Mobile Number
                    </label>
                    <input
                      required
                      type="tel"
                      name="mobile"
                      id="mobile-input"
                      autoComplete="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="10-Digit Mobile"
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-gold focus:bg-white outline-none font-sans font-medium text-sm transition-all ${formErrors.mobile ? 'border-red-400' : 'border-slate-100'
                        }`}
                    />
                    {formErrors.mobile && (
                      <p className="text-xs font-sans font-semibold text-red-500">{formErrors.mobile}</p>
                    )}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="service-select" className="text-xs font-header font-black text-primary uppercase tracking-wide">
                    Select Service
                  </label>
                  <select
                    name="service"
                    id="service-select"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-gold focus:bg-white outline-none font-sans font-medium text-sm transition-all appearance-none cursor-pointer"
                  >
                    <option>Career Guidance</option>
                    <option>Aptitude Test Booking</option>
                    <option>Psychology Support</option>
                    <option>School Collaboration</option>
                  </select>
                </div>

                {/* Message Box */}
                <div className="space-y-2">
                  <label htmlFor="message-textarea" className="text-xs font-header font-black text-primary uppercase tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    id="message-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide context regarding class, stream, or specific queries..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-gold focus:bg-white outline-none font-sans font-medium text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4.5 bg-gold text-primary font-header font-black text-base rounded-xl shadow-lg hover:bg-gold-light hover:shadow-gold/20 hover:-translate-y-0.5 active:translate-y-0 disabled:translate-y-0 disabled:bg-slate-350 disabled:shadow-none transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Consultation Inquiry</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div
                    id="inquiry-success-alert"
                    className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl text-center font-sans font-bold text-sm animate-in fade-in duration-300"
                  >
                    ✓ Inquiry sent successfully! Our Kerala state coordinator will reach out to you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
