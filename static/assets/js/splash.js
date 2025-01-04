const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Ajusta o tamanho do canvas para ocupar toda a tela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Array de partículas
    let particles = [];

    // Função para criar uma nova partícula
    function createParticle(x, y) {
      const angle = Math.random() * Math.PI * 2; // Direção aleatória
      const speed = Math.random() * 3 + 1; // Velocidade aleatória
      const radius = Math.random() * 3 + 2; // Raio aleatório das partículas
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Cor aleatória

      particles.push({
        x: x,
        y: y,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        radius: radius,
        color: color,
        opacity: 1, // Opacidade inicial
      });
    }

    // Função para atualizar e desenhar as partículas
    function updateParticles() {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        // Atualiza a posição da partícula
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Diminui a opacidade
        particle.opacity -= 0.001;

        // Remove partículas que desapareceram
        if (particle.opacity <= 0) {
          particles.splice(i, 1);
        } else {
          // Desenha a partícula
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity; // Aplica a opacidade
          ctx.fill();
        }
      }
    }

    // Função de animação
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
      updateParticles();
      requestAnimationFrame(animate); // Chama a função novamente
    }

    // Evento de movimento do mouse
    canvas.addEventListener("mousemove", (e) => {
      createParticle(e.clientX, e.clientY); // Cria partículas no ponto onde o mouse passa
    });

    // Inicia a animação
    animate();