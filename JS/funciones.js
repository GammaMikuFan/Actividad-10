// 1. Función para Votación
function ejercicio1_Voto() {
    let seccion = document.getElementById('voto').value;
    let mensaje = "";
    switch(seccion) {
        case 'norte': mensaje = "Voto registrado para la sección NORTE."; break;
        case 'sur': mensaje = "Voto registrado para la sección SUR."; break;
        case 'centro': mensaje = "Voto registrado para la sección CENTRO."; break;
        default: mensaje = "Sección no válida (usa norte, sur o centro).";
    }
    document.getElementById('res1').innerText = mensaje;
}

// 2. Función para Suma de Positivos
let suma = 0;
function ejercicio2_sumarPositivos() {
    let num = parseFloat(document.getElementById("numPositivo").value);
    if (num > 0) {
        suma += num;
    }

    document.getElementById("res2").innerText = "La suma total de los números positivos ingresados es: " + suma;
}

// 3. Función para Ordenar Números
function ejercicio3_ordenarNumeros() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let n3 = parseFloat(document.getElementById('num3').value);
    let arr = [n1, n2, n3].sort((a, b) => b - a);
    document.getElementById('res3').innerText = "Resultado: " + arr.join(", ");
}

// 4. Función para Impuestos
function ejercicio4_calcularImporteNeto() {
    let bruto = parseFloat(document.getElementById('importeBruto').value);
    let neto = bruto > 15000 ? bruto * 0.84 : bruto * 0.90;
    document.getElementById('res4').innerText = "Importe neto: " + neto.toFixed(2) + " €";
}

// 5. Función para Sueldo
function ejercicio5_calcularSueldo() {
    let anios = parseInt(document.getElementById('aniosEmpresa').value);
    let sueldo = 40000;
    if (anios > 10) sueldo *= 1.10;
    else if (anios > 5) sueldo *= 1.07;
    else if (anios > 3) sueldo *= 1.05;
    else sueldo *= 1.03;
    document.getElementById('res5').innerText = "Sueldo final: " + sueldo.toLocaleString() + " €";
}

// CICLOS

// 6. Función para Suma de Impares
function ejercicio6_sumaImpares() {
    let suma = 0;
    for (let i = 1; i <= 100; i += 2) {
        suma += i;
    }
    document.getElementById('res6').innerText = "Suma (1-100): " + suma;
}

// 7. Función para Asteriscos
function ejercicio7_mostrarAsteriscos() {
    let n = parseInt(document.getElementById('cantAsteriscos').value);
    let ast = "* ".repeat(n);
    document.getElementById('res7').innerText = ast;
}

// 8. Función para Tablas de Multiplicar
function ejercicio8_tablasMultiplicar() {
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += "<strong>Tabla del " + i + ":</strong><br>";
        for (let j = 1; j <= 10; j++) {
            res += i + " * " + j + " = " + i*j + "<br>";
        }
        res += "------------------------------------------------";
    }
    document.getElementById('res8').innerHTML = res;
}

// ARREGLOS

// 9. Funciones para Métodos de Arreglos
let paisesTrabajo = ["México", "España", "Colombia", "Argentina", "Perú", "Chile", "Brasil", "Francia", "Japón", "Canadá"];



function actualizarVista() {
    document.getElementById("vistaArreglo").innerText = "[" + paisesTrabajo.join(", ") + "]";
}

window.onload = function() {
    if(document.getElementById("vistaArreglo")) {
        actualizarVista();
    }
};

function Pop() {
    actualizarVista();
    document.getElementById("res9").innerHTML = "Eliminado (último): " + paisesTrabajo.pop();
}

function Shift() {
    actualizarVista();
    document.getElementById("res9").innerHTML = "Eliminado (primero): " + paisesTrabajo.shift();
}

function Push() {
    let nuevoPais = document.getElementById("pais").value;
    paisesTrabajo.push(nuevoPais);
    actualizarVista();
    document.getElementById("res9").innerHTML = "Agregado (final): " + nuevoPais;
}

function Unshift() {
    let nuevoPais = document.getElementById("pais").value;
    paisesTrabajo.unshift(nuevoPais);
    actualizarVista();
    document.getElementById("res9").innerHTML = "Agregado (inicio): " + nuevoPais;
}

function Splice() {
    let nuevoPais = document.getElementById("pais").value;
    let indice = document.getElementById("indice").value;
    paisesTrabajo.splice(indice, 1, nuevoPais);
    actualizarVista();
    document.getElementById("res9").innerHTML = "Se reemplazó en el indice " + indice + " por: "+nuevoPais;
}

function Delete() {
    let indice = document.getElementById("indice").value;
    delete paisesTrabajo[indice];
    actualizarVista();
    document.getElementById("res9").innerHTML = "Se borró el elemento en el indice " + indice;
}

function Reverse() {
    paisesTrabajo.reverse();
    actualizarVista();
    document.getElementById("res9").innerHTML = "Se invirtió el orden del arreglo"
}

function Sort() {
    paisesTrabajo.sort();
    actualizarVista();
    document.getElementById("res9").innerHTML = "Se ordenaron alfabeticamente los elementos del arreglo"
}

function Concat() {
    let primerPais = document.getElementById("pais").value;
    let segundoPais = document.getElementById("paisDos").value;
    let masPaises = [primerPais, segundoPais];
    paisesTrabajo = paisesTrabajo.concat(masPaises);
    actualizarVista();
    document.getElementById("res9").innerHTML = "Se agregaron los elementos: " + primerPais + " y " + segundoPais;
}

function Join() {
    let textoUnido = paisesTrabajo.join(" - ");
    actualizarVista();
    document.getElementById("res9").innerHTML = "El arreglo se convirtió en una cadena de texto:<br>" + textoUnido;
}

function Length() {
    actualizarVista();
    document.getElementById("res9").innerHTML = "La longitud del arreglo es: " + paisesTrabajo.length;
}