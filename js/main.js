(function () {
  'use strict';

  // >>> Troque pelo WhatsApp da MVZ (apenas números, com 55 + DDD) <<<
  var WHATSAPP = '5534900000000';

  // Botão flutuante usa o mesmo número
  document.getElementById('wpp').href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent('Olá! Vim pelo site da MVZ Consultoria.');

  // Menu mobile
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  btn.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    btn.setAttribute('aria-expanded', aberto);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('aberto');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Formulário -> WhatsApp
  var aviso = document.getElementById('aviso');
  document.getElementById('enviar').addEventListener('click', function () {
    var nome = document.getElementById('nome').value.trim();
    var empresa = document.getElementById('empresa').value.trim();
    var interesse = document.getElementById('interesse').value;
    var msg = document.getElementById('msg').value.trim();

    if (!nome || !msg) {
      aviso.textContent = 'Preencha seu nome e a mensagem para enviar.';
      return;
    }
    aviso.textContent = '';
    var texto = 'Olá! Meu nome é ' + nome +
      (empresa ? ' (' + empresa + ')' : '') +
      '. Tenho interesse em: ' + interesse + '.\n\n' + msg;
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  });

  // Ano do rodapé
  document.getElementById('ano').textContent = new Date().getFullYear();
})();
