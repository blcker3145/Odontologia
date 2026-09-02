# 📁 Assets — onde adicionar as imagens

Coloque os arquivos exatamente com os **nomes abaixo** nas pastas indicadas.
Enquanto um arquivo não existir, o site mostra automaticamente um placeholder
turquesa no lugar — nada quebra.

---

## `assets/img/` — fotografias clínicas

| Arquivo | Onde aparece | Proporção | Tamanho sugerido |
|---|---|---|---|
| `hero-atendimento.jpg` | Primeira tela (hero) | 5:6 vertical | 900 × 1080 px |
| `paciente-acolhimento.jpg` | Seção "Talvez você esteja adiando…" | 4:5 vertical | 800 × 1000 px |
| `consultorio.jpg` | Seção de tratamentos | 16:11 horizontal | 900 × 620 px |
| `equipe.jpg` | Ao lado do formulário | 16:11 horizontal | 900 × 620 px |
| `fachada.jpg` | Seção de contato | 16:11 horizontal | 900 × 620 px |
| `depoimento-1.jpg` | Avatar do depoimento 1 | 1:1 quadrada | 200 × 200 px |
| `depoimento-2.jpg` | Avatar do depoimento 2 | 1:1 quadrada | 200 × 200 px |
| `depoimento-3.jpg` | Avatar do depoimento 3 | 1:1 quadrada | 200 × 200 px |
| `og-imagem.jpg` | Prévia ao compartilhar link | 1.91:1 | 1200 × 630 px |

## `assets/logo/` — marca

| Arquivo | Onde aparece | Formato |
|---|---|---|
| `logo-ca-odontologia.png` | Header, menu mobile e rodapé | PNG com fundo transparente, 200 × 200 px |
| `favicon.svg` | Aba do navegador | SVG (já incluído — substitua se quiser) |
| `apple-touch-icon.png` | Ícone no iOS | PNG 180 × 180 px |

## `assets/icons/`

Os ícones do site são **SVG inline**, desenhados direto no HTML com traço de
1.5–2px, seguindo o design system. Esta pasta existe para ícones extras que
você venha a precisar.

---

## Como trocar uma imagem

1. Salve o arquivo com **exatamente o mesmo nome** da tabela.
2. Coloque na pasta correspondente.
3. Recarregue a página. Pronto — não é preciso editar HTML.

Para usar um nome diferente, edite o `src` da imagem em `index.html`.

---

## Recomendações do briefing

- Use **imagens reais e autorizadas** da clínica, da equipe ou de um atendimento acolhedor.
- **Evite** bancos de imagem com sorrisos artificiais e fotos genéricas excessivamente perfeitas.
- **Não use** comparações de antes e depois sem contexto, autorização e conformidade
  com as normas profissionais aplicáveis (CFO/CRO).
- Fotos de pacientes exigem **autorização por escrito**.

## Peso e formato

- Exporte em **JPG** (fotografias) com qualidade 75–85%.
- Mantenha cada arquivo **abaixo de 300 KB** — a página precisa carregar rápido no celular.
- Se puder, exporte também em **WebP** para ganhar performance.
