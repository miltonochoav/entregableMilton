/*
 * a y b son los parámetros de entrada.
 * La función debe devolver la suma de los parámetros de entrada
 * Debes generar el código para que la función haga lo solicitado.
 */

const suma = (a, b) => {
  return a + b;
};
console.log(suma(21, 47));

// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Debes generar el código para que la función haga lo solicitado.
const sonIguales = (x, y) => {
  return x === y;
};
console.log(sonIguales(3, 2)); //false
console.log(sonIguales(5, 5)); //true

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:
function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length;
}
console.log(tienenMismaLongitud("Cinco", "Siete")); //true
console.log(tienenMismaLongitud("Mauricio", "Milton")); //false

/**
 * la función recibe como parámetro de entrada un número entero.
 * Devuelve como resultado una cadena de texto que indica si el
 * número es positivo o negativo.
 * Si el número es positivo, devolver ---> "Es positivo"
 * Si el número es negativo, devolver ---> "Es negativo"
 * Si el número es 0, devuelve false
 * Tu código:
 */

function esPositivo(numero) {
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  }
}
console.log(esPositivo(15));
console.log(esPositivo(-19));
