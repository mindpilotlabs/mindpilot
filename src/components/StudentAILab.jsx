import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  UserCheck
} from 'lucide-react';
import { PROMPT_LAB_EXAMPLES } from '../data/mindpilotData';

export default function StudentAILab() {
  const [selectedExample, setSelectedExample] = useState(0);

  const activityExamples = [
    "Investigating whether an AI-generated answer is correct or hallucinated.",
    "Asking an AI system to explain a difficult science or math concept in different ways.",
    "Comparing multiple explanations of the same historical event.",
    "Identifying subtle factual errors hidden in synthetic text.",
    "Using AI to brainstorm solutions to a school or community recycling problem.",
    "Creating a project report with AI as a research assistant, not a ghostwriter.",
    "Presenting findings and explaining what evidence was verified independently."
  ];

  const controlPrinciples = [
    "AI can make mistakes — always cross-check facts with reliable sources.",
    "Think independently — use AI to spark ideas, not to replace your own reasoning.",
    "Important claims must be checked — never submit unverified claims in school work.",
    "Personal information should be protected — never input passwords, addresses, or private details.",
    "AI should not replace honest effort or original learning — academic integrity comes first."
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Interactive Student Experience</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
          Learn AI by Thinking, Exploring, and Creating.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Discover how to use artificial intelligence as your study partner, problem-solving companion, and creative assistant — while keeping full control of your own learning.
        </p>
      </div>

      {/* Activity Examples Section */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">HANDS-ON LEARNING ACTIVITIES</span>
          <h2 className="text-2xl font-heading font-black text-slate-900">What Students Experience in Class</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activityExamples.map((act, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-slate-800">{act}</span>
            </div>
          ))}
        </div>
      </div>

      {/* "You Stay in Control" Section */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8 shadow-xl border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center shrink-0">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-teal-400 uppercase tracking-widest">STUDENT MANDATE</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white">You Stay in Control</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {controlPrinciples.map((cp, idx) => (
            <div key={idx} className="bg-slate-800 p-5 rounded-2xl border border-slate-700 flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">{cp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Prompt & Hallucination Lab */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">INTERACTIVE PROMPT LAB</span>
          <h2 className="text-2xl font-heading font-black text-slate-900">
            Test Prompt Quality vs Dependency Trap
          </h2>
          <p className="text-xs text-slate-500">
            Illustrative learning module — examine how prompt structure changes AI output from passive copying to active Socratic study.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {PROMPT_LAB_EXAMPLES.map((ex, idx) => (
            <button
              key={ex.id}
              onClick={() => setSelectedExample(idx)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                selectedExample === idx
                  ? 'bg-indigo-50 border-indigo-400 shadow-sm ring-2 ring-indigo-500/20'
                  : 'bg-slate-50 border-slate-200 hover:bg-white'
              }`}
            >
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-white text-indigo-700 border border-slate-200 uppercase">
                {ex.category}
              </span>
              <h3 className="text-base font-heading font-bold text-slate-900 mt-2">{ex.title}</h3>
            </button>
          ))}
        </div>

        {/* Selected Example Detail */}
        {PROMPT_LAB_EXAMPLES[selectedExample] && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            
            {/* Weak Prompt */}
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-800 text-xs font-extrabold uppercase">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Weak / Dependency Prompt</span>
              </div>
              <p className="text-sm font-bold text-slate-900">"{PROMPT_LAB_EXAMPLES[selectedExample].weakPrompt}"</p>
              <p className="text-xs text-amber-900 leading-relaxed">{PROMPT_LAB_EXAMPLES[selectedExample].weakAnalysis}</p>
            </div>

            {/* Strong Prompt */}
            <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-3">
              <div className="flex items-center gap-2 text-indigo-800 text-xs font-extrabold uppercase">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Strong / Socratic Prompt</span>
              </div>
              <p className="text-sm font-bold text-slate-900">"{PROMPT_LAB_EXAMPLES[selectedExample].strongPrompt}"</p>
              <p className="text-xs text-indigo-900 leading-relaxed">{PROMPT_LAB_EXAMPLES[selectedExample].strongAnalysis}</p>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
