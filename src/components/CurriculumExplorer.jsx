import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Brain, 
  HelpCircle, 
  ShieldCheck, 
  Workflow, 
  Layers, 
  Award,
  ArrowRight
} from 'lucide-react';
import { EIGHT_CURRICULUM_MODULES, CURRICULUM_WEEKS } from '../data/mindpilotData';

export default function CurriculumExplorer({ setActiveTab, setLabPrompt }) {
  const [activeView, setActiveView] = useState('modules'); // 'modules' | 'weeks'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span>Interactive Curriculum</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
          A Structured Learning Journey for the AI Generation.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Comprehensive 8-module framework designed to develop independent inquiry, prompt mastery, information verification, and real-world project skills.
        </p>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex gap-2">
          <button
            onClick={() => setActiveView('modules')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeView === 'modules'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>8 Curriculum Modules</span>
          </button>
          
          <button
            onClick={() => setActiveView('weeks')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeView === 'weeks'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>12-Week Suggested Timeline</span>
          </button>
        </div>
      </div>

      {/* VIEW A: 8 MODULES GRID */}
      {activeView === 'modules' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EIGHT_CURRICULUM_MODULES.map((mod) => (
              <div key={mod.id} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between hover:border-indigo-400 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
                      Module 0{mod.id}
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                      {mod.ageGroup}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-black text-slate-900">{mod.title}</h3>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">What Students Learn:</span>
                      <p className="text-slate-800 font-medium leading-relaxed">{mod.learn}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-1">
                      <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider block">Practical Activity:</span>
                      <p className="text-slate-800 font-medium leading-relaxed">{mod.activity}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                  <span>Learning Outcome: {mod.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW B: 12-WEEK TIMELINE */}
      {activeView === 'weeks' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200 text-center space-y-1">
            <p className="text-xs font-bold text-indigo-800 uppercase tracking-wider">SUGGESTED 12-WEEK FRAMEWORK</p>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              The 12-week schedule is an example framework and may be adapted to your school's timetable, term breaks, or periodic workshop schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CURRICULUM_WEEKS.map((w) => (
              <div key={w.week} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-heading font-black flex items-center justify-center text-xs">
                    W{w.week}
                  </span>
                  <span className="text-[11px] font-extrabold text-indigo-700 uppercase tracking-wider">{w.module}</span>
                </div>
                <h3 className="text-base font-heading font-bold text-slate-900">{w.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActiveTab('contact')}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base shadow-lg transition-all"
        >
          <BookOpen className="w-5 h-5" />
          <span>Discuss Curriculum Integration For Your School</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
