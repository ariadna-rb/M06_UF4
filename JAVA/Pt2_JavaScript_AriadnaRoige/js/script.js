var contenido = document.getElementById("contenido");
contenido.innerHTML = "Mi Nomnbre Es Ari";

console.log("Probando la Consola: Hola");

//VARIABLES
var mensaje = "Hola" //String o cadenas
console.log(mensaje);

var num1 = 8; //datos numericos
var num2 = 10;
console.log(num1+num2);

var activo = true; //datos booleanos

var saludo = mensaje; //a una variable se le asigna el valor de otra
console.log(saludo);

//CONDICIONES
function saludar2(){
    var saludo = "Hola, esto es JS";
    var antiSaludo = "No me digas nada, odio JS";
    var contento = true;

    if (contento === true){
        console.log(saludo);
    }else{
        console.log(antiSaludo);
    }

}

//LOOPS - BUCLES

var a3d2 = ["Sebas", "Fu", "Aina", "Laura", "Oscar", "Gerard", "Javi", "Marta", "Jordi", "Adri"]
function saludar3(nombre){
    console.log("Hola, "+nombre)
}

a3d2.forEach(function(elem){
    saludar3(elem);
})