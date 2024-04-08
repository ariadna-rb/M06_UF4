// Seleccionar los elementos del DOM.


// Funciones 

//Ej.1
function autoria(){
  //Código necesario para resolver el Ej1
    const miNombre = document.getElementById('nombre');
    document.addEventListener('click', miNombre);
    miNombre.style.color (red);
    miNombre.style.textAlign ('right');
    miNombre.style.fontSize ('40px');

}

// Ej.2
const crearP = document.getElementById('btnCrear'); 

if(document.addEventListener('click',crearP)){
    var parrafo = document.createElement("p");
}

crearP.style.color = 'white';
crearP.style.backgroundColor = 'black';
crearP.style.fontSize = '20px';
crearP.style.alignContent = 'center';


// Array con frases a emplear en el ejercicio
const frases = [
    "Cada día es una nueva oportunidad para aprender, crecer y acercarte a tus sueños. ¡No dejes que nada te detenga!",
    "El esfuerzo y la dedicación son la clave para alcanzar tus metas académicas. ¡Confía en ti mismo y sigue adelante!",
    "Recuerda que cada desafío que enfrentas en el aula es una oportunidad para fortalecer tu mente. ¡No te rindas, estás construyendo un futuro brillante!",
    "El conocimiento es un tesoro que nadie puede arrebatarte. Así que absorbe todo lo que puedas y prepárate para brillar con tu sabiduría.",
    "Tus estudios son el cimiento de tus logros futuros. Mantén tu determinación alta y tus metas aún más altas. ¡Puedes lograrlo!",
];

/* Aclaración: para acceder a uno de los elementos del array debes usar las fórmula nombre_array[índice]. 
Ten en cuenta el nombre del array para este caso y el índice aleatorio que usarás cada vez que se llame a la función
*/

function crear(){
    const aleatorio = Math.floor(Math.random() * frases.length); // Generación de un índice aleatorio
    //Código necesario para resolver el Ej2
   
}

// Ej.3
window.onload = function() {
    //Código necesario para resolver el Ej3
    const contadorP = document.querySelectorAll('p', 'div', 'dom');
    console.log(contadorP);
    var texto = document.createTextNode("Numero de parrafos en el DOM: " + contadorP);
    console.log (texto);

   
}    

// Ej.4
function borrar(){
    //Código necesario para resolver el Ej4

}

// Ej.5
function modif(){
   //Código necesario para resolver el Ej5
   const modif = document.getElementsByClassName('paneles');
   console.log(modif);
   if(document.addEventListener('mausedown',modif)){
    //modif.style.width = 100 px;
    //modif.style.


   }

}

function original(){
    //Código necesario para resolver el Ej5
}