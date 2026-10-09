import React from 'react';
import { 
  BookOpen, 
  Brain, 
  HelpCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Building2, 
  ArrowRight,
  Lightbulb,
  Award
} from 'lucide-react';
import { SIX_STAGE_FRAMEWORK, MIND_PILOT_INFO } from '../data/mindpilotData';

export default function AboutProgram({ setActiveTab }) {
  const philosophyPoints = [
    "AI should support learning, not replace learning.",
    "Students should question answers, not blindly trust them.",
    "Students should understand limitations before relying on AI.",
    "Responsible use matters as much as technical ability.",
    "Practical activities should reinforce independent thinking."
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span>About The Program</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
          AI Education That Builds Understanding, Not Dependence.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Teaching students how AI works at an age-appropriate level, where it can be useful, where it can fail, and how to use it without replacing their own reasoning.
        </p>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl border border-indigo-500/20">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-extrabold text-teal-300 uppercase tracking-widest">EDUCATIONAL PHILOSOPHY</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold">Guiding Principles of MindPilot Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {philosophyPoints.map((point, idx) => (
            <div key={idx} className="bg-white/10 p-5 rounded-2xl border border-white/15 backdrop-blur-md flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-500/30">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-100 mt-1">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Learning Framework */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">LEARNING METHODOLOGY</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            The Visual Learning Framework
          </h2>
          <p className="text-slate-600 text-sm">
            A structured progression from initial exposure to responsible project creation:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {SIX_STAGE_FRAMEWORK.map((stage) => (
            <div key={stage.step} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-3 relative overflow-hidden group hover:border-indigo-400 transition-all">
              <div className="space-y-2">
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Stage 0{stage.step}
                </span>
                <h3 className="text-base font-heading font-bold text-slate-900 pt-1">{stage.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Customization Notice */}
      <div className="glass-panel p-8 rounded-3xl border border-indigo-200 bg-indigo-50/50 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-slate-900">Customized Institutional Implementation</h3>
            <p className="text-xs text-indigo-700 font-semibold uppercase">Tailored to your campus parameters</p>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          Curriculum content, delivery formats, practical exercises, and project timelines are customized based on student age group, school priorities, available computer infrastructure, and academic timetables.
        </p>
      </div>

      {/* Responsible Educational Conduct Disclaimer */}
      <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-slate-500 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-600 leading-relaxed">
          <strong className="font-bold text-slate-800">Transparent Educational Commitment:</strong> MindPilot Education focuses on building genuine student capability, critical thinking, and responsible digital habits. We do not make unsupported promises regarding guaranteed examination performance, competitive rankings, or mark inflation.
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActiveTab('contact')}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base shadow-lg transition-all"
        >
          <Building2 className="w-5 h-5" />
          <span>Discuss School Partnership Options</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
