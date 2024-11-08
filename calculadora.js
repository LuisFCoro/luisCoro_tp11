
let valor1 = 2; 
let valor2 = 2; 
let operacion = "sumar";


switch (operacion) {
    case "sumar":
        console.log(`El resultado de sumar ${valor1} + ${valor2} es ${valor1 + valor2}`);
        break;
    case "restar":
        console.log(`El resultado de restar ${valor1} - ${valor2} es ${valor1 - valor2}`);
        break;
    case "multiplicar":
        console.log(`El resultado de multiplicar ${valor1} * ${valor2} es ${valor1 * valor2}`);
        break;
    case "dividir":
        if (valor2 !== 0) {
            console.log(`El resultado de dividir ${valor1} / ${valor2} es ${valor1 / valor2}`);
        } else {
            console.log("No se puede dividir entre 0");
        }
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
}
