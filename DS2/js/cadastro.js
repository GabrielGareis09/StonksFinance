const formCadastro = document.getElementById("form-cadastro");
const modalSucesso = document.getElementById("modal-sucesso");

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    let usuario = {
        email: document.getElementById("email").value.toLowerCase().trim(),
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("tel").value,
        senha: document.getElementById("senha").value
    };

    if (usuario.email === "" || usuario.senha === "") {
        alert("Preencha os campos obrigatórios.");
        return;
    }

    localStorage.setItem("usuarioSTONK", JSON.stringify(usuario));
    modalSucesso.classList.add("active");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});

 const cpfInput = document.getElementById("cpf");

    cpfInput.addEventListener("input", () => {
        let valor = cpfInput.value;

        // remove tudo que não for número
        valor = valor.replace(/\D/g, "");

        // coloca a máscara
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        cpfInput.value = valor;
    });



    const telefoneInput = document.getElementById("tel");

    telefoneInput.addEventListener("input", () => {
        let valor = telefoneInput.value;

        // remove tudo que não for número
        valor = valor.replace(/\D/g, "");

        // máscara
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

        telefoneInput.value = valor;
    });

    function toggleSenha(idCampo, icone) {
    let campo = document.getElementById(idCampo);

    if (campo.type === "password") {
        campo.type = "text";
        icone.classList.remove("fa-eye");
        icone.classList.add("fa-eye-slash");
    } else {
        campo.type = "password";
        icone.classList.remove("fa-eye-slash");
        icone.classList.add("fa-eye");
    }
}