function agregarLista(){

//este es el contendeorcontenedor
var listas=document.getElementById("caja1");
//crea el div que contiene la tarea
var fila=document.createElement("div");
//var listas= document.createElement("div");

var entrada=document.createElement("textarea");
entrada.cols=20;
entrada.rows=1;
entrada.setAttribute("id", "texto1");
var boton= document.createElement("button");
var cerrar=document.createElement("span");
var text=document.createTextNode("Guardar");
//fila.classList.add("row");
listas.classList.add("col-md-4","caja");
entrada.classList.add("form-control");
boton.classList.add("btn", "btn-info", "guardar", "text-left");
cerrar.classList.add("glyphicon" ,"glyphicon-remove", "equis");  

entrada.setAttribute("type" , "email");
boton.setAttribute("type", "button");
cerrar.setAttribute("aria-hidden","true");
boton.appendChild(text);
listas.appendChild(entrada);
listas.appendChild(boton);
listas.appendChild(cerrar);




//


//contenedorListas.appendChild(fila);
boton.addEventListener("click",function(){
var cajaTarea=document.getElementById("caja2");
var paraTodo=document.createElement("div");
var cajita=document.createElement("div");
var escritura=document.getElementById("texto1").value;
var nodoTexto=document.createTextNode(escritura);
var areaEsc=document.createElement("h5");
paraTodo.appendChild(cajita);
areaEsc.appendChild(nodoTexto);
cajita.appendChild(areaEsc);

cajaTarea.appendChild(cajita);
cajita.classList.add("col-md-4");





})

}