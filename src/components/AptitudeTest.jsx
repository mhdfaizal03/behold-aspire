import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  BookOpen,
  UserCheck,
  RotateCcw,
  Award,
  ArrowUpRight
} from 'lucide-react';

const TEST_QUESTIONS = [
  {
    id: 1,
    question: "How do you prefer to solve a complex puzzle?",
    category: "Logical",
    options: [
      { text: "Analyzing patterns and breaking them down systematically", weight: 5 },
      { text: "Visualizing the completed picture in my mind's eye", weight: 3 },
      { text: "Talking it through with someone else to generate ideas", weight: 2 },
      { text: "Trial and error until the pieces fit together", weight: 1 }
    ]
  },
  {
    id: 2,
    question: "Which of these activities sounds most exciting to you?",
    category: "Linguistic",
    options: [
      { text: "Writing a persuasive short story, essay, or poem", weight: 5 },
      { text: "Coding a logic-based math game or grid puzzle", weight: 4 },
      { text: "Designing a architectural or interior floor plan", weight: 3 },
      { text: "Leading a lively group debate on social issues", weight: 2 }
    ]
  },
  {
    id: 3,
    question: "When learning something new, you prefer:",
    category: "Intrapersonal",
    options: [
      { text: "Reflecting in private on how it applies to your personal goals", weight: 5 },
      { text: "Drawing visual diagrams, color-coded mindmaps, or charts", weight: 4 },
      { text: "Following a structured, step-by-step programming manual", weight: 3 },
      { text: "Practicing the skill immediately in a collaborative group", weight: 2 }
    ]
  },
  {
    id: 4,
    question: "Which of the following describes your ideal workspace?",
    category: "Intrapersonal",
    options: [
      { text: "A quiet, private study where I can concentrate deeply alone", weight: 5 },
      { text: "A structured office with checklists, files, and project trackers", weight: 4 },
      { text: "A collaborative workspace with boards for group debate", weight: 3 },
      { text: "An artistic studio surrounded by draft papers and sketches", weight: 2 }
    ]
  },
  {
    id: 5,
    question: "If you were to write a blog post, what would it be about?",
    category: "Linguistic",
    options: [
      { text: "A fictional story filled with rich dialogue and wordplay", weight: 5 },
      { text: "An guide explaining how a complex logic formula works", weight: 4 },
      { text: "A personal reflection on lessons learned from failure", weight: 5 },
      { text: "A commentary on a recent public debate or speech", weight: 3 }
    ]
  },
  {
    id: 6,
    question: "When presented with a debate, what is your first reaction?",
    category: "Linguistic",
    options: [
      { text: "To analyze the persuasive power, vocabulary, and flow of speech", weight: 5 },
      { text: "To construct structured logical counter-arguments to disprove errors", weight: 4 },
      { text: "To reflect on my own internal feelings and moral stand first", weight: 5 },
      { text: "To mediate the conversation and write down points of agreement", weight: 2 }
    ]
  },
  {
    id: 7,
    question: "How do you keep track of your daily tasks and homework?",
    category: "Logical",
    options: [
      { text: "A highly structured, color-coded spreadsheet or calendar app", weight: 5 },
      { text: "A reflective personal journal or diary describing my feelings", weight: 4 },
      { text: "A simple note containing a narrative description of the day", weight: 3 },
      { text: "I go with the flow and address issues as they arise in groups", weight: 1 }
    ]
  },
  {
    id: 8,
    question: "Which elective course would you enroll in just for fun?",
    category: "Logical",
    options: [
      { text: "Discrete Mathematics or Symbolic Logic puzzles", weight: 5 },
      { text: "Creative Writing, Rhetoric, and Public Speaking", weight: 5 },
      { text: "Philosophy of the Self, Ethics, and Mindfulness", weight: 5 },
      { text: "Data Visualizations and Graphic Layout design", weight: 3 }
    ]
  },
  {
    id: 9,
    question: "When resolving an argument with a friend, you tend to:",
    category: "Intrapersonal",
    options: [
      { text: "Reflect privately on my own behavior and hidden biases first", weight: 5 },
      { text: "Analyze the facts and chronology objectively to find the root cause", weight: 4 },
      { text: "Sit down and explain my feelings clearly using precise words", weight: 5 },
      { text: "Let it cool down naturally without overthinking it", weight: 2 }
    ]
  }
];

const DOMAIN_DETAILS = {
  Logical: {
    title: "Analytical & Logical Intelligence",
    icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
    color: "text-blue-600 bg-blue-50 border-blue-100",
    barColor: "bg-blue-600",
    desc: "You possess a powerful ability to analyze situations, spot patterns, and apply logical deductive reasoning to complex systems. You enjoy breaking problems down into scientific variables.",
    careers: ["Software Engineer & Architect", "Data Scientist & Statistician", "Financial Analyst", "Scientific Researcher", "Astrophysicist"],
  },
  Linguistic: {
    title: "Verbal & Linguistic Intelligence",
    icon: <BookOpen className="w-8 h-8 text-amber-600" />,
    color: "text-amber-600 bg-amber-50 border-amber-100",
    barColor: "bg-gold",
    desc: "You have a high sensitivity to the structure, meanings, and rhythms of words. You express ideas articulately, write persuasively, and enjoy analyzing language-based structures.",
    careers: ["Corporate Lawyer", "Journalist / News Editor", "Communications Director", "Content Strategist", "Public Relations Specialist"],
  },
  Intrapersonal: {
    title: "Reflective & Intrapersonal Intelligence",
    icon: <UserCheck className="w-8 h-8 text-emerald-600" />,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    barColor: "bg-emerald-600",
    desc: "You have deep self-awareness, an understanding of your own emotional drivers, values, and cognitive models. You excel at self-direction, philosophical research, and coaching.",
    careers: ["Counseling Psychologist", "Social Entrepreneur", "Independent Writer / Philosopher", "Organizational Consultant", "Academic Researcher"],
  }
};

export default function AptitudeTest({ onFinishTest, resetTrigger }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testScores, setTestScores] = useState({ Logical: 0, Linguistic: 0, Intrapersonal: 0 });
  const [testFinished, setTestFinished] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswer = (category, weight) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      const updatedScores = {
        ...testScores,
        [category]: (testScores[category] || 0) + weight
      };
      setTestScores(updatedScores);

      if (currentQuestion < TEST_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setTestFinished(true);
      }
      setIsAnimating(false);
    }, 250);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setTestScores({ Logical: 0, Linguistic: 0, Intrapersonal: 0 });
    setTestFinished(false);
    setIsAnimating(false);
  };

  // Calculations for results dashboard
  const maxLogical = 15; // 3 questions * 5 max weight
  const maxLinguistic = 15;
  const maxIntrapersonal = 15;

  const scorePercentages = {
    Logical: Math.min(Math.round((testScores.Logical / maxLogical) * 100), 100),
    Linguistic: Math.min(Math.round((testScores.Linguistic / maxLinguistic) * 100), 100),
    Intrapersonal: Math.min(Math.round((testScores.Intrapersonal / maxIntrapersonal) * 100), 100),
  };

  // Find dominant domain
  const dominantDomain = Object.keys(scorePercentages).reduce((a, b) =>
    scorePercentages[a] > scorePercentages[b] ? a : b
  );

  const dominantInfo = DOMAIN_DETAILS[dominantDomain];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6">

        {!testFinished ? (
          /* Quiz Interface Card */
          <div
            className={`bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-slate-100 text-left relative overflow-hidden transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0'
              }`}
            id="quiz-card"
          >
            {/* Header / Progress bar */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h2 className="text-3xl font-header font-black text-primary mb-2">
                    Aptitude Assessment
                  </h2>
                  <p className="text-slate-400 font-sans text-sm">
                    Discover your core cognitive affinities through scientific profiling.
                  </p>
                </div>
                <span className="text-gold font-header font-black text-lg">
                  {currentQuestion + 1} <span className="text-slate-300">/</span> {TEST_QUESTIONS.length}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestion + 1) / TEST_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Text */}
            <div className="mb-10">
              <div className="flex gap-4 items-start mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold font-header font-bold text-xs shrink-0 mt-0.5">
                  Q
                </span>
                <h3 className="text-xl md:text-2xl font-header font-bold text-primary leading-snug">
                  {TEST_QUESTIONS[currentQuestion].question}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="grid gap-4 mt-8">
                {TEST_QUESTIONS[currentQuestion].options.map((opt, i) => (
                  <button
                    key={i}
                    id={`opt-btn-${i}`}
                    onClick={() => handleAnswer(TEST_QUESTIONS[currentQuestion].category, opt.weight)}
                    className="w-full text-left p-5 md:p-6 rounded-2xl border border-slate-100 hover:border-gold hover:bg-gold/5 transition-all duration-200 flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-base md:text-lg font-sans font-semibold text-slate-600 group-hover:text-primary transition-colors">
                      {opt.text}
                    </span>
                    <div className="w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-gold group-hover:bg-gold transition-all duration-200 flex items-center justify-center shrink-0 ml-4">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Enhanced Results Dashboard */
          <div
            className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-slate-100 text-left relative overflow-hidden animate-in zoom-in-95 duration-500"
            id="results-dashboard"
          >
            {/* Header Shield */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Award className="w-3.5 h-3.5 text-gold" /> CIGI Framework Certified
                  </div>
                  <h2 className="text-3xl font-header font-black text-primary leading-none">
                    Assessment Completed
                  </h2>
                </div>
              </div>
              <button
                id="btn-restart-test"
                onClick={handleRestart}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-header font-bold text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Test</span>
              </button>
            </div>

            {/* Main Strength Indicator */}
            <div className="grid lg:grid-cols-12 gap-10">

              {/* Left Column: Dominant Domain */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xs font-header font-black text-gold tracking-widest uppercase">
                  Your Dominant Affinity Profile
                </h3>

                <div className={`p-6 rounded-3xl border flex gap-4 ${dominantInfo.color}`}>
                  <div className="shrink-0">{dominantInfo.icon}</div>
                  <div>
                    <h4 className="text-xl font-header font-black text-primary leading-tight mb-2">
                      {dominantInfo.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-sans font-medium">
                      {dominantInfo.desc}
                    </p>
                  </div>
                </div>

                {/* Score breakdown charts */}
                <div className="space-y-4 pt-4">
                  <h4 className="font-header font-bold text-primary text-sm uppercase tracking-wider">
                    Cognitive Distribution Metrics
                  </h4>

                  {Object.entries(DOMAIN_DETAILS).map(([key, value]) => {
                    const pct = scorePercentages[key];
                    return (
                      <div key={key} className="space-y-1.5" id={`score-metric-${key.toLowerCase()}`}>
                        <div className="flex justify-between text-sm font-sans font-extrabold text-primary">
                          <span>{value.title.split(' ')[0]} Intelligence</span>
                          <span>{pct}%</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${value.barColor} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${pct}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Recommendations */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-[32px] space-y-6">
                  <h4 className="font-header font-black text-primary text-sm uppercase tracking-wider border-b border-slate-200 pb-3">
                    Recommended Career Sectors
                  </h4>
                  <ul className="space-y-3">
                    {dominantInfo.careers.map((career, cIdx) => (
                      <li
                        key={cIdx}
                        className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:border-gold hover:translate-x-1 transition-all duration-200 group"
                      >
                        <span className="text-sm font-sans font-bold text-slate-700">
                          {career}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-gold transition-colors" />
                      </li>
                    ))}
                  </ul>

                  {/* Action link */}
                  <div className="pt-2">
                    <button
                      id="btn-results-consult"
                      onClick={() => onFinishTest(dominantDomain, scorePercentages)}
                      className="w-full py-4 bg-primary hover:bg-primary-light text-white font-header font-black text-sm rounded-xl transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Claim Free CIGI Counseling</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-3 font-sans font-semibold">
                      Requires submitting parent details for verified scheduling.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
