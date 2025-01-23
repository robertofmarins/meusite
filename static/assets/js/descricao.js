const imageContainers = document.querySelectorAll('.image-container');
const hoverText = document.getElementById('changeDescription');

// Adiciona eventos de hover para cada contêiner de imagem
imageContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    const description = container.getAttribute('data-description');
    hoverText.textContent = description; // Atualiza o texto com a descrição da imagem
  });

  container.addEventListener('mouseleave', () => {
    hoverText.textContent = '*passe o cursor do mouse no card para ler*'; // Restaura o texto original
  });
});
