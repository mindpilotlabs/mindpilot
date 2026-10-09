export const MIND_PILOT_INFO = {
  programName: "AI Readiness & Responsible Technology Program",
  tagline: "Preparing Students to Think, Learn, Create and Solve Problems in the Age of AI",
  mission: "Building AI-literate students who know how to use AI without becoming dependent on it.",
  academicYear: "2026–27",
  company: "MindPilot",
  motto: "AI TEACHING. REAL LEARNING.",
  contact: {
    ceo: "Manchala SaiKumar",
    role: "CEO & Founder",
    phone: "+91 6302088183",
    email: "mindpilotlabs@gmail.com",
    location: "Visakhapatnam, Andhra Pradesh",
  }
};

export const CORE_QUOTE = {
  main: "The goal is not to teach students to depend on AI. The goal is to teach them how to think better with AI.",
  assistant: "AI should be a student's assistant — not the student's replacement."
};

export const EIGHT_GUIDANCE_AREAS = [
  { id: 1, title: "Asking meaningful questions", desc: "Formulating precise, context-aware queries that yield high-value insights.", icon: "HelpCircle" },
  { id: 2, title: "Understanding AI limitations", desc: "Recognizing that AI models lack true consciousness, real-time awareness, and emotional nuance.", icon: "AlertTriangle" },
  { id: 3, title: "Verifying information", desc: "Cross-referencing AI outputs against primary authoritative sources.", icon: "ShieldCheck" },
  { id: 4, title: "Distinguishing facts from generated content", desc: "Identifying hallucinations, synthetic bias, and unverified narrative claims.", icon: "Eye" },
  { id: 5, title: "Using AI without replacing own thinking", desc: "Treating AI as a sounding board while maintaining primary analytical ownership.", icon: "Brain" },
  { id: 6, title: "Protecting personal information", desc: "Safeguarding PII, passwords, sensitive academic data, and privacy rights.", icon: "Lock" },
  { id: 7, title: "Maintaining academic integrity", desc: "Ethical attribution, honest submission, and adhering to institutional honor codes.", icon: "BookOpen" },
  { id: 8, title: "Using technology responsibly", desc: "Fostering balanced digital health, respectful communication, and ethical technology habits.", icon: "HeartHandshake" }
];

export const EVOLUTION_STAGES = [
  { step: 1, title: "Traditional Learning", subtitle: "Textbooks & classroom instruction", color: "from-slate-700 to-slate-800" },
  { step: 2, title: "Internet Learning", subtitle: "Search engines & educational websites", color: "from-blue-900 to-slate-800" },
  { step: 3, title: "Digital Learning", subtitle: "Devices, LMS platforms & online media", color: "from-indigo-900 to-blue-900" },
  { step: 4, title: "AI-Assisted Learning", subtitle: "Generative AI tools & virtual tutors", color: "from-violet-900 to-indigo-900" },
  { step: 5, title: "AI-Native Learning", subtitle: "AI deeply woven into daily study habits", color: "from-blue-600 to-indigo-600", highlighted: true }
];

export const FOUR_CHALLENGES = [
  {
    num: "01",
    title: "AI-generated Misinformation",
    desc: "Convincing but inaccurate or fabricated content is effortless to produce and rapidly shared by unsuspecting students.",
    solution: "Taught via Week 7 & 8 Verification modules."
  },
  {
    num: "02",
    title: "Overdependence on AI",
    desc: "Relying passively on AI responses can atrophy a student's own critical reasoning, problem-solving, and cognitive effort.",
    solution: "Taught via Week 3 Decomposition & Week 5 AI for Learning."
  },
  {
    num: "03",
    title: "Copy-Paste Learning",
    desc: "Raw AI answers are blindly copied into assignments without being read, comprehended, or critically questioned.",
    solution: "Taught via Week 4 Prompting & Ethics protocols."
  },
  {
    num: "04",
    title: "Lack of Verification & Ethics",
    desc: "Original sources, student data privacy, and academic integrity policies are rarely considered during AI interaction.",
    solution: "Taught via Week 6 Research & Week 9 Responsible Use."
  }
];

export const PROGRESION_STAGES = [
  { step: 1, title: "AI Awareness", desc: "Recognising where AI appears in daily life" },
  { step: 2, title: "AI Understanding", desc: "Knowing, at an age-appropriate level, how AI works" },
  { step: 3, title: "Better Questioning", desc: "Communicating clearly and with purpose" },
  { step: 4, title: "AI-Assisted Learning", desc: "Using AI to understand, practice and explore" },
  { step: 5, title: "Verification & Critical Thinking", desc: "Checking facts, sources and assumptions" },
  { step: 6, title: "Responsible Usage", desc: "Privacy, Ethics and Academic integrity" },
  { step: 7, title: "Real-World Projects", desc: "Applying skills to practical problems" }
];

export const EIGHT_OUTCOMES = [
  { id: "01", title: "AI Literacy", desc: "Understanding what AI is, where it is used, and how AI models operate at an age-appropriate level." },
  { id: "02", title: "Critical Thinking", desc: "Questioning information systematically rather than accepting AI-generated answers blindly." },
  { id: "03", title: "Effective Questioning", desc: "Learning how to communicate clearly with AI systems and structure high-utility prompts." },
  { id: "04", title: "Verification", desc: "Testing claims, validating primary sources, and detecting synthetic hallucinations." },
  { id: "05", title: "Responsible AI", desc: "Navigating privacy, ethics, academic honor codes, bias, and digital safety." },
  { id: "06", title: "Problem Solving", desc: "Decomposing complex real-world challenges into structured steps using smart tech." },
  { id: "07", title: "Creativity", desc: "Using AI as a collaborative brainstorming, writing, design, and idea-development co-pilot." },
  { id: "08", title: "Projects", desc: "Applying cumulative learning to solve genuine school, environmental, or community issues." }
];

export const GRADE_BANDS = [
  {
    band: "Grades 3–5",
    stage: "AI Awareness",
    recommended: false,
    keyAreas: ["AI around us", "Patterns and logic", "Safe technology habits", "Simple problem-solving activities"],
    description: "Foundational exposure focusing on digital safety, pattern recognition, and building positive digital habits."
  },
  {
    band: "Grades 6–8",
    stage: "AI Thinking",
    recommended: true,
    tag: "PRIMARY TARGET",
    keyAreas: ["AI concepts", "Asking better questions", "Problem decomposition", "Responsible AI", "Verification"],
    description: "Core middle school target. Develops independent inquiry, critical questioning, and algorithmic reasoning."
  },
  {
    band: "Grades 9–10",
    stage: "AI Application",
    recommended: true,
    tag: "PRIMARY TARGET",
    keyAreas: ["Research with AI", "Fact checking", "AI-assisted learning", "Subject applications", "Project-based learning"],
    description: "Core high school target. Integrates AI across academic disciplines, synthesis, and structured projects."
  },
  {
    band: "Grades 11–12",
    stage: "AI & Future Readiness",
    recommended: false,
    keyAreas: ["Advanced AI applications", "Research & Synthesis", "Productivity workflows", "Career awareness", "Responsible professional use"],
    description: "Advanced preparation for higher education and career readiness with ethical leadership."
  }
];

export const CURRICULUM_WEEKS = [
  {
    week: 1,
    title: "AI Around Us",
    subtitle: "Spotting AI in daily life, from search to recommendations.",
    term: "Term 1",
    objective: "Identify hidden AI algorithms in everyday smartphones, streaming apps, and web search engines.",
    activity: "AI Treasure Hunt: Students log 5 interactions with AI algorithms during their day and categorize them.",
    samplePrompt: "Explain how Spotify or YouTube recommendations work in simple terms for a 12-year-old.",
    skills: ["AI Literacy", "Pattern Recognition"]
  },
  {
    week: 2,
    title: "How AI Learns",
    subtitle: "Data, patterns and predictions, explained simply.",
    term: "Term 1",
    objective: "Understand how large machine learning models learn from data patterns to make predictions.",
    activity: "Train a Toy Model: Interactive classroom experiment demonstrating training data bias and accuracy.",
    samplePrompt: "What is the difference between a search engine and a generative language model?",
    skills: ["Data Literacy", "Algorithmic Logic"]
  },
  {
    week: 3,
    title: "Problem Decomposition",
    subtitle: "Breaking large problems into clear, manageable steps.",
    term: "Term 1",
    objective: "Learn computational thinking by breaking complex assignments into actionable mini-tasks.",
    activity: "Recipe for Problem Solving: Map out a school science project into 5 logical sub-tasks before using tech.",
    samplePrompt: "Break down the task of creating a school recycling campaign into 6 sequential steps.",
    skills: ["Problem Solving", "Logic & Planning"]
  },
  {
    week: 4,
    title: "Asking Better Questions",
    subtitle: "Framing specific requests with context and purpose.",
    term: "Term 1",
    objective: "Master prompt engineering principles: Context, Task, Role, Format, and Constraints (C-T-R-F-C).",
    activity: "Prompt Transformation Challenge: Turn vague 3-word queries into rich, highly effective prompts.",
    samplePrompt: "Act as a middle school science teacher. Quiz me on photosynthesis with 3 progressive multiple-choice questions.",
    skills: ["Effective Questioning", "Communication"]
  },
  {
    week: 5,
    title: "AI for Learning",
    subtitle: "Using AI to understand, practise and revise — not to copy.",
    term: "Term 2",
    objective: "Adopt AI as a personalized Socratic tutor rather than a shortcut answer generator.",
    activity: "Socratic Study Partner: Practice getting AI to explain difficult math/physics concepts using analogies.",
    samplePrompt: "Explain Newton's third law using a basketball analogy, then give me a practice scenario to solve.",
    skills: ["Study Habits", "Independent Reasoning"]
  },
  {
    week: 6,
    title: "Research with AI",
    subtitle: "Gathering and organising information from several sources.",
    term: "Term 2",
    objective: "Synthesize background research efficiently while cross-referencing primary literature.",
    activity: "Multi-Source Synthesizer: Compare AI research outlines against library encyclopedia entries.",
    samplePrompt: "Summarize the key causes of renewable energy adoption in India, citing 3 major factors.",
    skills: ["Information Literacy", "Synthesis"]
  },
  {
    week: 7,
    title: "AI Can Be Wrong",
    subtitle: "Recognising errors, bias and made-up information.",
    term: "Term 2",
    objective: "Identify AI hallucinations, outdated training cutoffs, and socio-cultural biases in generated text.",
    activity: "Hallucination Detective: Spot 3 deliberate errors hidden inside an AI-generated historical biography.",
    samplePrompt: "Who won the Nobel Prize in Physics in 2029? (Tests AI awareness of future vs past factual limits).",
    skills: ["Critical Thinking", "Bias Awareness"]
  },
  {
    week: 8,
    title: "Verification & Fact Checking",
    subtitle: "Testing claims against reliable sources.",
    term: "Term 2",
    objective: "Apply lateral reading techniques and 3-step fact verification to any AI output.",
    activity: "Claim Audit Sheet: Fact-check 5 statistical claims generated by an AI assistant using official portals.",
    samplePrompt: "Provide the historical source citation for the quote: 'Knowledge is power' and verify its origin.",
    skills: ["Verification", "Academic Integrity"]
  },
  {
    week: 9,
    title: "Creativity with AI",
    subtitle: "Brainstorming and developing original ideas.",
    term: "Term 3",
    objective: "Leverage AI for rapid ideation, story drafting, and creative brainstorming while writing original text.",
    activity: "Co-Creative Storyboarding: Co-author a futuristic sci-fi flash fiction story where AI suggests plot twists.",
    samplePrompt: "Give me 5 unique story prompts combining climate change solutions with space exploration.",
    skills: ["Creativity", "Ideation & Co-Creation"]
  },
  {
    week: 10,
    title: "AI + School Subjects",
    subtitle: "Applying AI thoughtfully across the curriculum.",
    term: "Term 3",
    objective: "Apply responsible AI workflows in English, Science, Social Studies, Art, and Mathematics.",
    activity: "Subject Integration Workshop: Use AI to construct interactive revision flashcards for upcoming exams.",
    samplePrompt: "Help me create a study timeline for reviewing Indian History chapters over the next 14 days.",
    skills: ["Cross-Curricular Application", "Productivity"]
  },
  {
    week: 11,
    title: "Team Problem-Solving Project",
    subtitle: "Teams work on a real school or community problem.",
    term: "Term 3",
    objective: "Collaborate in student teams to research, design, and present a practical solution to a real issue.",
    activity: "Community Impact Sprint: Teams design an AI-powered or tech-assisted community campaign.",
    samplePrompt: "Help our student team outline a proposal to reduce food waste in our school cafeteria.",
    skills: ["Collaboration", "Real-World Problem Solving"]
  },
  {
    week: 12,
    title: "Student Demo & Reflection",
    subtitle: "Presenting projects and reflecting on responsible use.",
    term: "Term 4",
    objective: "Showcase final projects to school management, parents, and peers; earn MindPilot AI Readiness Certification.",
    activity: "Grand Showcase & Pledge: Public presentation of team projects and signing the MindPilot Responsible AI Pledge.",
    samplePrompt: "What are the 3 most important ethics guidelines you will follow when using AI in high school?",
    skills: ["Presentation", "Ethical Reflection"]
  }
];

export const IMPLEMENTATION_STEPS = [
  { num: "01", title: "School Coordination", desc: "Initial kickoff meeting with school leadership and academic coordinators." },
  { num: "02", title: "Student Orientation", desc: "Engaging inaugural assembly introducing students to the program." },
  { num: "03", title: "Structured Sessions", desc: "Weekly 45-minute interactive classroom modules led by certified facilitators." },
  { num: "04", title: "Practical Activities", desc: "Hands-on exercises, prompt labs, and fact-checking challenges." },
  { num: "05", title: "Projects", desc: "Team-based real-world problem solving sprints." },
  { num: "06", title: "Assessment", desc: "Comprehensive baseline and post-program evaluation of student growth." },
  { num: "07", title: "Student Showcase", desc: "Exhibition of student projects for parents, teachers, and leadership." },
  { num: "08", title: "School Impact Report", desc: "Executive analytics report delivered to school management." }
];

export const RESPONSIBILITIES = {
  school: [
    "Student groups assignment",
    "Classroom / suitable learning environment & AV setup",
    "Designated School Coordinator liaison",
    "Timetable integration & session coordination"
  ],
  programTeam: [
    "Complete 12-week structured curriculum & workbooks",
    "Certified Trainers & Facilitators",
    "Digital & physical learning resources",
    "Interactive student activities & assessments",
    "Student certificates of completion",
    "Teacher orientation & usage guidelines",
    "Parent awareness workshops & resources",
    "Comprehensive School Impact Analytics Report"
  ]
};

export const IMPACT_METRICS = [
  { name: "AI Awareness", before: 52, after: 88, unit: "/100" },
  { name: "Critical Thinking", before: 48, after: 76, unit: "/100" },
  { name: "Questioning Ability", before: 45, after: 82, unit: "/100" },
  { name: "Verification Skills", before: 38, after: 84, unit: "/100" },
  { name: "Responsible AI Understanding", before: 56, after: 90, unit: "/100" },
  { name: "Problem Solving", before: 60, after: 80, unit: "/100" },
  { name: "Practical Application", before: 50, after: 85, unit: "/100" },
];

export const OVERALL_BENCHMARK = {
  beforeScore: 54,
  afterScore: 78,
  percentageGain: "+44.4%"
};

export const VALUE_PROPOSITIONS = [
  { num: "01", title: "Future Readiness", desc: "Prepare students for an increasingly AI-driven workforce and higher education ecosystem." },
  { num: "02", title: "Responsible Technology", desc: "Empower students to understand ethical boundaries, privacy laws, and safe digital behavior." },
  { num: "03", title: "Critical Thinking", desc: "Strengthen independent reasoning, fact verification, and analytical rigor over passive consumption." },
  { num: "04", title: "Parent Confidence", desc: "Provide families with clear, structured guidance on safe home technology usage." },
  { num: "05", title: "School Differentiation", desc: "Position your institution as a forward-thinking pioneer in AI-ready education." }
];

export const PROMPT_LAB_EXAMPLES = [
  {
    id: 1,
    title: "Homework Assistance",
    weakPrompt: "Write a summary of the French Revolution for my history class.",
    weakAnalysis: "Dependency Trap: Prompts AI to generate the final homework product directly, leading to copy-paste submission and zero learning.",
    strongPrompt: "Act as an interactive history tutor. Outline the top 3 causes of the French Revolution, then ask me 2 analytical questions to test if I understand.",
    strongAnalysis: "Socratic Learning: Positions AI as a study guide. Encourages critical reasoning and self-testing while preserving student ownership.",
    category: "Study Skills"
  },
  {
    id: 2,
    title: "Science Project Ideation",
    weakPrompt: "Give me a science project topic that will get an A.",
    weakAnalysis: "Generic Query: Lacks context, grade level, available materials, or personal interests.",
    strongPrompt: "I am an 8th grader interested in renewable energy. Suggest 3 hands-on physics experiment ideas using household items, with hypotheses I can test.",
    strongAnalysis: "Precision Prompting: Includes role, constraints, grade level, topic area, and specific format requirements.",
    category: "Science & Creativity"
  },
  {
    id: 3,
    title: "Coding & Math Problem Solving",
    weakPrompt: "Solve this quadratic equation for me: 2x^2 + 5x - 12 = 0",
    weakAnalysis: "Short-term Answer: Provides raw answer without demonstrating step-by-step breakdown.",
    strongPrompt: "Explain the steps to solve 2x^2 + 5x - 12 = 0 using factoring. Show step 1 first, then ask me to calculate step 2.",
    strongAnalysis: "Guided Decomposition: Asks AI to guide through step-by-step problem breakdown.",
    category: "STEM"
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "When using AI for a school research assignment, what is the most responsible approach?",
    options: [
      "Copy the AI response directly into your report to save time.",
      "Use AI to generate ideas and outlines, but write the text yourself and verify facts using reliable primary sources.",
      "Ask AI to write the essay and just change a few words.",
      "Avoid using any technology at all."
    ],
    correct: 1,
    explanation: "AI should serve as your research assistant and brainstorming companion, not your replacement. Always verify facts against primary sources!"
  },
  {
    id: 2,
    question: "What does an AI 'hallucination' refer to?",
    options: [
      "When an AI displays colorful graphics on screen.",
      "When an AI confidently presents incorrect, fabricated, or made-up information as fact.",
      "When the server experiences slowdown.",
      "When an AI robot moves physically."
    ],
    correct: 1,
    explanation: "AI models generate text based on statistical probabilities, not true understanding. They can sometimes generate plausible-sounding falsehoods called hallucinations!"
  },
  {
    id: 3,
    question: "Which prompt demonstrates the best critical thinking and inquiry style?",
    options: [
      "Do my physics homework now.",
      "What is gravity?",
      "Act as a physics tutor. Explain how gravity affects planetary orbits using a trampoline analogy, then quiz me with one thought experiment.",
      "Write 500 words on gravity."
    ],
    correct: 2,
    explanation: "Effective prompts set a clear role, request engaging explanations (analogies), and incorporate active learning (quizzing the student)."
  },
  {
    id: 4,
    question: "Why should you never share your personal address, school passwords, or private family details with AI chatbots?",
    options: [
      "AI chatbots get confused by numbers.",
      "Data sent to online AI models may be stored, analyzed, or used in training datasets, posing privacy risks.",
      "It makes the AI answer too slowly.",
      "The AI will automatically phone your parents."
    ],
    correct: 1,
    explanation: "Protecting personal privacy is a fundamental pillar of Responsible AI usage. Never share sensitive PII or credentials with AI systems!"
  },
  {
    id: 5,
    question: "What is the primary mission of the MindPilot AI Program?",
    options: [
      "To teach students how to rely on AI for everything.",
      "To ban AI from all classrooms permanently.",
      "To build AI-literate students who know how to use AI effectively without becoming dependent on it.",
      "To replace human teachers with automated AI robots."
    ],
    correct: 2,
    explanation: "MindPilot empowers students to think better WITH AI while developing independent critical reasoning and academic integrity."
  }
];
