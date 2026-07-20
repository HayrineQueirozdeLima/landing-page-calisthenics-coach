// ======================================================
// FORM — validação e mensagem de agradecimento
// ======================================================

const form = document.getElementById('contactForm');
const thanksBox = document.getElementById('thanksBox');
const thanksText = document.getElementById('thanksText');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const nome = document.getElementById('nome').value.trim();
  const primeiroNome = nome.split(' ')[0];

  thanksText.textContent = `Obrigado, ${primeiroNome}! Recebi sua inscrição e retorno em breve com os próximos passos da sua avaliação.`;
  thanksBox.classList.add('show');

  form.reset();
  document.getElementById('cidade').value = '';
  document.getElementById('uf').value = '';
  document.getElementById('cepHint').textContent = '';

  thanksBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
