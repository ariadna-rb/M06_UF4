const input = document.getElementById('ingresar-tarea');
const buton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTares(){
    if (input.value){
        //Creación de tarea
         let tareaNueva = document.createElement('div');
         tareaNueva.classList.add('tarea');

         //Texto que escribe el usuario
         let texto = document.createElement('p');
         texto.innerText = input.value;
         tareaNueva.appendChild(texto);

         //Crear y agregar contenedor de iconos
         let iconos = document.createElement('div');
         iconos.classList.add('iconos');
         tareaNueva.appendChild(iconos);

         //Iconos
         let completar = document.createElement('i');
         completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
         completar.addEventListener('click', completarTarea);
       
         let eliminar = document.createElement('i');
         eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
         eliminar.addEventListener('click', eliminarTarea);
       
         iconos.append(completar, eliminar);

        // Agregar la tarea a la lista.
        listaDeTareas.appendChild(tareaNueva);
        
        } else {
        alert('Por favor ingresa una tarea.');
        }

    }

// Marcar una tarea como completada.
function completarTarea(e) {
let tarea = e.target.parentNode.parentNode;
tarea.classList.toggle('completada');
}

// Eliminar una tarea del DOM.
function eliminarTarea(e) {
let tarea = e.target.parentNode.parentNode;
tarea.remove();
}