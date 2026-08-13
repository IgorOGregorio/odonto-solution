# Spec: Landing — especialidades, prova social e páginas de conversão

Referência de origem: briefing da cliente (especialidades + seções da home + páginas Implantes / Harmonização Facial / Clareamento / Masterclass).

Spec anterior (já entregue, não reabrir): [unify-landing-masterclass](../unify-landing-masterclass/spec.md).

**Gate:** SPECIFY ✅ → PLAN ✅ → TASKS prontas (2026-08-13) → IMPLEMENT via [`agent-prompt.md`](./agent-prompt.md).

**Branch:** `feat/landing-especialidades` criada a partir de `main` após aprovação desta spec. Plan em [`plan.md`](./plan.md).

---

## Assumptions (locked — revisão 2026-08-13)

1. **Escopo = evoluir a landing já unificada**, não redesenhar o design system (gold / Playfair + DM Sans / shadcn). Visual continua o da clínica.
2. **Arquitetura híbrida:** a home (`/`) é a vitrine da clínica. Os 3 tratamentos de maior valor e a Masterclass ganham **páginas próprias**. A home **não** replica o copy longo dessas páginas.
3. **“Não repetir seções”** é regra de produto: catálogo, equipe, estrutura, FAQ geral e mapa aparecem **só na home**. CTAs (WhatsApp / agendar) e o **mesmo recorte de depoimentos** (componente reutilizado) podem aparecer também nas páginas de tratamento — decisão explícita, não seção gêmea com copy diferente.
4. O bloco “Depois: Antes e depois / Depoimentos / Equipe / Estrutura / FAQ / Agendamento WhatsApp” descreve a **home**, depois das especialidades.
5. **Implantes = item 2** implícito do briefing (lista pula de especialidades para “3. Harmonização”).
6. **Item 5 (Masterclass)** é o único lugar com o funil completo. A home só **liga** para `/masterclass` (nav + teaser). Não copiar o formulário nem o currículo para a home.
7. **Pediatria fica fora** do catálogo e dos destaques. Reel permanece em `public/` (não apagar). Sem página `/pediatria`.
8. **Agendamento:** manter os dois canais (WhatsApp + agenda.link). Na home, a seção fica **WhatsApp-first**, online como secundário. Não criar uma terceira seção de agendamento.
9. **Copy:** rascunhos em `content/` vão para staging; a cliente revisa. Depoimentos autorizados existem — seção entra; textos ainda não colados neste chat entram como rascunho marcado para troca. Equipe = **somente Dra. Jady**. Estrutura usa **fotos atuais** (logo + hero).
10. **Sem CMS** neste ciclo. Conteúdo estático tipado. Promoção do mês = campo em `content/` (neste ciclo já preenchido).
11. **Sem alteração de Prisma / leads.** Só a página `/masterclass` ganha seções de marketing acima do form já existente.
12. Páginas de especialidade (`/implantes`, `/harmonizacao-facial`, `/clareamento`) usam o **mesmo Header/Footer** da home. `/obrigado` permanece fora desse chrome. `/masterclass` fica **página limpa** (sem Header/Footer do site), com **botão Voltar** para `/`.

---

## Objective

Evoluir a landing da Odonto Solution (Itajubá-MG) para refletir o que a cliente quer comunicar: catálogo completo de especialidades, prova social, equipe, estrutura, FAQ e agendamento via WhatsApp — **mesclado com o que já existe**, sem seções duplicadas.

Três tratamentos de maior valor (Implantes, Harmonização Facial, Clareamento) e a Masterclass viram páginas de conversão, para campanhas e para o visitante que aprofunda a partir da home.

**Usuários:**
- Paciente em potencial em Itajubá-MG (mobile-first) que chega em `/` buscando tratamento ou agendamento.
- Visitante de campanha (estética / clareamento / implantes) que cai numa página de tratamento e precisa de objeções respondidas + WhatsApp.
- Profissional interessado na Masterclass que chega em `/masterclass` (ads ou teaser da home).

**Por quê:** a home atual só destaca 4 serviços (Implantes, Botox, Pediatria, Clareamento), mistura “sobre” com equipe, e a Masterclass é só formulário. O briefing pede catálogo, prova social e funis específicos sem inflar a home com copy repetido.

---

## Inventário: o que já existe × o que o briefing pede

### Home atual (`app/page.tsx`)

| Ordem | Seção | id | Papel hoje |
|-------|--------|----|------------|
| 1 | Hero | — | Marca, Dra. Jady, CTAs agendar + WhatsApp + localização |
| 2 | TrustBar | — | Horário, responsável técnica, redes |
| 3 | Services | `#servicos` | 4 cards (`siteConfig.highlights`) com foto/reel |
| 4 | About | `#sobre` | “A clínica” + logo + foto hero + parágrafo da Dra. Jady |
| 5 | Gallery | `#resultados` | Masonry “Transformações reais” (antes/depois misturado) |
| 6 | Scheduling | `#agendamento` | Agendamento **online** (agenda.link), 3 passos |
| 7 | Location | `#localizacao` | Endereço + mapa |
| 8 | Cta | — | “Pronto para cuidar…” — online + WhatsApp |

Nav atual: Serviços, Clínica, Resultados, Agendamento, Localização, Masterclass.

### Merge (fonte da verdade — não duplicar)

| Pedido da cliente | Destino | O que fazer | O que **não** fazer |
|-------------------|---------|-------------|---------------------|
| 12 especialidades | Home `#servicos` | Substituir o grid de 4 highlights por catálogo das 12 + 3 destaques clicáveis (Implantes, Harmonização, Clareamento) | Não criar uma segunda lista de especialidades na home nem nas páginas filhas |
| Antes e depois | Home `#resultados` (Gallery existente) | Evoluir a galeria atual (copy + eventual filtro por caso). Fotos já em `public/images/gallery` | Não criar outra seção “Antes e depois” na home. Nas páginas de tratamento, só recortes **daquele** tratamento |
| Depoimentos | Home — **nova** `#depoimentos` **e** páginas de tratamento | Seção nova na home; **mesmo recorte** reutilizado nas 3 páginas de tratamento (mesmo componente + mesmos dados) | Não criar um segundo set de depoimentos com copy diferente. Não inventar nomes de pacientes |
| Equipe | Home — **nova** `#equipe` | Só **Dra. Jady** neste ciclo (nome + credenciais já em `siteConfig`). Estrutura pronta para mais profissionais depois | Não manter biografia longa da equipe também em About. Não listar equipe nas páginas de tratamento |
| Estrutura da clínica | Home `#sobre` (About existente) | Recentrar About em espaço/estrutura usando **imagens atuais** (logo + `hero.jpg`) | Não criar “Sobre” + “Estrutura” lado a lado com o mesmo texto. Sem fotos novas de sala/recepção neste ciclo |
| FAQ | Home — **nova** `#faq` | Perguntas **gerais** da clínica | FAQ de Harmonização fica **só** em `/harmonizacao-facial`. FAQ de Masterclass **só** em `/masterclass` se houver |
| Agendamento WhatsApp | Home `#agendamento` (Scheduling existente) | Reordenar: WhatsApp como via principal; agenda.link como alternativa. Manter FAB + CTA final | Não adicionar mais uma faixa “agende agora” entre FAQ e Location. Cta final permanece como fechamento, não como seção nova de agendamento |
| Implantes (copy longo) | **Página** `/implantes` | Para quem é, como funciona, medo da cirurgia, antes/depois do tratamento, pagamento, agendar | Não colar esse copy na home |
| Harmonização (Botox, lábios, bioestimuladores, fotos, FAQ, avaliação) | **Página** `/harmonizacao-facial` | Página própria. O card “Botox” da home vira destaque “Harmonização Facial” apontando para cá | Não manter card “Botox” **e** card “Harmonização” na home |
| Clareamento (claim, tipos, duração, quem pode, promoção, agendar) | **Página** `/clareamento` | Página própria. Reels/fotos atuais de clareamento podem ir para esta página e/ou permanecer como mídia do card na home | Não repetir “promoção do mês” na home neste ciclo |
| Masterclass (currículo, para quem, professora, diferenciais, certificado, lista de espera) | **Página** `/masterclass` (já existe) | Acrescentar seções de marketing **acima** do `InterestForm`. Form, `createLead`, `/obrigado` e pixels **intocados em comportamento** | Não colocar o form na home. Nav Masterclass continua apontando para `/masterclass` |
| Pediatria (hoje nos highlights) | Fora | Remover do grid de destaques. Arquivo do reel permanece em `public/` | Não criar página `/pediatria`. Não recolocá-la no catálogo neste ciclo |

---

## Information architecture

```
/                         Clínica (vitrine)
/implantes                Conversão — implantes
/harmonizacao-facial      Conversão — botox / preenchimento / bioestimuladores
/clareamento              Conversão — campanha de clareamento
/masterclass              Conversão — waitlist Masterclass (item 5)
/obrigado                 Obrigado do form (inalterado)
```

### Home — ordem alvo

```
Hero                  (mantém)
TrustBar              (mantém)
Especialidades        (substitui Services: 12 itens + 3 destaques + teaser Masterclass)
Antes e depois        (Gallery evoluída)
Depoimentos           (nova)
Equipe                (nova)
Estrutura             (About recentrado)
FAQ                   (nova)
Agendamento           (Scheduling: WhatsApp-first)
Localização           (mantém)
Cta                   (mantém, WhatsApp em evidência)
```

Teaser da Masterclass (item 5): faixa ou card **dentro ou imediatamente após** Especialidades, com CTA “Conhecer a Masterclass” → `/masterclass`. Uma ocorrência só.

### Nav (home e páginas de especialidade)

Manter **enxuta** (o header já está no limite no desktop):

| Label | href |
|-------|------|
| Especialidades | `/#servicos` |
| Resultados | `/#resultados` |
| Clínica | `/#sobre` |
| Agendamento | `/#agendamento` |
| Masterclass | `/masterclass` |

Equipe, depoimentos e FAQ **não** entram no header; são alcançáveis por scroll na home e por âncoras no footer se fizer sentido. “Localização” sai do header (já está no Hero + footer + seção). Em páginas internas, âncoras `#…` devem apontar para a home (`/#servicos`), não para ids inexistentes.

### Páginas de tratamento — esqueleto compartilhado (sem repetir a home)

Cada página `/implantes`, `/harmonizacao-facial`, `/clareamento`:

1. Hero do tratamento (título, subtítulo, CTA WhatsApp com mensagem **específica**).
2. Blocos de conteúdo do briefing daquela página (ver abaixo).
3. Recorte de antes/depois **só daquele tratamento** (reusa o componente da Gallery, dados filtrados).
4. **Depoimentos** — mesmo recorte da home (componente `Testimonials` reutilizado; mesmos itens de `content/testimonials.ts`).
5. CTA de fechamento (WhatsApp; online opcional).
6. Header + Footer iguais aos da clínica.

**Proibido nessas páginas:** grid das 12 especialidades, equipe, estrutura, mapa, FAQ geral da clínica, teaser da Masterclass, form de lead. FAQ de Harmonização é exceção (só em `/harmonizacao-facial`).

### `/implantes`

| Bloco | Intenção |
|-------|----------|
| Para quem é | Qualificar (perda dentária, prótese insatisfatória, mastigação/estética) |
| Como funciona | Etapas do tratamento em linguagem leiga |
| Medo da cirurgia? | Quebrar objeções (dor, tempo, rejeição) sem tom agressivo |
| Antes e depois | Casos de implante/reabilitação já existentes (`reabilitacao-oral.jpg` etc.) |
| Condições de pagamento | **Até 15x sem juros** (número locked pela cliente). Sem inventar outras taxas, entrada ou valor total |
| Agendamento | WhatsApp com mensagem de implantes |

### `/harmonizacao-facial`

| Bloco | Intenção |
|-------|----------|
| Botox | O que trata, naturalidade (já há copy/reels) |
| Preenchimento labial | Oferta explícita do briefing |
| Bioestimuladores | Oferta explícita do briefing |
| Fotos reais | Reusar `botox-*.jpg` / reels; não gerar fotos fake |
| FAQ | Só desta página (dúvidas de harmonização) |
| Chamada para avaliação | WhatsApp (“Quero avaliar harmonização facial”) |

### `/clareamento`

| Bloco | Intenção |
|-------|----------|
| Claim | “Seu sorriso pode ficar até **3 tons** mais branco com segurança.” (número locked) |
| Tipos | Clareamento em consultório / caseiro supervisionado (rascunho em `content/`, cliente revisa no staging) |
| Quanto dura | Expectativa realista (rascunho, cliente revisa no staging) |
| Quem pode fazer | Indicações e contraindicações leigas (rascunho, cliente revisa no staging) |
| Promoção do mês | **R$ 1.200** — campo `promo` preenchido; bloco visível. Se no futuro `promo` for `null`, o bloco não renderiza |
| Agendar | WhatsApp com mensagem de clareamento |

### `/masterclass` (item 5 — único funil de curso)

Página **limpa**: sem Header e sem Footer do site. Chrome mínimo = logo + **botão Voltar** (`Link` para `/`, label visível “Voltar” / “Voltar à clínica”, touch ≥44px).

Ordem alvo:

1. Barra mínima: Voltar → `/` + Logo (já existente).
2. Hero da Masterclass (título atual pode permanecer).
3. O que o aluno vai aprender.
4. Para quem é.
5. Quem é a professora (Dra. Jady — dados já no `siteConfig`).
6. Diferenciais.
7. Certificado.
8. Formulário “Entre na lista de espera” = `InterestForm` **atual** (textos de campos não mudam sem pergunta).

Comportamento de `createLead`, honeypot, atribuição, redirect `/obrigado` e pixels: **inalterados**.

A nav da **home** continua com o item Masterclass → `/masterclass`. Quem chega pelo anúncio não vê o menu da clínica.

---

## Catálogo de especialidades (home)

Ordem exatamente a do briefing:

1. Implantes Dentários → `/implantes`
2. Facetas em Resina e Porcelana
3. Clareamento Dental → `/clareamento`
4. Aparelho Ortodôntico
5. Tratamento de Canal
6. Próteses Dentárias
7. Periodontia
8. Cirurgias Odontológicas
9. Bucomaxilofacial
10. DTM e Dor Orofacial
11. Clínico Geral
12. Harmonização Facial → `/harmonizacao-facial`

**Destaques com mídia** (evolução dos 4 cards atuais): só os três com página própria. Reusar assets:

| Destaque | Asset atual |
|----------|-------------|
| Implantes Dentários | `implantes.jpg`, `facetas-reel.mp4` |
| Harmonização Facial | `botox.jpg`, `botox-reel.mp4` |
| Clareamento Dental | `clareamento-reel.mp4` |

As outras 9 especialidades: cards compactos (ícone Lucide + nome + uma linha). Sem página própria neste ciclo: CTA do card = WhatsApp com mensagem da especialidade.

Pediatria: reel permanece em `public/` (não apagar arquivo); **não aparece na UI**.

---

## Content model

Conteúdo sai de `content/site.ts` inchado e vai para módulos tipados:

```
content/
  site.ts                 # identidade, contato, nav, horários, endereço
  specialties.ts          # as 12 especialidades (slug, label, href?, blurb, media?)
  testimonials.ts         # depoimentos (mesmo array na home e nas páginas de tratamento)
  faq.ts                  # FAQ da home (conjunto padrão abaixo) + FAQ de harmonização
  clinic.ts               # equipe (só Dra. Jady) + estrutura (logo + hero atuais)
  treatments/
    implantes.ts
    harmonizacao.ts
    clareamento.ts
  masterclass.ts          # seções de marketing (form continua no componente atual)
```

Regras:

- Copy em pt-BR. Rascunhos vão para staging; cliente revisa.
- Rascunhos clínicos conservadores (sem promessa milagrosa, sem “resultado garantido”).
- Depoimentos: seção obrigatória (autorizados existem). Textos ainda não colados neste chat → rascunho em `testimonials.ts` marcado para troca. Sem inventar sobrenomes/fotos de pacientes.
- Números locked: implantes **15x sem juros**; clareamento **3 tons** e promoção **R$ 1.200**.
- `getWhatsAppUrl(message)` já existe — cada CTA de tratamento passa mensagem própria.

### FAQ da home (conjunto padrão)

Redigir em `content/faq.ts` (cliente valida no staging):

| # | Pergunta | Resposta (direção) |
|---|----------|--------------------|
| 1 | Qual o horário de funcionamento? | Usar `siteConfig.hours.full` |
| 2 | A clínica atende convênio? | Particular; convênios e reembolso — confirmar pelo WhatsApp (sem listar convênios inventados) |
| 3 | Como funciona a primeira consulta? | Avaliação + conversa sobre queixa + indicação de plano; sem compromisso de procedimento no mesmo dia |
| 4 | Os procedimentos doem? | Conforto e anestesia quando indicado; linguagem leiga, sem “zero dor garantida” |
| 5 | Tem estacionamento / como chegar? | Endereço Morro Chic + CTA para mapa (`#localizacao`) e WhatsApp |
| 6 | Como agendar? | WhatsApp (principal) ou agendamento online (agenda.link) |

FAQ de Harmonização (só em `/harmonizacao-facial`): 3–5 perguntas (ex.: quanto dura o Botox, quando voltar à rotina, resultado fica artificial?). Rascunho conservador no mesmo arquivo, namespace separado.

---

## Tech Stack

Igual ao app atual. Sem novas libs salvo se o Plan precisar de um Accordion shadcn (FAQ) — **perguntar antes** de adicionar dependência; preferir primitive já no `radix-ui` / shadcn do repo.

| Área | Escolha |
|------|---------|
| App | Next.js 16 App Router, React 19, TypeScript |
| UI | shadcn + Lucide + tokens gold da landing |
| CSS | Tailwind v4 |
| Fontes | Playfair Display + DM Sans |
| Conteúdo | módulos TS em `content/` |
| Form Masterclass | Prisma + Zod + Server Action (intocado) |
| Testes | Vitest + Testing Library + Playwright |
| Deploy | EasyPanel/VPS (operacional, fora deste PR) |

---

## Commands

```bash
npm install
npm run dev
npm test
npm run test:e2e
npm run lint
npm run build
npm run start
```

---

## Project Structure (alvo)

```
app/
  page.tsx                      # home na ordem da IA
  implantes/page.tsx            # novo
  harmonizacao-facial/page.tsx  # novo
  clareamento/page.tsx          # novo
  masterclass/page.tsx          # expandido; página limpa + Voltar; form permanece
  masterclass/actions.ts        # inalterado
  obrigado/page.tsx             # inalterado
  layout.tsx                    # metadata/keywords atualizados (sem “só 4 serviços”)

components/
  layout/                       # Header (nav nova) + Footer; masterclass NÃO usa estes
  sections/                     # home: hero, trust, services (catálogo), gallery,
                                # testimonials, team, about (estrutura), faq,
                                # scheduling (WhatsApp-first), location, cta
  treatments/                   # blocos reutilizáveis das páginas de tratamento
  form/                         # InterestForm (comportamento igual)
  ui/                           # shadcn; Accordion se aprovado

content/                        # ver Content model

e2e/
  home.spec.ts                  # estender: especialidades + âncoras
  specialty-pages.spec.ts       # novo: 3 rotas + não duplicar seções da home
  masterclass.spec.ts           # heading + form + seções + Voltar; sem nav da clínica
  nav-masterclass.spec.ts       # mantém

.cursor/docs/specs/landing-especialidades/
  spec.md                       # este arquivo
  plan.md                       # após aprovação da spec
  tasks.md                      # após aprovação do plan
```

---

## Code Style

- TypeScript strict; RSC por padrão; `'use client'` só em Header/Sheet, form, accordion/FAQ.
- Dados de página via props a partir de `content/` — componentes burros.
- Tokens semânticos (`primary`, `muted-foreground`, `font-display`, `text-label`). Sem hex solto, sem tokens `brand-*` (contrato já testado).
- Ícones: Lucide. Sem emoji estrutural.
- `next/image` para fotos; `priority` só no LCP da página.
- WhatsApp: sempre `getWhatsAppUrl(message?)`.
- Âncoras da nav em páginas internas: `Link` do Next para `/#…`.

Exemplo desejado (card de especialidade com rota):

```tsx
<Card>
  <CardHeader>
    <CardTitle className="font-display text-xl">{specialty.label}</CardTitle>
    <CardDescription>{specialty.blurb}</CardDescription>
  </CardHeader>
  {specialty.href ? (
    <Button asChild className="rounded-full">
      <Link href={specialty.href}>Saiba mais</Link>
    </Button>
  ) : (
    <WhatsAppButton label="Falar no WhatsApp" />
  )}
</Card>
```

Exemplo desejado (FAQ, se Accordion shadcn for aprovado):

```tsx
<Accordion type="single" collapsible>
  {homeFaq.map((item) => (
    <AccordionItem key={item.question} value={item.question}>
      <AccordionTrigger>{item.question}</AccordionTrigger>
      <AccordionContent>{item.answer}</AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

---

## Testing Strategy

TDD vertical por fatia (RED → GREEN → refactor). Não escrever a suíte inteira de uma vez.

| Nível | Ferramenta | Cobre |
|-------|------------|--------|
| Unit / contrato | Vitest | `specialties.ts` tem as 12 labels na ordem; nav Masterclass; design-contract legado |
| UI | Vitest + Testing Library | FAQ abre/fecha; form Masterclass inalterado (loading/labels) |
| E2E | Playwright | rotas e regra de não-duplicação |

### Comportamentos a travar

1. **Home lista as 12 especialidades** na ordem do briefing (texto visível).
2. **Home não redireciona** para `/masterclass` (já existe).
3. **Links de destaque:** Implantes → `/implantes`, Harmonização → `/harmonizacao-facial`, Clareamento → `/clareamento`, teaser/nav Masterclass → `/masterclass`.
4. **Não duplicar H2 de seções da home** nas páginas de tratamento (ex.: páginas filhas não têm “Cuidado completo para o seu sorriso” / grid das 12 / “Venha nos visitar” / equipe / mapa). Depoimentos **podem** aparecer (mesmo recorte).
5. **`/implantes`** contém Para quem é, Como funciona, Medo da cirurgia, **15x sem juros**, Agendamento/WhatsApp.
6. **`/harmonizacao-facial`** menciona Botox, Preenchimento, Bioestimuladores.
7. **`/clareamento`** exibe claim de **3 tons**, promoção **R$ 1.200** e CTA de agendar. Se `promo` for `null` no futuro, o bloco de promoção some.
8. **`/masterclass`** mantém heading + campos rotulados **e** seções de marketing (aprender / para quem / professora / certificado). Tem **Voltar** para `/`. **Não** renderiza a nav da clínica (Especialidades / Agendamento / etc.).
9. **`createLead` + `/obrigado`** sem regressão (E2E já existente continua passando).
10. **Pediatria** não aparece como especialidade na home.
11. Design contract: zero `brand-terracotta` / `bg-page-atmosphere`.
12. **Depoimentos** visíveis na home e em cada uma das 3 páginas de tratamento.

---

## Boundaries

**Always:**
- Mesclar com seções existentes; não criar gêmeas.
- Preservar `createLead`, pixels condicionais, honeypot, atribuição.
- Rodar `npm test`, `npm run test:e2e` e `npm run lint` antes de dar fatia por concluída.
- `prefers-reduced-motion`; touch ≥44px nos CTAs.
- Copy clínico conservador; sem depoimento com identidade inventada; sem parcelas/taxas além das locked.
- Reusar fotos/reels já em `public/images` (estrutura = logo + hero atuais).
- Masterclass: página limpa + Voltar; especialidades: Header/Footer do site.

**Ask first:**
- Adicionar dependência (ex.: Accordion shadcn).
- Alterar os números locked (15x, 3 tons, R$ 1.200) ou acrescentar valor total de implante.
- Adicionar profissional além da Dra. Jady.
- Criar páginas para as outras 9 especialidades.
- Recolocar Pediatria no catálogo.
- Mudar campos do formulário da Masterclass.
- Schema Prisma / CMS / i18n.
- Dark mode.
- Colocar Header/Footer do site em `/masterclass`.

**Never:**
- Commitar `.env` / secrets.
- Duplicar catálogo / equipe / estrutura / mapa / FAQ geral da home nas páginas filhas.
- Colocar `InterestForm` na home.
- Apagar `/masterclass`, `/obrigado` ou tracking.
- Usar fotos geradas como “caso real” de paciente.
- Redesenhar o design system (voltar cream/terracotta ou paleta nova).

---

## Success Criteria

Critérios testáveis (reframe do briefing):

- [x] Spec aprovada (2026-08-13) → Plan aprovado → Tasks em revisão. Branch `feat/landing-especialidades` criada a partir de `main`.
- [ ] Home exibe as **12 especialidades** na ordem do briefing, uma vez. Pediatria não aparece.
- [ ] Home tem seções **Depoimentos**, **Equipe** (só Dra. Jady), **FAQ** (conjunto padrão), e About recentrado em **estrutura** (imagens atuais) — sem segunda galeria, sem segundo bloco de agendamento, sem segundo catálogo.
- [ ] Gallery existente continua sendo o único “Antes e depois” da home.
- [ ] Scheduling da home é WhatsApp-first; agenda.link permanece como alternativa; FAB WhatsApp permanece.
- [ ] `/implantes` publica **15x sem juros**; `/clareamento` publica **3 tons** e promoção **R$ 1.200**.
- [ ] As 3 páginas de tratamento **não** renderizam grid das 12, equipe, estrutura ou mapa. **Renderizam** o mesmo recorte de depoimentos da home.
- [ ] Home tem **uma** ligação clara para `/masterclass` (nav + teaser). Item 5 não vira seção de curso na home.
- [ ] `/masterclass` é página limpa: seções de marketing + form atual + **Voltar** para `/`; sem nav da clínica.
- [ ] `npm test`, `npm run test:e2e`, `npm run lint` e `npm run build` passam.
- [ ] Design system da unificação intacto (contrato de tokens).

---

## Out of Scope

- CMS, blog, i18n.
- Páginas individuais para as 9 especialidades sem href.
- Pediatria como página ou especialidade.
- Mudança de campos/regras do `Lead`.
- Admin para editar promoção do mês.
- Cutover EasyPanel / DNS.
- Dark mode.
- Chatbot, WhatsApp API oficial, calendário embutido (iframe do agenda.link).

---

## Open Questions (resolvidas — 2026-08-13)

1. ✅ **Pediatria** fica de fora.
2. ✅ Rascunho em `content/` vai para staging; cliente revisa.
3. ✅ Depoimentos autorizados existem — seção entra (rascunho em `content/` até colar o texto final).
4. ✅ Equipe: somente Dra. Jady por enquanto.
5. ✅ Estrutura: usar imagens atuais (logo + hero).
6. ✅ Publicar: implantes **15x sem juros**; clareamento **3 tons** + promoção **R$ 1.200**.
7. ✅ FAQ da home = conjunto padrão (horário, convênio, primeira consulta, dor, estacionamento/como chegar, como agendar).
8. ✅ Depoimentos também nas páginas de tratamento, **mesmo recorte**.
9. ✅ `/masterclass` limpa (sem Header/Footer), com **botão Voltar** para `/`.
10. ✅ Nav proposta ok (Especialidades, Resultados, Clínica, Agendamento, Masterclass).

Nada em aberto para destravar o Plan.

---

## Decisions (locked)

1. Home = vitrine; 3 tratamentos + Masterclass = páginas.
2. Merge table = regra anti-duplicação, com exceção explícita: depoimentos reutilizados nas páginas de tratamento.
3. Catálogo = 12 especialidades na ordem do briefing; Pediatria fora.
4. Conteúdo estático em `content/` split; sem CMS; rascunhos para staging.
5. Form/leads/pixels intocados.
6. Números: 15x sem juros (implantes); 3 tons + R$ 1.200 (clareamento).
7. Equipe = Dra. Jady; estrutura = assets atuais.
8. Masterclass = página limpa + Voltar.
9. Nav = 5 itens (Localização fora do header).
10. Branch `feat/landing-especialidades` criada a partir de `main` após spec aprovada; Plan em seguida; Tasks só após ok no Plan.
