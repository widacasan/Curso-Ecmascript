// La desestructuración (destructuring) consiste en extraer los valores de arrays o
//  propiedades de objetos en distintas variables.

// Desestructuración de objetos

// La desestructuración de objetos implica extraer las propiedades de un objeto en 
// variables. Mediante el mismo nombre de la propiedad del objeto con la siguiente
//  sintaxis:

const objeto = { 
    prop1: "valor1",
    prop2: "valor2",
    ... 
} 

// Desestructuración

const { prop1, prop2 } = objeto

// Antes de ES6, necesitabas acceder al objeto con la notación punto o corchetes por
//  cada propiedad que se necesita y asignar ese valor a una variable diferente.

var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'

// Con la desestructuración puedes realizar lo mismo, pero en una sola línea,
//  provocando que el código seas más legible y mantenible.

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'

// Cambiar el nombre de las variables con desestructuración

// Si no te agrada el nombre de la propiedad del objeto, puedes cambiarlo utilizando
//  la siguiente sintaxis:

const objeto = { prop1: "valor1", prop2: "valor2", ... } 

// Desestructuración

const { prop1: newProp1, prop2: newProp2 } = objeto

// Por ejemplo:

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name)  // 'Andres' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined

// Desestructuración en parámetros de una función

// Si envías un objeto como argumento en la invocación a la declaración de una función, 
// puedes utilizar la desestructuración en los parámetros para obtener los valores
//  directamente. Ten en cuenta que el nombre debe ser igual a la propiedad del objeto.

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi'

// Desestructuración de arrays

// La desestructuración de arrays consiste en extraer los valores de un array en 
// variables, utilizando la misma posición del array con una sintaxis similar a la
//  desestructuración de objetos.

const array = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = array

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3

// Desestructuración para valores retornados de una función

// Cuando una función retorna un array, puedes guardarlo en una variable. Por ende, 
// puedes utilizar la desestructuración para utilizar esos valores por separado de 
// manera legible.

// En el siguiente ejemplo, la función useState retorna un array con dos elementos:
//  un valor y otra función actualizadora.

function useState(value){
    return [value, updateValue()]
}

//Sin desestructuración 
const estado = useState(3)
const valor = estado[0]
const actualizador = estado[1]

//Con desestructuración 
const [valor, actualizador] = useState(3)

// Lo que puedes hacer con desestructuración, pero no es recomendable
// Si necesitas un elemento en cierta posición, puedes utilizar la separación por 
// comas para identificar la variable que necesitas.

const array = [ 1, 2, 3, 4, 5 ]

const [ ,,,,  cinco ] = array

console.log(cinco) // 5

// Como los arrays son un tipo de objeto, puedes utilizar la desestructuración de
//  objetos mediante el índice y utilizando un nombre para la variable.

const array = [ 1, 2, 3, 4, 5 ]

const {4: cinco} = array

console.log(cinco) // 5


// El operador de propagación (spread operator), como su nombre lo dice, consiste en
//  propagar los elementos de un iterable, ya sea un array o string utilizando tres 
//  puntos (...) dentro de un array.

// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]

// También se utiliza para objetos, pero esta característica fue añadida en versiones
//  posteriores de ECMAScript y es denominada propiedades de propagación.

// Cómo copiar arrays utilizando el operador de propagación

// Para realizar una copia de un array, deberás tener cuidado de la referencia en 
// memoria. Los arrays se guardan en una referencia en la memoria del computador, 
// al crear una copia, este tendrá la misma referencia que el original. Debido a esto, 
// si cambias algo en la copia, también lo harás en el original.

const originalArray = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

originalArray // [0,2,3,4,5]
originalArray === copyArray  // true

// Para evitar esto, utiliza el operador de propagación para crear una copia del array
//  que utilice una referencia en memoria diferente al original.

const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false

// Cómo unir arrays y añadir elementos con el operador de propagación

// Para unir dos arrays con el operador de propagación, simplemente debes separarlos
//  por comas en un array.

const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]

otherArray // [1,2,3,4,5,6,7]

// Cuidado con la copia en diferentes niveles de profundidad

// El operador de propagación sirve para producir una copia en un solo nivel de 
// profundidad, esto quiere decir que si existen objetos o arrays dentro del array 
// a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia
//  de memoria en la copia y en el original.

const originalArray = [1, [2,3] ,4,5]
const copyArray = [...originalArray]

originalArray[1] === copyArray[1] // true

// La manera de solucionar es más compleja, tendrías que emplear el operador de
//  propagación para cada elemento en cada nivel de profundidad.

// Sin embargo, recientemente salió una forma de producir una copia profunda con 
// StructuredClone, aunque es una característica muy reciente, así que revisa que 
// navegadores tienen soporte.

const originalArray = [1, [2,3] ,4,5]
const copyArray = structuredClone(originalArray)

originalArray === copyArray  // false
originalArray[1] === copyArray[1] // false

// Este comportamiento también sucede para objetos dentro de otros objetos, u objetos
//  dentro de arrays.

// Parámetro rest

// El parámetro rest consiste en agrupar el residuo de elementos mediante la sintaxis
//  de tres puntos (...) seguido de una variable que contendrá los elementos en un array.

// Esta característica sirve para crear funciones que acepten cualquier número de
//  argumentos para agruparlos en un array.

function hola (primero, segundo, ...resto) {
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5)

// También sirve para obtener los elementos restantes de un array u objeto usando
//  desestructuración.

const objeto = {
  nombre: "Andres",
  age: 23,
  plataforma: "Platzi"
}
const array = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto
cons [cero, ...positivos] = array

usuario // { nombre: 'Andres', age: 23 }
positivos // [ 1, 2, 3, 4, 5 ]

// Posición del parámetro rest

// El parámetro rest siempre deberá estar en la última posición de los parámetros de
//  la función, caso contrario existirá un error de sintaxis.

// ❌ Mal
function hola (primero, ...rest, ultimo) { ... }
// SyntaxError: Rest element must be last element. 

// Diferencias entre el parámetro rest y el operador de propagación
// Aunque el parámetro rest y el operador de propagación utilicen la misma sintaxis,
//  son diferentes.

// El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última
//  posición, mientras que el operador de propagación expande los elementos de un
//   iterable en un array y no importa en que lugar esté situado.

const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")