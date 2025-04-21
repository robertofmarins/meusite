const habilidades = document.querySelectorAll('#habilidades .flex.flex-col');
const descricao = document.getElementById('descricao');

habilidades.forEach(habilidade => {
  habilidade.addEventListener('click', () => {
    // Remove a classe das outras
    habilidades.forEach(h => h.classList.remove('text-amber-600'));

    // Adiciona na clicada
    habilidade.classList.add('text-amber-600');

    // Atualiza a descrição
    descricao.textContent = habilidade.getAttribute('data-descricao');
  });
});
