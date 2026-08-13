# Tasks: Landing — especialidades e páginas de conversão

Referência: [`plan.md`](./plan.md) · [`spec.md`](./spec.md)

**Gate:** Tasks prontas. Prompt de execução: [`agent-prompt.md`](./agent-prompt.md). Implementar só via esse prompt (chat novo, Agent mode), task a task.

Ordem = dependência. Cada task: TDD quando houver comportamento; ≤5 arquivos; fatia deixa o app buildável.

Convenções:
- Copy clínico conservador; depoimentos sem sobrenome + `// REVIEW`.
- Não tocar `app/masterclass/actions.ts`, Prisma, pixels.
- FAQ = `<details>` / `<summary>` (sem Accordion shadcn).
- Não apagar `public/images/highlights/pediatria-reel.mp4`.

---

## Fase 1 — Contrato de conteúdo

- [x] Task 1.1: Catálogo das 12 especialidades + teste
  - Acceptance: `content/specialties.ts` exporta as 12 na ordem da spec; só Implantes / Clareamento / Harmonização têm `href` (`/implantes`, `/clareamento`, `/harmonizacao-facial`); todas têm `whatsappMessage` e `blurb`; destaques têm `image`/`video` reusando assets atuais; nenhum item Pediatria
  - Verify: `npm test -- content/specialties` — length 12, labels na ordem, hrefs corretos, `/pediatria/i` ausente
  - Files: `content/specialties.ts`, `content/specialties.test.ts`

- [x] Task 1.2: Nav enxuta em `site.ts`
  - Acceptance: `siteConfig.nav` = Especialidades `/#servicos`, Resultados `/#resultados`, Clínica `/#sobre`, Agendamento `/#agendamento`, Masterclass `/masterclass`. `highlights` e `gallery` ainda podem existir (migração depois)
  - Verify: `npm test -- content/site` — nav exatamente esses 5 itens
  - Files: `content/site.ts`, `content/site.test.ts`

- [x] Task 1.3: Extrair galeria com tag de tratamento
  - Acceptance: `content/gallery.ts` com os itens atuais de `siteConfig.gallery` + `treatment?: "implantes" | "harmonizacao" | "clareamento"`; `reabilitacao-oral` → implantes; fotos/reels de botox → harmonizacao; sem helper de filtro ainda. `site.ts` ainda exporta `gallery` (duplicado temporário)
  - Verify: `npm test -- content/gallery` (smoke: length ≥ itens atuais; pelo menos 1 tag implantes e 1 harmonizacao)
  - Files: `content/gallery.ts`, `content/gallery.test.ts`

- [x] Task 1.4: Depoimentos, FAQ e clínica
  - Acceptance: `testimonials.ts` com 2–3 rascunhos em 1ª pessoa, sem sobrenome, comentário `// REVIEW`; `faq.ts` com as 6 perguntas da spec + `harmonizacaoFaq` (3–5); `clinic.ts` com `team: [Dra. Jady]` e copy de estrutura apontando logo + hero atuais
  - Verify: `npm test` — arquivos existem e exportam arrays não vazios; FAQ home length 6
  - Files: `content/testimonials.ts`, `content/faq.ts`, `content/clinic.ts`

- [x] Task 1.5: Content das 3 páginas de tratamento
  - Acceptance: `implantes.ts` com blocos (para quem / como funciona / medo da cirurgia / pagamento **“Até 15x sem juros”** / whatsappMessage); `harmonizacao.ts` com Botox, preenchimento labial, bioestimuladores; `clareamento.ts` com claim **3 tons**, `promo: { priceLabel: "R$ 1.200" }` (não null), tipos / duração / quem pode (rascunho)
  - Verify: `npm test -- content/treatments` — implantes contém `15x`; clareamento contém `3 tons` e `1.200`; harmonizacao menciona as 3 ofertas
  - Files: `content/treatments/implantes.ts`, `content/treatments/harmonizacao.ts`, `content/treatments/clareamento.ts`, `content/treatments/treatments.test.ts`

- [x] Task 1.6: Content de marketing da Masterclass
  - Acceptance: `content/masterclass.ts` com `learn`, `forWhom`, `teacher` (Dra. Jady via dados já conhecidos), `differentials`, `certificate` — rascunhos. Não altera o form
  - Verify: `npm test -- content/masterclass` — exports das 5 seções presentes
  - Files: `content/masterclass.ts`, `content/masterclass.test.ts`

---

## Fase 2 — WhatsApp + Header

- [x] Task 2.1: `WhatsAppButton` aceita `message`
  - Acceptance: prop opcional `message?: string` é passada a `getWhatsAppUrl(message)`; sem `message`, comportamento atual; FAB inalterado (mensagem default)
  - Verify: `npm test -- whatsapp-button` — href contém texto encodado quando `message` é passada
  - Files: `components/ui/whatsapp-button.tsx`, `components/ui/whatsapp-button.test.tsx`

- [x] Task 2.2: Header usa `next/link`
  - Acceptance: desktop + sheet usam `Link` com `href` de `siteConfig.nav` (já `/#…` e `/masterclass`); sheet continua fechando no click
  - Verify: `npm run test:e2e -- e2e/nav-masterclass.spec.ts` GREEN; typecheck
  - Files: `components/layout/header.tsx`

---

## Fase 3 — Home: catálogo + teaser

- [x] Task 3.1: E2E RED — 12 especialidades, links, sem Pediatria, teaser
  - Acceptance: `e2e/home.spec.ts` (além do teste atual) afirma: as 12 labels visíveis; links `/implantes`, `/harmonizacao-facial`, `/clareamento`; link/texto “Conhecer a Masterclass” ou equivalente; `/pediatria/i` não visível. **RED** até 3.2
  - Verify: `npm run test:e2e -- e2e/home.spec.ts` → RED nas novas asserts
  - Files: `e2e/home.spec.ts`

- [x] Task 3.2: Reescrever Services + teaser Masterclass
  - Acceptance: `Services` lê `specialties.ts` — 3 destaques com mídia + 9 compactos (ícone + blurb + WhatsApp com `message`); teaser único após o catálogo, CTA → `/masterclass`; Pediatria some da UI; mp4 não é apagado
  - Verify: `npm run test:e2e -- e2e/home.spec.ts` → GREEN
  - Files: `components/sections/services.tsx`, `components/sections/masterclass-teaser.tsx`

- [x] Task 3.3: Remover `highlights` de `site.ts`
  - Acceptance: `siteConfig.highlights` removido; nenhum import restante
  - Verify: `npm test`; grep `highlights` só em docs/specs se houver
  - Files: `content/site.ts`, `components/sections/services.tsx` (só se ainda referenciar)

---

## Fase 4 — Home: prova social, equipe, estrutura, FAQ, scheduling

- [x] Task 4.1: Seção Depoimentos na home
  - Acceptance: `Testimonials` renderiza `content/testimonials.ts`; `id="depoimentos"`; montado em `app/page.tsx` **depois** de Gallery e **antes** de Team/About
  - Verify: E2E home vê pelo menos um quote/heading de depoimentos; `npm test`
  - Files: `components/sections/testimonials.tsx`, `app/page.tsx`, `e2e/home.spec.ts`

- [x] Task 4.2: Equipe (Jady) + About = estrutura
  - Acceptance: `Team` com só Dra. Jady (`id="equipe"`); About (`#sobre`) recentrado em estrutura usando logo + hero; sem biografia longa duplicada nos dois
  - Verify: E2E ou inspeção: heading de equipe + “estrutura”/clínica; `npm test`
  - Files: `components/sections/team.tsx`, `components/sections/about.tsx`, `app/page.tsx`

- [x] Task 4.3: FAQ da home em `<details>`
  - Acceptance: seção `#faq` com as 6 perguntas; `<details>` fechado por padrão; sem Accordion shadcn
  - Verify: E2E home vê uma pergunta do conjunto padrão (ex. horário ou convênio); `npm test`
  - Files: `components/sections/faq.tsx`, `app/page.tsx`, `e2e/home.spec.ts`

- [x] Task 4.4: Scheduling WhatsApp-first
  - Acceptance: bloco principal = WhatsApp; agenda.link permanece como alternativa (passos atuais ok); FAB genérico intacto; **não** criar terceira seção de agendamento
  - Verify: inspeção + E2E home ainda tem caminho de agendar; `npm test`
  - Files: `components/sections/scheduling.tsx`

- [x] Task 4.5: Footer com âncoras extras
  - Acceptance: footer pode linkar Equipe `/#equipe` e FAQ `/#faq` além do que já tem; Localização permanece no footer; header **não** ganha esses itens
  - Verify: `npm run test:e2e -- e2e/nav-masterclass.spec.ts` ainda GREEN (nav header inalterada em quantidade)
  - Files: `components/layout/footer.tsx`

---

## Fase 5 — Shell de tratamento + Gallery filtrável

- [x] Task 5.1: Gallery aceita `items` + helper de filtro
  - Acceptance: `Gallery({ items })` default = galeria completa; `galleryByTreatment(tag)` em `content/gallery.ts`; home continua passando default (ou explícito all)
  - Verify: `npm test -- content/gallery` — filtro implantes não devolve item só de harmonizacao
  - Files: `content/gallery.ts`, `content/gallery.test.ts`, `components/sections/gallery.tsx`

- [x] Task 5.2: Remover `gallery` de `site.ts`
  - Acceptance: `siteConfig.gallery` removido; Gallery/home usam só `content/gallery.ts`
  - Verify: `npm test`; grep `siteConfig.gallery` vazio
  - Files: `content/site.ts`, `components/sections/gallery.tsx`, `app/page.tsx`

- [x] Task 5.3: Shell + hero de tratamento (sem rota ainda)
  - Acceptance: `TreatmentPage` = Header + `<main>` + Footer + FAB WhatsApp (`message` opcional); `TreatmentHero` = título, subtítulo, CTA WhatsApp. Masterclass **não** importa estes
  - Verify: typecheck; smoke test opcional do hero com RTL
  - Files: `components/treatments/treatment-page.tsx`, `components/treatments/treatment-hero.tsx`

---

## Fase 6 — `/implantes`

- [x] Task 6.1: E2E RED — página implantes
  - Acceptance: `e2e/specialty-pages.spec.ts` describe `/implantes`: heading Implantes; “Para quem”; “Como funciona”; medo/cirurgia; `15x`; WhatsApp; **não** “Venha nos visitar”. **RED**
  - Verify: `npm run test:e2e -- e2e/specialty-pages.spec.ts` → RED
  - Files: `e2e/specialty-pages.spec.ts`

- [x] Task 6.2: Implementar `/implantes`
  - Acceptance: page usa shell + content `implantes.ts` + gallery filtrada + `Testimonials` (mesmo array) + pagamento 15x + CTAs; sem catálogo das 12, equipe, estrutura, mapa, teaser Masterclass, form
  - Verify: `npm run test:e2e -- e2e/specialty-pages.spec.ts` → GREEN no describe implantes
  - Files: `app/implantes/page.tsx`, `components/treatments/treatment-sections.tsx` (blocos genéricos título+texto, se precisar)

---

## Fase 7 — `/harmonizacao-facial`

- [x] Task 7.1: E2E RED — harmonização
  - Acceptance: mesmo spec: heading; Botox; Preenchimento; Bioestimuladores; FAQ específico visível. **RED**
  - Verify: `npm run test:e2e -- e2e/specialty-pages.spec.ts` → RED no describe novo
  - Files: `e2e/specialty-pages.spec.ts`

- [x] Task 7.2: Implementar `/harmonizacao-facial`
  - Acceptance: shell + `harmonizacao.ts` + gallery `harmonizacao` + FAQ `harmonizacaoFaq` (details) + Testimonials + CTA avaliação WhatsApp; sem FAQ “convênio” da home
  - Verify: describe harmonização GREEN
  - Files: `app/harmonizacao-facial/page.tsx`, `components/sections/faq.tsx` (permitir `items` por prop para reuso)

---

## Fase 8 — `/clareamento`

- [x] Task 8.1: E2E RED — clareamento
  - Acceptance: claim **3 tons**; promoção **R$ 1.200** (ou `1.200`); CTA agendar. **RED**
  - Verify: `npm run test:e2e -- e2e/specialty-pages.spec.ts` → RED no describe novo
  - Files: `e2e/specialty-pages.spec.ts`

- [x] Task 8.2: Implementar `/clareamento`
  - Acceptance: shell + `clareamento.ts`; bloco promo **só** se `promo !== null`; gallery filtrada; Testimonials; CTA WhatsApp
  - Verify: describe clareamento GREEN
  - Files: `app/clareamento/page.tsx`

---

## Fase 9 — Masterclass limpa

- [x] Task 9.1: E2E RED — Voltar + seções + sem nav da clínica
  - Acceptance: `e2e/masterclass.spec.ts` além do form: link “Voltar à clínica” (ou “Voltar”) `href="/"`; textos das seções (aprender / para quem / professora / certificado); `getByRole("link", { name: "Especialidades" })` **não** visível. Form labels permanecem. **RED** nas asserts novas
  - Verify: `npm run test:e2e -- e2e/masterclass.spec.ts`
  - Files: `e2e/masterclass.spec.ts`

- [x] Task 9.2: BackLink + marketing acima do form
  - Acceptance: `BackLink` visível, touch ≥44px, aponta `/`; Logo permanece; seções de `content/masterclass.ts` acima do `InterestForm`; **sem** Header/Footer; `actions.ts` intocado
  - Verify: `npm run test:e2e -- e2e/masterclass.spec.ts e2e/obrigado.spec.ts` GREEN
  - Files: `components/layout/back-link.tsx`, `app/masterclass/page.tsx`

---

## Fase 10 — Hardening

- [x] Task 10.1: E2E anti-duplicação nas 3 páginas
  - Acceptance: para `/implantes`, `/harmonizacao-facial`, `/clareamento`: **não** renderizam iframe de mapa; **não** mostram teaser “Conhecer a Masterclass”; **não** listam as 12 especialidades (ex. “Bucomaxilofacial” + “Periodontia” juntos); depoimentos **podem** aparecer
  - Verify: `npm run test:e2e -- e2e/specialty-pages.spec.ts` GREEN
  - Files: `e2e/specialty-pages.spec.ts`

- [x] Task 10.2: Metadata / keywords do layout
  - Acceptance: keywords refletem o catálogo atual; **remover** `pediatria` do array de keywords; descrição da clínica continua válida
  - Verify: inspeção de `app/layout.tsx`; `npm run build` depois
  - Files: `app/layout.tsx`

- [ ] Task 10.3: Verificação final da spec
  - Acceptance: design-contract intacto; Success Criteria da spec cobertos; sem classes `brand-*` novas
  - Verify: `npm test && npm run test:e2e && npm run lint && npm run build`
  - Files: só fixes pontuais se algum comando falhar (não expandir escopo)

---

## Fora desta lista

- CMS, páginas das outras 9 especialidades, Pediatria, Prisma/leads, EasyPanel, dark mode, Accordion shadcn, Header na Masterclass.

---

## Pedido de revisão

Tasks certas se você concorda que:

1. Content entra em 6 fatias (1.1–1.6) antes de qualquer UI nova.
2. Cada página de tratamento = E2E RED → implement GREEN.
3. FAQ reutiliza o mesmo `Faq` com `items` na harmonização (7.2).
4. Cleanup de `highlights`/`gallery` em `site.ts` é explícito (3.3 e 5.2).

Prompt de handoff em [`agent-prompt.md`](./agent-prompt.md). Colar num chat novo em Agent mode para executar 1.1 → 10.3.
