import React, { useState } from 'react';
import { 
  Calculator, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Award, 
  Building2,
  School,
  Star,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  Layers,
  GraduationCap
} from 'lucide-react';
import { MIND_PILOT_INFO, GRADE_BANDS } from '../data/mindpilotData';

export default function PartnershipCalculator({ openProposalModal, setProposalData }) {
  const [schoolName, setSchoolName] = useState('Greenwood International School');
  const [studentCount, setStudentCount] = useState(150);
  const [selectedGrades, setSelectedGrades] = useState(['Grades 6–8', 'Grades 9–10']);
  const [facilitationModel, setFacilitationModel] = useState('trainer-led');
  const [selectedPlanTier, setSelectedPlanTier] = useState('Premier Campus Plan');

  const toggleGrade = (grade) => {
    if (selectedGrades.includes(grade)) {
      if (selectedGrades.length > 1) {
        setSelectedGrades(selectedGrades.filter(g => g !== grade));
      }
    } else {
      setSelectedGrades([...selectedGrades, grade]);
    }
  };

  const estimatedHours = Math.round(studentCount > 500 ? 96 : 48);

  const handleGenerateProposal = (planName = selectedPlanTier) => {
    if (setProposalData) {
      setProposalData({
        schoolName: schoolName || 'Partner School',
        studentCount,
        selectedGrades,
        planTier: planName,
        facilitationModel,
        estimatedHours,
        academicYear: MIND_PILOT_INFO.academicYear
      });
    }
    openProposalModal();
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* 1. Unified Main Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wider uppercase border border-indigo-200">
          <Calculator className="w-4 h-4 text-indigo-600" />
          <span>School Plans & Grade Bands</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
          Institutional Plans & Student Grade Alignment
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          Explore how our AI literacy curriculum aligns with student cognitive maturity, evaluate our institutional partnership plans, and configure your campus scope.
        </p>
      </div>

      {/* 2. SECTION: Student Grade Bands Progression Matrix */}
      <div className="space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>PEDAGOGICAL ALIGNMENT</span>
            </div>
            <h3 className="text-2xl font-heading font-black text-slate-900">
              Grade Bands & Learning Stages
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
            Age-Appropriate Skill Building
          </span>
        </div>

        {/* Recommended Implementation Target Callout */}
        <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-indigo-200 bg-indigo-50/60 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 shadow-xs">
                <Star className="w-6 h-6 text-amber-500 fill-amber-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800">
                  RECOMMENDED IMPLEMENTATION TARGET
                </span>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-slate-900 mt-0.5">
                  Grades 6–10 are Recommended as Primary Target Group
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                  Students at this stage develop independent inquiry, computational reasoning, and technology habits.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-indigo-200 text-indigo-900 text-xs font-bold shadow-xs">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>4-Term Academic Progression</span>
              </span>
            </div>
          </div>
        </div>

        {/* Grade Bands Matrix Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GRADE_BANDS.map((item) => (
            <div
              key={item.band}
              className={`glass-panel p-6 rounded-2xl border transition-all ${
                item.recommended 
                  ? 'border-indigo-400 bg-white shadow-sm' 
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                    GRADE BAND
                  </span>
                  <h4 className="text-2xl font-heading font-black text-slate-900">
                    {item.band}
                  </h4>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                    STAGE
                  </span>
                  <span className="text-base font-bold text-indigo-700">
                    {item.stage}
                  </span>
                </div>
              </div>

              {item.recommended && (
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                  <span>PRIMARY TARGET GROUP</span>
                </div>
              )}

              <p className="text-xs text-slate-600 mb-5 leading-relaxed font-medium">
                {item.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Key Learning Focus Areas:
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {item.keyAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 3. SECTION: Institutional School Partnership Plans (Tiers) */}
      <div className="space-y-8 pt-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4 text-indigo-600" />
              <span>INSTITUTIONAL PARTNERSHIP TIERS</span>
            </div>
            <h3 className="text-2xl font-heading font-black text-slate-900">
              Campus Adoption & Delivery Plans
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
            Flexible Deployment Models
          </span>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Tier 1: Starter Pilot Plan */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                  PILOT COHORT
                </span>
                <BookOpen className="w-5 h-5 text-slate-400" />
              </div>

              <div>
                <h4 className="text-xl font-heading font-bold text-slate-900">Starter Pilot Plan</h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Ideal for middle school focus groups (50–150 students) to evaluate impact.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-500 uppercase">Pricing Model</span>
                <div className="text-lg font-bold text-indigo-700 mt-0.5">
                  Custom Pilot Rate
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Includes core workbooks & assessments</p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Key Deliverables:</span>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>12-Week Core Curriculum (Grades 6–8)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Certified Facilitator Sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Student Printed Workbooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Baseline & Post Impact Report</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => handleGenerateProposal('Starter Pilot Plan')}
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all flex items-center justify-center gap-2"
            >
              <span>Request Starter Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tier 2: Premier Campus Plan (RECOMMENDED) */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border-2 border-indigo-500 bg-white flex flex-col justify-between shadow-md relative space-y-6">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="px-3.5 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                <Star className="w-3 h-3 fill-current text-amber-300" /> RECOMMENDED FOR SCHOOLS
              </span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
                  COMPREHENSIVE CAMPUS
                </span>
                <Award className="w-5 h-5 text-indigo-600" />
              </div>

              <div>
                <h4 className="text-xl font-heading font-black text-slate-900">Premier Campus Plan</h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Complete school-wide AI literacy solution (Grades 3–10) with full analytics & parent kits.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-center">
                <span className="text-xs font-bold text-slate-600 uppercase">Pricing Model</span>
                <div className="text-lg font-black text-indigo-800 mt-0.5">
                  Volume Tier Discount
                </div>
                <p className="text-[11px] text-indigo-700 font-semibold mt-0.5">Optimized per-student annual rate</p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider block">Includes Everything in Starter +</span>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Full 4-Term Progression (Terms 1 to 4)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Interactive Student AI Lab Access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Teacher AI Usage & Honor Code Guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Parent Digital Safety Workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Certified Graduation Certificates</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => handleGenerateProposal('Premier Campus Plan')}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Unlock Premier Plan Quote</span>
            </button>
          </div>

          {/* Tier 3: Enterprise & District Partnership */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                  DISTRICT / MULTI-CAMPUS
                </span>
                <Building2 className="w-5 h-5 text-slate-500" />
              </div>

              <div>
                <h4 className="text-xl font-heading font-bold text-slate-900">Enterprise & District</h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Custom strategic partnership for school networks, chains & multi-branch groups.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-500 uppercase">Pricing Model</span>
                <div className="text-lg font-bold text-slate-900 mt-0.5">
                  Custom Institutional Scope
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Custom billing & multi-year terms</p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Enterprise Privileges:</span>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Dedicated Master AI Trainer on Campus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Custom School AI Safety Policy Framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Annual Student AI Hackathon & Showcase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Executive Board Quarterly Briefings</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => handleGenerateProposal('Enterprise & District Partnership')}
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Executive Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* 4. SECTION: Interactive Custom School Scope Estimator */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-900">Interactive Campus Scope Estimator</h3>
              <p className="text-xs text-slate-600 font-medium">Configure parameters for your school to preview your deliverables package and request an official proposal.</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold shrink-0">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Academic Year Implementation Model</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* School Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                <School className="w-4 h-4 text-indigo-600" />
                <span>School Institution Name:</span>
              </label>
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder="e.g. Greenwood International School"
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:bg-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Student Count Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 uppercase">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span>Enrolled Student Strength:</span>
                </span>
                <span className="text-base font-bold text-indigo-600">{studentCount} Students</span>
              </div>

              <input
                type="range"
                min="50"
                max="1500"
                step="25"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>50 (Pilot)</span>
                <span>150 (Sample Cohort)</span>
                <span>500 (Standard Campus)</span>
                <span>1500+ (Large Institution)</span>
              </div>
            </div>

            {/* Target Grades Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase block">
                Target Grade Bands Covered:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Grades 3–5', 'Grades 6–8', 'Grades 9–10', 'Grades 11–12'].map((g) => {
                  const isSelected = selectedGrades.includes(g);
                  const isRecommended = g === 'Grades 6–8' || g === 'Grades 9–10';
                  return (
                    <button
                      key={g}
                      onClick={() => toggleGrade(g)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                        isSelected
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-900 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                      }`}
                    >
                      <span>{g}</span>
                      {isRecommended && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                          RECOMMENDED
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Implementation Mode */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase block">
                Preferred Facilitation Model:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setFacilitationModel('trainer-led')}
                  className={`p-3 rounded-xl border text-xs text-left transition-all ${
                    facilitationModel === 'trainer-led'
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-900 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                  }`}
                >
                  <div className="font-bold text-slate-900">Certified Trainer-Led</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-medium">MindPilot certified expert on campus</div>
                </button>

                <button
                  onClick={() => setFacilitationModel('blended')}
                  className={`p-3 rounded-xl border text-xs text-left transition-all ${
                    facilitationModel === 'blended'
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-900 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                  }`}
                >
                  <div className="font-bold text-slate-900">Blended Facilitation</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-medium">Co-facilitated with school faculty</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Output Scope Summary (5 Cols) */}
          <div className="lg:col-span-5 glass-card p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-5">
            <div>
              <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block">
                PREPARED FOR YOUR SCHOOL
              </span>
              <h4 className="text-lg font-heading font-bold text-slate-900 mt-0.5">
                Tailored Partnership Package
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                {schoolName || 'Partner School'} • {studentCount} Enrolled Students
              </p>
            </div>

            {/* Scope Deliverable Badges */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Learning Hours</span>
                <span className="text-lg font-bold text-indigo-700">{estimatedHours}+ Hours</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Certifications</span>
                <span className="text-lg font-bold text-indigo-700">{studentCount} Students</span>
              </div>
            </div>

            {/* Institutional Deliverables List */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <h5 className="text-xs font-bold text-slate-700 uppercase">Package Deliverables:</h5>
              <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>12-Week Curriculum & Student Workbooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>MindPilot Certified Facilitator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Student AI Lab Interactive Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Executive School Management Impact Report</span>
                </div>
              </div>
            </div>

            {/* Commercial Callout */}
            <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-800">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Volume Tier Pricing Available</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug font-medium">
                Unlock your custom commercial quote and printable agreement in your official proposal document.
              </p>
            </div>

            {/* Action CTA Button */}
            <div>
              <button
                onClick={() => handleGenerateProposal(selectedPlanTier)}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Unlock Official Commercial Proposal PDF</span>
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

