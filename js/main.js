/* ==========================================================================
   CA ODONTOLOGIA — Comportamento da página
   ========================================================================== */
(function () {
  'use strict';

  var cfg = window.CLINICA || {};
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ------------------------------------------------------------------------
     1. Preenche textos e links a partir do config.js
     ------------------------------------------------------------------------ */
  function digitos(v) { return String(v || '').replace(/\D/g, ''); }

  function linkWhatsApp(mensagem) {
    var n = digitos(cfg.whatsappNumero);
    var m = encodeURIComponent(mensagem || cfg.whatsappMensagem || '');
    return n ? 'https://wa.me/' + n + (m ? '?text=' + m : '') : '#agendar';
  }

  var links = {
    whatsapp:  function () { return linkWhatsApp(); },
    tel:       function () { return cfg.telefone ? 'tel:+55' + digitos(cfg.telefone) : '#'; },
    email:     function () { return cfg.email ? 'mailto:' + cfg.email : '#'; },
    instagram: function () { return cfg.instagram || '#'; },
    facebook:  function () { return cfg.facebook || '#'; }
  };

  $$('[data-cfg]').forEach(function (el) {
    var v = cfg[el.getAttribute('data-cfg')];
    if (v) { el.textContent = v; }
  });

  $$('[data-cfg-href]').forEach(function (el) {
    var fn = links[el.getAttribute('data-cfg-href')];
    if (!fn) { return; }
    var href = fn();
    el.setAttribute('href', href);
    if (/^https?:/.test(href)) {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    }
  });

  var ano = $('#anoAtual');
  if (ano) { ano.textContent = new Date().getFullYear(); }

  /* ------------------------------------------------------------------------
     2. Placeholder visual para imagens ainda não adicionadas em /assets
     ------------------------------------------------------------------------ */
  function placeholder(rotulo) {
    var texto = (rotulo || 'Imagem').replace(/&/g, '&amp;').replace(/</g, '&lt;');
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480">' +
      '<g fill="none" stroke="#66A9B0" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity=".65">' +
      '<rect x="252" y="176" width="136" height="104" rx="10"/>' +
      '<circle cx="288" cy="212" r="14"/>' +
      '<path d="M258 268l38-34 30 26 22-18 36 32"/></g>' +
      '<text x="320" y="326" text-anchor="middle" font-family="Poppins,Helvetica,Arial,sans-serif" ' +
      'font-size="21" font-weight="600" fill="#66A9B0">' + texto + '</text>' +
      '<text x="320" y="356" text-anchor="middle" font-family="Poppins,Helvetica,Arial,sans-serif" ' +
      'font-size="16" fill="#9AA5A7">adicione o arquivo em /assets</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function placeholderCompacto() {
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">' +
      '<g fill="none" stroke="#66A9B0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="16" y="24" width="64" height="48" rx="8"/><circle cx="34" cy="42" r="7"/>' +
      '<path d="M20 66l18-16 14 12 10-8 14 12"/></g></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  $$('img[data-ph]').forEach(function (img) {
    img.addEventListener('error', function handle() {
      img.removeEventListener('error', handle);
      img.classList.add('img-placeholder');
      // imagens pequenas (logo, avatar) recebem uma versão só com o ícone
      var pequena = (img.getAttribute('width') || 999) <= 120;
      img.src = pequena ? placeholderCompacto() : placeholder(img.getAttribute('data-ph'));
    });
    // Dispara o fallback também para imagens que já falharam antes do listener
    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event('error'));
    }
  });

  /* ------------------------------------------------------------------------
     3. Header fixo — sombra ao rolar
     ------------------------------------------------------------------------ */
  var header = $('.header');
  if (header) {
    var marcaScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    marcaScroll();
    window.addEventListener('scroll', marcaScroll, { passive: true });
  }

  /* ------------------------------------------------------------------------
     4. Menu mobile
     ------------------------------------------------------------------------ */
  var menu   = $('#menu-mobile');
  var abrir  = $('[data-menu-open]');
  var fechar = $('[data-menu-close]');

  function alternaMenu(aberto) {
    if (!menu) { return; }
    menu.classList.toggle('is-open', aberto);
    document.body.classList.toggle('no-scroll', aberto);
    if (abrir) { abrir.setAttribute('aria-expanded', String(aberto)); }
    if (aberto && fechar) { fechar.focus(); }
    else if (!aberto && abrir) { abrir.focus(); }
  }

  if (abrir)  { abrir.addEventListener('click', function () { alternaMenu(true); }); }
  if (fechar) { fechar.addEventListener('click', function () { alternaMenu(false); }); }
  if (menu) {
    $$('a', menu).forEach(function (a) {
      a.addEventListener('click', function () { alternaMenu(false); });
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) { alternaMenu(false); }
  });

  /* ------------------------------------------------------------------------
     5. Acordeões (objeções e FAQ)
     ------------------------------------------------------------------------ */
  $$('[data-accordion]').forEach(function (grupo) {
    $$('.accordion__trigger', grupo).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item  = btn.closest('.accordion__item');
        var aberto = item.classList.contains('is-open');

        $$('.accordion__item', grupo).forEach(function (outro) {
          outro.classList.remove('is-open');
          var t = $('.accordion__trigger', outro);
          if (t) { t.setAttribute('aria-expanded', 'false'); }
        });

        if (!aberto) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     6. Máscara de telefone
     ------------------------------------------------------------------------ */
  var campoWa = $('#whatsapp');
  if (campoWa) {
    campoWa.addEventListener('input', function () {
      var d = digitos(campoWa.value).slice(0, 11);
      var out = d;
      if (d.length > 2) { out = '(' + d.slice(0, 2) + ') ' + d.slice(2); }
      if (d.length > 7) {
        var corte = d.length > 10 ? 7 : 6;
        out = '(' + d.slice(0, 2) + ') ' + d.slice(2, corte) + '-' + d.slice(corte);
      }
      campoWa.value = out;
    });
  }

  /* ------------------------------------------------------------------------
     7. Formulário de agendamento
     ------------------------------------------------------------------------ */
  var form    = $('#formAgendamento');
  var wrap    = $('#formWrap');
  var sucesso = $('#formSuccess');

  function erro(campo, tem) {
    var field = campo.closest('.field');
    if (field) { field.classList.toggle('has-error', tem); }
    campo.setAttribute('aria-invalid', String(tem));
  }

  if (form) {
    $$('input, select', form).forEach(function (c) {
      c.addEventListener('input',  function () { erro(c, false); });
      c.addEventListener('change', function () { erro(c, false); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nome      = $('#nome');
      var whats     = $('#whatsapp');
      var interesse = $('#interesse');
      var periodoEl = $('input[name="periodo"]:checked', form);
      var periodo   = periodoEl ? periodoEl.value : 'Tanto faz';
      var invalido  = false;

      if (!nome.value.trim() || nome.value.trim().length < 2) { erro(nome, true); invalido = true; }
      if (digitos(whats.value).length < 10) { erro(whats, true); invalido = true; }
      if (!interesse.value) { erro(interesse, true); invalido = true; }

      if (invalido) {
        var primeiro = $('.field.has-error input, .field.has-error select', form);
        if (primeiro) { primeiro.focus(); }
        return;
      }

      var mensagem =
        'Olá, vim pela página da ' + (cfg.nome || 'clínica') + ' e gostaria de agendar uma avaliação.\n\n' +
        'Nome: ' + nome.value.trim() + '\n' +
        'WhatsApp: ' + whats.value.trim() + '\n' +
        'Interesse: ' + interesse.value + '\n' +
        'Melhor período: ' + periodo;

      var destino = linkWhatsApp(mensagem);
      var waBtn   = $('#successWa');
      if (waBtn) { waBtn.setAttribute('href', destino); }

      function mostraSucesso() {
        if (wrap)    { wrap.classList.add('is-sent'); }
        if (sucesso) {
          sucesso.classList.add('is-visible');
          sucesso.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }

      if (cfg.formModo === 'endpoint' && cfg.formEndpoint) {
        var dados = new FormData(form);
        fetch(cfg.formEndpoint, { method: 'POST', body: dados, headers: { Accept: 'application/json' } })
          .then(mostraSucesso)
          .catch(mostraSucesso);
      } else {
        window.open(destino, '_blank', 'noopener');
        mostraSucesso();
      }
    });
  }

  /* ------------------------------------------------------------------------
     8. Revelação suave ao rolar
     ------------------------------------------------------------------------ */
  var alvos = $$('[data-reveal]');
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduz) {
    alvos.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px' });

    alvos.forEach(function (el) { obs.observe(el); });
  }

})();
