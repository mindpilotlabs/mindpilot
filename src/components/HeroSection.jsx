import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  School, 
  BrainCircuit, 
  Award,
  BookOpen,
  TrendingUp,
  GraduationCap,
  Gamepad2
} from 'lucide-react';
import { MIND_PILOT_INFO, CORE_QUOTE } from '../data/mindpilotData';

export default function HeroSection({ setActiveTab, openProposalModal }) {
  return (
    <section className="relative pt-8 pb-4 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Headline */}
        <div className="text-center mt-6 max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            AI Readiness & <br className="hidden sm:inline"/>
            <span className="text-gradient-primary">Responsible Technology</span> Program
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 font-semibold max-w-3xl mx-auto leading-relaxed">
            "{MIND_PILOT_INFO.tagline}"
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            {MIND_PILOT_INFO.mission}
          </p>

          {/* Clean Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('curriculum')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore 12-Week Curriculum</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => setActiveTab('ailab')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 text-indigo-700 border border-slate-300 shadow-xs transition-all"
            >
              <Gamepad2 className="w-4 h-4 text-indigo-600" />
              <span>Try Student AI Lab</span>
            </button>

            <button
              onClick={openProposalModal}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-xs transition-all"
            >
              <School className="w-4 h-4 text-slate-500" />
              <span>View School Proposal PDF</span>
            </button>
          </div>
        </div>

        {/* Featured Vision Quote Card */}
        <div className="mt-12 max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm bg-white">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg font-heading font-semibold text-slate-800 leading-snug">
                "{CORE_QUOTE.main}"
              </p>
              <div className="mt-2 flex items-center justify-center sm:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  MindPilot Educational Philosophy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Key Metrics Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Curriculum</span>
              <BookOpen className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-heading font-black text-slate-900">12 Weeks</span>
              <p className="text-xs text-slate-600 mt-1 font-medium">Structured learning progression</p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Learning Pillars</span>
              <Award className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-heading font-black text-slate-900">8 Pillars</span>
              <p className="text-xs text-slate-600 mt-1 font-medium">Literacy, ethics & problem solving</p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Target Focus</span>
              <GraduationCap className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-heading font-black text-indigo-600">Grades 6–10</span>
              <p className="text-xs text-slate-600 mt-1 font-medium">Primary recommended focus</p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Measured Impact</span>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-heading font-black text-emerald-600">54 → 78</span>
              <p className="text-xs text-slate-600 mt-1 font-medium">+44% AI Readiness score gain</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
