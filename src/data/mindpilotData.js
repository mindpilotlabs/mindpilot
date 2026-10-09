export const MIND_PILOT_INFO = {
  programName: "AI Readiness & Responsible Technology Program",
  tagline: "Think Beyond. Learn with AI. Build the Future.",
  mission: "Helping schools develop students who can think critically, learn effectively, question intelligently, and use artificial intelligence responsibly.",
  conciseStatement: "AI is changing how we learn, research, create, and solve problems. Students need more than access to AI tools. They need the judgment and skills to use them well.",
  academicYear: "2026–27",
  company: "MindPilot Education",
  motto: "BUILDING AI-LITERATE, INDEPENDENT THINKERS",
  primaryMarket: "Visakhapatnam, Andhra Pradesh, India",
  expansionStrategy: "Establish successful school partnerships in Visakhapatnam first, develop a strong reputation and evidence of student outcomes, and then expand across Andhra Pradesh and other Indian cities.",
  contact: {
    ceo: "Manchala SaiKumar",
    role: "CEO & Founder",
    phone: "+91 6302088183",
    email: "mindpilotlabs@gmail.com",
    location: "Visakhapatnam, Andhra Pradesh, India",
  }
};

export const CORE_QUOTE = {
  main: "Access to AI is not the same as AI readiness.",
  sub: "AI should support learning, not replace learning. Students should question answers, not blindly trust them."
};

export const FOUR_CHALLENGES = [
  {
    num: "01",
    title: "Accepting AI Answers Without Verification",
    desc: "Students often accept AI-generated text and claims at face value without checking factual accuracy or checking underlying assumptions.",
    solution: "Addressed via Module 6: Verification & Critical Thinking."
  },
  {
    num: "02",
    title: "Using AI to Complete Work Without Understanding",
    desc: "Using generative AI tools to generate full assignments leads to surface-level completion with zero genuine cognitive retention.",
    solution: "Addressed via Module 3 & Module 5: Socratic Learning."
  },
  {
    num: "03",
    title: "Distinguishing Reliable Info from Misinformation",
    desc: "Synthetic text, hallucinations, and deepfake content blur the boundary between verified facts and plausible falsehoods.",
    solution: "Addressed via Module 2 & Module 7: Source Auditing."
  },
  {
    num: "04",
    title: "Lack of Awareness of Privacy & Ethics",
    desc: "Students routinely upload personal data, confidential homework, and family information into online AI models without privacy awareness.",
    solution: "Addressed via Module 7: Responsible AI & Digital Safety."
  }
];

export const FIVE_PILLARS = [
  { id: 1, title: "Understand AI", desc: "Know how AI works, where it is used, and what its limitations are at an age-appropriate level.", icon: "Brain" },
  { id: 2, title: "Ask Better Questions", desc: "Master effective prompt structure, context framing, and Socratic inquiry styles.", icon: "MessageSquare" },
  { id: 3, title: "Verify Information", desc: "Detect synthetic hallucinations, cross-check claims, and validate primary sources.", icon: "ShieldCheck" },
  { id: 4, title: "Solve Problems", desc: "Decompose complex assignments into structured, logical, step-by-step solutions.", icon: "Workflow" },
  { id: 5, title: "Create Responsibly", desc: "Use AI as a creative brainstorming co-pilot while preserving personal originality and academic integrity.", icon: "Sparkles" }
];

export const SIX_STAGE_FRAMEWORK = [
  { step: 1, title: "Awareness", desc: "Spotting AI in daily life and understanding its presence in education and media." },
  { step: 2, title: "Understanding", desc: "Learning age-appropriate mechanics of data, training patterns, and model limits." },
  { step: 3, title: "Questioning", desc: "Structuring precise prompts and asking critical clarifying questions." },
  { step: 4, title: "Application", desc: "Using AI thoughtfully across school subjects as a study companion." },
  { step: 5, title: "Verification", desc: "Auditing AI outputs, fact-checking claims, and detecting synthetic errors." },
  { step: 6, title: "Creation", desc: "Applying collaborative AI workflows to build real-world team projects." }
];

export const EIGHT_OUTCOMES = [
  { id: "01", title: "AI Literacy", desc: "Understanding what AI is, where it is used, and how machine learning models operate." },
  { id: "02", title: "Critical Thinking", desc: "Questioning information systematically rather than accepting AI-generated answers blindly." },
  { id: "03", title: "Research & Verification", desc: "Testing claims, validating primary sources, and detecting synthetic hallucinations." },
  { id: "04", title: "Responsible Tech Habits", desc: "Navigating data privacy, ethics, academic honor codes, and digital safety." },
  { id: "05", title: "Creativity", desc: "Using AI as a collaborative brainstorming, writing, and idea-development co-pilot." },
  { id: "06", title: "Practical Problem-Solving", desc: "Decomposing complex real-world challenges into structured steps using technology." }
];

export const GRADE_BANDS = [
  {
    band: "Grades 3–5",
    stage: "Discover AI",
    recommended: false,
    keyAreas: ["AI around us", "Patterns and simple logic", "Digital safety basics", "Safe technology habits"],
    description: "Foundational exposure focusing on digital safety, pattern recognition, and positive tech habits."
  },
  {
    band: "Grades 6–8",
    stage: "Understand & Question AI",
    recommended: true,
    tag: "RECOMMENDED INITIAL FOCUS",
    keyAreas: ["How AI works", "Asking better questions", "Problem decomposition", "Verification basics", "Digital ethics"],
    description: "Core middle school implementation focus. Develops independent inquiry, critical questioning, and algorithmic reasoning."
  },
  {
    band: "Grades 9–10",
    stage: "Apply AI",
    recommended: true,
    tag: "RECOMMENDED INITIAL FOCUS",
    keyAreas: ["AI for research & study", "Fact-checking & verification", "Cross-subject applications", "Responsible usage", "Team projects"],
    description: "Core high school implementation focus. Integrates AI across academic disciplines, synthesis, and structured projects."
  },
  {
    band: "Grades 11–12",
    stage: "Explore Advanced Applications",
    recommended: false,
    keyAreas: ["Advanced research workflows", "Ethics & societal impact", "Productivity & synthesis", "Higher ed & career readiness"],
    description: "Advanced preparation for higher education, deep research synthesis, and ethical technology leadership."
  }
];

export const EIGHT_CURRICULUM_MODULES = [
  {
    id: 1,
    title: "MODULE 1: AI AROUND US",
    learn: "Everyday examples of artificial intelligence in education, communication, transport, and entertainment. Difference between AI and traditional software.",
    activity: "AI Spotter Hunt: Identify 5 everyday tools using AI algorithms vs traditional software rule-sets.",
    outcome: "Clear distinction between automated software and statistical machine learning.",
    ageGroup: "Grades 3–12 (Adapted by band)"
  },
  {
    id: 2,
    title: "MODULE 2: HOW AI WORKS",
    learn: "Age-appropriate explanation of machine learning, pattern recognition, training data, predictions, and fundamental AI limitations.",
    activity: "Model Trainer Experiment: Train a simple visual model to classify objects and observe edge-case failures.",
    outcome: "Demystified understanding of how AI outputs are predicted rather than comprehended.",
    ageGroup: "Grades 6–12"
  },
  {
    id: 3,
    title: "MODULE 3: THINKING AND PROBLEM DECOMPOSITION",
    learn: "Breaking complex academic and real-world problems into smaller logical steps, pattern recognition, and designing step-by-step solutions.",
    activity: "Decomposition Mapping: Break a complex science essay or community project into 5 structured sub-tasks.",
    outcome: "Ability to map out complex tasks before invoking technology tools.",
    ageGroup: "Grades 6–12"
  },
  {
    id: 4,
    title: "MODULE 4: ASKING BETTER QUESTIONS",
    learn: "Communicating clearly with AI tools, providing rich context, refining questions, and evaluating contrasting answers.",
    activity: "Prompt Transformation Lab: Upgrade vague 3-word queries into context-rich, Socratic inquiry prompts.",
    outcome: "Mastery over prompt structure (Role, Task, Context, Constraints, Format).",
    ageGroup: "Grades 6–12"
  },
  {
    id: 5,
    title: "MODULE 5: AI FOR LEARNING AND RESEARCH",
    learn: "Using AI as a personal Socratic study assistant, generating explanations, self-quizzing, and deepening understanding rather than copying answers.",
    activity: "Socratic Revision Partner: Use AI to explain physics concepts using analogies and generate self-test questions.",
    outcome: "Adopting AI as a study partner that enhances personal cognitive effort.",
    ageGroup: "Grades 6–12"
  },
  {
    id: 6,
    title: "MODULE 6: VERIFICATION AND CRITICAL THINKING",
    learn: "Detecting incorrect AI-generated information (hallucinations), cross-checking claims, evaluating sources, and recognizing bias.",
    activity: "Hallucination Detective: Audit an AI-generated history summary to spot hidden factual errors.",
    outcome: "Habitual 3-step fact verification before accepting any AI assertion.",
    ageGroup: "Grades 6–12"
  },
  {
    id: 7,
    title: "MODULE 7: RESPONSIBLE AI AND DIGITAL SAFETY",
    learn: "Privacy, protecting personal data, academic integrity, ethics, bias, fairness, and age-appropriate tool selection.",
    activity: "Privacy & Honor Code Audit: Evaluate sample assignment workflows against school academic integrity policies.",
    outcome: "Strong commitment to digital safety, privacy, and honest academic work.",
    ageGroup: "Grades 3–12"
  },
  {
    id: 8,
    title: "MODULE 8: CREATIVITY AND REAL-WORLD PROJECTS",
    learn: "Team-based problem solving, AI-assisted ideation, practical subject-related projects, presentations, and reflecting on learning.",
    activity: "Community Innovation Sprint: Teams design and present tech-assisted solutions to school or city challenges.",
    outcome: "Tangible student project portfolio demonstrating critical thinking and responsible AI use.",
    ageGroup: "Grades 6–12"
  }
];

export const CURRICULUM_WEEKS = [
  { week: 1, module: "Module 1", title: "AI Around Us", desc: "Everyday examples of artificial intelligence in daily life, search, and apps." },
  { week: 2, module: "Module 2", title: "How AI Learns", desc: "Data, patterns, training data, and predictions explained simply." },
  { week: 3, module: "Module 3", title: "Problem Decomposition", desc: "Breaking large complex problems into clear, manageable steps." },
  { week: 4, module: "Module 4", title: "Asking Better Questions", desc: "Framing specific requests with context, constraints, and purpose." },
  { week: 5, module: "Module 5", title: "AI for Learning", desc: "Using AI to understand, practice, and revise — not to copy." },
  { week: 6, module: "Module 5", title: "Research with AI", desc: "Gathering and organizing information from several sources responsibly." },
  { week: 7, module: "Module 6", title: "AI Can Be Wrong", desc: "Recognizing errors, synthetic hallucinations, and made-up information." },
  { week: 8, module: "Module 6", title: "Verification & Fact Checking", desc: "Testing claims against reliable primary sources and lateral reading." },
  { week: 9, module: "Module 8", title: "Creativity with AI", desc: "Brainstorming and developing original ideas collaboratively with tech." },
  { week: 10, module: "Module 8", title: "AI & School Subjects", desc: "Applying AI thoughtfully across science, math, history, and languages." },
  { week: 11, module: "Module 8", title: "Team Project", desc: "Student teams work on a real school, environmental, or community problem." },
  { week: 12, module: "Module 8", title: "Student Demo & Reflection", desc: "Presenting projects and reflecting on responsible technology use." }
];

export const PARTNERSHIP_STEPS = [
  {
    step: "01",
    title: "Discovery",
    desc: "Discuss the school's vision, student population, grade levels, existing infrastructure, and academic priorities."
  },
  {
    step: "02",
    title: "Customized Program Design",
    desc: "Agree on suitable modules, timetable integration, delivery model, and target student groups."
  },
  {
    step: "03",
    title: "Implementation",
    desc: "Deliver structured sessions using guided activities, interactive discussions, exercises, and team projects."
  },
  {
    step: "04",
    title: "Assessment",
    desc: "Use age-appropriate baseline and end-of-program assessments where included in the agreed scope."
  },
  {
    step: "05",
    title: "Student Showcase",
    desc: "Give students an opportunity to present what they learned and demonstrate their team projects."
  },
  {
    step: "06",
    title: "Review & Continuity",
    desc: "Share a summary of participation and learning outcomes, discuss improvements, and plan future stages."
  }
];

export const DELIVERY_FORMATS = [
  { title: "Timetabled Classroom Sessions", desc: "Regular weekly 45-minute interactive periods integrated into the school timetable." },
  { title: "Periodic Intensive Workshops", desc: "Multi-day hands-on bootcamps or term-based intensive sprints." },
  { title: "Club / Enrichment Programs", desc: "After-school or weekend AI Innovation & Critical Thinking clubs." },
  { title: "Term-Based Modules", desc: "Focused 4 to 6-week module packages designed for specific grade bands." },
  { title: "Academic-Year Partnership", desc: "Comprehensive year-long program covering all 8 curriculum modules." },
  { title: "Classroom Learning + Projects", desc: "Blended format combining classroom instruction with real-world team projects." }
];

export const RESPONSIBILITIES = {
  school: [
    "Designated School Liaison / Coordinator for smooth execution",
    "Suitable learning environment / classroom with AV or projection",
    "Student group assignment and timetable scheduling",
    "Facilitating student participation and institutional communication"
  ],
  programTeam: [
    "Structured curriculum modules & age-appropriate student workbooks",
    "Certified facilitators / trainers & master presentation materials",
    "Interactive prompt exercises, hallucination labs & verification sheets",
    "Baseline & post-program outcome measurement frameworks",
    "Student completion certificates & showcase event support",
    "Teacher awareness resources & classroom usage guidance",
    "Parent communication guidelines & digital safety takeaway sheets",
    "Executive School Partnership Learning & Participation Report"
  ]
};

export const FAQ_LIST = [
  {
    q: "What is the AI Readiness Program?",
    a: "The AI Readiness & Responsible Technology Program is a structured educational initiative designed for school students. It teaches students how artificial intelligence works, how to ask better questions, how to verify AI-generated answers, how to solve problems, and how to use AI ethically without becoming dependent on it."
  },
  {
    q: "Which grades can participate?",
    a: "The program is designed for Grades 3 through 12, with customized learning tracks for each band (Grades 3–5: Discover AI; Grades 6–8: Understand & Question AI; Grades 9–10: Apply AI; Grades 11–12: Advanced Applications). Grades 6–10 are typically recommended for initial school implementation."
  },
  {
    q: "Does a school need a computer lab?",
    a: "No elaborate lab setup is required. The curriculum can be delivered in standard classrooms with a projector/screen or in existing computer labs. Sessions emphasize discussion, critical thinking, worksheets, and guided demonstrations."
  },
  {
    q: "Do students need previous AI or coding knowledge?",
    a: "No prior technical or coding experience is needed. The program focuses on AI literacy, computational thinking, prompt framing, verification habits, and ethics — accessible to every student regardless of technical background."
  },
  {
    q: "How does the program fit into the school timetable?",
    a: "Delivery is fully flexible and customized with school management. It can be scheduled as a weekly timetabled period (e.g. 45 mins/week), periodic term workshops, or a club enrichment program."
  },
  {
    q: "How are student learning outcomes assessed?",
    a: "Depending on agreed scope, we utilize age-appropriate baseline and end-of-program evaluations covering AI concept awareness, prompt quality, verification habits, and project demonstrations."
  },
  {
    q: "How are responsible AI use and student safety addressed?",
    a: "Child safety and data privacy are core pillars. We enforce strict data minimalization, select age-appropriate tools, teach personal data protection, and emphasize academic integrity."
  },
  {
    q: "Can the curriculum be customized for our school?",
    a: "Yes. Every school partnership is tailored to the institution's specific timetable, student count, infrastructure, grade focus, and academic priorities."
  },
  {
    q: "Can the program be conducted across multiple grades?",
    a: "Yes. Schools can choose to implement the program across a single grade band (e.g., Grades 6–8) or deploy tailored tracks simultaneously across multiple middle and high school grades."
  },
  {
    q: "Is teacher orientation available?",
    a: "Yes. We provide teacher orientation resources and guidelines so educators understand how students learn AI and how to maintain academic integrity in classroom assignments."
  },
  {
    q: "What are the commercial terms?",
    a: "Program scope and commercial terms are discussed directly with each institution. The final proposal is customized according to student strength, grade levels, delivery format, timetable, and agreed services. Contact our team to discuss your school's requirements."
  },
  {
    q: "How can our school become a partner?",
    a: "Principals, correspondents, or academic coordinators can click 'Discuss a School Partnership' on the site to submit an institutional enquiry. Our leadership team in Visakhapatnam will get in touch promptly."
  }
];

export const PROMPT_LAB_EXAMPLES = [
  {
    id: 1,
    title: "Homework & Science Revision",
    weakPrompt: "Write an essay on photosynthesis for my biology homework.",
    weakAnalysis: "Dependency Trap: Prompts AI to generate the entire assignment directly, resulting in zero comprehension or retention.",
    strongPrompt: "Act as an interactive science tutor. Explain photosynthesis using a solar panel analogy, then ask me 2 questions to check my understanding.",
    strongAnalysis: "Socratic Learning: Uses AI as an engaging study guide. Keeps cognitive ownership with the student.",
    category: "Science & Study Skills"
  },
  {
    id: 2,
    title: "Research & Fact Verification",
    weakPrompt: "Tell me everything about renewable energy in India.",
    weakAnalysis: "Generic Query: Lacks context, grade focus, or specific analytical constraints.",
    strongPrompt: "Summarize the top 3 factors driving solar power adoption in Andhra Pradesh. List 2 claims I should cross-check with official government reports.",
    strongAnalysis: "Verification-Focused: Demands specific regional context and explicitly identifies claims for independent verification.",
    category: "Social Studies & Research"
  },
  {
    id: 3,
    title: "Math & Logic Problem Solving",
    weakPrompt: "Give me the answer to 3x + 15 = 45.",
    weakAnalysis: "Short-term Answer: Retrieves raw numeric result without learning the solution logic.",
    strongPrompt: "Guide me through solving 3x + 15 = 45 step by step. Explain step 1, then let me calculate step 2 before revealing the next step.",
    strongAnalysis: "Decomposition & Active Learning: Breaks problem into guided steps, encouraging active student calculation.",
    category: "Mathematics"
  }
];

export const IMPACT_METRICS = [
  { name: "AI Awareness", before: 52, after: 88, unit: "/100" },
  { name: "Critical Thinking", before: 48, after: 76, unit: "/100" },
  { name: "Questioning Ability", before: 45, after: 82, unit: "/100" },
  { name: "Verification Skills", before: 38, after: 84, unit: "/100" },
  { name: "Responsible AI Understanding", before: 56, after: 90, unit: "/100" },
  { name: "Problem Solving", before: 60, after: 80, unit: "/100" },
  { name: "Practical Application", before: 50, after: 85, unit: "/100" }
];

export const OVERALL_BENCHMARK = {
  beforeScore: 54,
  afterScore: 78,
  percentageGain: "+44.4%"
};

