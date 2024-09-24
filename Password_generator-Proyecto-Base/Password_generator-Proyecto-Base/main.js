let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor que 8");
        return;
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;
    }
    
    contrasena.value = password;
}

function Borrar() {
    document.getElementById("contrasena").value = "";  // Limpiar el campo de contraseña
    document.getElementById("cantidad").value = "";    // Limpiar el campo de cantidad (opcional)
}












