import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Building2, ArrowRight } from 'lucide-react';
import { FAQ_LIST } from '../data/mindpilotData';

export default function FAQSection({ setActiveTab }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleIdx = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold tracking-wider uppercase border border-indigo-200">
          <HelpCircle className="w-4 h-4 text-indigo-600" />
          <span>Frequently Asked Questions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
          Questions About School Partnerships
        </h1>
        <p className="text-slate-600 text-base font-medium">
          Everything school leadership, principals, academic coordinators, and parents need to know.
        </p>
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-4">
        {FAQ_LIST.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div 
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen 
                  ? 'bg-white border-indigo-300 shadow-md ring-1 ring-indigo-500/20' 
                  : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleIdx(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-base sm:text-lg font-heading font-bold text-slate-900 flex items-center gap-3">
                  <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200 shrink-0">
                    Q{idx + 1}
                  </span>
                  <span>{faq.q}</span>
                </span>
                <span className="p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                  {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                  <div className="pt-4 font-medium">{faq.a}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center bg-indigo-50 p-8 rounded-3xl border border-indigo-200 space-y-4">
        <h3 className="text-xl font-heading font-bold text-slate-900">Have specific questions about your campus?</h3>
        <p className="text-sm text-slate-600">Our leadership team in Visakhapatnam is ready to discuss customized options for your school.</p>
        <button
          onClick={() => setActiveTab('contact')}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md transition-all"
        >
          <Building2 className="w-4 h-4" />
          <span>Contact Our Team for a Partnership Discussion</span>
        </button>
      </div>

    </div>
  );
}
