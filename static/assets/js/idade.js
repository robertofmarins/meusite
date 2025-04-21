function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  }

  // Defina sua data de nascimento aqui: 'AAAA-MM-DD'
  const minhaIdade = calcularIdade('1988-09-07');
  document.getElementById('idade').textContent = minhaIdade;