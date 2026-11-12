# 🏛️ Museu Virtual: Mulheres Negras na Ciência e Tecnologia

> **"Reescrevendo a História da Inovação"** — Uma exposição digital interativa dedicada a resgatar, registrar e celebrar os legados de mulheres negras pioneiras e contemporâneas na computação, física, matemática e engenharia.

---

## 📖 Sobre o Projeto

Historicamente, as contribuições fundamentais de mulheres negras para o avanço científico e tecnológico foram invisibilizadas. Este projeto é um **Museu Virtual** desenvolvido com tecnologias web puras (Vanilla HTML, CSS e JavaScript) com o objetivo de educar, inspirar e dar visibilidade às trajetórias de cientistas que transformaram o mundo moderno.

### 👩‍🔬 Acervo em Destaque
* **Katherine Johnson (1918 – 2020):** Matemática da NASA responsável pelos cálculos de mecânica orbital das missões Mercury e Apollo 11.
* **Drª. Gladys West (1930 – Presente):** Matemática cuja modelagem geodésica da Terra estabeleceu as bases matemáticas do sistema GPS.
* **Drª. Sonia Guimarães (1957 – Presente):** Primeira mulher negra brasileira doutora em Física, pesquisadora em semicondutores e professora do ITA.

---

## ✨ Funcionalidades

* **Galeria Permanente Interativa:** Cards responsivos com enquadramento ajustado para retratos e efeito de destaque.
* **Dossiês Completos (Modal Dinâmico):** Ao clicar em qualquer cientista, abre-se um dossiê detalhado contendo biografia, período de atuação, lista de conquistas e citação marcante (com suporte para fechamento via botão, clique externo ou tecla `ESC`).
* **Gerador de Curiosidades do Acervo:** Botão interativo que exibe fatos históricos sem repetição consecutiva.
* **Linha do Tempo Histórica:** Cronologia visual destacando marcos importantes na história da ciência.
* **Design Responsivo e Acessível:** Layout escuro com estética de galeria/museu, adaptado para dispositivos móveis e desktop, utilizando atributos ARIA para leitores de tela.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e acessibilidade (`aria-live`, `role="dialog"`).
* **CSS3:** Estilização moderna com variáveis CSS (`:root`), CSS Grid, Flexbox, animações suaves e ajuste fino de imagens (`object-fit` e `object-position`).
* **JavaScript (ES6+):** Manipulação do DOM, gerenciamento de eventos e renderização dinâmica dos dossiês.

---

## 📁 Estrutura de Pastas

```text
museu-virtual-mulheres-negras/
├── index.html          # Estrutura principal da página e do modal
├── style.css           # Estilos, temas, responsividade e enquadramento
├── script.js           # Banco de dados dos dossiês e interatividade
├── README.md           # Documentação do projeto
└── img/                # Diretório de imagens do acervo
    ├── Katherine_Jonson.jfif
    ├── Gladys_West.jfif
    └── Sonia_guimaraes.jfif
```

---

## 🚀 Como Executar e Publicar no GitHub Pages

### Executar localmente
1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   ```
2. Acesse a pasta do projeto e abra o arquivo `index.html` diretamente no seu navegador de preferência (ou utilize a extensão *Live Server* no VS Code).

### Hospedar gratuitamente via GitHub Pages
1. Envie todos os arquivos (`index.html`, `style.css`, `script.js`, `README.md` e a pasta `img/`) para o seu repositório no GitHub.
2. No repositório, clique na aba **Settings** (Configurações).
3. No menu lateral esquerdo, selecione **Pages**.
4. Em **Source** (Origem), escolha `Deploy from a branch`.
5. Selecione a branch `main` (ou `master`), deixe a pasta como `/ (root)` e clique em **Save**.
6. Aguarde alguns instantes e o link público do seu Museu Virtual aparecerá no topo da página!

---

## 📚 Fontes e Referências Documentais

* [NASA History Program Office](https://history.nasa.gov/)
* [Air Force Space Command — Hall da Fama](https://www.afspc.af.mil/)
* [Geledés — Instituto da Mulher Negra](https://www.geledes.org.br/)
* [CNPq — Pioneiras da Ciência no Brasil](https://www.gov.br/cnpq/)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educativos e de divulgação científica. Sinta-se à vontade para estudar, adaptar e compartilhar mantendo os devidos créditos.