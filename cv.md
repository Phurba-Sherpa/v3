Phurba Sherpa  
Full-Stack Engineer — AI Integration  
Kathmandu, Nepal  
phurba1404@gmail.com  
GitHub: [github.com/phurba-sherpa](http://github.com/phurba-sherpa) | LinkedIn: [linkedin.com/in/phurbas](http://linkedin.com/in/phurbas) | Portfolio: [phurbasherpa.name.np](https://www.phurbasherpa.name.np)

---

## Professional Summary

Full-Stack Engineer with 4+ years of experience building production-grade systems across fintech, media intelligence, and AI products. Currently at Techkraft Inc owning technical delivery across the full stack — backend, frontend, and DevOps — across two products (Loadrunner and Agent as a Service). Key results: conversational analytics system that cut LLM prompt size from 300 KB to 4 KB and response time from 80s to under 20s; RAG knowledge base on pgvector; report generation pipeline on an OSS autonomous agent; custom MCP server for survey form generation. Led engineering teams, enforced coding standards, and designed CI/CD pipelines (GitHub Actions, Docker, SSH) adopted company-wide. Open source: [ollama-pr-review-gh-action](https://github.com/Phurba-Sherpa/ollama-pr-review-gh-action)

---

## Technical Skills

**AI / LLM**: LangChain, Vercel AI SDK, Prompt Engineering, RAG Pipelines, Agentic Workflows, Tool Calling, MCP (client + server), LLM Observability (LangSmith, Langfuse, Portkey), OpenRouter, Ollama  
**Vector & Data**: pgvector, Supabase, Pinecone-compatible patterns, embedding pipelines  
**Backend**: NestJS, Node.js, FastAPI, Python, Go (Gin), REST APIs, GraphQL, better-auth  
**Frontend**: React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Material UI, Storybook, Accessibility (ARIA, WCAG), Responsive Design  
**State & Data**: React Query, Redux, Web Workers  
**Testing & Quality**: Jest, React Testing Library, Cypress, Pytest  
**CI/CD & DevOps**: GitHub Actions, Docker (multi-stage builds, Compose, networking, named volumes), GHCR, SSH deployment, Bun  
**Databases**: PostgreSQL, MySQL, Oracle, Liquibase, SQLC  
**Environment**: Linux (Ubuntu), Neovim, Tmux, i3, Ghostty, GitHub CLI, Bash scripting

---

## Professional Experience

Techkraft Inc, Kathmandu, Nepal — Full-Stack Engineer  
Aug 2026 – Present

• Owned end-to-end technical delivery across two production products (Loadrunner and Agent as a Service), architecting backend services, database schemas, frontend applications, and DevOps infrastructure.  
• Built and maintained backend services and REST APIs with NestJS and PostgreSQL; implemented authentication with better-auth.  
• Delivered React and TypeScript frontends for both products, owning component architecture, state management, and API contracts.  
• Managed all DevOps responsibilities: Docker containerization, CI/CD deployment pipelines, and environment configuration.

---

WOW Finstack, Singapore — Full-Stack + AI Integration Engineer  
Jan 2023 – Aug 2026

• Built a conversational analytics system for card transaction data (3 months of history) — natural language chat over fee leakage, merchant performance, decline patterns, and trend forecasting with chart visualizations. Solved a critical LLM performance problem: pre-aggregated raw transaction data into weekly statistical summaries (mean, median, std dev per bucket), reducing prompt size from 300 KB to 4 KB and response time from 70–80s to under 20s.  
• Built an internal RAG knowledge base: documents segmented per product at ingestion; at query time, retrieval scoped to the selected product subset for faster, more precise results. Stack: LangChain, Ollama, Supabase + pgvector, LangSmith.  
• Adopted custom open-source AI PR review tooling (ollama-pr-review-gh-action) company-wide to automate code reviews.  
• Modernized a legacy financial platform by rebuilding core modules (Debit, Credit, Card Management, iBank) in React and TypeScript; led engineers, conducted code reviews, enforced coding standards.  
• Designed and owned CI/CD pipelines end-to-end: GitHub Actions, Docker multi-stage builds, SSH deployment to production.

---

PeakMetrics, United States — Software Engineer (Contract)  
Mar 2025 – Oct 2025

• Extended Kortix Suna (open-source autonomous agent) with a structured PDF report generation feature — user queries like "report on the AWS outage impact" produce fully formatted PDF reports matching a provided template. Agent uses Tavily/Exa for research, runs in a Daytona sandbox, creates a step-by-step TODO plan, and executes each step to build the report.  
• Reduced report generation cost from ~$20/run to ~$3–4 and time from ~10 min to ~5 min by diagnosing the real bottleneck (Claude Opus model selection, not prompt quality) and switching to Kimi — after investigating Chain-of-Draft, DSPy, and prompt compression which showed no meaningful improvement; reduced agent tool calls from 10–15 (one per report page) to 1 by restructuring the prompt to generate a single HTML file with all sections.  
• Built a custom Node.js MCP server for Typeform survey generation after SurveyMonkey's Composio integration had an unresolved API bug — MCP abstracts Typeform's branching API, handles question structuring (MCQ, rating, etc.), and returns a shareable link on demand.  
• Built an LLM-powered workspace summary feature (GraphQL analytics data + metadata → structured prompt → LLM → natural language summary of media ecosystem segments) using Vercel AI SDK and Portkey (token tracking, cost observability).  
• Built an AI-powered report slide and PDF generation pipeline: per-template system prompts describe expected UI layout; analytics data + workspace summary → LLM → HTML slide rendered in an iframe; on export, all slides compiled to PDF via Urlbox with a developer-facing debugger panel.  
• Modernized a large legacy system using Next.js and TypeScript; maintained high code quality through component isolation and Storybook.

---

Kairos Wealth, Singapore — Software Engineer (Contract)  
Aug 2024 – Mar 2025

• Delivered 500+ production contributions in 5 months across complex production codebases.  
• Modernized legacy UI by breaking monolithic pages into isolated, reusable components with code splitting — improving load performance and long-term maintainability.  
• Optimized API request handling, eliminating unnecessary re-renders and reducing redundant network calls.

---

IT Village Technology, Pokhara, Nepal — Backend Developer  
Apr 2022 – Jan 2023

• Migrated critical financial systems from Oracle to PostgreSQL, improving database reliability and maintainability.  
• Implemented transaction-handling features for a card issuing engine supporting multiple transaction types, and debugged and stabilized existing backend modules in a high-availability financial system.  
• Developed REST APIs using Go and Gin for a Card Management System; implemented database migrations with Liquibase, optimized SQL workflows using SQLC, and containerized development environments with Docker.

---

## Projects

**ollama-pr-review-gh-action** — Open Source AI Developer Tool | [github.com/Phurba-Sherpa/ollama-pr-review-gh-action](https://github.com/Phurba-Sherpa/ollama-pr-review-gh-action)  
• Built an AI-powered GitHub Action for automated PR reviews using Ollama's free cloud models, enabling zero-API-cost code reviews.  
• Engineered project context injection: teams pass their specific coding guidelines to the LLM so it reviews against internal standards rather than generic rules.

---

## Education

Bachelor of Science in Computer Science and Information Technology — Soch College of IT, Pokhara, Nepal — 2023

---

## Certifications

AWS Future Agentic Engineer Nanodegree — AWS AI & ML Scholarship — 2026  
  • Amazon Bedrock & Amazon Nova models · prompting & reasoning patterns (CoT, ReAct) · RAG · single-agent systems with tools, memory & APIs · multi-agent orchestration with Amazon Bedrock Agents  
  • Portfolio projects: supply chain AI agent, multi-agent travel concierge system  
CS50x: Introduction to Computer Science — HarvardX — 2023  
Responsive Web Design Bootcamp — Coursera — 2023

