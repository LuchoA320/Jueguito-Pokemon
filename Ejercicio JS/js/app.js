// function sumar (valor1, valor2) {
//     const resultado = valor1 + valor2;
//     return resultado;
// }

// function restar (valor1, valor2) {
//     const resultado = valor1 - valor2;
//     return resultado;
// }

// function multiplicar (valor1, valor2) {
//     const resultado = valor1 * valor2;
//     return resultado;
// }

// function dividir (valor1, valor2) {
//     const resultado = valor1 / valor2;
//     return resultado;
// }


// function calculadora() {
//     const valor1 = parseInt(prompt("Ingrese el primer numero"));
//     const valor2 = parseInt(prompt("Ingrese el segundo numero"));
//     const operacion = prompt("¿Que operacion quiere realizar? \n. + \n. - \n. * \n. /");


//     switch(operacion){
//         case "+":
//             alert("El resultado de la operacion es " + sumar(valor1, valor2));
//             break;
//         case "-":
//             alert("El resultado de la operacion es " + restar(valor1, valor2));
//             break;
//         case "*":
//             alert("El resultado de la operacion es " + multiplicar(valor1, valor2));
//             break;
//         case "/":
//             alert("El resultado de la operacion es " + dividir(valor1, valor2));
//             break;
//         default:
//             alert("El valor ingresado no es valido.")

//     }
// }

const nombre_producto = "Celular Samsung";
const stock_producto = 25;
const precio_producto = 100000;

const celularSamsung = {
    nombre: "Celular Samsung",
    stock: 25,
    precio: 100000,
}

function Producto(nombre, stock, precio, categoria){
    this.nombre= nombre;
    this.stock= stock;
    this.precio= precio;
    this.categoria= categoria
}

const celuXiaomi = new Producto("Xiaomi", 25, 100000, "Celular");
const celuSamsung = new Producto("Samsung", 12, 200000, "Celular");
const celuMotorola = new Producto("Motorola", 21, 150000, "Celular");
const notebookLenovo = new Producto("Notebook Lenovo", 41, 300000, "Notebook");