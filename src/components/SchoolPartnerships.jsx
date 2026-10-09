import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  Calendar, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PARTNERSHIP_STEPS, DELIVERY_FORMATS, RESPONSIBILITIES } from '../data/mindpilotData';

export default function SchoolPartnerships({ setActiveTab, openProposalModal }) {
  const benefitPoints = [
    "A structured approach to student AI literacy across grade bands",
    "Guided, age-appropriate use of emerging technology",
    "Fostering critical thinking and systematic information verification",
    "Establishing responsible technology practices and data privacy habits",
    "Hands-on project-based learning addressing real issues",
    "Teacher awareness orientation and classroom usage guidance",
    "Parent communication resources and digital safety advice",
    "Documented student participation and learning outcome reports"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
          <Building2 className="w-4 h-4 text-indigo-600" />
          <span>Institutional Collaboration</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight">
          A School Partnership Designed Around Your Students.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Every institution is unique. We partner with school leadership to design a tailored AI readiness program that fits your academic timetable, student strength, and institutional goals.
        </p>
      </div>

      {/* Why a School Benefits */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">PARTNERSHIP ADVANTAGES</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Why Schools Choose MindPilot
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefitPoints.map((b, idx) => (
            <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-800">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6-Step Partnership Process */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">STEP-BY-STEP IMPLEMENTATION</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            The 6-Step Partnership Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERSHIP_STEPS.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-heading font-extrabold flex items-center justify-center text-sm shadow-sm">
                {step.step}
              </div>
              <h3 className="text-lg font-heading font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Possible Delivery Formats */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8 shadow-xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-teal-400 uppercase tracking-widest">FLEXIBLE TIMETABLE INTEGRATION</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-white">
            Adaptable Delivery Formats
          </h2>
          <p className="text-slate-300 text-sm">
            Select the model that best integrates with your school calendar:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERY_FORMATS.map((fmt, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-2">
              <h3 className="text-base font-heading font-bold text-teal-300">{fmt.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{fmt.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Designed to Work With Your School: Responsibilities Matrix */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">CLEAR COLLABORATION BOUNDARIES</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Designed to Work With Your School
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* School Responsibilities */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-600" />
              <span>School Responsibilities</span>
            </h3>
            <div className="space-y-2.5">
              {RESPONSIBILITIES.school.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Program Responsibilities */}
          <div className="bg-gradient-to-b from-indigo-50 to-white p-6 sm:p-8 rounded-3xl border border-indigo-200 shadow-sm space-y-4">
            <h3 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span>MindPilot Program Responsibilities</span>
            </h3>
            <div className="space-y-2.5">
              {RESPONSIBILITIES.programTeam.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Commercial Scope Notice */}
      <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
        <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">INSTITUTIONAL PROPOSAL NOTICE</p>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto">
          Program scope and commercial terms are discussed directly with each institution. The final proposal is customized according to student strength, grade levels, delivery format, timetable, and agreed services.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActiveTab('contact')}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base shadow-lg transition-all"
        >
          <Building2 className="w-5 h-5" />
          <span>Request a Customized School Partnership Discussion</span>
        </button>
      </div>

    </div>
  );
}
