const textElement = document.getElementById('typewriter');
    const messages = [
      "Olá, sou desenvolvedor Full Stack",
      "Hi, I'm a Full Stack Developer"
    ];
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentMessage = messages[messageIndex];
      const displayedText = currentMessage.substring(0, charIndex);
      textElement.textContent = displayedText;

      if (!isDeleting && charIndex < currentMessage.length) {
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          messageIndex = (messageIndex + 1) % messages.length;
        }
        setTimeout(type, 800);
      }
    }

    type();