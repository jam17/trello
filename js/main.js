function agregarLista(){

//este es el contendeorcontenedor
var listas=document.getElementById("caja1");
//crea el div que contiene la tarea
var fila=document.createElement("div");
//var listas= document.createElement("div");

var entrada=document.createElement("textarea");
entrada.cols=20;
entrada.rows=1;
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


//contenedorListas.appendChild(fila);
//boton.addEventListener("click",function(){
//var 


//}







//var tarea=document.createElement("div")
//var elementonNombreLista=document.createElement("strong");
//var elementoRef= document.createElement("a");


}