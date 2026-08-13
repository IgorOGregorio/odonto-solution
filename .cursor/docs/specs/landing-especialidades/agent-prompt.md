# Agent prompt: executar landing-especialidades

Copie o bloco abaixo e cole num agente em **Agent mode**, no repo `odonto-solution-forms`, com os skills `tdd` e `incremental-implementation` ativos (e `next-best-practices` se disponível).

Anexe também: `@.cursor/docs/specs/landing-especialidades/`

---

```
You are implementing an approved, gated SDD delivery. Spec, plan, and tasks are already approved. Do NOT rewrite the spec, do NOT invent new scope, do NOT start a new spec/plan/tasks cycle.

Follow skills: tdd (vertical RED→GREEN, never all tests then all code) and incremental-implementation (one task, verify, commit, next). This Next.js version may differ from your training data — check `node_modules/next/dist/docs/` before using unfamiliar APIs.

## Repo & branch

- Work ONLY in: `/Users/igorgregorio/Projects/odonto-solution-forms`
- Branch: `feat/landing-especialidades` (already exists, created from `main` — checkout and continue; do NOT recreate from main, do NOT branch again)
- Source of truth (read in this order before coding):
  1. `.cursor/docs/specs/landing-especialidades/tasks.md`  ← execute this
  2. `.cursor/docs/specs/landing-especialidades/plan.md`   ← how
  3. `.cursor/docs/specs/landing-especialidades/spec.md`   ← what / merge rules
- Per task: load only the files listed in that task + the matching spec section. Do not dump the entire spec into context every turn.

Execute unchecked tasks in order (1.1 → 10.3). Mark each task `[x]` in `tasks.md` when Verify passes. Commit that checkbox with the task commit.

## Goal

Evolve the already-unified clinic landing: full specialty catalog on `/`, new home sections (testimonials, team, structure, FAQ, WhatsApp-first scheduling) merged into existing sections without duplicates, plus conversion pages `/implantes`, `/harmonizacao-facial`, `/clareamento`, and a cleaner `/masterclass` (marketing + back link + existing waitlist form).

## Hard rules

ALWAYS:
- TDD vertical: one behavior → RED → GREEN → commit. Do not write all E2E tests up front.
- Commit after each completed task (or 1.x content pair if tightly coupled). HEREDOC messages; conventional commits (`feat:`, `test:`, `docs:`, `refactor:`).
- Respect each task's Files list; if you need >~5 files, split and say so — do not silently balloon the diff.
- Run the task's Verify command before marking `[x]`.
- Preserve `createLead`, Zod/Prisma lead fields, honeypot, attribution, `/obrigado`, Meta Pixel / Google Tag / ConversionEvents. Do not edit `app/masterclass/actions.ts`.
- Design system stays landing gold/shadcn: `primary`, `foreground`, `muted-foreground`, `font-display`, `text-label`. No `brand-terracotta` / `bg-page-atmosphere`.
- FAQ = native `<details>`/`<summary>` only. Do NOT `npx shadcn add accordion` or add npm deps.
- Pediatria stays OUT of the UI catalog. Do NOT delete `public/images/highlights/pediatria-reel.mp4`.
- Testimonials: 2–3 first-person drafts, no surnames, `// REVIEW` comment. Reuse the SAME array on home and the 3 treatment pages.
- Locked numbers: implants “Até 15x sem juros”; whitening “3 tons” + promo `R$ 1.200`.
- Team = Dra. Jady only. Clinic structure uses existing logo + hero images.
- `/masterclass` = clean page (no site Header/Footer) + visible Back link to `/` + marketing sections + existing InterestForm.
- Treatment pages use site Header/Footer + shared shell. They must NOT render: 12-specialty grid, team, clinic structure, map, home FAQ, Masterclass teaser, lead form.
- WhatsApp CTAs: extend `WhatsAppButton` with `message?: string` → `getWhatsAppUrl(message)`.
- Header nav uses `next/link`. Nav items: Especialidades `/#servicos`, Resultados `/#resultados`, Clínica `/#sobre`, Agendamento `/#agendamento`, Masterclass `/masterclass`.
- Copy in pt-BR, conservative clinical tone (no miracle claims, no invented payment terms beyond locked numbers).
- `prefers-reduced-motion`; touch targets ≥44px on CTAs / Back link.
- Next.js App Router: Server Components by default; `'use client'` only where needed.

ASK FIRST (stop and ask the human):
- Prisma schema / migrations
- Changing Masterclass form fields or lead rules
- Adding npm dependencies (including shadcn Accordion)
- Changing locked numbers (15x, 3 tons, R$ 1.200) or adding implant total price
- Adding team members besides Dra. Jady
- Putting Pediatria back in the catalog
- Creating pages for the other 9 specialties
- Adding Header/Footer to `/masterclass`
- CMS, dark mode, EasyPanel/DNS
- Force-push, amend others' commits, merge to main, or push (push only if the human asks)

NEVER:
- Commit `.env` or secrets
- Duplicate catalog / team / structure / map / home FAQ on treatment pages
- Put `InterestForm` on the home page
- Invent patient surnames or AI-generated “real case” photos
- Redesign the visual system or revert to cream/terracotta
- Skip git hooks / `--no-verify`
- Open a PR unless asked

## Execution loop

For each unchecked task in `tasks.md`:

1. Announce the task id and title.
2. If the task is a RED test: write/run the failing test first; show RED.
3. Implement the minimum to meet Acceptance (Files list).
4. Run Verify from the task.
5. Mark `[x]` in `tasks.md`.
6. Commit (include the tasks.md checkbox). Message focuses on why.
7. Next task.

If blocked (flaky E2E, missing asset, copy ethics doubt): leave a note, skip only that blocker, continue non-blocked tasks. Do not stall the whole train on a single E2E flake — fix or isolate, then continue.

## Key technical notes from the plan

- Content modules first (tasks 1.1–1.6) before new UI. Home may still use `siteConfig.highlights` / `gallery` until 3.3 / 5.2 remove them.
- `content/specialties.ts`: 12 items in briefing order; only 3 have `href`; all have `whatsappMessage` + `blurb`; featured 3 reuse current media (implantes.jpg/facetas-reel, botox.jpg/botox-reel, clareamento-reel).
- `content/gallery.ts`: tag `treatment?: "implantes" | "harmonizacao" | "clareamento"`; `reabilitacao-oral` → implantes; botox photos → harmonizacao. Helper `galleryByTreatment` lands in task 5.1.
- `content/faq.ts`: 6 home questions (hours, insurance, first visit, pain, parking/how to get here, how to book) + separate `harmonizacaoFaq`.
- `clareamento.promo` is `{ priceLabel: "R$ 1.200" }` now; render promo block only if `promo !== null`.
- Home section order: Hero → TrustBar → Services (catalog + one Masterclass teaser) → Gallery → Testimonials → Team → About (structure) → Faq → Scheduling (WhatsApp-first) → Location → Cta. Do not add a third scheduling band.
- Featured home cards: 3 media + 9 compact (Lucide + blurb + WhatsApp). Do not build 12 video cards.
- `TreatmentPage` shell: Header + main + Footer + WhatsApp FAB with treatment `message`. `TreatmentHero` for title/subtitle/CTA. Masterclass does not use this shell.
- Masterclass: `BackLink` (“Voltar à clínica”) + existing Logo + `content/masterclass.ts` sections + `InterestForm` at the bottom (`max-w-xl`). Keep `e2e/obrigado.spec.ts` green.
- E2E anti-duplication (10.1): treatment URLs must not show map iframe, “Conhecer a Masterclass”, or the pair Bucomaxilofacial+Periodontia. Testimonials on those pages are allowed.
- Task 10.2: remove `pediatria` from `app/layout.tsx` keywords.
- Alias `@/*` → repo root (no `src/`).
- Do not E2E-submit the lead form against a real DB.

## Done when

All tasks in `tasks.md` are `[x]`, Success Criteria in `spec.md` are met, and:

```bash
npm test
npm run test:e2e
npm run lint
npm run build
```

all pass.

Summarize: what landed, which Success Criteria are checked, leftover human ops (client copy review on `// REVIEW` testimonials, staging copy). Do NOT push or open a PR unless asked.

Start at Task 1.1 now.
```

---

## Como usar

1. Abra um **chat novo** em **Agent mode** no repo `odonto-solution-forms`.
2. Confirme que a branch é `feat/landing-especialidades`.
3. Cole o bloco acima.
4. Anexe `@.cursor/docs/specs/landing-especialidades/` (ou `@spec.md` `@plan.md` `@tasks.md`).
5. Deixe o agente correr 1.1 → 10.3; intervenha só em Ask first / E2E travado.

Não precisa dizer “tasks aprovadas” de novo neste chat novo — o prompt já trata spec/plan/tasks como aprovados.
