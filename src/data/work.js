// Work experience list (used by WorkExperience.jsx)
export const positions = [
  {
    slug: 'applied-intuition',
    period: 'AUG 2026 — PRESENT',
    periodColor: '#2D31FA',
    title: 'Incoming Software Engineer',
    company: 'APPLIED INTUITION',
    hoverBorderColor: 'group-hover:border-[#2D31FA]/50',
    noDetail: true,
    description: 'Incoming August 2026',
  },
  {
    slug: 'nvidia',
    period: 'MAY 2025 — AUG 2025',
    periodColor: '#76B900',
    title: 'Software Engineering Intern',
    company: 'NVIDIA',
    hoverBorderColor: 'group-hover:border-[#76B900]/50',
    description:
      'Built an AI-powered DevOps automation platform spanning GitLab issue triage to automated deployment using Flask and Docker, cutting manual engineering overhead by 82%. Deployed containerized microservices on NVIDIA Run:ai and engineered LLM pipelines that reduced live support escalations by 79%.',
  },
  {
    slug: 'cyrano',
    period: 'APR 2023 — AUG 2023',
    periodColor: '#A855F7',
    title: 'Software Engineering Intern',
    company: 'CYRANO',
    hoverBorderColor: 'group-hover:border-[#A855F7]/50',
    description:
      'Researched and implemented parameter-efficient fine-tuning for production LLM deployment, reducing GPU memory consumption by over 50% using LoRA and PEFT methods. Designed a full-stack NextJS prototype to demonstrate model capabilities end-to-end.',
  },
]

// Case study detail data (used by WorkExperiencePage.jsx)
export const workDetails = {
  nvidia: {
    period: 'MAY 2025 — AUG 2025',
    color: '#76B900',
    title: 'Software Engineering Intern',
    company: 'NVIDIA',
    location: 'Santa Clara, CA',
    metrics: [
      { value: '82%',   label: 'Manual Work Eliminated' },
      { value: '150+',  label: 'Webhooks / Week' },
      { value: '99.6%', label: 'Service Uptime' },
      { value: '79%',   label: 'Escalation Reduction' },
    ],
    techStack: ['Python', 'Flask', 'Docker', 'GitLab CI/CD', 'Redis', 'Kubernetes', 'Run:ai', 'LLM'],
    sections: [
      {
        number: '01',
        label: 'SECTION_01 // DEVOPS AUTOMATION',
        title: 'DevOps Automation Platform',
        summary: 'End-to-end AI-powered CI/CD workflow from issue triage to deployment.',
        bullets: [
          'Automated complete GitLab workflow: issue triage → AI code generation → file creation → MR submission → deployment',
          'Orchestrated using Flask for backend logic, Docker for containerized execution, and GitLab CI/CD for pipeline integration',
          'Eliminated 82% of manual DevOps intervention, compressing delivery cycles across the engineering org',
          'Designed modular pipeline stages for independent scaling of generation, validation, and submission phases',
        ],
      },
      {
        number: '02',
        label: 'SECTION_02 // INFRASTRUCTURE',
        title: 'Infrastructure & Reliability',
        summary: 'Production microservice deployment and AI-driven documentation at hardware scale.',
        bullets: [
          'Deployed containerized microservice on NVIDIA Run:ai handling 150+ webhook events/week at 99.6% uptime',
          'Architected fault-tolerant service with observability instrumentation for variable enterprise CI/CD load',
          'Built cross-platform integration layer connecting enterprise knowledge bases to AI documentation services',
          'Automated documentation generation across 760+ NVIDIA DGX/HGX hardware configurations, reducing debt 67%',
        ],
        statusItems: [
          { key: 'SERVICE',         value: 'WEBHOOK-HANDLER' },
          { key: 'UPTIME',          value: '99.6%' },
          { key: 'REQUESTS / WEEK', value: '150+' },
          { key: 'PLATFORM',        value: 'RUN:AI' },
          { key: 'CONFIGS COVERED', value: '760+' },
        ],
      },
      {
        number: '03',
        label: 'SECTION_03 // LLM ENGINEERING',
        title: 'GFN Chatbot & LLM Pipelines',
        summary: 'Session-aware chatbot enhancement and LLM-powered query routing for GeForce NOW.',
        bullets: [
          'Enhanced GFN chatbot with Redis-backed session management for contextual multi-turn conversations',
          'Integrated real-time external APIs into conversation flows for live data retrieval at query time',
          'Engineered LLM-powered location extraction pipeline using structured JSON flows',
          'Reduced live agent escalations by 79%, improving self-service resolution across the GFN support surface',
        ],
      },
    ],
  },

  'applied-intuition': {
    period: 'AUG 2026 — PRESENT',
    color: '#2D31FA',
    title: 'Incoming Software Engineer',
    company: 'APPLIED INTUITION',
    location: 'Mountain View, CA',
    metrics: [
      { value: '200+', label: 'Developers Impacted' },
      { value: '120+', label: 'Components Built' },
      { value: '22%',  label: 'Bundle Reduction' },
      { value: '4',    label: 'Engineers Mentored' },
    ],
    techStack: ['React', 'TypeScript', 'Zustand', 'React Query', 'Playwright', 'Storybook', 'Figma', 'Webpack'],
    sections: [
      {
        number: '01',
        label: 'SECTION_01 // DESIGN SYSTEM',
        title: 'Design System Foundation',
        summary: "Architected the organization's first unified component system across 200+ engineers.",
        bullets: [
          "Led architecture of organization's first unified design system, adopted by 200+ engineers",
          'Resolved UI inconsistencies and duplicated component logic across simulation tooling and dashboards',
          'Established design tokens, theming primitives, and component governance for cross-team consistency',
          'Reduced front-end technical debt accumulated across automotive partner-facing products',
        ],
      },
      {
        number: '02',
        label: 'SECTION_02 // COMPONENTS & STATE',
        title: 'Component Library & State Architecture',
        summary: 'Shipped 120+ components and modernized state management across all product teams.',
        bullets: [
          'Shipped 120+ reusable React components: dark-mode optimized, WCAG 2.1 AA compliant, Playwright-validated',
          'Documented in Storybook with strict prop contracts; 80% cross-team adoption within first quarter',
          'Migrated Redux to Zustand + React Query, reducing bundle size 22% and eliminating telemetry race conditions',
          'Introduced automated Lighthouse CI performance budgets enforced across all front-end build pipelines',
        ],
      },
      {
        number: '03',
        label: 'SECTION_03 // CULTURE',
        title: 'Performance Standards & Mentorship',
        summary: 'Established engineering culture and measurable front-end quality standards.',
        bullets: [
          'Mentored 4 junior engineers through weekly design reviews and structured pair programming sessions',
          'Cultivated culture of interface intentionality within an engineering-first organization',
          'Established enforceable front-end quality standards through CI integration and automated audits',
          "Design system continues to serve as foundation for Applied Intuition's flagship simulation products",
        ],
      },
    ],
  },

  cyrano: {
    period: 'APR 2023 — AUG 2023',
    color: '#A855F7',
    title: 'Software Engineering Intern',
    company: 'CYRANO',
    location: 'San Francisco, CA',
    metrics: [
      { value: '30+',  label: 'LLMs Evaluated' },
      { value: '50%+', label: 'GPU Memory Reduction' },
      { value: '43%',  label: 'Faster Inference' },
      { value: '7B',   label: 'Parameter Models' },
    ],
    techStack: ['Python', 'HuggingFace', 'LoRA', 'PEFT', 'NextJS', 'React', 'Node.js', 'LLM'],
    sections: [
      {
        number: '01',
        label: 'SECTION_01 // LLM RESEARCH',
        title: 'LLM Landscape Evaluation',
        summary: 'Systematically evaluated 30+ open-source models for production viability.',
        bullets: [
          'Investigated and documented capabilities of 30+ open-source LLMs via the HuggingFace library',
          'Assessed each model on task performance, memory footprint, throughput, and deployment suitability',
          "Built capability matrix informing team's model selection strategy and R&D prioritization",
          'Established repeatable evaluation framework reducing overhead of future ad-hoc comparisons',
        ],
      },
      {
        number: '02',
        label: 'SECTION_02 // FINE-TUNING',
        title: 'Parameter-Efficient Fine-Tuning',
        summary: 'Reduced GPU memory by 50%+ on 7B parameter models using LoRA and PEFT.',
        bullets: [
          'Implemented Low-Rank Adaptation (LoRA) for models in the 7B parameter class',
          'Combined LoRA with PEFT, cutting GPU memory consumption by 50%+ without quality degradation',
          'Achieved 43% reduction in inference latency, directly improving user-facing response times',
          'Enabled cheaper training runs, expanding feasible model iteration within the infrastructure budget',
        ],
        statusItems: [
          { key: 'MODEL CLASS',       value: '~7B PARAMS' },
          { key: 'GPU MEM REDUCTION', value: '50%+' },
          { key: 'INFERENCE SPEEDUP', value: '43%' },
          { key: 'METHOD',            value: 'LORA + PEFT' },
          { key: 'LIBRARY',           value: 'HUGGINGFACE' },
        ],
      },
      {
        number: '03',
        label: 'SECTION_03 // PROTOTYPE',
        title: 'Full-Stack Application Prototype',
        summary: 'Built a deployable NextJS app demonstrating LLM capabilities end-to-end.',
        bullets: [
          'Designed full-stack prototype to demonstrate core LLM capabilities in an interactive format',
          'Built with NextJS for SSR and rapid deployment iteration; React for composable UI',
          'Node.js backend connecting the frontend to the model inference pipeline',
          'Served as internal stakeholder demo vehicle and foundation for production product iteration',
        ],
      },
    ],
  },
}
