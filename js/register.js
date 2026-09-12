const registerForm = document.querySelector("#registerForm");
const registerMessage = document.querySelector("#registerMessage");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword =
        document.querySelector("#confirmPassword").value;


    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        registerMessage.textContent =
            "Por favor, completa todos los campos.";

        return;
    }


    if (name.length < 3) {

        registerMessage.textContent =
            "El nombre debe tener al menos 3 caracteres.";

        return;
    }


    if (password.length < 6) {

        registerMessage.textContent =
            "La contraseña debe tener al menos 6 caracteres.";

        return;
    }


    if (password !== confirmPassword) {

        registerMessage.textContent =
            "Las contraseñas no coinciden.";

        return;
    }


    registerMessage.textContent =
        "Registro válido. ¡Bienvenido a Knight of Ruin!";

});