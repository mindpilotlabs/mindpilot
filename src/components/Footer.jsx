import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  ArrowUp, 
  Sparkles,
  School,
  Bot
} from 'lucide-react';
import { MIND_PILOT_INFO } from '../data/mindpilotData';

export default function Footer({ setActiveTab, openProposalModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-8 pb-6 relative overflow-hidden shadow-xs mt-auto">
      
      {/* Light Background Glow Effects */}
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo.png" 
                alt="MindPilot Logo" 
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-xs" 
              />
            </div>

            <p className="text-xs text-slate-600 leading-normal max-w-md font-medium">
              "{MIND_PILOT_INFO.mission}"
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold">
              {[
                { id: 'overview', label: 'Program Overview' },
                { id: 'curriculum', label: '12-Week Quest Syllabus' },
                { id: 'ailab', label: 'Interactive Student AI Lab' },
                { id: 'impact', label: 'Impact Metrics (54 → 78)' },
                { id: 'calculator', label: 'School Plans & Grade Bands' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveTab(link.id)}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4 glass-card p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2 shadow-xs">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Leadership Contact
              </h4>
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                {MIND_PILOT_INFO.contact.role}
              </span>
            </div>

            <h5 className="text-xs font-black text-slate-900">{MIND_PILOT_INFO.contact.ceo}</h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-200 text-[11px] font-medium text-slate-700">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <a href={`tel:${MIND_PILOT_INFO.contact.phone}`} className="hover:text-indigo-600 font-bold">
                  {MIND_PILOT_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <a href={`mailto:${MIND_PILOT_INFO.contact.email}`} className="hover:text-indigo-600 truncate font-semibold">
                  {MIND_PILOT_INFO.contact.email}
                </a>
              </div>
            </div>

            <button
              onClick={openProposalModal}
              className="w-full mt-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              <School className="w-3.5 h-3.5" />
              <span>Request School Proposal</span>
            </button>
          </div>

        </div>

        {/* Compact Disclaimer Note */}
        <div className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-[10px] text-slate-500 leading-tight font-medium">
            *Independent student-development initiative. Does not claim board affiliation, government endorsement, or formal accreditation.
          </p>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>© {new Date().getFullYear()} MindPilot Education. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
