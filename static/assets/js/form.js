document
        .getElementById("form")
        .addEventListener("submit", async function (event) {
          event.preventDefault(); // Impede o envio padrão do formulário

          const form = event.target;
          const formData = new FormData(form);

          try {
            const response = await fetch("/submit", {
              method: "POST",
              body: formData,
            });

            if (response.ok) {
              const message = await response.text();
              document.getElementById("response-message").textContent = message;
              form.reset(); // Limpa o formulário após o envio
            } else {
              document.getElementById("response-message").textContent =
                "Erro ao enviar os dados.";
            }
          } catch (error) {
            document.getElementById(
              "response-message"
            ).textContent = `Erro: ${error.message}`;
          }
        });