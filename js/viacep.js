// ======================================================
// VIACEP — busca automática de cidade/UF a partir do CEP
// ======================================================

const cepInput = document.getElementById('cep');
const cepHint = document.getElementById('cepHint');
const cidadeInput = document.getElementById('cidade');
const ufInput = document.getElementById('uf');

// máscara simples de CEP (00000-000)
cepInput.addEventListener('input', () => {
  let value = cepInput.value.replace(/\D/g, '').slice(0, 8);
  if (value.length > 5) value = value.slice(0, 5) + '-' + value.slice(5);
  cepInput.value = value;
});

// consulta a API ViaCEP quando o campo perde o foco
cepInput.addEventListener('blur', async () => {
  const raw = cepInput.value.replace(/\D/g, '');

  cepHint.textContent = '';
  cepHint.className = 'cep-hint';
  cidadeInput.value = '';
  ufInput.value = '';

  if (raw.length === 0) return;

  if (raw.length !== 8) {
    cepHint.textContent = 'CEP incompleto.';
    cepHint.className = 'cep-hint err';
    return;
  }

  cepHint.textContent = 'Buscando endereço...';

  try {
    const response = await fetch(`https://viacep.com.br/ws/${raw}/json/`);
    const data = await response.json();

    if (data.erro) {
      cepHint.textContent = 'CEP não encontrado.';
      cepHint.className = 'cep-hint err';
      return;
    }

    cidadeInput.value = data.localidade || '';
    ufInput.value = data.uf || '';
    cepHint.textContent = `${data.logradouro ? data.logradouro + ' — ' : ''}${data.bairro || ''}`;
    cepHint.className = 'cep-hint ok';
  } catch (err) {
    cepHint.textContent = 'Não foi possível consultar o CEP agora.';
    cepHint.className = 'cep-hint err';
  }
});
