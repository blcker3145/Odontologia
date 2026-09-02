/* ==========================================================================
   CA ODONTOLOGIA — Configuração da clínica
   --------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para colocar os dados reais
   da clínica no ar. Tudo que estiver entre [colchetes] é placeholder e deve
   ser substituído por informação verdadeira e verificável.
   ========================================================================== */

window.CLINICA = {

  /* ---- Identidade ------------------------------------------------------ */
  nome:        'CA Odontologia',
  razaoSocial: '[Razão social da clínica LTDA]',
  cnpj:        '[00.000.000/0001-00]',

  /* ---- Localização ----------------------------------------------------- */
  cidade:      '[Cidade/bairro]',
  endereco:    '[Rua Exemplo, 000 — Bairro, Cidade/UF, CEP 00000-000]',
  referencia:  '[Ao lado de algum ponto de referência conhecido]',

  /* ---- Contato --------------------------------------------------------- */
  // Número do WhatsApp em formato internacional, apenas dígitos: 55 + DDD + número
  whatsappNumero:  '5500000000000',
  whatsappDisplay: '[(00) 00000-0000]',
  // Mensagem que já vem preenchida quando o paciente abre o WhatsApp
  whatsappMensagem: 'Olá, vim pela página da CA Odontologia e gostaria de agendar uma avaliação.',

  telefone:  '[(00) 0000-0000]',
  email:     '[contato@caodontologia.com.br]',

  /* ---- Horários -------------------------------------------------------- */
  horarioResumo:  'Seg a Sex',
  horarioSemana:  '[Segunda a sexta, das 00h às 00h]',
  horarioSabado:  '[Sábado, das 00h às 00h]',

  /* ---- Responsabilidade técnica (obrigatório — CFO/CRO) ---------------- */
  responsavelTecnico: '[Nome do profissional responsável]',
  cro:                '[UF 00000]',

  /* ---- Informações usadas no FAQ --------------------------------------- */
  publico:   '[crianças, adolescentes e adultos]',
  convenios: '[informação verdadeira sobre convênios]',

  /* ---- Redes sociais --------------------------------------------------- */
  instagram: 'https://instagram.com/',
  facebook:  'https://facebook.com/',

  /* ---- Páginas institucionais ------------------------------------------ */
  dataAtualizacao: '[00/00/0000]',

  /* ---- Comportamento do formulário ------------------------------------- */
  // 'whatsapp'  → ao enviar, monta a mensagem e abre a conversa no WhatsApp
  // 'endpoint'  → envia via POST para a URL definida em formEndpoint
  formModo:     'whatsapp',
  formEndpoint: ''   // ex.: 'https://formspree.io/f/xxxxxxx'
};
