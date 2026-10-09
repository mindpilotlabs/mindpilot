import React from 'react';
import { 
  Compass, 
  BookOpen, 
  Layers, 
  Sparkles, 
  BarChart3, 
  Calculator, 
  Gamepad2, 
  FileText,
  ShieldCheck,
  Crown
} from 'lucide-react';
import { MIND_PILOT_INFO } from '../data/mindpilotData';

export default function Header({ activeTab, setActiveTab, openProposalModal }) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Compass },
    { id: 'curriculum', label: '12-Week Curriculum', icon: BookOpen },
    { id: 'ailab', label: 'Student AI Lab', icon: Gamepad2 },
    { id: 'impact', label: 'Impact Metrics', icon: BarChart3 },
    { id: 'calculator', label: 'School Plans & Grade Bands', icon: Calculator },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-24">
          
          {/* Brand Logo & Motto */}
          <div 
            className="flex items-center gap-3 cursor-pointer group py-1"
            onClick={() => setActiveTab('overview')}
          >
            <img 
              src="/logo.png" 
              alt="MindPilot Logo" 
              className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-xs" 
            />
          </div>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={openProposalModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>School Proposal</span>
            </button>
          </div>

        </div>

        {/* Mobile Tab Scrollbar */}
        <div className="md:hidden flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}
