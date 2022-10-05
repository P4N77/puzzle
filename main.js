/* declarando funciones*/
let fichas =[0,1,2,3,4,5,6,7,8,]
let numClicks=0
let primerClick=0

/*funcion para seleccionar casillas*/
function seleccionar(casilla){
    numClicks++;

    if (numClicks == 1) {
        primerClick=casilla;
    }
    if (numClicks == 2) {
        let segundoClick = casilla;
        let intercambio=fichas[primerClick];
        fichas[primerClick] = fichas[segundoClick];
        fichas[segundoClick] = intercambio;
        numClicks = 0;
        moverFichas();
    }
    /*funcion para eliminar el borde*/
    quitarborde();
    document.getElementById("img"+casilla).style.border="4px solid blue";
}
/*funcion para eliminar el borde*/
function quitarborde() {
    for (let i=0; i<9; i++){
        document.getElementById("img"+i).style.border=null;
    }
}
/*funcion para desordenar el puzzle*/
function desordenar(){
    fichas=fichas.sort(function(){
        return Math.random()-0.5
    });
}
/*funcion para mover las fichas del puzzle*/
function moverFichas() {
    for (let i = 0; i <9; i++) {
        let imagenFicha=fichas[i];
        document.getElementById("img"+i).src ="./imagen/"+(imagenFicha+1)+".jpg";
    }
}
/*funcion para comprobar si el puzzle esta correcto*/
function comprobarPuz(){
    let comprobar= true;
    for (let c = 0; c <9; c++) {
        if (fichas[c]!=c) {
            comprobar=false;
        }
        
    }
    if (comprobar==true) {
        alert("PUZZLE COMPLETO")
    }else{
        alert("PUZZLE INCOMPLETO")
    }
}

/*hacer llamado desde html*/
let btn=document.querySelector("#btnComprobar");
btn.addEventListener("click",(event)=>{
    comprobarPuz();
});

window.onload=function(){
    desordenar();
    moverFichas();
}