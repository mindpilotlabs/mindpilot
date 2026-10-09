import React from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  ArrowUp,
  BookOpen
} from 'lucide-react';
import logoImage from '../assets/logo.png';
import { MIND_PILOT_INFO } from '../data/mindpilotData';

export default function Footer({ setActiveTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Logo & Mission */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
              <img 
                src={logoImage} 
                alt="MindPilot Logo" 
                className="h-24 sm:h-28 lg:h-32 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-md" 
              />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-medium">
              {MIND_PILOT_INFO.mission}
            </p>

            <div className="inline-block px-3 py-1.5 rounded-xl bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs font-extrabold tracking-wide">
              Primary Launch Market: {MIND_PILOT_INFO.primaryMarket}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-heading font-extrabold text-white uppercase tracking-widest text-indigo-400">Explore Program</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors flex items-center gap-1.5">Home</button></li>
              <li><button onClick={() => handleNavClick('program')} className="hover:text-white transition-colors flex items-center gap-1.5">About The Program</button></li>
              <li><button onClick={() => handleNavClick('curriculum')} className="hover:text-white transition-colors flex items-center gap-1.5">8-Module Curriculum</button></li>
              <li><button onClick={() => handleNavClick('schools')} className="hover:text-white transition-colors flex items-center gap-1.5">For Schools & Leadership</button></li>
              <li><button onClick={() => handleNavClick('students')} className="hover:text-white transition-colors flex items-center gap-1.5">For Students & AI Lab</button></li>
              <li><button onClick={() => handleNavClick('teachers-parents')} className="hover:text-white transition-colors flex items-center gap-1.5">Teachers & Parents</button></li>
            </ul>
          </div>

          {/* Col 3: Institutional & Safety */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-heading font-extrabold text-white uppercase tracking-widest text-indigo-400">Safety & Policy</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><button onClick={() => handleNavClick('responsible-ai')} className="hover:text-white transition-colors flex items-center gap-1.5">Responsible AI & Safety</button></li>
              <li><button onClick={() => handleNavClick('impact')} className="hover:text-white transition-colors flex items-center gap-1.5">Impact & Assessment</button></li>
              <li><button onClick={() => handleNavClick('faq')} className="hover:text-white transition-colors flex items-center gap-1.5">FAQ & Commercial Scope</button></li>
              <li><button onClick={() => handleNavClick('resources')} className="hover:text-white transition-colors flex items-center gap-1.5">Resources & Downloads</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors flex items-center gap-1.5">Partnership Enquiry</button></li>
            </ul>
          </div>

          {/* Col 4: Contact Leadership */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-heading font-extrabold text-white uppercase tracking-widest text-indigo-400">School Partnerships Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-medium">
              <p className="font-bold text-white text-sm">{MIND_PILOT_INFO.contact.ceo}</p>
              <p className="text-[11px] text-teal-400 font-extrabold uppercase tracking-wider">{MIND_PILOT_INFO.contact.role}</p>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${MIND_PILOT_INFO.contact.email}`} className="hover:text-white transition-colors">{MIND_PILOT_INFO.contact.email}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${MIND_PILOT_INFO.contact.phone}`} className="hover:text-white transition-colors">{MIND_PILOT_INFO.contact.phone}</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{MIND_PILOT_INFO.contact.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <div>
            © 2026 MindPilot Education. All rights reserved. Visakhapatnam, Andhra Pradesh.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => handleNavClick('responsible-ai')} className="hover:text-white transition-colors">
              Child Safety & Privacy Statement
            </button>
            <span>•</span>
            <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors">
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-teal-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
