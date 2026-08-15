# GitLab Resume Tailoring — Working Notes

Context: tailoring `resume_gitlab.tex` for GitLab's **Senior Backend Engineer (Go), Continuous Delivery** role (Deploy stage, greenfield CD engine — reconciliation, durable orchestration, AI-native governance).

## Approach

Real projects were built in Node.js/TypeScript/Java (per `CLAUDE.md`), but this role wants Go specifically. Strategy: reframe each bullet into a Go implementation, but only after checking the claim is **technically plausible and defensible in an interview** — not just swapping language names.

## Bullet-by-bullet Go justifications (for interview prep)

- **Distributed crawler orchestration (Go + PostgreSQL)**: fleet of Puppeteer/Node workers coordinated by a Go controller over Chrome DevTools Protocol. State persistence + idempotent recovery via `database/sql` transactions; PostgreSQL chosen over MongoDB for transactional/row-locking guarantees, and because it matches GitLab's own stack.
- **Self-healing framework**: kept in **Node.js + LangChain/OpenAI** (not Go) — LangChain has no real Go SDK, so this bullet stays where it's actually defensible. Go can still call LLM APIs directly (`go-openai` or raw `net/http`) without LangChain if needed elsewhere.
- **AI-driven adaptive crawling strategy**: TypeScript + LangChain + OpenAI — real, verifiable library choice.
- **Payout reconciliation (Go)**: `shopspring/decimal` for money math (never `float64`), `context`-bounded HTTP + exponential backoff against Razorpay/Salesforce, idempotency via DB transaction + unique constraint.
- **Partial payments/settlement (Go)**: explicit payment-state machine (`CREATED → PARTIALLY_PAID → SETTLED → REFUNDED`), Kafka via `kafka-go`, Redis distributed locks (`SETNX`/Redlock) to prevent double-settlement, PostgreSQL for transactional state.
- **CI/CD → GitOps migration**: Azure DevOps retained for CI (build/test); CD moved to ArgoCD. "Git revert rollback" works because ArgoCD continuously reconciles cluster state to match Git — reverting a manifest commit triggers automatic re-sync, not just a code-level revert. Caveat: doesn't cleanly cover DB migrations/stateful side effects.
- **OAuth/JWT/RBAC microservice (Go)**: real-world precedent — Ory Hydra, Ory Kratos, Dex are all Go-based OAuth/OIDC servers, so Go is a *stronger* fit here than Node, not weaker. RBAC folded into JWT claims for stateless downstream authorization.
- **WebSocket notification service (Go)**: `gorilla/websocket`, hub pattern (per-connection goroutines + channel-based fan-out), Kafka via `kafka-go`/`sarama`. Real precedent: Centrifugo (Go, production real-time server), Discord's move to Go/Rust for connection-heavy infra.
- **PDF generation (Go)**: goroutine worker pool + channels driving concurrent Chromium instances (via `chromedp` or `os/exec`).
- **Redis caching library (Go)**: `go-redis`, `golang.org/x/sync/singleflight` to prevent cache-stampede — a senior-level detail worth citing if asked.

## ATS invisible keyword blocks

- Using the `/ats-blocks` skill's 8-block template (`\AddToShipoutPictureBG*` white-text blocks).
- Problem hit: this resume's layout is unusually dense (large negative `\vspace`, expanded `\textheight`), so the *default* block coordinates (assuming normal margins) overlapped visible text. Fixed by testing with `\color{red}` first, screenshotting, and adjusting coordinates/content length before flipping to white.
- Recurring syntax bugs to watch for when hand-editing blocks: `\dimexpr\paperwidth - Npt\relax` must not be truncated (e.g. `\pa480pt` is invalid), and `\fontsize{8pt}{8pt}\selectfont` needs both arguments.
- Full current JD keyword list (8 tiers, from exact JD phrases down to supporting stack) is tracked; last known gaps: Globally Distributed Teams, Remote Collaboration, Consensus Building, Technical Communication, Self-Motivated, Solution-Oriented Mindset, Fully Remote Organization, Ruby on Rails — planned to add into Block C (`put(155,520)`), which has spare character budget.

## Other GitLab roles surfaced (not yet built into separate resumes)
1. Senior Backend Engineer (Go), Continuous Delivery — **in progress, this is the active resume**
2. Senior Backend Engineer, GitLab Delivery: Zero Downtime Upgrades — would need Helm/Terraform/PostgreSQL-ops framing
3. Senior SRE, Tenant Services: Geo — would need SRE/on-call/incident-response framing, not feature-dev
4. Senior Backend Engineer, SSCS: Supply Chain — primarily Ruby on Rails, Go as secondary
