const vueltas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const people = [
  {
    name: "Euralio",
    age: 87,
  },
  {
    name: "Eustaquio",
    age: 47,
  },
  {
    name: "Alfonsina",
    age: 67,
  },
];

for (let index = 0; index < people.length; index++) {
  //   console.log(people[index].name);
}

for (let i = 0; i < vueltas.length; i++) {
  //   console.log("Vuelta nº " + vueltas[i]);
}

let i = 0;

while (i < vueltas.length) {
  //   console.log("Vuelta nº " + vueltas[i]);
  i++;
}

for (let vuelta of vueltas) {
  //   console.log("Vuelta nº " + vuelta);
}
for (const iterator of people) {
  //   console.log(iterator.name);
}
const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
  //   console.log(person[x]);
}

// Utilizando el array del ejercicio anterior muestra sólo los números cuyo valor sea mayor de 5.
const numbers = [20, 41, 2, 7, 89, 23, 50, 4, 5, 6, 1, 3, 4];
// for (let index = 0; index < numbers.length; index++) {
//   console.log(numbers[index]);
// }
// for (const number of numbers) {
//     console.log(number)
// }
// for (const number in numbers) {
//     console.log(numbers[number])
// }
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 5) {
    // console.log(numbers[index]);
  }
}

for (const number of numbers) {
  if (number > 5) {
    // console.log(number)
  }
}

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola. Utiliza el bucle for of.
const mayores25 = [];
// for (let index = 0; index < gente.length; index++) {
//   if (gente[index].edad > 25) {
//     mayores25.push(gente[index])
//   }
// }
for (const persona of gente) {
  if (persona.edad > 25) {
    mayores25.push(persona);
  }
}
// console.log(mayores25);

// Crea un array con la gente que empieza por J. Utiliza el bucle for of y muéstralo por consola.
const genteJ = [];
for (let index = 0; index < gente.length; index++) {
  const persona = gente[index];
  const personaLetraInicial = persona.nombre[0];
  if (personaLetraInicial == "J") {
    genteJ.push(persona);
  }
}
// for (const persona of gente) {
//   if (persona.nombre[0] == "J") {
//     genteJ.push(persona);
//   }
// }
console.log(genteJ);
