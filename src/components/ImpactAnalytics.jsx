import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  Target, 
  ShieldCheck, 
  Award,
  Sliders
} from 'lucide-react';
import { IMPACT_METRICS, OVERALL_BENCHMARK } from '../data/mindpilotData';

export default function ImpactAnalytics({ setActiveTab }) {
  const [baselineScore, setBaselineScore] = useState(54);

  // Projected improvement calculation formula
  const projectedAfter = Math.min(100, Math.round(baselineScore * 1.44));
  const gainPoints = projectedAfter - baselineScore;

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold tracking-wider uppercase border border-emerald-200">
          Measuring Student Impact
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
          How We Measure Progress
        </h2>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          A defined journey from baseline to impact report — progress is rigorously assessed, not assumed.
        </p>
      </div>

      {/* 6-Step Measurement Journey Flow */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 shadow-md">
        <h3 className="text-lg font-heading font-black text-slate-900 mb-4">
          6-Stage Assessment Framework:
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            { step: 1, name: "BASELINE", desc: "Initial check of AI awareness & thinking skills" },
            { step: 2, name: "LEARNING", desc: "Structured weekly sessions & guided activities" },
            { step: 3, name: "APPLICATION", desc: "Practical tasks using AI responsibly" },
            { step: 4, name: "PROJECT", desc: "Team problem-solving community sprint" },
            { step: 5, name: "FINAL EVAL", desc: "Repeat assessment against baseline" },
            { step: 6, name: "IMPACT REPORT", desc: "Executive summary for school board" },
          ].map((s) => (
            <div key={s.step} className="glass-card p-3.5 rounded-2xl border border-slate-200 space-y-1 text-center bg-white shadow-sm">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs inline-flex items-center justify-center">
                {s.step}
              </span>
              <h4 className="text-xs font-extrabold text-slate-900">{s.name}</h4>
              <p className="text-[10px] text-slate-500 leading-snug font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Illustrative Benchmark Comparison Graph & Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Overall Benchmark Highlight */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-200 bg-gradient-to-b from-indigo-50/80 via-white to-white flex flex-col justify-between space-y-6 shadow-lg">
          <div>
            <span className="text-xs font-extrabold text-indigo-700 uppercase tracking-wider">
              PROGRAM IMPACT BENCHMARK
            </span>
            <h3 className="text-2xl font-heading font-black text-slate-900 mt-1">
              AI Readiness Score Gain
            </h3>
            <p className="text-xs text-slate-600 mt-2 font-medium">
              Illustrative average cohort results across partnered schools in pilot assessments.
            </p>
          </div>

          {/* Big Score Cards */}
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-xs font-semibold text-slate-500">Before Program (Baseline)</span>
                <p className="text-2xl font-black text-slate-700">54 / 100</p>
              </div>
              <div className="w-12 h-2.5 rounded-full bg-slate-200 overflow-hidden w-24">
                <div className="h-full bg-slate-500" style={{ width: '54%' }}></div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-300 flex items-center justify-between shadow-md">
              <div>
                <span className="text-xs font-extrabold text-indigo-800">After Program Completion</span>
                <p className="text-3xl font-black text-indigo-900">78 / 100</p>
              </div>
              <div className="w-12 h-2.5 rounded-full bg-slate-200 overflow-hidden w-24">
                <div className="h-full bg-gradient-to-r from-indigo-600 to-pink-500" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">Measured Growth Gain</span>
            <span className="text-base font-black text-emerald-700 flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>{OVERALL_BENCHMARK.percentageGain}</span>
            </span>
          </div>
        </div>

        {/* Right: Detailed 7 Metric Bars */}
        <div className="lg:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 shadow-md">
          <h3 className="text-xl font-heading font-black text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <span>Growth Across 7 Evaluated Student Competencies</span>
          </h3>

          <div className="space-y-4">
            {IMPACT_METRICS.map((metric) => (
              <div key={metric.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-800 font-bold">{metric.name}</span>
                  <div className="flex gap-3">
                    <span className="text-slate-500">Before: {metric.before}/100</span>
                    <span className="text-indigo-700 font-bold">After: {metric.after}/100</span>
                  </div>
                </div>

                <div className="h-3 rounded-full bg-slate-100 p-0.5 border border-slate-200 relative overflow-hidden">
                  {/* Before bar */}
                  <div 
                    className="h-full rounded-full bg-slate-300 absolute left-0 top-0 opacity-60" 
                    style={{ width: `${metric.before}%` }}
                  ></div>
                  {/* After bar */}
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 relative z-10 transition-all duration-500" 
                    style={{ width: `${metric.after}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 italic font-medium">
            *Illustrative example based on standardized rubric checks — actual scores will vary by school implementation.
          </p>
        </div>

      </div>

      {/* Interactive Cohort Impact Simulator */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-200 bg-white space-y-6 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-black text-slate-900">Interactive School Cohort Benchmark Simulator</h3>
            <p className="text-xs text-slate-600 font-medium">Adjust estimated initial baseline score to simulate projected cohort outcomes.</p>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
            <span>Estimated Student Baseline Readiness:</span>
            <span className="text-indigo-700 font-extrabold text-base">{baselineScore} / 100</span>
          </div>

          <input 
            type="range"
            min="30"
            max="70"
            value={baselineScore}
            onChange={(e) => setBaselineScore(Number(e.target.value))}
            className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
          />

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-500">Projected Post-Program Score:</span>
              <p className="text-2xl font-black text-emerald-700">{projectedAfter} / 100</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Estimated Literacy & Integrity Gain:</span>
              <p className="text-2xl font-black text-indigo-700">+{gainPoints} pts</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
