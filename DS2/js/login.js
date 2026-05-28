document.getElementById("form-login").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value.toLowerCase().trim();
    let senha = document.getElementById("senha").value;
    let erroDiv = document.getElementById("erro-login");
    let modalSucesso = document.getElementById("modal-sucesso");

    let usuario = JSON.parse(localStorage.getItem("usuarioSTONK"));

    if (usuario && email === usuario.email && senha === usuario.senha) {
        erroDiv.style.display = "none";
        modalSucesso.classList.add("active");
        setTimeout(() => {
            window.location.href = "./transacoes.html";
        }, 2000);
    } else {
        erroDiv.textContent = "Email ou senha incorretos!";
        erroDiv.style.display = "block";
    }
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