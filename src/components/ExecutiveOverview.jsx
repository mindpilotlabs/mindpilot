import React, { useState } from 'react';
import { 
  HelpCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Eye, 
  Brain, 
  Lock, 
  BookOpen, 
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Info,
  ChevronRight
} from 'lucide-react';
import { 
  EIGHT_GUIDANCE_AREAS, 
  EVOLUTION_STAGES, 
  FOUR_CHALLENGES, 
  PROGRESION_STAGES,
  CORE_QUOTE,
  EIGHT_OUTCOMES
} from '../data/mindpilotData';

const iconMap = {
  HelpCircle,
  AlertTriangle,
  ShieldCheck,
  Eye,
  Brain,
  Lock,
  BookOpen,
  HeartHandshake
};

export default function ExecutiveOverview({ setActiveTab }) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="pt-2 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* 1. Executive Message: Why This Matters for Schools */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 relative overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
              Executive Message to School Management
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
              Why This Matters for Schools
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-medium">
              Artificial Intelligence is rapidly becoming part of students' everyday lives. They are increasingly exposed to AI-powered search, chatbots, recommendation systems, image generation, learning tools, and productivity tools.
            </p>
            <p className="text-amber-900 font-bold text-base sm:text-lg bg-amber-50 border-l-4 border-amber-500 pl-4 py-3 rounded-r-xl">
              However, access to AI does not automatically mean students know how to use it correctly.
            </p>
          </div>

          <div className="w-full lg:w-80 glass-card p-6 rounded-2xl border border-indigo-200 bg-white shadow-md shrink-0">
            <h4 className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider mb-2">
              Program Goal
            </h4>
            <p className="text-sm text-slate-800 font-bold italic">
              "{CORE_QUOTE.assistant}"
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Independent thinking preserved</span>
            </div>
          </div>
        </div>

        {/* 8 Guidance Areas Grid */}
        <div className="mt-10">
          <h3 className="text-lg font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>Students Need Guidance On (8 Core Dimensions):</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EIGHT_GUIDANCE_AREAS.map((item) => {
              const Icon = iconMap[item.icon] || Info;
              return (
                <div 
                  key={item.id}
                  className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-indigo-400 transition-all group hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      0{item.id}
                    </div>
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. The Changing Student Environment & 5 Evolution Stages */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold tracking-wider uppercase border border-blue-200">
            The Changing Student Environment
          </div>
          <h2 className="text-3xl font-heading font-black text-slate-900">
            Students Are Growing Up in an AI-First World
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Schools have an opportunity to guide students <strong className="text-indigo-700">before</strong> unstructured AI habits become permanently established.
          </p>
        </div>

        {/* 5-Stage Evolution Visual Spectrum */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {EVOLUTION_STAGES.map((stage) => (
            <div
              key={stage.step}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                stage.highlighted 
                  ? 'bg-gradient-to-b from-indigo-50 to-blue-50 border-indigo-400 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-400/40' 
                  : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                    stage.highlighted ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Stage 0{stage.step}
                  </span>
                  {stage.highlighted && (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-300">
                      CURRENT ERA
                    </span>
                  )}
                </div>
                <h4 className="text-base font-heading font-bold text-slate-900 mb-2">
                  {stage.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {stage.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>{stage.step === 5 ? 'Today & Beyond' : 'Previous Shift'}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Four Challenges Schools Are Beginning To See */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-xl">
        <h3 className="text-xl font-heading font-black text-slate-900 mb-2">
          Four Key Challenges Schools Are Beginning to See
        </h3>
        <p className="text-sm text-slate-600 font-medium mb-6">
          Unstructured AI usage presents critical risks to student learning habits and integrity:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOUR_CHALLENGES.map((ch) => (
            <div key={ch.num} className="glass-card p-5 rounded-2xl border border-slate-200 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-black text-lg shrink-0">
                {ch.num}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-heading font-bold text-slate-900">
                  {ch.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {ch.desc}
                </p>
                <div className="mt-2 text-[11px] font-bold text-indigo-700 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{ch.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-center">
          <p className="text-sm text-indigo-900 font-semibold">
            ✨ <strong className="text-indigo-950 font-black">The MindPilot Solution:</strong> Our program directly resolves these challenges through structured learning, guided activities, verification exercises, and team-based projects.
          </p>
        </div>
      </div>

      {/* 4. Student Learning Outcomes (8 Pillars) */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wider uppercase border border-indigo-200">
            <span>Learning Outcomes</span>
          </div>
          <h2 className="text-3xl font-heading font-black text-slate-900">
            Student Learning Outcomes (8 Pillars)
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Eight connected pillars that build knowledge, judgment, and lasting healthy technology habits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EIGHT_OUTCOMES.map((pillar) => (
            <div 
              key={pillar.id}
              className="glass-card p-5 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs mb-4 border border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {pillar.id}
              </div>
              <h4 className="text-base font-heading font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Progression Roadmap: From AI Awareness to AI Readiness */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-extrabold tracking-wider uppercase border border-purple-200">
            Structured Learning Pathway
          </div>
          <h2 className="text-3xl font-heading font-black text-slate-900">
            From AI Awareness to AI Readiness
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Students progress from understanding what AI is to using it as a learning assistant — while preserving independent thinking.
          </p>
        </div>

        {/* 7 Progression Steps Waterfall Cards */}
        <div className="space-y-3">
          {PROGRESION_STAGES.map((stg) => {
            const isSelected = activeStep === stg.step;
            return (
              <div
                key={stg.step}
                onClick={() => setActiveStep(stg.step)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-indigo-50 border-indigo-400 text-slate-900 shadow-md translate-x-1'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {stg.step}
                  </div>
                  <div>
                    <h4 className="text-base font-heading font-bold text-slate-900">
                      {stg.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      {stg.desc}
                    </p>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 shrink-0 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => setActiveTab('curriculum')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/25 hover:scale-105 transition-all"
          >
            <span>View Full 12-Week Student Curriculum</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
}
