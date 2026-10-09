import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Calendar, 
  Target, 
  CheckCircle2, 
  MessageSquareCode, 
  Layers,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Gamepad2
} from 'lucide-react';
import { CURRICULUM_WEEKS } from '../data/mindpilotData';

export default function CurriculumExplorer({ setActiveTab, setLabPrompt }) {
  const [selectedTerm, setSelectedTerm] = useState('All');
  const [expandedWeek, setExpandedWeek] = useState(1);

  const terms = ['All', 'Term 1', 'Term 2', 'Term 3', 'Term 4'];

  const filteredWeeks = selectedTerm === 'All' 
    ? CURRICULUM_WEEKS 
    : CURRICULUM_WEEKS.filter(w => w.term === selectedTerm);

  const handleTestPrompt = (promptText) => {
    if (setLabPrompt) {
      setLabPrompt(promptText);
    }
    setActiveTab('ailab');
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-200">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span>Structured 12-Week Syllabus</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
          Proposed 12-Week Student Curriculum
        </h2>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          A structured progression from AI awareness to independent application, culminating in a student-led project and reflection showcase.
        </p>
      </div>

      {/* Term Filter Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200 gap-1 font-medium">
          {terms.map((term) => (
            <button
              key={term}
              onClick={() => setSelectedTerm(term)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                selectedTerm === term
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {term === 'All' ? 'All 12 Weeks' : term}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Weeks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWeeks.map((item) => {
          const isExpanded = expandedWeek === item.week;
          return (
            <div
              key={item.week}
              className={`glass-panel rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                isExpanded 
                  ? 'border-indigo-500 shadow-md bg-white' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="p-6 space-y-4">
                
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
                    WEEK {item.week < 10 ? `0${item.week}` : item.week}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                    {item.term}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-snug font-medium">
                    {item.subtitle}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expandable Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-3.5 text-xs">
                    
                    <div>
                      <h4 className="font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <Target className="w-3.5 h-3.5" />
                        <span>Core Objective</span>
                      </h4>
                      <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">
                        {item.objective}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Classroom Activity</span>
                      </h4>
                      <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">
                        {item.activity}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <MessageSquareCode className="w-3.5 h-3.5" />
                        <span>Sample Prompt / Inquiry</span>
                      </h4>
                      <p className="font-mono text-[11px] text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200 italic font-medium">
                        "{item.samplePrompt}"
                      </p>
                    </div>

                    <button
                      onClick={() => handleTestPrompt(item.samplePrompt)}
                      className="w-full mt-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      <span>Test Prompt in AI Lab</span>
                    </button>

                  </div>
                )}

              </div>

              {/* Bottom Toggle Bar */}
              <div 
                onClick={() => setExpandedWeek(isExpanded ? null : item.week)}
                className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <span>{isExpanded ? 'Hide Lesson Details' : 'View Lesson Details & Sample Prompt'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4 text-indigo-600" /> : <ChevronDown className="w-4 h-4 text-indigo-600" />}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
