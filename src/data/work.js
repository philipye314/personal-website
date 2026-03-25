// Work experience list (used by WorkExperience.jsx)
export const positions = [
  {
    slug: 'nvidia',
    period: '2022 — PRESENT',
    periodColor: '#76B900',
    title: 'Software Engineering Intern',
    company: 'NVIDIA',
    hoverBorderColor: 'group-hover:border-[#76B900]/50',
    description:
      'Spearheading the core infrastructure redesign for next-gen AI processing clusters. Implementing zero-latency data pipelines and managing a fleet of 500+ microservices using Kubernetes and Go.',
  },
  {
    slug: 'applied-intuition',
    period: '2020 — 2022',
    periodColor: '#2D31FA',
    title: 'Incoming Software Engineer',
    company: 'APPLIED INTUITION',
    hoverBorderColor: 'group-hover:border-[#2D31FA]/50',
    description:
      'Developed a proprietary design system used by 200+ developers. Focused on high-end glassmorphism components, dark-mode optimization, and complex state management in React.',
  },
]

// Case study detail data (used by WorkExperiencePage.jsx)
export const workDetails = {
  nvidia: {
    period: '2022 — PRESENT',
    color: '#76B900',
    title: 'Lead System Architect',
    company: 'NVIDIA',
    location: 'Santa Clara, CA',
    metrics: [
      { value: '500+', label: 'Microservices' },
      { value: '34%',  label: 'GPU Efficiency Gain' },
      { value: '14',   label: 'Engineers Led' },
      { value: '$2M+', label: 'Cost Reduction / Qtr' },
    ],
    techStack: ['Go', 'Kubernetes', 'gRPC', 'CUDA', 'Terraform', 'Prometheus', 'Linux', 'Rust'],
    initiatives: [
      {
        label: 'INITIATIVE_01 // HYPERION INFRASTRUCTURE',
        text: `At the forefront of NVIDIA's next-generation AI infrastructure, I lead a cross-functional team of 14 engineers tasked with reimagining the core compute backbone powering our largest-scale GPU clusters. This initiative — codenamed Hyperion — represents a complete departure from our legacy monolithic architecture toward a fully distributed, event-driven model engineered for petabyte-scale throughput and sub-millisecond latency across multi-region deployments spanning three cloud providers.`,
      },
      {
        label: 'INITIATIVE_02 // PIPELINE ARCHITECTURE',
        text: `My primary ownership spans the design and implementation of a custom data pipeline framework built on Go and gRPC, capable of orchestrating over 500 microservices across Kubernetes clusters with zero-downtime rolling deployments. I introduced a novel resource-scheduling algorithm that improved GPU utilization by 34% across our training clusters — a direct reduction in operational cost that translated to over $2M in quarterly savings, now being presented at internal architecture review as a replication target for adjacent teams.`,
      },
      {
        label: 'INITIATIVE_03 // DEVELOPER EXPERIENCE',
        text: `Beyond systems engineering, I established an internal Developer Experience working group that standardized deployment tooling, observability patterns, and incident response protocols across the organization. Under my guidance, mean time to recovery across our fleet dropped from 47 minutes to under 8, and our deployment frequency increased fourfold. The internal frameworks I architected are now being adopted by two additional infrastructure teams, compounding their impact beyond my direct scope.`,
      },
      {
        label: 'INITIATIVE_04 // KERNEL COLLABORATION',
        text: `The work at NVIDIA has pushed me to operate at the intersection of distributed systems theory and hands-on infrastructure engineering. I have collaborated directly with research scientists on the CUDA compute team to co-design memory management primitives that reduce latency bottlenecks at the kernel level — a rare bridge between hardware constraints and software abstractions that continues to sharpen my intuition about systems as physical, not merely logical, constructs.`,
      },
    ],
  },
  'applied-intuition': {
    period: '2020 — 2022',
    color: '#2D31FA',
    title: 'Senior UI Engineer',
    company: 'APPLIED INTUITION',
    location: 'Mountain View, CA',
    metrics: [
      { value: '200+', label: 'Developers Impacted' },
      { value: '120+', label: 'Components Built' },
      { value: '22%',  label: 'Bundle Reduction' },
      { value: '4',    label: 'Engineers Mentored' },
    ],
    techStack: ['React', 'TypeScript', 'Zustand', 'React Query', 'Playwright', 'Storybook', 'Figma', 'Webpack'],
    initiatives: [
      {
        label: 'INITIATIVE_01 // DESIGN SYSTEM FOUNDATION',
        text: `At Applied Intuition, I joined as lead architect for what would become the organization's first unified design system — a project that fundamentally reshaped how over 200 engineers approached front-end development. Prior to this initiative, UI inconsistencies and duplicated component logic had accumulated significant technical debt across simulation tooling and data visualization dashboards used daily by our automotive partners and internal teams alike.`,
      },
      {
        label: 'INITIATIVE_02 // COMPONENT LIBRARY',
        text: `I designed and shipped a library of over 120 reusable React components with a strict focus on dark-mode optimization, WCAG 2.1 AA accessibility compliance, and render performance. The system was built around a glassmorphism aesthetic aligned with our product's engineering identity, rigorously documented in Storybook, and validated end-to-end with Playwright. Cross-team adoption reached 80% within the first quarter of general availability — faster than any prior tooling rollout in the company's history.`,
      },
      {
        label: 'INITIATIVE_03 // STATE ARCHITECTURE',
        text: `State management was a central challenge across Applied Intuition's complex simulation interfaces. I led a migration from Redux to Zustand paired with React Query, reducing bundle size by 22% and eliminating an entire class of race condition bugs that had plagued real-time telemetry views. I also introduced automated performance budgets and Lighthouse CI checks into the build pipeline, establishing measurable, enforceable front-end quality standards across all product teams in the organization.`,
      },
      {
        label: 'INITIATIVE_04 // CULTURE & MENTORSHIP',
        text: `During my time here, I mentored four junior engineers and conducted weekly design reviews that cultivated a culture of intentionality around interface design within an engineering-first organization. The system I built outlasted my tenure and continues to serve as the foundation for Applied Intuition's flagship simulation products — a point of quiet pride in work built with the durability of infrastructure rather than the disposability of a sprint deliverable.`,
      },
    ],
  },
}
