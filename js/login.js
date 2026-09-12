const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;


    if (email === "" || password === "") {

        loginMessage.textContent =
            "Por favor, completa todos los campos.";

        return;
    }


    if (password.length < 6) {

        loginMessage.textContent =
            "La contraseña debe tener al menos 6 caracteres.";

        return;
    }


    loginMessage.textContent =
        "Inicio de sesión válido. ¡Bienvenido a Knight of Ruin!";

});