import React, { useState } from 'react';
import { 
  Building2, 
  BookOpen, 
  Brain, 
  MessageSquare, 
  ShieldCheck, 
  Workflow, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Star,
  Users,
  Award,
  AlertCircle,
  Cpu,
  GraduationCap,
  Lightbulb,
  Check
} from 'lucide-react';
import { 
  MIND_PILOT_INFO, 
  FOUR_CHALLENGES, 
  FIVE_PILLARS, 
  EIGHT_OUTCOMES, 
  GRADE_BANDS, 
  PARTNERSHIP_STEPS 
} from '../data/mindpilotData';

export default function HeroSection({ setActiveTab, openProposalModal }) {
  const [activeInteractiveTab, setActiveInteractiveTab] = useState('socratic');

  return (
    <div className="space-y-20 pb-20 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white pt-16 pb-20 rounded-b-3xl sm:rounded-b-[3.5rem] shadow-2xl border-b border-indigo-500/20">
        
        {/* Glow Orb Decoration */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & CTAs */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md">
                <span className="flex h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse" />
                <span>Primary Launch Market: Visakhapatnam, Andhra Pradesh</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-tight">
                Prepare Students for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-teal-200 to-white">World Powered by AI.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Helping schools develop students who can think critically, learn effectively, question intelligently, and use artificial intelligence responsibly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-base font-extrabold shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Building2 className="w-5 h-5 text-indigo-200" />
                  <span>Discuss a School Partnership</span>
                </button>

                <button
                  onClick={() => setActiveTab('program')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-base font-bold border border-white/20 backdrop-blur-md transition-all"
                >
                  <BookOpen className="w-5 h-5 text-teal-300" />
                  <span>Explore the Program</span>
                </button>
              </div>

              {/* Institutional Key Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-300 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-teal-400 shrink-0" />
                  <span>No Public Pricing / Custom Institutional Proposals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-teal-400 shrink-0" />
                  <span>Grades 3–12 Structured Tracks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-teal-400 shrink-0" />
                  <span>Child Safety & Ethics First</span>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Interactive AI Platform Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6 backdrop-blur-xl relative overflow-hidden">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 flex items-center justify-center font-bold">
                      <Brain className="w-5 h-5 text-teal-300" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-teal-400">MIND PILOT ENGINE</span>
                      <h3 className="text-sm font-bold text-white">Socratic AI Study Partner</h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-extrabold border border-teal-500/30">
                    LIVE PREVIEW
                  </span>
                </div>

                {/* Socratic Prompt & Response Showcase */}
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 space-y-1">
                    <span className="text-[10px] font-bold text-indigo-300 uppercase block">STUDENT SOCRATIC PROMPT:</span>
                    <p className="text-slate-200 font-medium italic">"Act as a physics tutor. Explain Newton's 3rd Law using a basketball analogy, then ask me 2 questions to check my understanding."</p>
                  </div>

                  <div className="bg-indigo-950/80 p-3.5 rounded-2xl border border-indigo-800/80 space-y-2">
                    <div className="flex items-center justify-between text-teal-300 font-bold text-[11px]">
                      <span>AI ASSISTANT RESPONSE</span>
                      <span className="text-[10px] font-extrabold bg-teal-500/20 px-2 py-0.5 rounded text-teal-300">Guided Learning</span>
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed">
                      "When you bounce a basketball on the floor, your hand exerts a downward force on the ball, and the floor pushes back with an equal force upward! Now, question 1: What happens to the force when..."
                    </p>
                  </div>
                </div>

                {/* Outcome Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                  <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">CRITICAL THINKING</span>
                    <span className="text-sm font-black text-teal-300">+84%</span>
                  </div>
                  <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">VERIFICATION</span>
                    <span className="text-sm font-black text-indigo-300">3-Step Audit</span>
                  </div>
                  <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">ETHICS</span>
                    <span className="text-sm font-black text-teal-300">Child Safe</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONCISE STATEMENT BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/80 shadow-md text-center space-y-3">
          <p className="text-xs font-extrabold text-indigo-700 uppercase tracking-widest">WHY AI READINESS MATTERS</p>
          <blockquote className="text-xl sm:text-2xl font-heading font-black text-slate-900 leading-relaxed">
            "{MIND_PILOT_INFO.conciseStatement}"
          </blockquote>
        </div>
      </section>

      {/* 3. SECTION: AI IS ALREADY PART OF THEIR WORLD (CHALLENGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-extrabold tracking-wider uppercase border border-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Real Student Challenges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
            AI Is Already Part of Their World.
          </h2>
          <p className="text-slate-600 text-base font-medium">
            Students are interacting with AI tools every day. Without guidance, four major risks emerge:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUR_CHALLENGES.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-3xl font-black text-indigo-600 font-heading">{item.num}</span>
                <h3 className="text-lg font-heading font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-indigo-700">
                {item.solution}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout */}
        <div className="text-center py-2">
          <span className="inline-block px-6 py-3 rounded-2xl bg-indigo-900 text-white font-heading font-bold text-lg shadow-md">
            "Access to AI is not the same as AI readiness."
          </span>
        </div>
      </section>

      {/* 4. SECTION: FIVE VISUAL PILLARS */}
      <section className="bg-slate-900 text-white py-16 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-teal-400 uppercase tracking-widest">OUR CORE METHODOLOGY</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
            From AI Awareness to Independent Thinking
          </h2>
          <p className="text-slate-300 text-base">
            Our curriculum empowers students across 5 essential learning pillars:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {FIVE_PILLARS.map((p) => {
            const IconMap = { Brain, MessageSquare, ShieldCheck, Workflow, Sparkles };
            const Icon = IconMap[p.icon] || Brain;
            return (
              <div key={p.id} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4 hover:border-teal-400/50 transition-all text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. SECTION: PROGRAM OUTCOMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">MEASURABLE STUDENT OUTCOMES</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
            Skills for an AI-Driven Future
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EIGHT_OUTCOMES.map((oc) => (
            <div key={oc.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">
                {oc.id}
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-heading font-bold text-slate-900">{oc.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{oc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SECTION: DESIGNED FOR EVERY STAGE OF LEARNING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">AGE-APPROPRIATE PROGRESSION</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
            Designed for Every Stage of Learning
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            We recommend <strong className="text-indigo-700">Grades 6–10</strong> as the initial implementation focus, while offering age-appropriate tracks for all grade bands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GRADE_BANDS.map((gb, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-3xl border transition-all space-y-4 flex flex-col justify-between ${
                gb.recommended 
                  ? 'bg-gradient-to-b from-indigo-50/90 to-white border-indigo-300 shadow-md ring-2 ring-indigo-500/20' 
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="space-y-3">
                {gb.tag && (
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-extrabold tracking-wider uppercase">
                    {gb.tag}
                  </span>
                )}
                <h3 className="text-xl font-heading font-black text-slate-900">{gb.band}</h3>
                <p className="text-xs font-extrabold text-indigo-700 uppercase tracking-wide">{gb.stage}</p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{gb.description}</p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-200">
                <p className="text-[11px] font-bold text-slate-500 uppercase">Key Focus Areas:</p>
                <ul className="space-y-1">
                  {gb.keyAreas.map((ka, kIdx) => (
                    <li key={kIdx} className="text-xs text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{ka}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SECTION: SCHOOL PARTNERSHIP PROCESS */}
      <section className="bg-slate-50 py-16 rounded-3xl border border-slate-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">HOW WE WORK WITH SCHOOLS</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
            The School Partnership Model
          </h2>
          <p className="text-slate-600 text-base">
            From initial discovery to student showcase, we customize every partnership stage:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERSHIP_STEPS.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-heading font-extrabold flex items-center justify-center text-sm shadow-sm">
                {step.step}
              </div>
              <h3 className="text-lg font-heading font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. END HOMEPAGE CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white p-10 sm:p-14 rounded-3xl text-center space-y-6 shadow-2xl border border-indigo-500/30">
          <h2 className="text-3xl sm:text-4xl font-heading font-black">
            Let's Build AI-Ready Students Together.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Partner with MindPilot to equip your school with a structured, responsible AI literacy curriculum.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-base shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Building2 className="w-5 h-5" />
              <span>Start a School Partnership Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
