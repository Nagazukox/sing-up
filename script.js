//Buscar el botón con clase "buttonClass" en html
const button = document.querySelector(".buttonClass");
//Buscar el input con id "contraseña" y "confirmar_contraseña" en html
const password = document.querySelector("#contraseña");
const confirmPassword = document.querySelector("#confirmar_contraseña");

//Función para validar que las contraseñas sean iguales
const validatePassword = () => {
    //Si la contraseña es igual a la confirmación de contraseña
    //Mostrar en consola el value de contraseña y confirmar contraseña

    console.log(password.value, confirmPassword.value);

    if (password.value !== confirmPassword.value) {
        //Cambiar el color del input a rojo
        confirmPassword.style.borderColor = "red";
        //Cambiar el color del input a rojo
        password.style.borderColor = "red";
        //Mostrar una alerta al usuario indicando que las contraseñas no son iguales
        alert("Las contraseñas no coinciden");
    };
};
    //Agregar el evento click al botón
    button.addEventListener("click", validatePassword);
