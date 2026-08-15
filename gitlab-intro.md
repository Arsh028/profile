# GitLab Recruiter Call — Spoken Introduction

Based on `resume_gitlab.tex` (Senior Backend Engineer (Go), Continuous Delivery). Follows the pattern: company → team → tech stack → work.

## Birdeye

I'm currently an SDE-2 at Birdeye — Birdeye is a B2B agentic AI marketing platform that helps businesses manage their online presence, reputation, and customer engagement. It has products like Reviews AI, Listings AI, and Search AI — so for an enterprise business, you'd aggregate and respond to reviews, track where you stand in AI-driven search across ChatGPT, Gemini, Perplexity, and see your listing rankings across various sources.

I work on the Aggregation team, which is responsible for the distributed crawling and data-aggregation infrastructure that powers Listings AI and Search AI.

Our stack here is primarily Go for the backend orchestration layer, alongside TypeScript/Node.js for some of the AI-integrated crawling logic, backed by PostgreSQL, Redis, and Kafka for distributed coordination.

On the work side, I architected a distributed crawler orchestration engine in Go that coordinates a fleet of Puppeteer-based workers over Chrome DevTools Protocol — with state persistence and replay-safe checkpointing in PostgreSQL, retry/backoff and circuit-breaker resilience, and idempotent recovery so long-running jobs survive worker failures and reconcile against live system state. I also worked on an AI-powered self-healing framework that auto-recovers broken DOM selectors using deterministic heuristics combined with confidence-scored LLM fallbacks and human-in-the-loop moderation, plus an AI-driven adaptive crawling strategy using LangChain and OpenAI agents that decide the extraction strategy — HTML, REST, or GraphQL — in real time.

## Bajaj Finserv Health

Before this, I worked at Bajaj Finserv Health, a healthcare platform serving doctors and patients — think appointment booking, billing, and EMR-adjacent systems at scale.

I was part of the backend team owning core platform services — payments, authentication, notifications, and reporting infrastructure — progressing from SDE Intern to SDE-2 over about three years.

The stack there was Go for backend services, with PostgreSQL, Redis, Kafka, and Azure Service Bus for event-driven communication, and Grafana/Prometheus/Elasticsearch for observability.

On the work side: I built a payments microservice in Go integrating MDR and subvention-based payout calculations across multiple channels via Razorpay and Salesforce, reducing revenue leakage by 2% per transaction. I also architected a partial-payments and settlement service consuming Kafka events, using an explicit payment-state machine with transactional database updates and Redis-backed distributed locks to prevent double-settlement — that drove a 33% increase in online payment adoption. On the platform side, I architected an OAuth authentication microservice in Go with JWT dual-token flows, RBAC, centralized session state, and instant token revocation, achieving sub-50ms P95 refresh latency at scale. I also led our CI/CD migration — moving from Azure DevOps release pipelines to ArgoCD-based GitOps, enabling automated drift correction, progressive rollouts with canary/blue-green deployments, and clean rollbacks.

Earlier in that role, I built an event-driven notification microservice in Go using WebSockets and Kafka that replaced a third-party vendor and cut monthly costs by 18%, optimized high-load database queries and Elasticsearch-backed APIs to cut P90 latency by 38%, and built the Rewards feature using a goroutine-based Kafka consumer pool with idempotent event processing — which drove a 40% surge in appointment volume in its first month.
