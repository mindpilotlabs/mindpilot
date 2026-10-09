import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  UserCheck, 
  FileCheck, 
  AlertTriangle, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

export default function ResponsibleAIPage({ setActiveTab }) {
  const safetyPillars = [
    {
      title: "1. Age-Appropriate Learning",
      desc: "Curriculum content, exercises, and examples are tailored specifically to the cognitive maturity of each grade band."
    },
    {
      title: "2. Facilitator Supervision",
      desc: "All activities are conducted under the guidance of trained facilitators and school educators."
    },
    {
      title: "3. Protection of Personal Info",
      desc: "Students are strictly taught never to share personal names, addresses, passwords, or private family details with AI tools."
    },
    {
      title: "4. Minimal Student Data Collection",
      desc: "Our platform collects only necessary learning participation data, avoiding sensitive personal profile collection."
    },
    {
      title: "5. Appropriate AI Tools Selection",
      desc: "We select filtered, safe, educational AI environments vetted for classroom use."
    },
    {
      title: "6. Clear Academic Integrity Guidelines",
      desc: "Students learn explicit honor codes distinguishing genuine AI study assistance from dishonest copying."
    },
    {
      title: "7. Awareness of Misinformation",
      desc: "Students are taught that AI models can hallucinate, fostering a habitual verify-first mindset."
    },
    {
      title: "8. Accessibility & Inclusion",
      desc: "Instruction is designed to be accessible to diverse learners regardless of prior technical exposure."
    },
    {
      title: "9. Safe Photo & Project Handling",
      desc: "Student project work and photographs are published or shared only with explicit institutional and parental consent."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-extrabold tracking-wider uppercase border border-teal-200">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>Child Safety & Ethics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
          Responsible AI Starts With Responsible Education.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Building trust with school management, principal leadership, and parents through strict privacy, child safety standards, and transparent ethics guidelines.
        </p>
      </div>

      {/* 9 Safety Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {safetyPillars.map((p, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-teal-400 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-heading font-bold text-slate-900">{p.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Account Creation & Privacy Notice */}
      <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl space-y-4 shadow-xl border border-slate-700">
        <div className="flex items-center gap-3">
          <Lock className="w-6 h-6 text-teal-400 shrink-0" />
          <h2 className="text-xl font-heading font-bold">Student Account & Privacy Policy</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          MindPilot does not require students to create personal accounts with commercial AI providers unless explicitly reviewed, authorized, and approved by school management and parent/guardian consent. All public website forms strictly avoid collecting sensitive student data.
        </p>
      </div>

      {/* Compliance Reassurance */}
      <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2">
        <strong className="font-bold text-slate-800">Compliance & Regulatory Standard:</strong>
        <p>
          Our program follows applicable privacy guidelines and child-safety best practices. Formal institutional documentation detailing privacy practices is available upon request for school leadership reviews.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center pt-2">
        <button
          onClick={() => setActiveTab('contact')}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-base shadow-lg transition-all"
        >
          <FileCheck className="w-5 h-5" />
          <span>Request Privacy & Child Safety Information</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
