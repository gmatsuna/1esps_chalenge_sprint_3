# 🏥 CareQuest — Front-End Design (Sprint 2)

> **Challenge Care Plus** · Jornada Gamificada do Cuidado Contínuo
> 1º ano de Engenharia de Software · FIAP · 2026/1
> Disciplina: **Front-End Design** — entrega da Sprint 2

---

## 👨‍💻 Integrantes

| Nome | RM |
|------|----|
| Douglas Taveira Vilella Roberto | 567846 |
| Fábio Alexandre Barbosa Filho   | 567419 |
| Gilberto Hideaki Matsunaga      | 568191 |
| Igor Davi Avelar Rosa Cesário   | 568163 |
| Wenderson da Silva Santos       | 567847 |

---

## 📌 Sobre o projeto

O **CareQuest** é uma aplicação web gamificada que transforma o cuidado contínuo com a saúde em uma jornada de hábitos diários — sono, movimento, mente e alimentação. Inspirado em experiências como o Duolingo, o app guia o beneficiário da Care Plus por **missões diárias e semanais**, recompensando consistência com **XP, pontos e benefícios reais** de parceiros.

Esta entrega da **Sprint 2** evolui o protótipo navegável do Figma (Sprint 1) para uma **aplicação web em HTML5 + CSS3 + Bootstrap 5**, totalmente responsiva (mobile, tablet e desktop) e mantendo fidelidade visual ao protótipo original.

🔗 **Protótipo no Figma (Sprint 1):**
[CareChallenge — Figma](https://www.figma.com/design/az3eq2qVCbyovHFFUFkgWI/CareChallenge?node-id=53-1193)

---

## 🎯 Critérios atendidos (Sprint 2)

- ✅ **Layout dinâmico e moderno** — design system unificado, cores institucionais Care Plus, animações sutis, hover/focus em todos os elementos interativos.
- ✅ **HTML semântico** — `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<fieldset>` + `<legend>`, `<label>` para cada `<input>`, `<dl>` para listas-chave-valor, `<details>`/`<summary>` para FAQ, `aria-*` em toda navegação e estados.
- ✅ **Componentes Bootstrap 5 + Flexbox** — Bootstrap 5.3.8 importado via CDN em todas as páginas; uso de utilitários (`d-flex`, `align-items`, `justify-content`, `gap-*`, `visually-hidden`) e classes do design system construídas sobre Flexbox/Grid.
- ✅ **Responsividade real (3 breakpoints):**
  - **Mobile (≤ 767px):** layout em coluna única, conteúdo full-bleed, otimizado para toque (alvos ≥ 44px).
  - **Tablet (768–1199px):** container central limitado a 720px, fundo decorativo verde claro nas laterais, missões em grid 2×.
  - **Desktop (≥ 1200px):** container central limitado a 880px, mais respiro, mesmo grid 2× para missões.
  - **Verificação:** abra a página no navegador e use o DevTools (F12) → "Toggle device toolbar" para alternar entre as resoluções.
- ✅ **Acessibilidade (WCAG AA)** — contraste mínimo 4,5:1, foco visível em todos os elementos interativos, alvos de toque ≥ 44px, `alt` significativo em imagens, `aria-label` e `role` onde apropriado, *skip link* no início de cada página.

---

## 📁 Estrutura do projeto

```text
CareQuest/
│
├── index.html                  # Splash – entrada do app
├── INTEGRANTES.TXT             # Nomes e RMs do grupo
├── README.md                   # Este arquivo
│
├── pages/                      # Demais telas do fluxo
│   ├── welcome.html            # Boas-vindas
│   ├── objective.html          # Escolha de objetivos
│   ├── terms.html              # Termos & LGPD
│   ├── connect.html            # Conectar Apple Health / Google Fit
│   ├── connect-error.html      # Estado de erro – conexão de saúde
│   ├── trail.html              # Escolha de trilhas
│   ├── summary.html            # Resumo do onboarding
│   ├── missions.html           # Home: missões de hoje
│   ├── missions-empty.html     # Estado vazio – sem missões
│   ├── detail.html             # Detalhe da missão
│   ├── accomplished.html       # Missão concluída
│   ├── wallet.html             # Carteira de pontos
│   ├── catalog.html            # Catálogo + modal de resgate
│   ├── redeem-error.html       # Estado de erro – resgate
│   ├── profile.html            # Perfil
│   ├── notifications.html      # Configurações de notificações
│   ├── settings.html           # Configurações da conta (NOVO)
│   └── help.html               # Ajuda & Suporte (NOVO)
│
└── assets/
    ├── css/
    │   ├── reset.css                # Reset normalizado
    │   ├── main.css                 # Design system: tokens, app-shell, componentes
    │   ├── home.css                 # Splash
    │   ├── welcome.css
    │   ├── objective.css
    │   ├── terms.css
    │   ├── connect.css
    │   ├── trail.css
    │   ├── summary.css
    │   ├── missions.css
    │   ├── detail.css
    │   ├── accomplished.css
    │   ├── wallet.css
    │   ├── catalog.css
    │   ├── profile.css
    │   ├── notifications.css
    │   ├── settings-help.css        # Settings + Help (NOVO)
    │   └── state-page.css           # Estados vazios e de erro
    │
    └── images/
        ├── mascote.png
        └── (demais ícones e ilustrações)
```

**Total:** 19 páginas HTML, 18 arquivos CSS, 10 imagens.

---

## 🎨 Design System

Todas as cores, tipografia, raios e sombras vivem como **variáveis CSS** em `assets/css/main.css` (`:root`). Foram extraídas diretamente da seção **FE3.3** do PDF da Sprint 1.

### Paleta

| Token | Cor | Uso |
|-------|-----|-----|
| `--color-primary` | `#1C9770` | CTAs principais, cabeçalhos, links de destaque |
| `--color-primary-light` | `#27ce99` | Hover de botões, halos decorativos |
| `--color-secondary` | `#93CB52` | Botão secundário, badges de pontos |
| `--color-accent-1` | `#7AD180` | Realces sutis |
| `--color-accent-2` | `#7AD1C3` | Detalhes neutros, ilustrações |
| `--color-text` | `#141414` | Texto principal |
| `--color-text-muted` | `#6B6B6B` | Texto de apoio, descrições |
| `--color-bg` | `#F5F7FA` | Fundo do app |
| `--color-surface` | `#FFFFFF` | Cards, headers |
| `--color-error` | `#E53935` | Mensagens de erro, ações destrutivas |

### Tipografia

- Família: **Roboto** (Google Fonts), com fallback para system UI.
- Escala: 12 / 14 / 16 / 18 / 20 / 24 / 32 px via tokens `--fs-xs` → `--fs-2xl`.

### Componentes reutilizáveis

- `.btn-primary-cta` — botão CTA grande (≥ 44px de altura).
- `.chip`, `.chip--green/red/purple/blue/primary` — cápsulas de categoria.
- `.bottom-nav` — navegação inferior consistente (Início / Carteira / Perfil).
- `.app-shell` — *shell* da aplicação, que vira container centralizado em ≥ 768px.
- `.settings-group`, `.settings-row`, `.settings-page__link` — padrão de listas tipo iOS Settings.
- `.toggle` — switch acessível em CSS puro para preferências.
- `.help-faq` — FAQ expansível usando `<details>`/`<summary>` (acessível, sem JS).
- `.state-banner`, `.empty-state`, `.checkbox-row` — utilitários de estado e formulário.

---

## 🗺️ Fluxo de navegação

```
index.html (Splash)
    ↓ Começar
welcome.html
    ↓ Começar minha jornada
objective.html (escolha objetivos)
    ↓ Continuar
terms.html (LGPD - checkbox)
    ↓ Aceitar e continuar
connect.html (Apple Health / Google Fit)  ──► connect-error.html
    ↓ Conectar / Pular
trail.html (escolha trilhas)
    ↓ Criar minha jornada
summary.html (resumo)
    ↓ Ir para minhas missões
missions.html (HOME)  ──► missions-empty.html (estado vazio)
    ↓ tocar em uma missão
detail.html
    ↓ Marcar como concluída
accomplished.html
    ↓ Voltar / Ver carteira

[bottom-nav fixa em: missions, wallet, catalog, profile, notifications, settings, help]

wallet.html  ──►  catalog.html  ──►  redeem-error.html
profile.html ──►  notifications.html
             ──►  settings.html  ──►  help.html
             ──►  help.html
```

---

## ▶️ Como executar

Como é uma aplicação **estática (HTML/CSS apenas)**, basta abrir o `index.html` no navegador:

### Opção 1: abrir direto

```bash
git clone <URL_DO_REPOSITORIO>.git
cd CareQuest

# Windows:  start index.html
# macOS:    open index.html
# Linux:    xdg-open index.html
```

### Opção 2: servir com um servidor local (recomendado)

```bash
# Python 3
python3 -m http.server 8000

# Node (com http-server instalado)
npx http-server . -p 8000
```

Depois abra: `http://localhost:8000`

### Como verificar a responsividade

1. Abra a página no navegador.
2. Pressione **F12** (ou Ctrl+Shift+I) para abrir o DevTools.
3. Clique no ícone "Toggle device toolbar" (Ctrl+Shift+M).
4. Selecione um dispositivo:
   - **iPhone 12** (390×844) → layout mobile
   - **iPad Air** (820×1180) → layout tablet
   - **Responsive** com largura ≥ 1200 → layout desktop

A interface se adapta automaticamente em cada faixa.

---

## 🧪 O que foi corrigido em relação à versão anterior

Esta versão consertou bugs e inconsistências mapeadas no código que o grupo havia começado, e atendeu aos apontamentos da revisão:

- 🐞 `terms.html` usava `<input type="radio">` em vez de `<input type="checkbox">` (a especificação Sprint 1 exige checkbox para LGPD).
- 🐞 Typo `fw-bolda` em `terms.html` (corrigido para `fw-bold`).
- 🐞 Typo `container__cicle` (corrigido para `container__circle`).
- 🐞 `accomplished.html`, `catalog.html`, `profile.html` e `wallet.html` não importavam o Bootstrap CSS.
- 🐞 `wallet.html` terminava com tag truncada `</bo` em vez de `</body></html>`.
- 🐞 `wallet.html` renderizava o texto literal **"Logo"** dentro dos cards de recompensa.
- 🐞 Bottom-nav com links inconsistentes entre páginas.
- 🐞 `README.md` antigo descrevia arquivos que não existiam.
- ✨ **Espaçamento** entre cards e CTAs revisado (botões não ficam mais grudados nos cards anteriores).
- ✨ **Notificações** redesenhada — grupos "Lembretes diários", "Resumo semanal" e "Modo silencioso" agora têm headers com fundo cinza-claro, separação visual clara entre seções e linhas com altura confortável (72px).
- ✨ **Páginas Configurações e Ajuda & Suporte** criadas (eram links sem destino no perfil).
- ✨ **Phone-frame mockup removido** — agora é um site web responsivo de verdade. Em desktop o conteúdo é centralizado em um container com fundo decorativo, mas continua se comportando como um site comum (sem moldura de celular).

### Páginas adicionadas

Além das 4 telas previstas pelo PDF da Sprint 1 mas ainda não implementadas (`connect-error`, `missions-empty`, `redeem-error`, `notifications`), foram adicionadas:

- **`settings.html`** — Configurações da conta (Conta, Preferências, Privacidade/LGPD, Sobre) com toggles, selects e links para outras páginas.
- **`help.html`** — Central de Ajuda com atalhos rápidos, FAQ expansível (`<details>`) e cartão de contato (E-mail, WhatsApp, Chat ao vivo).

---

## 🛠️ Tecnologias

- **HTML5** semântico
- **CSS3** com variáveis customizadas (`:root`), Flexbox, Grid e Media Queries
- **Bootstrap 5.3.8** (via CDN)
- **Font Awesome 6.5.2** e **Lineicons 5.1** (via CDN)
- **Google Fonts** — Roboto

Sem JavaScript próprio do projeto: o modal de resgate em `catalog.html` usa o seletor `:target` do CSS, e o FAQ em `help.html` usa `<details>`/`<summary>` nativos — ambos totalmente acessíveis sem dependência de script.

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais — FIAP / Care Plus, 2026.
