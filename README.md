# 📈 StonksFinance — Sistema de Gestão de Finanças Pessoais

![GitHub repo size](https://img.shields.io/github/repo-size/seu-usuario/stonks-finance?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/seu-usuario/stonks-finance?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/stonks-finance?style=for-the-badge)

O **StonksFinance** é uma aplicação web completa e responsiva para controlo financeiro pessoal. O projeto permite que os utilizadores monitorizem as suas receitas e despesas quotidianas, estabeleçam e acompanhem metas financeiras de longo prazo, de forma totalmente segura e visualmente amigável.

Este repositório é fruto de um **processo rigoroso de engenharia reversa e refatoração de software**. Recebemos uma base de código legada que apresentava graves falhas de arquitetura, brechas de segurança, erros críticos de lógica e problemas severos de UI/UX, e transformámo-la num produto estável, limpo e profissional.

---

## 🔍 O Diagnóstico: O Cenário Inicial (Legado)

Antes da intervenção do grupo, o projeto encontrava-se num estado inviável para produção. Entre os principais problemas identificados e corrigidos, destacam-se:

1. **Arquitetura Caótica:** Todos os ficheiros (`.html`, `.css`, `.js`, imagens e scripts órfãos em `.php`) estavam misturados na raiz do projeto, quebrando o princípio de separação de responsabilidades.
2. **Erros Graves de Lógica:** Presença de bugs críticos, como a possibilidade de registar utilizadores com **idade negativa**, além de quebras no fluxo de autenticação.
3. **Quebra de Links e Referências:** Links que apontavam para caminhos inexistentes ou para extensões de ficheiro incorretas, gerando erros `404` na consola.
4. **Interface Amadora (UI/UX):** Uso inadequado de imagens de memes (como o *Stonks Man*), elementos desalinhados, falta de contraste e ausência total de responsividade para dispositivos móveis.
5. **Código Morto e Tags Soltas:** Trechos de código comentados sem função, tags HTML abertas/soltas e falta de padronização nas nomenclaturas (mistura de inglês e português sem critério).

---

## 🛠️ A Solução: Melhorias & Implementações

O sistema foi inteiramente reconstruído e otimizado com foco em três pilares principais:

### 1. Reestruturação Arquitetural
Adotámos uma estrutura de diretórios limpa, profissional e modular para separar os interesses do sistema:
* `/html`: Estruturas semânticas das páginas web.
* `/css`: Folhas de estilo organizadas e limpas, sem regras conflituantes.
* `/js`: Scripts contendo a lógica de negócios, validações e manipulação do DOM.
* `/imagens`: Repositório local e otimizado para todos os ativos visuais do projeto.

### 2. Engenharia de Software & Lógica
* **Persistência com LocalStorage:** Implementámos uma camada de persistência para simular uma base de dados local. Os dados de novos utilizadores e as transações financeiras não são perdidos ao atualizar a página.
* **Validações Robustas (Regex):** Criação de máscaras e regras de validação para campos sensíveis (como e-mail, palavra-passe, CPF e telefone), impedindo dados corrompidos ou entradas impossíveis (como idades negativas).
* **Segurança e UX em Formulários:** Inclusão de recursos práticos como o *password toggle* (visualizar/ocultar palavra-passe) e modais personalizados de confirmação em vez dos alertas nativos do navegador (`alert()`).
* **Manipulação Dinâmica do DOM:** A dashboard, a listagem de transações (com filtros por entrada/saída) e a criação de metas financeiras funcionam de maneira 100% dinâmica através do JavaScript.

### 3. Design System Profissional
* Substituição de elementos satíricos por uma interface moderna baseada na paleta *Slate Blue* (tons de azul corporativo e cinza escuro), transmitindo a seriedade que um software financeiro exige.
* Layout totalmente responsivo com CSS moderno, garantindo o funcionamento fluido em smartphones, tablets e computadores.

---

## 📁 Estrutura Atualizada do Repositório

```text
├── css/
│   ├── cadastro.css
│   ├── dashboard.css
│   ├── login.css
│   ├── metas.css
│   └── transacoes.css
├── html/
│   ├── cadastro.html
│   ├── dashboard.html
│   ├── login.html
│   ├── metas.html
│   └── transacoes.html
├── js/
│   ├── cadastro.js
│   ├── dashboard.js
│   ├── login.js
│   ├── metas.js
│   └── transacoes.js
├── imagens/
│   └── [Logos e ícones institucionais do sistema]
└── README.md
