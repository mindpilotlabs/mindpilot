import React from 'react';
import { 
  GraduationCap, 
  Heart, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export default function TeachersParents({ setActiveTab }) {
  const teacherPoints = [
    "Understand how students may use AI in their daily study habits.",
    "Encourage responsible AI-assisted learning without replacing effort.",
    "Set clear expectations for academic integrity and homework honor codes.",
    "Guide students in evaluating AI-generated information critically.",
    "Explore age-appropriate classroom applications for lesson engagement."
  ];

  const parentPoints = [
    "Understand the opportunities and limitations of generative AI.",
    "Discuss privacy, safe password habits, and personal data protection.",
    "Encourage independent learning and critical questioning at home.",
    "Recognize the clear difference between study assistance and copying.",
    "Support balanced technology use and digital wellness."
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
          <Users className="w-4 h-4 text-indigo-600" />
          <span>Community Orientation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
          Helping the Adults Around Students Navigate AI.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Students develop healthy technology habits when teachers and parents share a common understanding of responsible AI usage.
        </p>
      </div>

      {/* Two Main Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* For Teachers */}
        <div className="bg-white p-8 rounded-3xl border border-indigo-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-indigo-700 uppercase tracking-wider">FOR EDUCATORS</span>
              <h2 className="text-2xl font-heading font-black text-slate-900">For Teachers</h2>
            </div>
          </div>

          <div className="space-y-3">
            {teacherPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* For Parents */}
        <div className="bg-white p-8 rounded-3xl border border-pink-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-700 border border-pink-200 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-pink-700 uppercase tracking-wider">FOR FAMILIES</span>
              <h2 className="text-2xl font-heading font-black text-slate-900">For Parents</h2>
            </div>
          </div>

          <div className="space-y-3">
            {parentPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Reassurance Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-indigo-200 bg-indigo-50/60 text-center space-y-2 max-w-3xl mx-auto">
        <p className="text-xs font-bold text-indigo-800 uppercase tracking-wider">NO ADVANCED TECHNICAL KNOWLEDGE REQUIRED</p>
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          Neither parents nor teachers need computer science degrees to guide students. Our orientation sessions and takeaway resources break down AI concepts into practical, everyday language.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center pt-2">
        <button
          onClick={() => setActiveTab('contact')}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base shadow-lg transition-all"
        >
          <Users className="w-5 h-5" />
          <span>Discuss Teacher and Parent Engagement</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
