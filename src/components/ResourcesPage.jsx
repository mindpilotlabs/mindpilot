import React from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  BookOpen, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MIND_PILOT_INFO, EIGHT_CURRICULUM_MODULES } from '../data/mindpilotData';

export default function ResourcesPage({ setActiveTab }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
          <FileText className="w-4 h-4 text-indigo-600" />
          <span>Program Resources & Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
          Resources & Program Overview
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Comprehensive documentation for principals, school boards, academic coordinators, and educators.
        </p>
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-100 border border-slate-200">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>INSTITUTIONAL OVERVIEW PACKET</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>Print Overview Sheet</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold transition-all flex items-center gap-2 shadow-xs"
          >
            <Building2 className="w-4 h-4" />
            <span>Request Full School Proposal</span>
          </button>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Executive Program Overview */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-heading font-bold text-slate-900">1. Executive Program Overview</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            A 4-page executive summary covering program objectives, pedagogical framework, student progression stages, and school implementation guidelines.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('contact')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5"
            >
              <span>Request Institutional Copy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 2: 8-Module Curriculum Matrix */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-heading font-bold text-slate-900">2. 8-Module Curriculum Syllabus</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            Detailed breakdown of learning outcomes, hands-on prompt labs, hallucination detective exercises, and team projects across all 8 modules.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('curriculum')}
              className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1.5"
            >
              <span>View Interactive Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 3: School Partnership Process Guide */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-heading font-bold text-slate-900">3. School Partnership Process Guide</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            Step-by-step roadmap from initial discovery and timetable configuration to facilitator deployment, baseline testing, and student showcase events.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('schools')}
              className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1.5"
            >
              <span>Explore Partnership Steps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 4: Responsible AI & Child Safety Policy */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-700 border border-pink-200 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-heading font-bold text-slate-900">4. Child Safety & Data Privacy Charter</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            Formal child safety charter detailing minimal student data collection, safe AI tool selection criteria, and academic integrity policies.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('responsible-ai')}
              className="text-xs font-bold text-pink-700 hover:text-pink-900 flex items-center gap-1.5"
            >
              <span>View Safety Charter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Document Preview Section */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl border border-slate-800">
        <div className="space-y-2">
          <span className="text-xs font-extrabold text-teal-400 uppercase tracking-widest">CURRICULUM MODULE PREVIEW</span>
          <h2 className="text-2xl font-heading font-black text-white">MindPilot 8-Module Framework Overview</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {EIGHT_CURRICULUM_MODULES.map((mod) => (
            <div key={mod.id} className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-2 text-xs">
              <span className="font-extrabold text-teal-300">{mod.title}</span>
              <p className="text-slate-300 line-clamp-3">{mod.learn}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
