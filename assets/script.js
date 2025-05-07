const loginForm = document.getElementById("formulario-login");
const cadastroForm = document.getElementById("formulario-cadastro");

const mostreLogin = document.getElementById("mostre-login");
const mostreCadastro = document.getElementById("mostre-cadastro");

mostreCadastro.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    cadastroForm.classList.remove("hidden");
    document.title = "Cadastrar";
})

mostreLogin.addEventListener("click", (e) => {
    e.preventDefault();
    cadastroForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    document.title = "Login";
})