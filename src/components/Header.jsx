import React, { useState, useRef, useEffect } from 'react';
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  Building2, 
  Sparkles, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  HelpCircle, 
  FileText, 
  Mail,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import logoImage from '../assets/logo.png';

export default function Header({ activeTab, setActiveTab, openProposalModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Logo with imported asset for GitHub Pages subpath compatibility */}
          <div 
            className="flex items-center gap-3 cursor-pointer group py-1 shrink-0"
            onClick={() => handleNavClick('home')}
          >
            <img 
              src={logoImage} 
              alt="MindPilot Logo" 
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-xs" 
            />
          </div>

          {/* Desktop Grouped Dropdown Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            
            {/* 1. Home Link */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'home' 
                  ? 'bg-indigo-50 text-indigo-700 font-extrabold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Home className="w-4 h-4 text-indigo-600" />
              <span>Home</span>
            </button>

            {/* 2. Dropdown: Program & Curriculum */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('program')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'program' ? null : 'program')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  ['program', 'curriculum', 'students'].includes(activeTab)
                    ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Program & Curriculum</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'program' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'program' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <button
                    onClick={() => handleNavClick('program')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">About The Program</div>
                      <div className="text-[11px] text-slate-500 font-medium">Philosophy & 6-stage framework</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('curriculum')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">8-Module Curriculum</div>
                      <div className="text-[11px] text-slate-500 font-medium">Interactive syllabus & 12-week timeline</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('students')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">Student Experience</div>
                      <div className="text-[11px] text-slate-500 font-medium">Interactive prompt lab & student control</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 3. Dropdown: For Schools */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('schools')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'schools' ? null : 'schools')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  ['schools', 'impact', 'resources'].includes(activeTab)
                    ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Building2 className="w-4 h-4 text-indigo-600" />
                <span>For Schools & Leadership</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'schools' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'schools' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <button
                    onClick={() => handleNavClick('schools')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">School Partnerships</div>
                      <div className="text-[11px] text-slate-500 font-medium">Why partner, 6 steps & delivery formats</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('impact')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">Impact & Assessment</div>
                      <div className="text-[11px] text-slate-500 font-medium">Assessment flow & sample benchmarks</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('resources')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">Resources & Overview</div>
                      <div className="text-[11px] text-slate-500 font-medium">Printable sheets & overview packet</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Dropdown: Ethics & Community */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('community')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'community' ? null : 'community')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  ['responsible-ai', 'teachers-parents'].includes(activeTab)
                    ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Safety & Community</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'community' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'community' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <button
                    onClick={() => handleNavClick('responsible-ai')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">Responsible AI & Child Safety</div>
                      <div className="text-[11px] text-slate-500 font-medium">9 safety pillars & privacy policy</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('teachers-parents')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">Teachers & Parents</div>
                      <div className="text-[11px] text-slate-500 font-medium">Guidance for educators & families</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 5. FAQ Direct Link */}
            <button
              onClick={() => handleNavClick('faq')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'faq' 
                  ? 'bg-indigo-50 text-indigo-700 font-extrabold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              <span>FAQ</span>
            </button>

          </nav>

          {/* Right Action CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5"
            >
              <Building2 className="w-4 h-4 text-indigo-200" />
              <span>Discuss School Partnership</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-indigo-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Accordion Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 bg-white space-y-3 animate-in slide-in-from-top duration-200">
            <div className="space-y-1 p-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full flex items-center gap-2.5 p-3 rounded-xl text-xs font-bold ${activeTab === 'home' ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-800'}`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>

              <div className="pt-2 text-[10px] font-extrabold text-indigo-700 uppercase px-3">Program & Curriculum</div>
              <button onClick={() => handleNavClick('program')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">About The Program</button>
              <button onClick={() => handleNavClick('curriculum')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">8-Module Curriculum</button>
              <button onClick={() => handleNavClick('students')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Student Experience</button>

              <div className="pt-2 text-[10px] font-extrabold text-indigo-700 uppercase px-3">Institutional Partnerships</div>
              <button onClick={() => handleNavClick('schools')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">School Partnerships</button>
              <button onClick={() => handleNavClick('impact')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Impact & Assessment</button>
              <button onClick={() => handleNavClick('resources')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Resources & Overview</button>

              <div className="pt-2 text-[10px] font-extrabold text-indigo-700 uppercase px-3">Safety & Community</div>
              <button onClick={() => handleNavClick('responsible-ai')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Responsible AI & Child Safety</button>
              <button onClick={() => handleNavClick('teachers-parents')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Teachers & Parents</button>
              <button onClick={() => handleNavClick('faq')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">FAQ</button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
