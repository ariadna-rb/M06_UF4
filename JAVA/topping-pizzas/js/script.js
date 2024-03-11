/*
> Seleccionar Elementos con JavaScript.
*/

// Seleccionar elemento por id.

// Contenedor
const contenedor = document.getElementById('contenedor');
console.log(contenedor);
console.log(contenedor.innerHTML);
console.log(typeof contenedor.innerHTML);


const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(typeof titulo);
console.log(titulo.innerText);
console.log(typeof titulo.innerText);
console.log(titulo.tagName);

// Seleccionar elemento por clase.
const toppings = document.getElementsByClassName('toppings');
console.log(toppings);
console.log(toppings.length);
console.log(toppings[0]);
console.log(toppings[0].id);
console.log(toppings[1 /* 0,1,2,3 o 4 en este caso */ ]);

// Seleccionar elemento por etiquetaHTML.
const misToppings = document.getElementsByTagName('li');
console.log(misToppings);

const toppingsFondoMarron = document.getElementsByTagName('fondo-marron');
console.log(toppingsFondoMarron);


// Seleccionar elemento por SelectorCSS (Normal).

/* const aceitunas = document.querySelector('#aceitunas');
console.log(aceitunas); */
const aceitunas = document.querySelector('.topping' /* Primer elemenot que cumpla los requisitos */);
console.log(aceitunas);
console.log(typeof aceitunas);

const primerToppingNaranja = document.querySelector('.topping.fondo-naranja');
console.log(primerToppingNaranja);
console.log(typeof primerToppingNaranja);
/* const primerToppingNaranja = document.querySelector('ul li.fondo-naranja');
console.log(primerToppingNaranja); */
/* const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron); */

// Seleccionar elemento por SelectorCSS (All).

const toppingsFondoNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsFondoNaranja);
console.log(toppingsFondoNaranja[0]);
console.log(toppingsFondoNaranja[1]);
console.log(toppingsFondoNaranja.length);
console.log(typeof toppingsFondoNaranja);


//Assignar estilo con JavaScript
const primerTopping = document.querySelector('.topping' );
console.log(primerTopping);

