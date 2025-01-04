// Seleciona todos os elementos com a classe .letras
const textElements = document.querySelectorAll('.letras');

// Função para adicionar o efeito de fuga
function addFugirEffect(textElement) {
  // Divide o texto em letras, preservando espaços como elementos separados
  const text = textElement.innerText;
  textElement.innerText = ''; // Limpa o texto original

  // Substitui cada espaço por um caractere especial para preservá-lo
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.innerText = char === ' ' ? '\u00A0' : char; // Substitui espaços por &nbsp;
    span.style.display = 'inline-block'; // Garante que as letras fiquem na mesma linha
    textElement.appendChild(span);
  });

  // Adiciona o efeito de fuga
  const letters = textElement.querySelectorAll('span');
  document.addEventListener('mousemove', event => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    letters.forEach(letter => {
      const rect = letter.getBoundingClientRect();
      const letterX = rect.left + rect.width / 2;
      const letterY = rect.top + rect.height / 2;

      const deltaX = mouseX - letterX;
      const deltaY = mouseY - letterY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      const maxDistance = 170; // Distância máxima de repulsão
      const force = Math.max(0, maxDistance - distance) / maxDistance;

      const offsetX = force * -deltaX * 5; // Ajusta a força no eixo X
      const offsetY = force * -deltaY * 5; // Ajusta a força no eixo Y

      letter.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
}

// Aplica o efeito de fuga a todos os elementos .letras
textElements.forEach(textElement => {
  addFugirEffect(textElement);
});
