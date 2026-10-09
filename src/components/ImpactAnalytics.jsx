import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Sparkles, 
  Layers,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { IMPACT_METRICS, OVERALL_BENCHMARK } from '../data/mindpilotData';

export default function ImpactAnalytics({ setActiveTab }) {
  const assessmentSteps = [
    { step: "01", title: "Baseline Evaluation", desc: "Initial assessment of student AI awareness, prompting habits, and digital ethics." },
    { step: "02", title: "Learning Activities", desc: "Interactive classroom modules, Socratic study exercises, and hallucination labs." },
    { step: "03", title: "Practical Application", desc: "Cross-subject study assistance, fact verification, and prompt refinement." },
    { step: "04", title: "Final Assessment", desc: "Post-program evaluation measuring cognitive retention, inquiry depth, and ethics." },
    { step: "05", title: "Outcome Review", desc: "Executive analytics report delivered to school leadership and academic coordinators." }
  ];

  const sampleIndicators = [
    "Understanding of core AI concepts & model limitations",
    "Quality and structure of student questions & prompt framing",
    "Ability to spot unreliable answers and synthetic hallucinations",
    "Habitual fact-checking and lateral verification practices",
    "Understanding of responsible AI, privacy, and academic integrity",
    "Structured problem-solving & problem decomposition approach",
    "Quality of student project explanations and presentations",
    "Student participation and collaborative team engagement"
  ];

  const sampleProjectConcepts = [
    {
      title: "Cafeteria Food Waste Reduction Sprint",
      band: "Grades 6–8",
      desc: "Students used AI to analyze cafeteria food consumption patterns, brainstorm waste-reduction workflows, and independently verified logistics options.",
      tag: "SAMPLE CONCEPT — ILLUSTRATIVE"
    },
    {
      title: "Solar Energy Feasibility Study",
      band: "Grades 9–10",
      desc: "Student teams used AI as a research assistant to compare renewable energy data, cross-checking official state energy reports.",
      tag: "SAMPLE CONCEPT — ILLUSTRATIVE"
    },
    {
      title: "Digital Media Verification Campaign",
      band: "Grades 11–12",
      desc: "Students developed a school awareness guide helping peers audit social media news claims using 3-step verification.",
      tag: "SAMPLE CONCEPT — ILLUSTRATIVE"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
          <BarChart3 className="w-4 h-4 text-indigo-600" />
          <span>Evaluation Framework</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
          Learning Should Be Demonstrated, Not Just Claimed.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Our proposed assessment framework provides schools with structured visibility into student AI literacy, critical questioning, and responsible usage habits.
        </p>
      </div>

      {/* Assessment Framework Steps */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">PROPOSED EVALUATION FLOW</span>
          <h2 className="text-2xl font-heading font-black text-slate-900">
            5-Stage Assessment Framework
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {assessmentSteps.map((st) => (
            <div key={st.step} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                {st.step}
              </span>
              <h3 className="text-base font-heading font-bold text-slate-900 pt-1">{st.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Indicators Grid */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">KEY PERFORMANCE INDICATORS</span>
          <h2 className="text-2xl font-heading font-black text-slate-900">Possible Measurement Indicators</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sampleIndicators.map((ind, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-slate-800">{ind}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Illustrative Sample Analytics Card */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8 shadow-xl border border-slate-800 relative overflow-hidden">
        
        {/* MANDATORY DISCLAIMER LABEL */}
        <div className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400" />
          <span>Illustrative sample — not actual school results</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-black text-white">Sample Student Learning Benchmark</h2>
          <p className="text-xs text-slate-300">
            Illustrative sample of pre- and post-program evaluation metrics across 7 learning domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_METRICS.map((m, idx) => (
            <div key={idx} className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">{m.name}</span>
                <span className="text-xs font-extrabold text-teal-400">+{m.after - m.before} pts</span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Baseline: {m.before}{m.unit}</span>
                  <span>Post-Program: {m.after}{m.unit}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden flex">
                  <div style={{ width: `${m.before}%` }} className="bg-slate-500 h-full" />
                  <div style={{ width: `${m.after - m.before}%` }} className="bg-teal-400 h-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Project Showcase (Sample Concepts) */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">PRACTICAL APPLICATION</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Sample Student Project Concepts
          </h2>
          <p className="text-xs text-slate-500">
            Illustrative examples of team project frameworks — not real completed projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProjectConcepts.map((proj, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 uppercase">
                  {proj.tag}
                </span>
                <h3 className="text-base font-heading font-bold text-slate-900 pt-1">{proj.title}</h3>
                <p className="text-xs font-bold text-indigo-600">{proj.band}</p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-2">
        <button
          onClick={() => setActiveTab('contact')}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base shadow-lg transition-all"
        >
          <BarChart3 className="w-5 h-5" />
          <span>Discuss Assessment Scope For Your School</span>
        </button>
      </div>

    </div>
  );
}
