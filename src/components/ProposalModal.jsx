import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  School, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Sparkles,
  FileCheck,
  Building2
} from 'lucide-react';
import { MIND_PILOT_INFO, RESPONSIBILITIES, CORE_QUOTE } from '../data/mindpilotData';

export default function ProposalModal({ isOpen, onClose, proposalData }) {
  if (!isOpen) return null;

  const school = proposalData?.schoolName || "Partner Institution";
  const students = proposalData?.studentCount || 150;
  const planTier = proposalData?.planTier || "Premier Campus Plan";
  const grades = proposalData?.selectedGrades || ['Grades 6–8', 'Grades 9–10'];
  const facilitationModel = proposalData?.facilitationModel === 'blended' ? 'Blended Facilitation' : 'MindPilot Certified Trainer-Led';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-900">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between no-print shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
            <School className="w-4 h-4 text-indigo-600" />
            <span>MindPilot Official School Partnership Proposal</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-extrabold text-xs shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-white text-slate-900 print-only font-sans">
          
          {/* Proposal Document Header */}
          <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <img 
                src="/logo.png" 
                alt="MindPilot Logo" 
                className="h-18 sm:h-24 w-auto object-contain filter drop-shadow-xs" 
              />
            </div>

            <div className="text-left sm:text-right space-y-1">
              <span className="text-xs font-black text-pink-600 uppercase tracking-widest block">
                OFFICIAL INSTITUTIONAL PROPOSAL
              </span>
              <h2 className="text-xl font-heading font-black text-slate-900">
                {MIND_PILOT_INFO.programName}
              </h2>
            </div>
          </div>

          {/* Prepared For Banner */}
          <div className="p-6 rounded-2xl bg-indigo-50/80 border border-indigo-200 flex flex-wrap justify-between items-center gap-4">
            <div className="space-y-1">
              <span className="text-[10px] text-indigo-800 font-extrabold uppercase tracking-wider">PREPARED EXCLUSIVELY FOR</span>
              <h3 className="text-2xl font-heading font-black text-slate-900">{school}</h3>
              <p className="text-xs text-slate-600 font-medium">{students} Enrolled Students • Mode: {facilitationModel}</p>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <span className="text-[10px] text-pink-700 font-extrabold uppercase tracking-wider block">SELECTED PLAN TIER</span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-100 border border-pink-300 text-pink-900 text-xs font-extrabold">
                <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                <span>{planTier}</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">{grades.join(', ')}</p>
            </div>
          </div>

          {/* Vision Statement Quote */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 italic text-slate-800 text-sm font-medium">
            "{CORE_QUOTE.main}"
          </div>

          {/* Program Overview & Objectives */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-indigo-700 uppercase tracking-wider">
              1. Executive Summary & Program Objectives
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              The MindPilot AI Readiness & Responsible Technology Program equips students with age-appropriate AI literacy, prompt engineering skills, hallucination verification techniques, and ethical technology habits. Rather than promoting passive overdependence, the program fosters independent critical thinking and academic integrity.
            </p>
          </div>

          {/* Responsibilities Matrix */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-indigo-700 uppercase tracking-wider">
              2. Roles & Delivery Framework
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-extrabold text-slate-900 uppercase block">School Provides:</span>
                <ul className="space-y-1.5 text-slate-700 font-medium">
                  {RESPONSIBILITIES.school.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-extrabold text-slate-900 uppercase block">Program Team Provides:</span>
                <ul className="space-y-1.5 text-slate-700 font-medium">
                  {RESPONSIBILITIES.programTeam.slice(0, 5).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Commercial Partnership & Institutional Scope */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-indigo-700 uppercase tracking-wider">
              3. Commercial Partnership & Institutional Scope
            </h4>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">COHORT STRENGTH</span>
                  <span className="text-base font-black text-slate-900 mt-1 block">{students} Enrolled Students</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">RECOMMENDED TIER</span>
                  <span className="text-base font-black text-indigo-700 mt-1 block">{planTier}</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">PRICING STRUCTURE</span>
                  <span className="text-base font-black text-emerald-700 mt-1 block">Custom Institutional Rate</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Includes complete 12-week printed student workbooks and digital learning kits.</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Volume tier discounts applied for cohort strength exceeding 100+ students.</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Includes Executive Impact Analytics Report for school management at program conclusion.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-center">
                <p className="text-xs text-indigo-900 font-semibold">
                  To finalize commercial quotation terms, custom volume tier discounts, or schedule an inaugural school briefing, please contact executive leadership below.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Next Steps Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-indigo-700 uppercase">Executive Partnership Contact</span>
              <h5 className="text-base font-black text-slate-900">{MIND_PILOT_INFO.contact.ceo}</h5>
              <p className="text-xs text-slate-600 font-medium">{MIND_PILOT_INFO.contact.role}, MindPilot Education</p>
            </div>

            <div className="text-xs text-slate-700 font-medium space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-600" />
                <a href={`tel:${MIND_PILOT_INFO.contact.phone}`} className="hover:text-indigo-600">{MIND_PILOT_INFO.contact.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <a href={`mailto:${MIND_PILOT_INFO.contact.email}`} className="hover:text-indigo-600">{MIND_PILOT_INFO.contact.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>{MIND_PILOT_INFO.contact.location}</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
