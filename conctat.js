document.addEventListener('DOMContentLoaded', function () {

    emailjs.init("gZfsxNpF3I47WOqkT");

    const form = document.getElementById('contactForm');
    const erro = document.getElementById('erro');
    const enviarBtn = document.getElementById('enviarBtn');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        erro.style.display = 'none';
        erro.textContent = '';
        erro.style.color = '#e74c3c';

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const topico = document.getElementById('topico').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        const letrasSemEspacos = mensagem.replace(/\s+/g, '').length;

        // Validações
        if (!nome || !email || !topico || !mensagem) {
            mostrarErro("Preencha todos os campos.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            mostrarErro("Email inválido.");
            return;
        }

        if (letrasSemEspacos <= 10) {
            mostrarErro("A mensagem deve ter mais de 10 letras.");
            return;
        }

        enviarBtn.disabled = true;
        enviarBtn.textContent = "A ENVIAR...";
        emailjs.send(
            "AQUI_TEUS_SERVICE_ID",
            "AQUI_TEUS_TEMPLATE_ID",
            "template_11cs1pn",
            {
                nome: nome,
                email: email,
                topico: topico,
                mensagem: mensagem
            }
        )
        .then(() => {
            erro.style.display = 'block';
            erro.style.color = '#27ae60';
            erro.textContent = "Mensagem enviada com sucesso!";
            form.reset();
        })
        .catch(() => {
            mostrarErro("Erro ao enviar. Tente novamente.");
        })
        .finally(() => {
            enviarBtn.disabled = false;
            enviarBtn.textContent = "ENVIAR MENSAGEM";
        });
    });

    function mostrarErro(msg) {
        erro.style.display = 'block';
        erro.style.color = '#e74c3c';
        erro.textContent = msg;
    }

});
