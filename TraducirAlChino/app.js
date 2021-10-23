//Declaraciones
let arrayUni=[];
let arrayChino=[];
let arrayEventos=[];
let y=0;

//Definimos la funcion del 'evento'
function myFunction(event) {
    var x = event.which || event.keyCode;
    arrayUni[y]=x;

    var chino = unescape("%u" + x + "e8");
    arrayChino[y]=chino;

    var t = event.type;
    arrayEventos[y]=t;
    y++;
  }

//Definimos la funcion de traducir(Se ejecuta cuando se presiona el boton)
function traducir(){
    document.getElementById("result").innerHTML="Valores unicode: "+arrayUni;
    document.getElementById("result1").innerHTML="Valores Chinos: "+arrayChino;
    document.getElementById("result2").innerHTML="Valores Keyup: "+arrayEventos;

}