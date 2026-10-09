import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Heart, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  HelpCircle 
} from 'lucide-react';

export default function BeyondClassroom() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-extrabold tracking-wider uppercase border border-purple-200">
          Teacher & Parent Engagement
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
          AI Readiness Should Extend Beyond the Classroom
        </h2>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          Students develop stronger technology habits when school, teachers, and parents share a common understanding of responsible AI use.
        </p>
      </div>

      {/* Two Columns: Teacher vs Parent Component */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Teacher Component */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-200 space-y-6 bg-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-indigo-700 uppercase">TEACHER COMPONENT</span>
              <h3 className="text-xl font-heading font-black text-slate-900">Supporting Educators</h3>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
            {[
              "AI awareness orientation for school teaching staff",
              "Classroom responsible AI guidelines & Honor Code templates",
              "Practical guidance on AI detection & assignment design",
              "Recommended practices for AI-assisted homework evaluation"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Component */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-pink-200 space-y-6 bg-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-700 border border-pink-200 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-pink-700 uppercase">PARENT COMPONENT</span>
              <h3 className="text-xl font-heading font-black text-slate-900">Informing Families</h3>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
            {[
              "Parent awareness sessions & takeaway guides",
              "Understanding student AI usage at home",
              "Safety, privacy, and digital data protection awareness",
              "Supporting academic integrity and healthy tech habits at home"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
