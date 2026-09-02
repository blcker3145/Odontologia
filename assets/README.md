# 📁 Assets — onde adicionar as imagens

Coloque os arquivos exatamente com os **nomes abaixo** nas pastas indicadas.
Enquanto um arquivo não existir, o site mostra automaticamente um placeholder
turquesa no lugar — nada quebra.

---

## `assets/img/` — fotografias clínicas

| Arquivo | Onde aparece | Proporção | Tamanho sugerido | Status |
|---|---|---|---|---|
| `hero-atendimento.jpg` | Primeira tela (hero) | 5:6 vertical | 900 × 1080 px | ✅ adicionada |
| `paciente-acolhimento.jpg` | Seção "Talvez você esteja adiando…" | 4:5 vertical | 800 × 1000 px | ✅ adicionada |
| `consultorio.jpg` | Seção de tratamentos | 16:11 horizontal | 900 × 620 px | ✅ adicionada |
| `equipe.jpg` | Ao lado do formulário | 16:11 horizontal | 900 × 620 px | ✅ adicionada |
| `fachada.jpg` | Seção de contato | 16:11 horizontal | 900 × 620 px | ⏳ pendente |
| `depoimento-1.jpg` | Avatar do depoimento 1 | 1:1 quadrada | 200 × 200 px | ⏳ pendente |
| `depoimento-2.jpg` | Avatar do depoimento 2 | 1:1 quadrada | 200 × 200 px | ⏳ pendente |
| `depoimento-3.jpg` | Avatar do depoimento 3 | 1:1 quadrada | 200 × 200 px | ⏳ pendente |
| `og-imagem.jpg` | Prévia ao compartilhar link | 1.91:1 | 1200 × 630 px | ✅ adicionada |

As 5 fotos marcadas ✅ são fotos de banco de imagens (Pexels, licença livre para
uso comercial) usadas como ambientação temporária. Assim que a clínica tiver
fotos reais e autorizadas do próprio espaço e equipe, substitua-as pelo mesmo
nome de arquivo — é a recomendação do próprio briefing (ver abaixo).

**`fachada.jpg` ficou pendente de propósito:** a foto enviada para essa vaga
mostrava, em segundo plano, a logo e o nome de outra clínica real ("Pulpatta
Medical Centre") na parede — usá-la passaria a impressão errada de que aquele
é o espaço da CA Odontologia. Envie uma foto da fachada/recepção real da
clínica, ou uma nova foto de banco sem identificação de terceiros.

**Os avatares de depoimento (`depoimento-1/2/3.jpg`) foram deixados de fora
de propósito:** colocar um rosto de banco de imagens ali criaria a aparência
de um paciente real dando um depoimento que não existe — o que as normas
éticas de publicidade odontológica (CFO/CRO) proíbem. Substitua apenas por
fotos de pacientes reais que autorizaram o uso.

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
