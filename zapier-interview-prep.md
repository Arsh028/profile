# Zapier — Software Engineer, Release Engineering
## Interview Prep: Expected Questions & Answers

---

## About Me (Opening)

**Q: Tell me about yourself and your background.**

I'm Arsh Radhanpura, an SDE-2 with around 4 years of backend engineering experience. I currently work at Birdeye, a B2B Agentic AI marketing platform, on the Aggregation Team. My work sits at the intersection of distributed systems, browser automation, and platform reliability — I build and operate the crawling infrastructure that powers products like Listings AI and Search AI.

Before Birdeye, I spent 3 years at Bajaj Finserv Health where I progressed from intern to SDE-2, owning backend systems for payments, billing, auth, and notifications — and critically, I also owned the CI/CD and release engineering infrastructure across dozens of microservices.

What draws me to this role specifically is that I've been on both sides — I've built backend services at scale, and I've owned the delivery systems those services depended on. I've led a GitOps migration from Azure DevOps to ArgoCD, reduced pipeline runtimes by over 70%, and built Jenkins Shared Libraries that became org-wide standards. I want to do that work as a first-class responsibility rather than as a side contribution.

---

## Section 1: CI/CD Systems

---

**Q: Walk me through a CI/CD system you built or significantly improved.**

At Bajaj Finserv Health, I owned the entire software delivery lifecycle across 30+ microservices. When I joined, the CI/CD setup was entirely managed through Azure DevOps pipelines that handled both build and deploy. This created multiple problems: deployment configs were duplicated across repositories, rollbacks were inconsistent, environment drift was common, and there was no single source of truth for cluster state.

I led a full GitOps migration to decouple CI from CD. On the CI side, I standardized Azure DevOps pipelines using reusable YAML templates that covered dependency restoration, build execution, test orchestration, container image creation, security scanning, and artifact versioning. On the CD side, I introduced ArgoCD to manage all Kubernetes deployments — ArgoCD continuously reconciled cluster state against Git, which became the single source of truth.

Every successful CI build produced versioned Helm manifests committed to a dedicated environment repository. ArgoCD picked those up and applied them to the cluster automatically. This eliminated direct cluster modifications from CI pipelines entirely.

The measurable outcomes: deployment-related incidents dropped significantly because ArgoCD automatically corrected config drift. Rollbacks went from multi-step manual operations to a simple Git revert. New service onboarding dropped from several days to a few hours. MTTR improved because engineers could see desired vs actual cluster state instantly in ArgoCD dashboards.

---

**Q: How did you reduce build times or pipeline runtimes?**

At Bajaj Finserv Health, I did a systematic audit across multiple teams' pipelines — Doctor Listing API, DRx UI Automation, and several microservices — and found pipelines taking 15 to 30 minutes per run, compounding across dozens of daily deployments.

I instrumented the pipelines with stage-level timing to identify root causes rather than guessing. The main issues were: no dependency caching (packages re-downloaded from scratch every run, consuming 30–50% of build time), sequential execution of independent stages, bloated Docker images, suboptimal build tooling, and artifacts being rebuilt multiple times across stages.

I fixed each of these systematically. For caching, I implemented Azure Pipeline Cache with lock-file-based cache keys — yarn.lock, package-lock.json, pom.xml — and enabled Yarn zero-install for frontend projects. For Java services I enabled Gradle build cache with incremental compilation. For parallelism, I restructured pipelines to run independent stages concurrently. For Docker, I introduced multi-stage Dockerfiles to separate builder and runtime images, reordered instructions for layer cache reuse, and cleaned up .dockerignore files to reduce build context. For one service, I migrated from Maven to Gradle which gave a standalone 30–40% build time reduction.

Results: over 70% reduction in build time via caching alone on some pipelines, 40–50% reduction in total runtime via parallelization, Docker image sizes reduced by more than 50% for several services, and average pipeline execution time cut by more than 50% overall. I published the findings as an internal guide that was adopted as org-wide CI/CD standards.

---

**Q: Have you worked with ArgoCD? What specifically did you build?**

Yes, at Bajaj Finserv Health I introduced and owned ArgoCD as the CD layer for our Kubernetes clusters. I set up the initial ArgoCD installation, configured Application and ApplicationSet resources for all microservices, defined sync policies including automated sync with self-heal enabled, and configured health checks and sync wave ordering for services with startup dependencies.

I also set up progressive rollout strategies — we used ArgoCD Rollouts for canary deployments on critical services so we could gradually shift traffic and auto-rollback on metric degradation. I wrote Helm chart templates that were reusable across services, with environment-specific values files managed in separate GitOps repositories. I integrated Slack notifications for deployment events so teams had visibility without needing to watch dashboards.

The separation of CI and CD also gave us audit trails — every deployment was a Git commit, every rollback was a revert, and we could replay any environment's history.

---

**Q: What's your experience with Jenkins?**

At Birdeye, I've worked with Jenkins as the primary CI/CD system for 1.5+ years. I developed Jenkins Shared Libraries to standardize pipeline logic across engineering teams — this solved a problem where each team had duplicated, diverged Jenkinsfiles that were difficult to maintain and audit.

The shared libraries covered common stages: checkout, dependency installation, unit and integration test execution, Docker build and push to registry, security scanning with Trivy, and deployment notification. Teams could include these stages in their Jenkinsfiles with a single function call, and the underlying logic was maintained centrally.

I also implemented scalable build orchestration using Kubernetes-based dynamic Jenkins agents — pods spun up on demand per build and terminated after, which eliminated the queuing problem we had with static agents. I configured pod templates per build type (Node.js, Java, Python) with appropriate resource requests so builds didn't starve each other on the cluster.

On the testing side, I integrated parallelized test execution so test suites were sharded across multiple pods, reducing test time significantly. I also built flaky test detection by tracking test results across runs and flagging tests that had inconsistent pass/fail patterns, which fed into our test health dashboard.

---

**Q: How do you handle flaky tests in a CI pipeline?**

Flaky tests are one of the most damaging things in a CI system because they erode trust — once engineers start ignoring red builds, the pipeline loses its value as a safety net.

My approach has three parts. First, detection: I instrumented pipelines to record pass/fail outcomes per test across runs and built a dashboard showing flakiness rate per test over a rolling window. Tests above a threshold got automatically quarantined — moved to a separate non-blocking suite — so they didn't block merges while they were being fixed.

Second, root cause analysis: most flakiness falls into a few categories — shared state between tests, timing dependencies, network calls in unit tests, or environment variance. I ran flaky tests in isolation and in parallel to distinguish between these. For the timing issues I introduced deterministic test utilities — fake timers, controlled async resolution — rather than arbitrary sleeps. For shared state I enforced test isolation by resetting DB state and in-memory mocks between tests using before/after hooks.

Third, prevention: I introduced guidelines and linting rules that flagged common anti-patterns — setTimeout in tests, reliance on external APIs, global state mutation. Code review checks for new tests catching these patterns before they enter the suite.

The result was that our flaky test rate dropped significantly within a few months and engineer confidence in CI results went up measurably.

---

## Section 2: Release Orchestration & Infrastructure

---

**Q: What does a "golden path" mean to you and have you built one?**

A golden path is an opinionated, well-maintained route that makes the right way to do something also the easiest way. The goal is to reduce cognitive load on every engineer while raising the floor on consistency, security, and reliability across the org.

At Bajaj Finserv Health, I built what was effectively a golden path for service delivery. I created reusable Azure DevOps YAML templates that any team could import — covering build, test, image creation, artifact versioning, and deployment. The templates made sensible defaults: caching enabled, multi-stage Docker, security scanning included, deployment gated on test passage. Teams could override individual settings but the defaults were production-ready out of the box.

At Birdeye, I built Jenkins Shared Libraries that served the same purpose — common pipeline stages as callable functions. Teams didn't need to write or understand the underlying pipeline mechanics; they described their build in a few lines and the library handled the rest.

A golden path only works if it's maintained. I treated these like production software — versioned, documented, with a changelog, and with feedback loops so I knew when teams hit friction with them.

---

**Q: How do you approach incident response in a pipeline or release system?**

When a pipeline or release system fails, engineers are blocked, so speed of diagnosis and communication both matter.

My first step is always to assess blast radius before diving into root cause — how many teams are affected, is production deployment blocked, is there data loss risk. I communicate status immediately even if I don't have answers yet, so people aren't in the dark.

For diagnosis, I go to structured observability first: pipeline logs, build metrics, deployment events in ArgoCD or equivalent. I look for what changed — recent config changes, new dependencies, infra events. I correlate timestamps across systems.

A specific example: at Birdeye we had a Jenkins agent pool exhaustion incident where builds were queuing indefinitely. The immediate fix was to increase the pod template limits, but the root cause was that a particular team's pipeline had a missing cleanup step that was leaving agents running. I fixed the immediate issue, added resource quotas per team to prevent one team from starving others, added alerting on agent queue depth, and wrote a runbook. The systemic fix was adding idle timeout enforcement to all agent pods.

After incidents I do a blameless postmortem — what broke, why it wasn't caught earlier, what monitoring would have caught it sooner, and what structural changes prevent recurrence.

---

**Q: How do you ensure safe deployments at scale?**

Safe deployments require progressive exposure, fast rollback, and clear signals for when to proceed or abort.

At Bajaj Finserv Health I implemented canary deployments for critical services using ArgoCD Rollouts. We'd route 5% of traffic to the new version, monitor error rates and latency for a defined window, then either auto-promote or auto-rollback based on metric thresholds from Prometheus. This caught several issues before they reached full rollout.

I also implemented deployment gates — automated checks that ran post-deployment and blocked promotion if health checks failed, if error rate spiked above baseline, or if specific smoke tests failed. These gates ran in the pipeline as blocking steps.

For rollback, I made it a one-step operation: a Git revert triggered ArgoCD to reapply the previous state. We tested rollback regularly so it wasn't a theoretical capability — engineers had confidence it actually worked.

For database migrations, I enforced backward-compatible migration patterns — additive only on forward migration, no column drops or renames until the code consuming the old schema was fully retired.

---

## Section 3: Backend Engineering

---

**Q: Describe a production service you built end-to-end.**

At Bajaj Finserv Health I designed and built DoctorsAuth, an OAuth-inspired authentication and authorization microservice for a multi-tenant doctor platform.

The context was a complex multi-tenant system where a single clinic had doctors, receptionists, assistants, and supplier-linked users all sharing resources. I needed to handle low-latency authentication, multi-device session management, instant revocation, and fine-grained authorization.

I implemented a dual-token model — short-lived access tokens and longer-lived refresh tokens with separate signing keys. JWT payloads carried rich authorization claims including role, permissions, facility and clinic mappings, subscription plans, and feature entitlements, so downstream microservices could authorize locally without calling the auth service on every request. This was critical for latency.

For revocation I used a hybrid stateless-stateful approach — JWTs for fast verification, MongoDB-backed session tracking for revocation and concurrent session control. Force logout was implemented via a forceLoggedoutAt timestamp: if this timestamp was newer than the token's issued-at time, the refresh was rejected.

In production the service handled tens of thousands of concurrent sessions with JWT validation averaging 2ms and refresh requests at sub-50ms P95. I handled edge cases including token replay attacks, refresh storms via distributed locking, cross-platform session isolation, and stale authorization on permission changes.

---

**Q: How do you debug a slow or broken pipeline?**

I approach pipeline debugging the same way I approach application debugging — structured, not intuitive.

First I reproduce the issue reliably. Intermittent pipeline failures are often the hardest to debug. I look at failure patterns: does it fail on specific branches, specific agents, at specific times of day, for specific test files?

Then I instrument. If the pipeline doesn't have stage-level timing, I add it. Often the slow part is obvious once you measure — I've seen pipelines where 40% of runtime was npm install because caching wasn't configured.

For broken pipelines I look at what changed — recent configuration commits, dependency updates, infrastructure changes. I use git bisect logic even on pipeline configs.

A specific example: at Birdeye we had a pipeline that started failing intermittently on Docker builds. Logs showed "no space left on device." The agent pods weren't cleaning up Docker layers between builds. Fix was adding docker system prune to the pipeline cleanup step and configuring Docker's overlay2 storage driver with a size limit. But the real fix was monitoring disk usage on agent pods and alerting before it became a failure.

---

**Q: Tell me about a complex production bug you debugged.**

At Bajaj Finserv Health I debugged a distributed payment bug where ~0.3% of transactions resulted in patients being charged but doctors not receiving payouts.

The system flow was: Patient Payment → Razorpay → Payment Service → Doctor Payment Service → Kafka → Payout Service → Salesforce → Settlement Ledger.

I used correlation IDs (paymentId, invoiceId, traceId) propagated across all services and reconstructed full request lifecycles in Elasticsearch + Kibana for affected transactions. I found that Razorpay webhooks were received and acknowledged, PAYMENT_CAPTURED events existed in Kafka, but there were no corresponding payout creation logs.

The root cause was subtle: Kafka offset commits were happening before the database transaction for payout creation completed. Under high throughput combined with Kubernetes pod autoscaling and rebalancing, a pod restart between offset commit and DB transaction completion caused the event to be permanently lost — Kafka thought it was processed, but the DB transaction had rolled back.

This only triggered under very specific conditions: high throughput, autoscaling event, and sufficient Salesforce API latency to create the timing window. I confirmed it by correlating pod restart timestamps from Kubernetes events with Kafka rebalance timestamps and DB rollback logs, then reproduced it in staging with artificial latency injection.

The fix was multi-layered: Kafka offsets committed only after successful DB commit, idempotent payout creation with deterministic IDs and DB uniqueness constraints, and the outbox pattern — events persisted atomically in an outbox table and published asynchronously by a relay worker. I also added graceful shutdown hooks so pods drained consumers before rebalancing.

After the fix, payout inconsistencies dropped to zero and deployment-related payout incidents were eliminated.

---

## Section 4: AI in Engineering Workflow

---

**Q: How do you use AI tools in your engineering workflow?**

I use AI tools actively but critically — I think the engineering discipline is knowing where AI adds leverage and where it introduces risk.

In my day-to-day at Birdeye I've used LLMs for several things: generating boilerplate for repetitive patterns (NestJS modules, Kafka consumer scaffolding), writing first drafts of unit tests that I then review and adjust, exploring unfamiliar APIs or libraries faster than reading documentation sequentially, and generating regex or complex query structures that I validate before using.

More substantively, I've built AI into production systems. I built an adaptive crawling strategy using LangChain and OpenAI agents that decide in real-time whether to use HTML scraping, REST APIs, or GraphQL extraction based on the target site's structure. I also built a self-healing scraper that uses LLM-assisted selector repair — when DOM structure changes break a crawler, the system analyzes the new DOM and proposes replacement selectors with confidence scores, flagging low-confidence ones for human review rather than auto-applying them.

Where I'm careful: AI-generated infrastructure config, security-sensitive code, and anything where hallucination has a production blast radius. I don't use AI to generate Terraform or Kubernetes manifests without thorough review. I validate AI-generated SQL queries and API logic against actual behavior, not just the generated text. The accountability for what ships is mine, not the model's.

---

**Q: Where do you think AI adds value in CI/CD and release engineering?**

A few areas where I think the value is real and near-term:

Test generation — AI can generate test cases for edge conditions that engineers miss, especially for input validation and boundary conditions. The tests still need review, but the coverage surface improves.

Pipeline diagnostics — LLMs are good at parsing log output and suggesting likely causes. I could see a pipeline assistant that takes a failed build log and surfaces the most likely root cause with relevant documentation links. Not a replacement for engineering judgment, but a useful accelerator for the common cases.

Code review on pipeline configs — Jenkinsfiles and GitHub Actions workflows have common anti-patterns that an AI reviewer could catch: missing cache keys, inefficient stage ordering, missing error handling on cleanup steps.

Where I'm more cautious: auto-remediating pipeline failures or auto-merging dependency updates without human review. The blast radius of a wrong decision in release infrastructure is high — you can affect every engineer on the platform simultaneously.

---

## Section 5: Ownership & System Design

---

**Q: Tell me about a loosely defined problem you drove to production.**

At Birdeye, I was given a vague problem: "Our crawlers break too often when websites change, and engineering spends too much time fixing them manually." No spec, no timeline, no defined solution.

I started by quantifying the problem — how often were crawlers breaking, what was the pattern of failures, how much engineering time was being spent on each incident. This gave me data to justify the investment and define success criteria upfront.

I designed a self-healing agent that triggered on extraction failures. My first design was purely AI-generated selector replacement — the LLM would analyze the new DOM and output replacement selectors directly. I built this, shipped it to staging, and found it was unreliable — LLMs hallucinated stable-looking selectors that were actually dynamic class names, and the outputs were inconsistent across runs on the same input.

I iterated to a hybrid architecture: deterministic DOM heuristics ran first (structural similarity matching, semantic attribute scoring), AI-assisted extraction was used as a reasoning layer for ambiguous cases, and confidence scoring gated auto-application. Low-confidence outputs were flagged for human review rather than auto-applied. This hybrid approach was significantly more reliable than either approach alone.

I wrote the design doc, got buy-in, built it, rolled it out incrementally (starting with the least critical crawlers), defined monitoring for selector update frequency and failure rate, and measured the outcome. Operational noise from crawler breakages dropped significantly and engineering time spent on manual selector fixes decreased substantially.

---

**Q: How do you approach writing a design document?**

A design doc should resolve ambiguity and build alignment before significant engineering time is committed. I keep them structured but not ceremonial.

I start with the problem statement — what's broken or missing, and what the impact is. I quantify this where possible because it anchors the scope of the solution. Then I describe constraints: performance requirements, compatibility requirements, things we can't change.

For the design itself I present 2-3 options with tradeoffs, not just the chosen solution. This matters because reviewers often have context I don't — they'll push back on a tradeoff I underweighted, and that's the value of the review. I call out explicitly what I'm uncertain about so reviewers know where to focus.

I include rollout plan, success metrics, and monitoring approach. A design doc without these leaves too much ambiguity for the implementation phase.

I've written design docs for the GitOps migration at Bajaj, the self-healing crawler at Birdeye, and the payment orchestration architecture. In each case the doc caught at least one significant issue before implementation — a missing failure mode, an operational complexity I'd underestimated, or a stakeholder concern that changed the scope.

---

**Q: How do you think in systems rather than components?**

When I'm designing something I try to enumerate who depends on this system and what assumptions they're making about it — not just the immediate caller, but the second and third-order consumers. I ask what happens when this system degrades, not just when it fails completely. Partial failures are usually harder to handle than total failures.

For the GitOps migration, the immediate users were engineers deploying services. But the second-order users were on-call engineers during incidents who needed to understand cluster state quickly. And the third-order user was the platform itself — the system needed to be maintainable over time by people who weren't me. Each of these shaped design decisions: ArgoCD dashboards for incident responders, standardized Helm templates for maintainability, runbooks for on-call.

I also think about the failure modes I'm introducing, not just eliminating. Introducing ArgoCD meant introducing a new system that could fail or drift. I had to design monitoring for ArgoCD itself and document what to do if ArgoCD was the thing that was broken.

---

## Section 6: Behavioral

---

**Q: Tell me about a time you improved something beyond your immediate scope.**

At Bajaj Finserv Health I was asked to optimize the build pipeline for one team's service. When I instrumented it I found that the same inefficiencies — no caching, sequential stages, bloated Docker images — appeared in almost every team's pipeline. The specific task was one service, but the systemic problem was org-wide.

I finished the immediate task first, then documented the patterns I'd found, proposed an org-wide initiative, and got alignment from the engineering lead. I rolled the optimizations out across teams systematically, published the findings as an internal reference guide that became org-wide standards, and posted it on Medium for external visibility.

The multiplier effect was significant — the same work that would have benefited one service instead reduced build times across every team that adopted the patterns.

---

**Q: How do you work effectively in an async-first environment?**

I think async-first is actually a better fit for engineering work than synchronous-heavy environments — it forces precision in written communication and reduces the coordination overhead of scheduling.

My practices: I write clearly documented design proposals and decisions so people can review and respond on their own schedule. I use structured status updates — not "working on X" but "X is done, Y is blocked on Z, expected completion for Y is Thursday." I prefer written RFCs over synchronous design meetings for complex decisions because written format gives everyone time to think before responding.

When I need input I ask specific questions with context rather than open-ended "can we chat?" requests. When I'm blocked I state the block clearly, what I've tried, and what I need — not just that I'm stuck.

At Birdeye I collaborate with team members across different sub-timezones and have developed the habit of front-loading context in written communication so the other person can move forward without a back-and-forth round trip.

---

**Q: How do you raise the bar through code review?**

Code review is one of the highest-leverage activities on a team. I try to review the design, not just the syntax.

For junior engineers I focus on: does this handle edge cases, what happens at scale, are there missing failure modes, is the abstraction at the right level. I explain the why, not just flag the what, so the feedback builds a mental model rather than just fixing the specific line.

For experienced engineers I look for second-order effects — does this API contract create brittleness downstream, are we introducing a new failure mode, does the monitoring cover this new code path.

I also use code review to share patterns — if I see something done well I'll comment on that too, not just on problems. And I'll flag improvements I don't require — "this works, but here's a simpler approach for next time" — rather than blocking merges on non-critical issues.

I conduct code reviews as part of regular work at Birdeye and have mentored junior engineers on the team.

---

## Questions to Ask Ezra

- What does the day-to-day feedback loop look like between the Release Engineering team and the product engineering teams that depend on the CI/CD systems?
- How mature is the current CI/CD infrastructure at Zapier, and what are the biggest pain points you're trying to solve with this hire?
- How does the India-based Release Engineering team operate relative to the US-based SRE team — where is the handoff boundary?
- What does success look like in the first 90 days for this role?
- How does Zapier measure the health of its delivery systems — what are the KPIs the team owns?

---

*Prep notes: Lead every answer with the outcome, then explain the approach. Be specific with numbers. Speak to ownership — design, build, deploy, monitor. The L4 signal is in demonstrating you defined the problem, not just solved a defined one.*
