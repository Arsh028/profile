# GitLab Recruiter Call — Spoken Introduction (SSCS Add-On)

Based on `resume_gitlab_sscs.tex` (Senior Backend Engineer, SSCS: Supply Chain). Follows the pattern: company → team → tech stack → work. Primary language shifted to Ruby on Rails (team's primary language per JD), with a security/governance framing throughout.

## Birdeye

I'm currently an SDE-2 at Birdeye — Birdeye is a B2B agentic AI marketing platform that helps businesses manage their online presence, reputation, and customer engagement. It has products like Reviews AI, Listings AI, and Search AI — so for an enterprise business, you'd aggregate and respond to reviews, track where you stand in AI-driven search across ChatGPT, Gemini, Perplexity, and see your listing rankings across various sources.

I work on the Aggregation team, which is responsible for the distributed crawling and data-aggregation infrastructure that powers Listings AI and Search AI.

Our stack here is primarily Ruby on Rails for the backend orchestration layer, backed by PostgreSQL and Redis for distributed coordination, with Sidekiq handling our background job and retry infrastructure.

On the work side, I architected a distributed crawler orchestration microservice in Ruby on Rails that coordinates a fleet of Puppeteer-based workers through Sidekiq-backed background jobs — persisting job checkpoints to PostgreSQL via ActiveRecord for replay-safe recovery, with retry/backoff through Sidekiq's retry mechanism, circuit-breaker resilience, and idempotent transactional writes so long-running jobs reconcile against live system state and survive worker failures. I also built an AI-powered self-healing governance framework for our web-scraping pipeline that auto-recovers broken DOM selectors using deterministic heuristics combined with confidence-scored LLM fallbacks cached in Redis, human-in-the-loop moderation, and circuit-breaker resilience — reducing hallucinated fixes and eliminating manual maintenance at scale. Separately, I worked on an AI-driven adaptive crawling strategy using LangChain and OpenAI agents that decide the extraction approach — HTML, REST, or GraphQL — in real time.

## Bajaj Finserv Health

Before this, I worked at Bajaj Finserv Health, a healthcare platform serving doctors and patients — think appointment booking, billing, and EMR-adjacent systems at scale.

I was part of the backend team owning core platform services — payments, authentication, notifications, and reporting infrastructure — progressing from SDE Intern to SDE-2 over about three years.

The stack there was Ruby on Rails for backend services, with PostgreSQL, Redis, Kafka, and Azure Service Bus for event-driven communication, and Grafana/Prometheus/Elasticsearch for observability.

On the work side: I built a rule-based policy authorization microservice in Ruby on Rails that compiled role and permission rules into enforcement decisions for an OAuth 2.0/JWT-secured multi-tenant platform, with centralized session state in Redis and instant token revocation, achieving sub-50ms P95 refresh latency at scale — that's the piece closest to policy-engine and trust-boundary work. I also integrated MDR and subvention-based payout calculations across payment channels, enforcing idempotency via ActiveRecord unique constraints and Sidekiq background retries against Razorpay and Salesforce integrations, which reduced revenue leakage by 2% per transaction. I architected a partial-payments and settlement service using an AASM-based payment-state machine for split payments and refund rollback, with ActiveRecord transactions on PostgreSQL and Redis-backed distributed locks preventing concurrent double-settlement — that drove a 33% increase in online payment adoption. On the delivery side, I established end-to-end CI/CD for our Rails microservices, keeping Azure DevOps for RSpec-driven build/test CI while migrating deployment to ArgoCD-based GitOps, containerizing with Docker and deploying to Kubernetes, using Git as the single source of truth to enable automated drift correction, progressive rollouts, and declarative rollback.

Earlier in that role, I built a real-time event-driven notification microservice using Action Cable over Redis pub/sub and Kafka that replaced a third-party vendor and cut monthly costs by 18%. I identified and fixed high-load database queries via Grafana, cutting DB load and QPS significantly, and optimized GraphQL APIs on a Rails gateway microservice with Elasticsearch-driven tuning, cutting P90 latency by 38% while layering in WAF security enhancements. I also spearheaded the Rewards feature, consuming Kafka events and processing eligibility asynchronously through a Sidekiq job queue, which drove a 40% surge in appointments in its first month.
