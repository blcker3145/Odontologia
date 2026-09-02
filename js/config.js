/* ==========================================================================
   CA ODONTOLOGIA — Configuração da clínica
   --------------------------------------------------------------------------
   ⚠️  TEMPLATE DE DEMONSTRAÇÃO
   Todos os dados abaixo são FICTÍCIOS, criados para apresentar o template.
   Clínica, endereço, telefone, CNPJ, CRO e depoimentos não existem.
   Ao aplicar para um cliente real, substitua tudo por dados verdadeiros e
   verificáveis — em especial os depoimentos, que precisam ser reais e
   autorizados (normas CFO/CRO).
   ========================================================================== */

window.CLINICA = {

  /* ---- Identidade ------------------------------------------------------ */
  nome:        'CA Odontologia',
  razaoSocial: 'CA Odontologia Clínica Odontológica Ltda',
  cnpj:        '34.821.596/0001-72',

  /* ---- Localização ----------------------------------------------------- */
  cidade:      'Pinheiros, São Paulo',
  endereco:    'Rua Fradique Coutinho, 812 — Pinheiros, São Paulo/SP, CEP 05416-011',
  referencia:  'A 400m da estação Fradique Coutinho (Linha 4-Amarela)',

  /* ---- Contato --------------------------------------------------------- */
  // Número do WhatsApp em formato internacional, apenas dígitos: 55 + DDD + número
  whatsappNumero:  '5511982740193',
  whatsappDisplay: '(11) 98274-0193',
  whatsappMensagem: 'Olá, vim pela página da CA Odontologia e gostaria de agendar uma avaliação.',

  telefone:  '(11) 3062-4180',
  email:     'contato@caodontologia.com.br',

  /* ---- Horários -------------------------------------------------------- */
  horarioResumo:  'Seg a Sáb',
  horarioSemana:  'Segunda a sexta, das 8h às 19h',
  horarioSabado:  'Sábado, das 8h às 13h',

  /* ---- Responsabilidade técnica (obrigatório — CFO/CRO) ---------------- */
  responsavelTecnico: 'Dra. Carolina Andrade',
  cro:                'SP 42.318',

  /* ---- Informações usadas no FAQ --------------------------------------- */
  publico:   'crianças a partir de 2 anos, adolescentes e adultos',
  convenios: 'Amil Dental, Bradesco Dental e SulAmérica Odonto, além de atendimento particular',

  /* ---- Redes sociais --------------------------------------------------- */
  instagram: 'https://instagram.com/caodontologia',
  facebook:  'https://facebook.com/caodontologia',

  /* ---- Páginas institucionais ------------------------------------------ */
  dataAtualizacao: '02/09/2026',

  /* ---- Comportamento do formulário ------------------------------------- */
  // 'whatsapp'  → ao enviar, monta a mensagem e abre a conversa no WhatsApp
  // 'endpoint'  → envia via POST para a URL definida em formEndpoint
  formModo:     'whatsapp',
  formEndpoint: ''   // ex.: 'https://formspree.io/f/xxxxxxx'
};
