# CA Odontologia — Landing Page

Landing page de conversão para clínica odontológica, construída a partir da
*Estrutura de Autoconversão para Landing Page de Odontologia* e do design system
turquesa da marca.

HTML, CSS e JavaScript puros — sem build, sem dependências. Abra o `index.html`
e o site funciona.

---

## 🚀 Como usar

1. **Adicione as imagens** em `assets/` — veja [`assets/README.md`](assets/README.md)
   com a lista de arquivos, nomes e tamanhos.
2. **Preencha os dados da clínica** em [`js/config.js`](js/config.js) — é o único
   arquivo que você precisa editar. Tudo entre `[colchetes]` é placeholder.
3. **Substitua os depoimentos** em `index.html` por relatos reais e autorizados.
4. **Cole o mapa** do Google Maps na seção de contato (há um comentário no HTML
   indicando o lugar exato).
5. Publique a pasta em qualquer hospedagem estática.

### Rodando localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

---

## 📂 Estrutura

```
.
├── index.html                    Landing page completa
├── politica-de-privacidade.html  Modelo institucional
├── termos-de-uso.html            Modelo institucional
├── css/
│   └── style.css                 Design system + componentes
├── js/
│   ├── config.js                 ⭐ Dados da clínica (edite aqui)
│   └── main.js                   Menu, acordeão, formulário, animações
└── assets/
    ├── README.md                 ⭐ Guia das imagens
    ├── img/                      Fotografias clínicas
    ├── logo/                     Marca e favicons
    └── icons/                    Ícones extras (os do site são SVG inline)
```

---

## 🎨 Design system

| Token | Valor | Uso |
|---|---|---|
| `--c-primary` | `#66A9B0` | Turquesa — assinatura visual |
| `--c-secondary` | `#AEDAE2` | Azul claro — apoios e destaques |
| `--c-bg` | `#FFFFFF` | Fundo predominante |
| `--c-text` | `#252525` | Texto |
| `--c-gray` | `#687477` | Texto secundário |

**Tipografia** — Poppins (geométrica, principal) + Fraunces itálico (editorial,
usado com parcimônia em destaques).

**Formas** — cards `8–12px`, pills `999px`, fotos com recorte orgânico, ondas SVG
entre seções, ícones lineares de traço `1.5–2px`.

**Regra central** — branco predominante, turquesa como assinatura, muito espaço em
branco, fotografia clínica como elemento principal.

Todos os tokens ficam em `:root` no topo de `css/style.css`. Trocar a paleta inteira
é mudar cinco variáveis.

---

## 🧩 Componentes

`Brand Header` · `Headline` · `Pill` · `Info Card` · `Photo Card` · `CTA` ·
`Contact Card` · `Testimonial` · `Step` · `Accordion` · `Form` · `Wave` · `Blob`

---

## 📐 Estrutura da página

Segue a ordem recomendada no briefing:

1. Barra de confiança
2. Hero — promessa clara + CTA imediato
3. Identificação da dor
4. Mecanismo em três etapas
5. Diferenciais reais
6. Tratamentos / especialidades
7. Prova de confiança
8. Oferta e redução de risco
9. Formulário de conversão
10. Objeções e FAQ
11. Localização e contato
12. CTA final e rodapé institucional

Um CTA principal em toda a página: **agendar a avaliação**.

---

## 📱 Formulário

Coleta apenas nome, WhatsApp, interesse e melhor período. Dois modos, definidos em
`config.js`:

- `formModo: 'whatsapp'` *(padrão)* — monta a mensagem e abre a conversa no WhatsApp.
  Não exige backend.
- `formModo: 'endpoint'` — envia por `POST` para a URL em `formEndpoint`
  (Formspree, Basin, sua própria API).

---

## ⚖️ Conformidade

A comunicação odontológica é regulada. O conteúdo desta página foi escrito para
respeitar as normas do CFO/CRO:

- Nenhuma promessa de resultado, garantia ou superlativo.
- Nenhuma contagem, selo ou número não comprovável.
- Depoimentos entram como **placeholder** — devem ser reais, autorizados e específicos.
- Sem antes/depois. Se for usar, exige contexto, autorização e conformidade.
- Aviso institucional no rodapé: o conteúdo é informativo e não substitui avaliação.
- Identificação do responsável técnico e CRO no rodapé (obrigatório).

Preencha os campos de responsabilidade técnica em `config.js` antes de publicar.

---

## ✅ Antes de publicar

- [ ] Imagens reais adicionadas em `assets/`
- [ ] `js/config.js` sem nenhum `[colchete]` restante
- [ ] Depoimentos reais e autorizados no lugar dos modelos
- [ ] Embed do Google Maps colado na seção de contato
- [ ] Responsável técnico e CRO preenchidos
- [ ] Política de privacidade e termos revisados juridicamente
- [ ] Número do WhatsApp testado em um celular
- [ ] Métricas configuradas: clique no WhatsApp, envio do formulário, origem do lead

---

## 🌐 Suporte

Chrome, Firefox, Safari e Edge atuais. Respeita `prefers-reduced-motion`,
navegação por teclado, `focus-visible` e contraste acessível.
