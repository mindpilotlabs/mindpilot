import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  ShieldAlert, 
  CheckCircle, 
  XCircle, 
  Award, 
  Check,
  AlertTriangle,
  Gamepad2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROMPT_LAB_EXAMPLES, QUIZ_QUESTIONS } from '../data/mindpilotData';

export default function StudentAILab({ initialPrompt }) {
  const [activeTab, setActiveTab] = useState('promptLab'); // promptLab | hallucinationGame | quiz

  // Prompt Lab State
  const [customPrompt, setCustomPrompt] = useState(initialPrompt || '');
  const [evalResult, setEvalResult] = useState(null);

  useEffect(() => {
    if (initialPrompt) {
      setCustomPrompt(initialPrompt);
      evaluatePrompt(initialPrompt);
    }
  }, [initialPrompt]);

  const evaluatePrompt = (text) => {
    if (!text.trim()) {
      setEvalResult(null);
      return;
    }

    const lower = text.toLowerCase();
    let socraticScore = 50;
    let dependencyRisk = 50;
    let feedback = [];
    let badge = 'Basic Inquiry';

    if (lower.includes('write my') || lower.includes('do my') || lower.includes('solve for me') || lower.includes('give me answers')) {
      dependencyRisk = 90;
      socraticScore = 15;
      badge = 'Dependency Risk Alert';
      feedback.push('⚠️ You asked AI to generate your final work directly! This encourages passive copy-pasting.');
      feedback.push('💡 Pro Tip: Ask AI to act as a Socratic tutor and quiz you step-by-step instead.');
    } else if (lower.includes('explain') || lower.includes('quiz me') || lower.includes('break down') || lower.includes('act as') || lower.includes('step by step')) {
      socraticScore = 95;
      dependencyRisk = 10;
      badge = 'Socratic Learning Prompt';
      feedback.push('🌟 Excellent Prompt! You set a clear role and kept yourself in control of the learning process.');
      feedback.push('✅ AI acts as your co-pilot, leaving you as the master thinker.');
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } else {
      socraticScore = 65;
      dependencyRisk = 40;
      badge = 'Standard Prompt';
      feedback.push('ℹ️ Clear request. Specify role, grade level, or constraints for richer guidance.');
    }

    setEvalResult({
      socraticScore,
      dependencyRisk,
      badge,
      feedback
    });
  };

  // Hallucination Game State
  const [gameScenario, setGameScenario] = useState(0);
  const [selectedFact, setSelectedFact] = useState(null);
  const [showGameExplanation, setShowGameExplanation] = useState(false);

  const scenarios = [
    {
      id: 1,
      topic: "Indian Space Exploration History",
      aiText: "ISRO launched Chandrayaan-1 in 2008. The mission discovered water molecules on the Moon. Chandrayaan-1 was piloted by Commander Rakesh Sharma personally from inside the lunar module cockpit.",
      claims: [
        { text: "ISRO launched Chandrayaan-1 in 2008.", isHallucination: false, explanation: "Correct! Chandrayaan-1 was launched by ISRO in October 2008." },
        { text: "The mission discovered water molecules on the Moon.", isHallucination: false, explanation: "Correct! Water molecules were confirmed by payloads on Chandrayaan-1." },
        { text: "Chandrayaan-1 was piloted by Commander Rakesh Sharma personally from inside the lunar module cockpit.", isHallucination: true, explanation: "🚨 Hallucination Busted! Chandrayaan-1 was an uncrewed robotic probe. Rakesh Sharma flew aboard Soyuz T-11 in 1984!" }
      ]
    },
    {
      id: 2,
      topic: "Physics & Laws of Motion",
      aiText: "Isaac Newton published his Principia Mathematica in 1687. He established three laws of motion. His fourth law states that objects in vacuum travel faster than the speed of light.",
      claims: [
        { text: "Isaac Newton published Principia Mathematica in 1687.", isHallucination: false, explanation: "Correct historical fact!" },
        { text: "He established three laws of motion.", isHallucination: false, explanation: "Correct! Newton's three laws of motion." },
        { text: "His fourth law states that objects in vacuum travel faster than light.", isHallucination: true, explanation: "🚨 Hallucination Busted! Newton formulated 3 laws of motion, not 4. Nothing travels faster than light." }
      ]
    }
  ];

  const handleSelectClaim = (claim) => {
    setSelectedFact(claim);
    setShowGameExplanation(true);
    if (claim.isHallucination) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    }
  };

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleOptionSelect = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (quizAnswers[q.id] === q.correct) {
        score += 20;
      }
    });
    return score;
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    if (calculateQuizScore() >= 80) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-200">
          <Gamepad2 className="w-4 h-4 text-indigo-600" />
          <span>Interactive Learning Modules</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
          MindPilot Student AI Lab
        </h2>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          Interactive tools designed for students to evaluate prompts, spot AI hallucinations, and assess AI literacy.
        </p>
      </div>

      {/* Clean Navigation Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200 gap-1.5">
          <button
            onClick={() => setActiveTab('promptLab')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'promptLab'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <BrainCircuit className="w-4 h-4" />
            <span>Prompt Evaluator</span>
          </button>

          <button
            onClick={() => setActiveTab('hallucinationGame')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'hallucinationGame'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Hallucination Detective</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'quiz'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>AI Literacy Quiz</span>
          </button>
        </div>
      </div>

      {/* 1. PROMPT EVALUATOR TOOL */}
      {activeTab === 'promptLab' && (
        <div className="space-y-8">
          
          {/* Preset Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROMPT_LAB_EXAMPLES.map((ex) => (
              <div key={ex.id} className="glass-panel p-5 rounded-2xl border border-slate-200 bg-white space-y-4">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase">
                  {ex.category}
                </span>
                <h4 className="text-base font-heading font-bold text-slate-900">{ex.title}</h4>

                {/* Weak Prompt */}
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                    <XCircle className="w-4 h-4" />
                    <span>Weak / Dependency Prompt:</span>
                  </div>
                  <p className="text-xs text-slate-800 font-mono italic">"{ex.weakPrompt}"</p>
                  <p className="text-[11px] text-rose-800 mt-1 font-medium">{ex.weakAnalysis}</p>
                </div>

                {/* Strong Prompt */}
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>MindPilot Socratic Prompt:</span>
                  </div>
                  <p className="text-xs text-slate-800 font-mono italic">"{ex.strongPrompt}"</p>
                  <p className="text-[11px] text-emerald-800 mt-1 font-medium">{ex.strongAnalysis}</p>
                </div>

                <button
                  onClick={() => {
                    setCustomPrompt(ex.strongPrompt);
                    evaluatePrompt(ex.strongPrompt);
                  }}
                  className="w-full py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-xs text-indigo-700 font-bold border border-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Load Strong Prompt into Evaluator</span>
                </button>
              </div>
            ))}
          </div>

          {/* Interactive Tester Panel */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-6 shadow-xs">
            <h3 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span>Interactive Prompt Quality & Ethics Evaluator</span>
            </h3>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 uppercase block">
                Type or Paste any Prompt to Analyze:
              </label>
              <textarea
                rows={3}
                value={customPrompt}
                onChange={(e) => {
                  setCustomPrompt(e.target.value);
                  evaluatePrompt(e.target.value);
                }}
                placeholder="e.g. Act as a physics tutor. Explain Newton's laws using real-world basketball analogies..."
                className="w-full p-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-500 font-mono placeholder:text-slate-400"
              />
            </div>

            {/* Live Feedback Score Card */}
            {evalResult && (
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">EVALUATION RESULT</span>
                    <h4 className="text-lg font-heading font-bold text-indigo-700">{evalResult.badge}</h4>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-center bg-white px-4 py-2 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Learning Gain</span>
                      <span className="text-xl font-bold text-emerald-600">{evalResult.socraticScore}%</span>
                    </div>

                    <div className="text-center bg-white px-4 py-2 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Dependency Risk</span>
                      <span className={`text-xl font-bold ${evalResult.dependencyRisk > 50 ? 'text-rose-600' : 'text-indigo-600'}`}>
                        {evalResult.dependencyRisk}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-200">
                  {evalResult.feedback.map((f, idx) => (
                    <p key={idx} className="text-xs text-slate-700 font-semibold">
                      {f}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      )}

      {/* 2. HALLUCINATION DETECTIVE GAME */}
      {activeTab === 'hallucinationGame' && (
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-6 shadow-xs">
          <div>
            <span className="text-xs font-bold text-indigo-700 uppercase">Verification Exercise</span>
            <h3 className="text-2xl font-heading font-bold text-slate-900 mt-1">Hallucination Detective</h3>
          </div>

          <p className="text-sm text-slate-700 font-medium">
            Below is an AI-generated statement. One of the claims contains a fake, fabricated, or hallucinated statement! <strong>Click the hallucinated sentence to verify your spotter skills.</strong>
          </p>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-indigo-700 uppercase">{scenarios[gameScenario].topic}</span>
            <p className="text-sm text-slate-800 leading-relaxed font-serif italic">
              "{scenarios[gameScenario].aiText}"
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-500 uppercase">Select the statement you believe is an AI Hallucination:</h4>
            {scenarios[gameScenario].claims.map((claim, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectClaim(claim)}
                className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                  selectedFact === claim
                    ? claim.isHallucination
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                      : 'bg-rose-50 border-rose-500 text-rose-900'
                    : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-800'
                }`}
              >
                <span>{claim.text}</span>
              </button>
            ))}
          </div>

          {showGameExplanation && selectedFact && (
            <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 ${
              selectedFact.isHallucination 
                ? 'bg-emerald-50 border-emerald-400 text-emerald-900' 
                : 'bg-amber-50 border-amber-400 text-amber-900'
            }`}>
              <div className="font-bold flex items-center gap-2">
                {selectedFact.isHallucination ? <CheckCircle className="w-5 h-5 text-emerald-600" /> : <AlertTriangle className="w-5 h-5 text-amber-600" />}
                <span>{selectedFact.isHallucination ? 'Spot On! You identified the hallucination!' : 'Incorrect claim selected.'}</span>
              </div>
              <p>{selectedFact.explanation}</p>
            </div>
          )}
        </div>
      )}

      {/* 3. AI LITERACY QUIZ */}
      {activeTab === 'quiz' && (
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-6 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase">Self-Assessment</span>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mt-1">MindPilot AI Readiness Check</h3>
            </div>

            {quizSubmitted && (
              <div className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm">
                Score: {calculateQuizScore()}/100
              </div>
            )}
          </div>

          {!quizSubmitted ? (
            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, qIndex) => (
                <div key={q.id} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {qIndex + 1}
                    </span>
                    <span>{q.question}</span>
                  </h4>

                  <div className="space-y-2 pt-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[q.id] === optIdx;
                      return (
                        <div
                          key={optIdx}
                          onClick={() => handleOptionSelect(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center gap-3 ${
                            isSelected 
                              ? 'bg-indigo-50 border-indigo-500 text-slate-900 font-bold' 
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              <button
                onClick={handleQuizSubmit}
                disabled={Object.keys(quizAnswers).length < QUIZ_QUESTIONS.length}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                  Object.keys(quizAnswers).length === QUIZ_QUESTIONS.length
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Submit Answers & View Score
              </button>
            </div>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 mx-auto flex items-center justify-center text-indigo-600">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-slate-900">
                  Assessment Score: {calculateQuizScore()}/100
                </h3>
                <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto font-medium">
                  {calculateQuizScore() >= 80 
                    ? '🎉 Outstanding! You demonstrate high AI Readiness and Responsible Tech awareness.'
                    : '👍 Great effort! Review the 12-Week Curriculum modules to boost your verification skills.'}
                </p>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}

        </div>
      )}

    </section>
  );
}
