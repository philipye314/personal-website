export const projects = [
  {
    slug: 'impact-fund',
    title: 'IMPACT FUND',
    subtitle: 'CORE SYSTEMS // RUST',
    subtitleColor: '#FF3131',
    description:
      'A lightweight, bare-metal hypervisor built for security-critical environments. Features memory isolation and real-time scheduling for mission-critical hardware.',
    tags: [
      { label: 'Rust', color: '#f46623' },
      { label: 'Assembly', color: null },
      { label: 'Go', color: '#00add8' },
    ],
    borderTop: false,
  },
  {
    slug: 'just-detention-international',
    title: 'JUST DETENTION INTERNATIONAL',
    subtitle: 'MOBILE APP // REACT NATIVE',
    subtitleColor: '#FF8C42',
    description:
      'Led a cross-functional team of 6 engineers and designers to deliver a PREA-compliant MVP in 10 sprints, reaching 50+ incarcerated individuals. Implemented version control workflows that cut merge conflicts by 30% and coordinated directly with CDCR for deployment on regulated prison tablets.',
    tags: [
      { label: 'React Native', color: '#61dafb' },
      { label: 'PostgreSQL', color: '#336791' },
      { label: 'Expo', color: null },
      { label: 'GitLab CI/CD', color: '#FC6D26' },
    ],
    borderTop: true,
  },
]

export const projectDetails = {
  'impact-fund': {
    color: '#FF3131',
    period: '2024 — PRESENT',
    title: 'Impact Fund',
    category: 'CORE SYSTEMS // RUST',
    location: 'Personal Project',
    role: 'Systems Engineering',
    metrics: [
      { value: 'Rust',   label: 'Core Language' },
      { value: '<1ms',   label: 'Latency Target' },
      { value: '99.9%',  label: 'Uptime' },
      { value: '0',      label: 'Memory Leaks' },
    ],
    sections: [
      {
        number: '01',
        label: 'ARCHITECTURE',
        title: 'Core System Design',
        summary:
          'High-performance bare-metal system built for security-critical environments with deterministic execution and zero-cost safety guarantees.',
        techTags: ['Rust', 'Assembly'],
        content: {
          type: 'glass-card',
          heading: 'Memory-Safe Infrastructure',
          body:
            'Built from the ground up in Rust to eliminate entire classes of memory safety vulnerabilities at compile time, with no runtime overhead.',
          bullets: [
            'Zero-cost abstractions for real-time scheduling without GC pauses',
            'Memory isolation via hardware-enforced protection domains',
            'Deterministic execution model for mission-critical workloads',
            'Sub-millisecond context switching with custom memory allocator',
          ],
        },
      },
      {
        number: '02',
        label: 'SECURITY',
        title: 'Isolation & Safety Guarantees',
        summary:
          'Multi-layered isolation primitives and formal safety guarantees enforced at every abstraction level.',
        content: {
          type: 'dual-cards',
          cards: [
            {
              accent: '#FF3131',
              label: 'Memory',
              title: 'Address Space Isolation',
              body: 'Hardware-enforced memory domains prevent cross-component access, eliminating lateral movement vectors entirely.',
            },
            {
              accent: null,
              label: 'Scheduling',
              title: 'Real-Time Guarantees',
              body: 'Priority-based preemptive scheduler with bounded worst-case execution time on every critical path.',
            },
          ],
        },
      },
      {
        number: '03',
        label: 'IMPLEMENTATION',
        title: 'Low-Level Stack',
        summary:
          'Multi-language implementation that leverages Rust, Assembly, and Go each for their unique strengths.',
        techTags: ['Rust', 'Assembly', 'Go'],
        content: {
          type: 'icon-list',
          heading: 'Technical Foundation',
          items: [
            {
              icon: 'memory',
              title: 'Rust Core',
              body: "Ownership model enforces safety invariants at compile time, eliminating null dereferences and data races with no runtime cost.",
            },
            {
              icon: 'settings_input_composite',
              title: 'Assembly Primitives',
              body: 'Hand-optimized assembly routines for interrupt handling and context switching where cycle counts are non-negotiable.',
            },
          ],
        },
      },
    ],
  },

  'just-detention-international': {
    color: '#FF8C42',
    period: 'AUG 2024 — MAY 2025',
    title: 'Just Detention International',
    category: 'MOBILE APP // REACT NATIVE',
    location: 'Berkeley, CA',
    role: 'Engineering Lead',
    github: 'https://github.com/calblueprint/just-detention-international',
    metrics: [
      { value: '6',   label: 'Engineers Led' },
      { value: '10',  label: 'Agile Sprints' },
      { value: '50+', label: 'Users Impacted' },
      { value: '30%', label: 'Conflict Reduction' },
    ],
    sections: [
      {
        number: '01',
        label: 'MVP DELIVERY',
        title: 'App for Incarcerated Individuals',
        summary:
          'Led a 6-person team to ship a PREA-compliant healing resources app to 50+ incarcerated individuals across 2 pilot facilities.',
        techTags: ['React Native', 'Expo', 'PostgreSQL'],
        content: {
          type: 'glass-card',
          heading: 'Project Scope & Impact',
          body:
            'Architected a high-security, low-bandwidth mobile platform delivering healing resources and legal rights education to individuals within the CDCR system.',
          bullets: [
            'Led cross-functional team of 6 through 10 consecutive agile sprints',
            'Achieved PREA compliance across all data handling and content delivery',
            'Deployed to 2 pilot facilities, reaching 50+ incarcerated individuals',
            'Coordinated directly with CDCR for deployment on regulated prison tablets',
          ],
        },
      },
      {
        number: '02',
        label: 'PROCESS',
        title: 'Version Control & Sprint Management',
        summary:
          'Engineering workflows that enabled consistent, on-schedule delivery despite complex regulatory constraints.',
        content: {
          type: 'dual-cards',
          cards: [
            {
              accent: '#FF8C42',
              label: 'Workflow',
              title: 'Branching Strategy',
              body: 'Implemented Git flow with PR templates and atomic commits, reducing merge conflicts by 30% across 6 engineers.',
            },
            {
              accent: null,
              label: 'Management',
              title: 'Sprint Velocity',
              body: 'Delivered 10 consecutive on-schedule sprints with clear task delegation and unblocking cadence.',
            },
          ],
        },
      },
      {
        number: '03',
        label: 'ARCHITECTURE',
        title: 'App Architecture & CDCR Deployment',
        summary:
          'Navigating complex regulatory environments to deliver secure infrastructure on restricted prison tablet hardware.',
        techTags: ['GitLab CI/CD', 'PREA'],
        content: {
          type: 'icon-list',
          heading: 'Technical Foundation',
          items: [
            {
              icon: 'security',
              title: 'PREA Compliance',
              body: 'Achieved full compliance across all data handling and user interaction patterns required for deployment within the correctional system.',
            },
            {
              icon: 'cloud_done',
              title: 'Regulated CI/CD',
              body: "Engineered a deployment pipeline compatible with CDCR's network security protocols and app distribution constraints.",
            },
          ],
        },
      },
    ],
  },
}
