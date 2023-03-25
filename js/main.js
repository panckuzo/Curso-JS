alert("Bienvenid@ a Simple Deco!")


let tipoUsuario = prompt("Ingrese su tipo de usuario (mayorista o minorista):")

while (tipoUsuario.toLowerCase() !== "mayorista" && tipoUsuario.toLowerCase() !== "minorista") 
    {
    tipoUsuario = prompt("El tipo de usuario ingresado no es válido. Por favor, ingrese 'mayorista' o 'minorista':")
    }
    if (tipoUsuario.toLowerCase() !== "mayorista" && tipoUsuario.toLowerCase() !== "minorista") 
        { alert("El tipo de usuario ingresado no es válido. Por favor, ingrese 'mayorista' o 'minorista'.") }
    
    if (tipoUsuario.toLowerCase() === "mayorista") 
    { alert("Bienvenido, usted es un usuario mayorista.") } 
    else if (tipoUsuario.toLowerCase() === "minorista") 
    { alert("Bienvenido, usted es un usuario minorista.") }

while (tipoUsuario.toLowerCase() === "mayorista")
    {
    const nombreUsuario = prompt("Ingrese su nombre de usuario: \n (dato para el tutor el usuario es jose)")

    if (nombreUsuario.toLowerCase() === "jose") 
    {
    let contraseña = prompt("Ingrese su contraseña: \n (dato para el tutor la contraseña es 1234)")

    while (contraseña !== "1234") 
    {
    contraseña = prompt("La contraseña ingresada no es válida. Por favor, vuelva a intentarlo:")
    }

    alert("Bienvenido, usted es un usuario mayorista. \n Usted tiene un 20% de descuento en la tienda.")
    break
    } 
    else 
    {
    alert("El usuario ingresado no es valido")
    }
    }


    let precio = 0

function carrito() {
let producto = prompt("¿Qué producto desea agregar al carrito? (solo marque el número asignado al producto) \n ESPEJOS:\n 1-Juana macrame($4000)\n 2-Alondra mediano($6000) \n 3-Sol grande ($5000) \n LAMPARAS \n 4-Alma ($9000) \n 5-Libertad ($6000) \n CESTOS: \n 6-Damasco ($4000) \n 7-Brisa ($5000) \n 8-Leñero ($7000) \n 9-Cala ($6000) \n 10-Brasil ($6000)")

    switch (producto) 
    {
    case "1":
        precio += 4000
        break
    case "2":
        precio += 6000
        break
    case "3":
        precio += 5000
        break
    case "4":
        precio += 9000
        break
    case "5":
        precio += 6000
        break
    case "6":
        precio += 4000
        break
    case "7":
        precio += 5000
        break
    case "8":
        precio += 7000
        break
    case "9":
        precio += 6000
        break
    case "10":
        precio += 6000
        break
    default:
        alert("Opción no válida")
        break
    }

let confirmacion = confirm("¿Desea agregar otro producto al carrito?")
if (confirmacion) 
    {
    carrito()
    }
}

carrito();
alert("El total a pagar es: $" + precio)
