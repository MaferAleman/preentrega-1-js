//COMPRA DE ENTRADAS A FESTIVAL

alert("¡Hola, recuerde que tenemos un tiempo de espera!")

let usuario1 = "ale@gmail.com"
let contrasenia1= "1234"

function verificarCredenciales(usuario, contrasenia) {
    if (usuario === usuario1 && contrasenia === contrasenia1) {
        alert("¡Bienvenida, Alessandra!");
        return true;
    } else {
        alert("Datos incorrectos");
        return false;
    }
}

let usuario = prompt("Bienvenido/a a TicketStar. Por favor, ingrese su correo:")
let contrasenia = prompt("Ahora ingrese su contraseña")

// entrada a los conciertos solo para mayores de edad
let edad = Number(prompt("Ingrese su edad. Si eres menor, no podrás adquirir tu entrada."))
if(edad > 18){
    alert("¡Perfecto! Continúa con tu compra")
} else if(edad < 18){
    alert("Lo sentimos. Eres menor de edad, vuelve en unos años.")
}


// Elige la opción de qué cantante quieres ver

let opcion = parseInt(prompt("¿A qué concierto quieres asistir?\n1 - Andrés Calamaro\n2 - Gianmarco\n3 - Milena Wharton"));

switch (opcion) {
    case 1:
        alert("La entrada para Andrés Calamaro cuesta S/. 600.00");
        break;
    case 2:
        alert("La entrada para Gianmarco cuesta S/. 400.00");
        break;
    case 3:
        alert("La entrada para Milena Wharton cuesta S/. 300.00");
        break;
    default:
        alert("La opción ingresada es incorrecta");
        break;
}

alert("¡Gracias por visitarnos! Tus artistas cada vez más cerca de tu ciudad")

console.log(opcion)