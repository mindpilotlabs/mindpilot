import React from 'react';
import { 
  X, 
  Printer, 
  CheckCircle2, 
  School, 
  Users, 
  MapPin, 
  FileCheck,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { MIND_PILOT_INFO } from '../data/mindpilotData';

export default function ProposalModal({ isOpen, onClose, proposalData }) {
  if (!isOpen) return null;

  const {
    schoolName = 'Partner School',
    studentCount = 150,
    selectedGrades = ['Grades 6–8', 'Grades 9–10'],
    planTier = 'Premier Campus Plan',
    facilitationModel = 'trainer-led',
    estimatedHours = 48
  } = proposalData || {};

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl space-y-6 p-6 sm:p-8 relative animate-slide-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
          <img src="/logo.png" alt="MindPilot Logo" className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-sm" />
          <div>
            <span className="text-[10px] font-extrabold text-indigo-700 uppercase tracking-widest block">OFFICIAL INSTITUTIONAL OUTLINE</span>
            <h2 className="text-xl sm:text-2xl font-heading font-black text-slate-900">Customized School Partnership Scope</h2>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-700">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">TARGET INSTITUTION:</span>
              <p className="text-sm font-bold text-slate-900">{schoolName}</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">PARTICIPATING STUDENTS:</span>
              <p className="text-sm font-bold text-indigo-700">{studentCount} Students</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">GRADE BANDS:</span>
              <p className="text-sm font-bold text-slate-900">{Array.isArray(selectedGrades) ? selectedGrades.join(', ') : selectedGrades}</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">ACADEMIC YEAR:</span>
              <p className="text-sm font-bold text-slate-900">{MIND_PILOT_INFO.academicYear}</p>
            </div>
          </div>
        </div>

        {/* Inclusions Matrix */}
        <div className="space-y-3">
          <h3 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider">Scope & Deliverables Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium">
            {[
              "8 Structured Curriculum Modules",
              "12-Week Timetable Adaptability",
              "Certified Facilitators / Master Content",
              "Baseline & Post-Program Assessments",
              "Prompt Engineering & Hallucination Labs",
              "Student Completion Certificates",
              "Teacher Orientation & Usage Guidelines",
              "Parent Awareness Communication Sheets"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Terms Notice */}
        <div className="glass-panel p-4 rounded-xl border border-indigo-200 bg-indigo-50/60 text-xs text-slate-700 leading-relaxed font-medium">
          <strong className="text-indigo-900">Commercial Terms Notice:</strong> Program scope and commercial terms are discussed directly with each institution. The final proposal is customized according to student strength, grade levels, delivery format, timetable, and agreed services.
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>Print Scope Summary</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold transition-all"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
