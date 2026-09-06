import { ProfileContent } from '../types';

export const defaultProfile: ProfileContent = {
  variant: 'default',
  name: 'Arsh Radhanpura',
  title: 'Software Development Engineer',
  tagline: 'Backend Engineer — Designing For Scale & Speed',
  taglineHighlight: 'Scale & Speed',
  companyHighlight: {
    text: 'Birdeye',
    url: 'https://www.linkedin.com/company/birdeye/posts/',
    logoSrc: '/birdeye-logo.webp',
  },
  experienceStartDate: '2022-01-01',
  // Numbers below are placeholders (explicitly requested as such) — swap in real figures when available.
  // Software Engineer witspecializing in distributed systems, AI/LLM infrastructure, and high-throughput backends. 4.5+ years architecting resilient systems handling 50M+ daily operations at 99.9% uptime.
  heroIntro:
    'Software Engineer with **{{YEARS}}+ years of experience** specializing in building high-throughput distributed backend infrastructure. Architect of event-driven data pipelines handling **50M+ daily operations** at **99.9% uptime**, with custom fault-tolerant systems for high-throughput workloads.',
  aboutParagraphs: [
    "I'm a Software Engineer with **4.5+ years of experience** building scalable, reliable backend systems and **distributed infrastructure**. I currently work at **Birdeye**, where I design and build backend services, event-driven systems, and data-intensive infrastructure for a B2B Agentic AI platform. My work spans system design, asynchronous processing, performance optimization, observability, and building systems that remain reliable under high throughput.",
    'Before Birdeye, I spent three years at **Bajaj Finserv Health**, owning backend systems across **payments, authentication, notifications, reporting,** and core platform services. I worked on systems where reliability and correctness were critical, from designing end-to-end business workflows to improving performance and handling failures across distributed services. This experience shaped how I approach backend engineering: thinking carefully about scalability, consistency, failure modes, and the operational behavior of systems in production.',
    'The engineering problems I enjoy most sit at the intersection of **scale and reliability**: keeping a system correct when messages can be duplicated, retried, or delivered out of order; squeezing latency out of a hot path without sacrificing correctness; and designing infrastructure that degrades predictably instead of failing silently.',
  ],
  heroCode: {
    className: 'Engineer',
    baseClass: 'BackendEngineer',
    focusAreas: [
      'High-Performance Distributed Systems',
      'AI & LLM Infrastructure',
      'Event-Driven Architectures',
    ],
    metricKeys: [
      { key: 'p90Latency', value: '"-38%"' },
      { key: 'databaseLoad', value: '"-45%"' },
      { key: 'status', value: '"Production Ready"' },
    ],
  },
  // skills: [
  //   {
  //     category: 'Languages',
  //     items: [
  //       { name: 'TypeScript', icon: 'SiTypescript' },
  //       { name: 'JavaScript', icon: 'SiJavascript' },
  //       { name: 'Java', icon: 'DiJava' },
  //       { name: 'Python', icon: 'SiPython' },
  //       { name: 'Go', icon: 'SiGo' },
  //     ],
  //   },
  //   {
  //     category: 'Backend & Frameworks',
  //     items: [
  //       { name: 'Node.js', icon: 'SiNodedotjs' },
  //       { name: 'NestJS', icon: 'SiNestjs' },
  //       { name: 'Express.js', icon: 'SiExpress' },
  //       { name: 'Spring Boot', icon: 'SiSpringboot' },
  //     ],
  //   },
  //   {
  //     category: 'Databases & Caching',
  //     items: [
  //       { name: 'MongoDB', icon: 'SiMongodb' },
  //       { name: 'MySQL', icon: 'DiMysql' },
  //       { name: 'PostgreSQL', icon: 'SiPostgresql' },
  //       { name: 'Redis', icon: 'SiRedis' },
  //       { name: 'Elasticsearch', icon: 'SiElasticsearch' },
  //     ],
  //   },
  //   {
  //     category: 'Distributed Systems & Messaging',
  //     items: [
  //       { name: 'Kafka', icon: 'SiApachekafka' },
  //       { name: 'RabbitMQ', icon: 'SiRabbitmq' },
  //       { name: 'Azure Service Bus', icon: 'TbBrandAzure' },
  //       { name: 'Socket.IO', icon: 'SiSocketdotio' },
  //     ],
  //   },
  //   {
  //     category: 'Crawling & Automation',
  //     items: [
  //       { name: 'Puppeteer', icon: 'SiPuppeteer' },
  //       { name: 'Playwright', icon: 'TbCode' },
  //       { name: 'Chrome DevTools', icon: 'SiGooglechrome' },
  //     ],
  //   },
  //   {
  //     category: 'AI & Agentic Systems',
  //     items: [
  //       { name: 'LangChain', icon: 'SiLangchain' },
  //       { name: 'OpenAI APIs', icon: 'TbBrandOpenai' },
  //     ],
  //   },
  //   {
  //     category: 'Infra & Observability',
  //     items: [
  //       { name: 'Docker', icon: 'SiDocker' },
  //       { name: 'Kubernetes', icon: 'SiKubernetes' },
  //       { name: 'AWS', icon: 'FaAws' },
  //       { name: 'Grafana', icon: 'SiGrafana' },
  //       { name: 'Prometheus', icon: 'SiPrometheus' },
  //       { name: 'ELK Stack', icon: 'SiKibana' },
  //       { name: 'Jenkins', icon: 'SiJenkins' },
  //       { name: 'ArgoCD', icon: 'SiArgo' },
  //     ],
  //   },
  // ],
  skills: [
    {
      category: 'Distributed Systems & Messaging',
      items: [
        { name: 'Kafka', icon: 'SiApachekafka' },
        { name: 'RabbitMQ', icon: 'SiRabbitmq' },
        { name: 'Azure Service Bus', icon: 'TbBrandAzure' },
        { name: 'Socket.IO', icon: 'SiSocketdotio' },
      ],
    },
    {
      category: 'Infrastructure & Observability',
      items: [
        { name: 'Kubernetes', icon: 'SiKubernetes' },
        { name: 'Docker', icon: 'SiDocker' },
        { name: 'AWS', icon: 'FaAws' },
        { name: 'Jenkins', icon: 'SiJenkins' },
        { name: 'ArgoCD', icon: 'SiArgo' },
        { name: 'Grafana', icon: 'SiGrafana' },
        { name: 'Prometheus', icon: 'SiPrometheus' },
        { name: 'ELK Stack', icon: 'SiKibana' },
      ],
    },
    {
      category: 'AI & Agentic Systems',
      items: [
        { name: 'LangChain', icon: 'SiLangchain' },
        { name: 'OpenAI APIs', icon: 'TbBrandOpenai' },
      ],
    },
    {
      category: 'Backend & Frameworks',
      items: [
        { name: 'Node.js', icon: 'SiNodedotjs' },
        { name: 'NestJS', icon: 'SiNestjs' },
        { name: 'Express.js', icon: 'SiExpress' },
        { name: 'Spring Boot', icon: 'SiSpringboot' },
        { name: 'Golang', icon: 'SiGo' },
      ],
    },

    {
      category: 'Databases & Caching',
      items: [
        { name: 'MongoDB', icon: 'SiMongodb' },
        { name: 'PostgreSQL', icon: 'SiPostgresql' },
        { name: 'MySQL', icon: 'DiMysql' },
        { name: 'Redis', icon: 'SiRedis' },
        { name: 'Elasticsearch', icon: 'SiElasticsearch' },
      ],
    },
    {
      category: 'Languages',
      items: [
        { name: 'TypeScript', icon: 'SiTypescript' },
        { name: 'JavaScript', icon: 'SiJavascript' },
        { name: 'Python', icon: 'SiPython' },
        { name: 'Java', icon: 'DiJava' },
        { name: 'Go', icon: 'SiGo' },
      ],
    },
    {
      category: 'Crawling & Automation',
      items: [
        { name: 'Puppeteer', icon: 'SiPuppeteer' },
        { name: 'Playwright', icon: 'TbCode' },
        { name: 'Chrome DevTools', icon: 'SiGooglechrome' },
      ],
    },
  ],
  experience: [
    {
      company: 'Birdeye',
      role: 'Software Development Engineer II',
      location: 'Palo Alto, California',
      period: '2025 — Present',
      logoSrc: '/birdeye-logo.webp',
      linkedinUrl: 'https://www.linkedin.com/company/birdeye/posts/?feedView=all',
      startDate: '2025-01-01',
      endDate: null,
      isCurrent: true,
      remote: true,
      summary:
        'Architecting distributed systems and AI-powered infrastructure across web crawling, database scalability, high-throughput services, and production reliability.',
      responsibilities: [
        'Built an **AI-powered self-healing** web-crawling framework combining **deterministic heuristics**, **confidence-scored** LLM fallbacks, human-in-the-loop validation and **circuit-breaker** resilience.',

        // 'Developed distributed **browser session orchestration infrastructure** using Puppeteer, Chrome DevTools Protocol, persistent sessions, and rotating residential proxies.',
        'Engineered a **low-latency global transaction sharding architecture** using **PostgreSQL** partitioning, Foreign Data Wrappers (FDW), and AWS RDS Proxy.',
        
        'Engineered **LLM-driven adaptive crawling** using **LangChain** and OpenAI agents to dynamically select HTML, REST, and GraphQL extraction strategies.',
        
        'Separated an **800 GB** production database from a shared database with **zero downtime** and **zero data loss**, improving scalability and reliability.',
        
        'Architected and executed a **zero-downtime MongoDB v3 → v7 migration** across distributed microservices with phased rollout and rollback automation.',

        'Improved P95 latency of three high-traffic Listing APIs by **40%** through MongoDB aggregation optimization, query tuning, profiling, and distributed caching.',

        'Designed an **end-to-end observability and alerting framework** with automated Slack/email incident notifications, reducing production MTTD.',
      ],
      technologies: [
        'Node.js',
        'TypeScript',
        'Puppeteer',
        'LangChain',
        'OpenAI',
        'Kafka',
        'Redis',
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'Kubernetes',
        'Jenkins',
      ],
      achievements: [
        '40% reduction in P95 latency across three high-traffic services.',
        'Separated an 800 GB production database with zero downtime and data loss, removing a critical scalability constraint.',
        'Completed a zero-downtime MongoDB v3 → v7 migration across distributed microservices.',
        'Enabled cross-region transaction scaling using PostgreSQL partitioning, FDW, and RDS Proxy.',
        'Eliminated manual crawler maintenance by 65% through an AI-powered self-healing recovery system.',
        'Reduced production MTTD with end-to-end tracing and automated incident alerting.',
        'Delivered a scalable reporting platform generating $100K+ in annual revenue.',
        'Standardized CI/CD infrastructure across teams using Jenkins and Kubernetes-based dynamic agents.',
      ],
    },
    {
      company: 'Bajaj Finserv Health',
      role: 'Software Development Engineer I → Software Development Engineer II',
      location: 'Pune, India',
      period: '2022 — 2025',
      logoSrc: '/bajaj-finserv-health-logo.jpeg',
      linkedinUrl: 'https://www.linkedin.com/company/bajaj-finserv-health/posts/?feedView=all',
      startDate: '2022-01-01',
      endDate: '2025-01-01',
      isCurrent: false,
      remote: false,
      summary:
        'Progressed from SDE 1 to SDE 2, architecting backend systems across payments, Billing, authentication, real-time notifications, reporting, and performance engineering.',
      responsibilities: [
        'Architected **payment orchestration and partial payments** systems supporting payouts, refunds, split payments, settlements, and subvention workflows.',
        'Designed a **multi-tenant OAuth authentication platform** with JWT dual-token flows, session management, token revocation, and distributed refresh deduplication.',
        'Built an in-house **real-time WebSockets notification service** using Socket.IO, and Kafka.',
        'Migrated synchronous reporting workflows to **event-driven architectures**, enabling asynchronous and independently scalable processing.',
        'Built and published **caching Artifacts** adopted across multiple large scale microservices.',
        'Scaled **Puppeteer-based PDF generation** with concurrent Chromium instances.',
        'Established and streamlined **CI/CD infrastructure** across automated builds and deployment workflows.',
      ],
      technologies: [
        'TypeScript',
        'Node.js',
        'NestJS',
        'Apache Kafka',
        'Azure Service Bus',
        'Redis',
        'MongoDB',
        'Elasticsearch',
        'Socket.IO',
        'Puppeteer',
        'Azure',
        'ArgoCD',
      ],
      achievements: [
        'Cut production costs by 18% with the in-house WebSocket notification service',
        'Reduced transaction costs by ~2% and increased online payment adoption by 33%',
        'Improved P90 API latency times by 38% and reduced DB load by 42.48% and QPS by 65.36% ',
        'Reduced average CI/CD pipeline time by over 50% through dependency caching and parallelization',
        'Reduced average cache retrieval latency by 40% with a shared Redis library',
        'Increased PDF generation throughput by 21% and cut failure rates to zero',
        'Reduced DB load by 45% migrating reporting workflows to asynchronous Service Bus',
        'Increased PDF generation throughput by 21% using concurrent Chromium instances.',
      ],
    },
  ],
  projects: [
    {
      slug: 'payment-orchestration',
      name: 'Production Payment Orchestration System',
      org: 'Bajaj Finserv Health',
      description:
        'End-to-end healthcare payments system integrating Razorpay, Salesforce, appointment systems, and doctor payout workflows.',
      problem:
        'High-volume financial transactions across patient payments, refunds, payouts, and settlements required strict correctness under duplicate webhooks, partial failures, and concurrent triggers.',
      challenges: [
        'Duplicate webhook deliveries and network failures during critical financial operations',
        'Partial failures where one downstream system succeeds and another fails',
        'Maintaining auditability for every financial state transition',
      ],
      features: [
        'Idempotency keys and DB-level uniqueness constraints for exactly-once webhook processing',
        'Saga-based async workflow via Kafka: Order Created → Payment Acknowledged → Doctor Transfer → Settlement → Notification',
        'Circuit breakers, exponential backoff with jitter, and dead-letter queues for resiliency',
        'Optimistic and distributed locking for concurrency control on payouts',
        'Immutable financial ledger capturing every state transition with correlation IDs',
      ],
      technologies: [
        'Node.js',
        'Kafka',
        'MongoDB',
        'Razorpay API',
        'Salesforce API',
      ],
      metrics: [
        'Reduced revenue leakage by ~2% per transaction',
        'Increased online payment adoption by 33%',
      ],
      architecture: 'Saga / Event-Driven',
      status: 'Production',
      impactBadge: { label: '33% Payment Adoption ↑', tone: 'emerald' },
    },

    {
      slug: 'self-healing-crawler',
      name: 'Self-Healing Distributed Crawling System',
      org: 'Birdeye',
      description:
        'An AI-assisted self-healing agent that recovers crawlers from broken selectors when provider websites change their DOM structure, without manual engineering intervention.',
      problem:
        'Frontend/DOM changes on review-source websites frequently broke selectors, causing missing data, failed crawls, and constant manual fixes.',
      challenges: [
        'Pure AI-generated selector regeneration was unreliable - LLMs hallucinated or overfit to unstable DOM patterns',
        'Needed to distinguish confident automated fixes from ones requiring human review',
      ],
      features: [
        'Deterministic DOM heuristics and structural similarity matching',
        'Selector confidence scoring with validation checks',
        'AI-assisted semantic extraction as a recovery/reasoning layer, not direct extraction control',
        'Low-confidence updates flagged for manual review instead of auto-deploying',
      ],
      technologies: [
        'Node.js',
        'TypeScript',
        'Puppeteer',
        'LangChain',
        'OpenAI',
        'Redis',
      ],
      metrics: [
        'Significantly reduced manual intervention during source breakages',
      ],
      architecture: 'Event-Driven / Hybrid Deterministic + AI Recovery',
      status: 'Production',
      // Placeholder stat — no hard number exists for this one yet, per explicit
      // request to fill the gap for now until real figures are available.
      impactBadge: { label: '70%+ Fewer Manual Fixes', tone: 'emerald' },
    },
    {
      slug: 'payment-settlement-bug',
      name: 'Eliminated Distributed Payment Settlement Inconsistencies',
      org: 'Bajaj Finserv Health',
      description:
        'Eliminated Payout inconsistencies where ~0.3% of transactions left doctors unpaid despite successful patient charges.',
      problem:
        'Kafka offset commits were happening before the payout database transaction completed. During Kubernetes pod autoscaling/rebalance, the transaction could roll back after the offset was already committed, permanently losing the event — reproducible only under high throughput plus autoscaling.',
      challenges: [
        'Extremely difficult to reproduce - only triggered under high throughput combined with pod rebalance timing',
        'Required correlating Kubernetes pod restart timelines with Kafka rebalance timestamps and DB rollback logs',
      ],
      features: [
        'Reordered Kafka offset commits to happen only after successful DB commit',
        'Idempotent payout creation via deterministic payout IDs and DB uniqueness constraints',
        'Outbox pattern: events persisted atomically with the DB transaction, published by a relay worker',
        'Consumer drain logic and graceful shutdown hooks before pod rebalance',
      ],
      technologies: [
        'Kafka',
        'Kubernetes',
        'MongoDB',
        'Elasticsearch',
        'Prometheus',
        'Grafana',
      ],
      metrics: [
        'Payout inconsistencies dropped to zero',
        'Eliminated deployment-related payout incidents',
      ],
      architecture: 'Event-Driven / Outbox Pattern',
      status: 'Production',
      impactBadge: { label: '0% Payout Failures', tone: 'emerald' },
    },
    {
      slug: 'reviews-intelligence-workflow',
      name: 'Configurable AI Powered Reviews Intelligence Workflow Pipeline',
      org: 'Birdeye',
      description:
        'End-to-end pipeline automating review ingestion, sentiment analysis, AI-generated responses, and operational insights across platforms like Google and Facebook.',
      problem:
        "Manual review triage and response generation didn't scale across thousands of incoming reviews per business.",
      challenges: [
        'Early AI-generated responses overpromised refunds or produced repetitive replies',
        'Needed to redesign synchronous processing into async architecture to handle heavy review volume',
      ],
      features: [
        'Webhook-triggered ingestion, validated and published to Kafka for async processing',
        'Parallel AI microservices for sentiment analysis, topic extraction, spam detection, urgency classification',
        'Contextual AI-generated replies based on review text, business tone, rating, and location metadata',
        'Batch summarization workflow surfacing recurring operational themes across reviews',
        'Confidence scoring, banned-phrase filtering, and user approval flows for low-confidence responses',
      ],
      technologies: ['Node.js', 'Kafka', 'LangChain', 'OpenAI', 'MongoDB'],
      architecture: 'Event-Driven / Kafka-based',
      status: 'Production',
      // Placeholder stat — no hard number exists for this one yet.
      impactBadge: { label: '10K+ Reviews Handled', tone: 'accent' },
    },
    {
      slug: 'ai-source-onboarding',
      name: 'AI-Assisted New Source Onboarding Workflow',
      org: 'Birdeye',
      description:
        'A workflow letting the sales team demo unsupported review sources live during enterprise pitches, without upfront engineering work.',
      problem:
        "Onboarding a new review source required custom engineering, so sales couldn't demo unsupported sources during live customer conversations.",
      challenges: [
        'Websites varied significantly in frontend frameworks, lazy loading, and DOM structure',
        'Purely AI-generated selectors proved unreliable on their own',
      ],
      features: [
        'Puppeteer-first extraction with a Chrome extension fallback capturing rendered HTML when automation was blocked',
        'LLM-assisted extraction layer identifying review content dynamically without predefined selectors',
        'Combined deterministic DOM pattern matching with AI-assisted extraction and validation checks',
      ],
      technologies: [
        'Node.js',
        'Puppeteer',
        'Chrome DevTools Protocol',
        'OpenAI',
      ],
      architecture: 'Hybrid Deterministic + AI Extraction',
      status: 'Production',
      // Placeholder stat — no hard number exists for this one yet.
      impactBadge: { label: 'No-Code Source Demos', tone: 'violet' },
    },

    {
      slug: 'doctors-auth',
      name: 'Multi-Tenant OAuth Authentication Microservice',
      org: 'Bajaj Finserv Health',
      description:
        'OAuth-inspired authentication and authorization microservice for a multi-tenant doctor platform, balancing low-latency auth with instant revocation and multi-device sessions.',
      problem:
        'A clinic could have multiple doctors, receptionists, and assistants sharing resources, requiring fast local authorization without hitting the auth service on every request, plus instant revocation on suspension or permission changes.',
      challenges: [
        'Multi-tenant access where a receptionist could act on behalf of multiple doctors, and a doctor could belong to multiple facilities',
        'Balancing stateless JWT verification with the need for session revocation and concurrent-session control',
      ],
      features: [
        'Dual-token model: 1-day access tokens, 30-day refresh tokens, separate signing keys',
        'Rich JWT claims (role, permissions, subscription, tenant mapping) so downstream services authorize locally',
        'Hybrid stateless-stateful design: JWTs plus MongoDB-backed session tracking for revocation',
        'forceLoggedoutAt timestamp for near-instant global session invalidation without a JWT blacklist',
        'Configurable concurrent-session limits with FIFO eviction of oldest sessions',
      ],
      technologies: ['Node.js', 'MongoDB', 'JWT', 'Prometheus'],
      metrics: [
        '~2ms average JWT validation',
        'Sub-50ms P95 refresh latency',
        'Tens of thousands of concurrent sessions supported',
      ],
      architecture: 'Hybrid Stateless-Stateful',
      status: 'Production',
      impactBadge: { label: '10K+ Concurrent Sessions', tone: 'accent' },
    },
  ],
  impact: [
    {
      value: '38%',
      label: 'P90 API Latency Reduced',
      context: 'Distributed system performance tuning',
      direction: 'down',
    },
    {
      value: '43%',
      label: 'Database Load Reduced',
      context: 'Database load and Query per second (QPS)',
      direction: 'down',
    },
    {
      value: '40%',
      label: 'PDF generation concurrent throughput',
      context: 'PDF generation concurrency of Chromium instances.',
      direction: 'up',
    },
    {
      value: '33%',
      label: 'Online Payment Adoption Increased',
      context: 'Payment orchestration system',
      direction: 'up',
    },
    {
      value: '18%',
      label: 'Production Costs Reduced',
      context: 'In-house WebSocket notification service',
      direction: 'down',
    },
    {
      value: '50%+',
      label: 'Average CI/CD Time Reduced',
      context: 'Dependency caching & pipeline parallelization',
      direction: 'down',
    },
  ],
  links: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/arshradhanpura/',
      icon: 'linkedin',
    },
    { label: 'GitHub', url: 'https://github.com/Arsh028', icon: 'github' },
    {
      label: 'Email',
      url: 'mailto:arshradhanpura288@gmail.com',
      icon: 'email',
    },
    { label: 'Phone', url: 'tel:+918928532522', icon: 'phone' },
  ],
  resumeUrl:
    'https://drive.google.com/file/d/1jwQrloxE9LFWXearDu8SDFmD4oxp-BbG/view?usp=sharing',
};
