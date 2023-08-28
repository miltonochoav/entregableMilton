console.log("Ejercicio 01 - funcion suma");
/*
 * a y b son los parámetros de entrada.
 * La función debe devolver la suma de los parámetros de entrada
 * Debes generar el código para que la función haga lo solicitado.
 */
const suma = (a, b) => {
  return a + b;
};
console.log(suma(27, 47)); //74

console.log("***");
console.log("Ejercicio 02 - son iguales");
// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Debes generar el código para que la función haga lo solicitado.
const sonIguales = (x, y) => {
  return x === y;
};
console.log(sonIguales(3, 2)); //false
console.log(sonIguales(5, 5)); //true

console.log("***");
console.log("Ejercicio 03 - longitud de string");
// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
const tienenMismaLongitud = (str1, str2) => str1.length === str2.length;
console.log(tienenMismaLongitud("Cinco", "Siete")); //true
console.log(tienenMismaLongitud("Mauricio", "Milton")); //false

console.log("***");
console.log("Ejercicio 04 - es positivo");
/**
 * la función recibe como parámetro de entrada un número entero.
 * Devuelve como resultado una cadena de texto que indica si el
 * número es positivo o negativo.
 * Si el número es positivo, devolver ---> "Es positivo"
 * Si el número es negativo, devolver ---> "Es negativo"
 * Si el número es 0, devuelve false
 */
const esPositivo = (numero) => {
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  }
};
console.log(esPositivo(15));
console.log(esPositivo(-19));

console.log("***");
console.log("Ejercicio 05 - colors");
//La función recibe un color. Devolver el string correspondiente:
//En caso que el color recibido sea "blue", devuelve --> "This is blue"
//En caso que el color recibido sea "red", devuelve --> "This is red"
//En caso que el color recibido sea "green", devuelve --> "This is green"
//En caso que el color recibido sea "orange", devuelve --> "This is orange"
//Caso default: devuelve --> "Color not found"
//Usar el statement Switch.
const colors = (color) => {
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
};
console.log(colors("blue")); // Resultado: "This is blue"
console.log(colors("red")); // Resultado: "This is red"
console.log(colors("green")); // Resultado: "This is green"
console.log(colors("orange")); // Resultado: "This is orange"
console.log(colors("yellow")); // Resultado: "Color not found"

console.log("***");
console.log("Ejercicio 06 - fizzbuzz");
// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero
const fizzBuzz = (numero) => {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else {
    return numero;
  }
};
console.log(fizzBuzz(3)); // Resultado: "fizz"
console.log(fizzBuzz(5)); // Resultado: "buzz"
console.log(fizzBuzz(15)); // Resultado: "fizzbuzz"
console.log(fizzBuzz(7)); // Resultado: 7

console.log("***");
console.log("Ejercicio 07 - primer elemento");
/**
 * La función recibe como parámetro de entrada un arreglo.
 * La función debe regresar el primer elemento del arreglo
 */

const array = [111, 222, 333, 444, 555, 666, 777, 888, 999];

const devolverPrimerElemento = (array) => {
  return array[0];
};
console.log(devolverPrimerElemento(array));
console.log(`El primer elemento es: ${devolverPrimerElemento(array)}`);

console.log("***");
console.log("Ejercicio 08 - agregar al final");
/**
 * La función recibe dos parámetros de entrada, un arreglo y un elemento
 * Se debe añadir el elemento al final del arreglo y luego regresar el arreglo
 */
console.log(`Array original: ${array}`);

const agregarItemAlFinalDelArray = (array, elemento) => {
  array.push(elemento);
  return array;
};
let nuevoElemento = 24725;
let arrayConNuevoElemento = agregarItemAlFinalDelArray(array, nuevoElemento);

console.log(`Array con nuevo elemento: ${arrayConNuevoElemento}`);

console.log("***");
console.log("Ejercicio 09 - nuevo usuario");
/**
 * Crea un nuevo objeto con las propiedades coincidiendo con los argumentos
 * que se pasan a la función.  Devuelve el objeto
 */
const nuevoUsuario = (nombre, email, password) => {
  const usuario = {
    nombre: nombre,
    email: email,
    password: password,
  };
  return usuario;
};

const usuario1 = nuevoUsuario(
  "Mateo",
  "mateo.delgado.pereira@gmail.com",
  "contraseña123"
);
console.log(usuario1);

console.log("***");
console.log("Ejercicio 10 - comprueba password");
// Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
// Devuelve "true" si coinciden
// De lo contrario, devuelve "false"
const verificarPassword = (usuario, password) => {
  return usuario.password === password;
};
console.log(verificarPassword(usuario1, "contraseña123")); // Devuelve true
console.log(verificarPassword(usuario1, "contraseña456")); // Devuelve false

console.log("***");
console.log("Ejercicio 11 - reemplaza password");
// Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
// Devuelve el objeto
const actualizarPassword = (usuario, nuevaPassword) => {
  usuario.password = nuevaPassword;
  return usuario;
};

console.log(usuario1); // Antes de la actualización
actualizarPassword(usuario1, "nuevaContraseña456");
console.log(usuario1); // Después de la actualización

console.log("***");
console.log("Ejercicio 12 - agregar amigo");
// "usuario" tiene una propiedad llamada "amigos" que es un array
// Agrega "nuevoAmigo" al final de ese array
// Devuelve el objeto "usuario"
const agregarAmigo = (usuario, nuevoAmigo) => {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
};
const usuario2 = {
  nombre: "Milton",
  email: "milton.ochoa.velez@gmail.com",
  password: "miContraseña123",
  amigos: ["Juan", "Pedro"],
};

console.log(usuario2); //Antes de agregar un nuevo amigo.
agregarAmigo(usuario2, "Sebastián");
console.log(usuario2); //Después de agregar un nuevo amigo.

console.log("***");
console.log("Ejercicio 13 - es premium");
// "usuarios" es un array de objetos "usuario"
// Cada objeto "usuario" tiene la propiedad "esPremium"
// Define cada propiedad "esPremium" de cada objeto como "true"
// Devuelve el array de usuarios
const pasarUsuarioAPremium = (usuarios) => {
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
};

const listaUsuarios = [
  { nombre: "Cristina", esPremium: false },
  { nombre: "Camilo", esPremium: false },
  { nombre: "Milton", esPremium: false },
];

console.log(listaUsuarios); // Antes de actualizar a Premium
pasarUsuarioAPremium(listaUsuarios);
console.log(listaUsuarios); // Después de actualizar a Premium

console.log("***");
console.log("Ejercicio 14 - sumar likes");
// "usuario" tiene una propiedad llamada "posts" que es un array
// "posts" es un array de objetos "post"
// Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
// Suma todos los likes de todos los objetos "post"
// Devuelve la suma
const sumarLikesDeUsuario = (usuario) => {
  let sumaLikes = 0;

  for (const post of usuario.posts) {
    sumaLikes += post.likes;
  }

  return sumaLikes;
};

const usuario3 = {
  nombre: "Joaquin",
  posts: [{ likes: 470 }, { likes: 210 }, { likes: 56 }],
};

const totalLikes = sumarLikesDeUsuario(usuario3);
console.log(`El total de likes es: ${totalLikes}`);

console.log("***");
console.log("Ejercicio 15 - clase persona");
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con
//las propiedades de la persona y sus valores.
class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }

  detalle() {
    return {
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Domicilio: this.domicilio,
    };
  }
}

const persona1 = new Persona("Milton", "Ochoa Vélez", 41, "Calle falsa 123");
const detallesPersona1 = persona1.detalle();
console.log(detallesPersona1);

console.log("***");
console.log("Ejercicio 16 - instancia persona");
//Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
//Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
//Devolver la nueva persona creada.
const crearInstanciaPersona = (nombre, apellido, edad, dir) => {
  return new Persona(nombre, apellido, edad, dir);
};

const nuevaPersona = crearInstanciaPersona("Juan", "Perez", 22, "Saavedra 123");
const detallesNuevaPersona = nuevaPersona.detalle();
console.log(detallesNuevaPersona);

console.log("***");
console.log("Ejercicio 17 - sumar enteros de array");
// Suma todos los números enteros (int/integers) de un array ("numeros")
// Pasa el resultado a `cb`
// No es necesario devolver nada
const sumarArray = (numeros, cb) => {
  const suma = numeros.reduce((total, numero) => total + numero, 0);
  cb(suma);
};

const numeros = [1, 2, 3, 4, 5, 6];
const callback = (resultado) => {
  console.log(`La suma es: ${resultado}`);
};
sumarArray(numeros, callback);

console.log("***");
console.log("Ejercicio 18 - iterar array");
// Itera sobre la matriz "array" y pasa los valores a cb uno por uno
// Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
// no tienes que devolver nada

const copiarEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    // Invoca la función de devolución de llamada `cb` con el elemento actual
    cb(array[i]);
  }
};

const miArray = [1, 2, 3, 4, 5];
const imprimirDoble = (num) => {
  console.log(num * 2);
};
copiarEach(miArray, imprimirDoble);

console.log("***");
console.log("Ejercicio 19 - operación matemática");
//Vamos a recibir una función (cb) que realiza una operación matemática junto con dos números.
//Devolver la función pasándole como argumentos los números recibidos.
const operacionMatematica = (n1, n2, cb) => {
  return cb(n1, n2);
};

const suma2 = (a, b) => a + b;
const resta = (a, b) => a - b;

const resultadoSuma = operacionMatematica(5, 3, suma2);
console.log(resultadoSuma); // Salida: 8

const resultadoResta = operacionMatematica(10, 4, resta);
console.log(resultadoResta); // Salida: 6

console.log("***");
console.log("Ejercicio 20 - palabras que inician con la 'a'.");
//Filtrar todos los elementos del array que comiencen con la letra "a".
//Devolver un nuevo array con los elementos que cumplen la condición.
function filter(array) {
  const filtraArray = array.filter((element) => element.startsWith("a"));
  return filtraArray;
}
const palabras = [
  "manzana",
  "banana",
  "uva",
  "pera",
  "albaricoque",
  "aceituna",
  "almendra",
];

const palabrasConA = filter(palabras);
console.log(`La que inicia con a: ${palabrasConA}.`);

module.exports = {
  suma,
  sonIguales,
  tienenMismaLongitud,
  esPositivo,
  colors,
  fizzBuzz,
  devolverPrimerElemento,
  agregarItemAlFinalDelArray,
  nuevoUsuario,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  Persona,
  crearInstanciaPersona,
  sumarArray,
  copiarEach,
  operacionMatematica,
  filter,
};
