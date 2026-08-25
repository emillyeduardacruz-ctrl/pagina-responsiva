**# 📰 Feed de Postagens Horizontais com Flexbox & Acessibilidade

Este projeto é uma aplicação web interativa desenvolvida com **HTML5, CSS3 e JavaScript**, focada na construção de layouts modernos e responsivos utilizando **CSS Flexbox** e aplicando boas práticas de **Acessibilidade Web (WCAG)**.

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica e inclusão de atributos acessíveis (`alt`, tags semânticas `<article>`, `<main>`).
- **CSS3:** Estilização com Flexbox (`flex-direction: row`, `flex: 1 1 100%`, `align-self`).
- **JavaScript (ES6+):** Manipulação de DOM para contagem dinâmica de interações (curtidas).

---

## 🎯 Desafios Solucionados no Projeto

1. **Alinhamento em Linha (`flex-direction: row`):**
   - Configuração do elemento `<article>` para dispor imagem, texto e ações lado a lado.
2. **Cards com 100% de Largura (`flex: 1 1 100%`):**
   - Criação de uma lista horizontal ampla que se adapta à largura total do container principal.
3. **Quebra de Alinhamento com `align-self`:**
   - Utilização de `align-self: flex-end` no botão de ação para deslocá-lo da centralização padrão para o canto inferior do card.
4. **Acessibilidade Visual:**
   - Uso de descrições detalhadas e contextuais no atributo `alt` das imagens para apoio a leitores de tela.

---

## 📂 Estrutura do Arquivo

```text
├── index.html   # Estrutura principal da página
├── style.css    # Regras de estilo e layout Flexbox
└── script.js    # Lógica de interatividade dos botões**
