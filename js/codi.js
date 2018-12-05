var jocTetris = {
    espai : [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ],
    puntuacio: 0,
    puntuacioMax: 0,
    pecaBajando: new Array(),
    seguentPeca: new Array(),
    comptadorPeca: 0,
    intervarlTemps: 0, //Falta ampliar
    inicialitzar: function(){
        //Inicializamos los atributos a 0 por si queremos reiniciar el juego
        espai = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ]
        puntuacio = 0;
        pecaBajando = new Array();
        seguentPeca = new Array();
        comptadorPeca = 0;
        intervarlTemps; //Falta ampliar
        //Calcular de forma aleatoria la següent peça que baixara
        //Gestio de la interacció del teclat
        //Moviment automatic que sera el intervalo de timepo que ira bajando la piez

    }
}

//Creamos una variable donde guardaremos lo que nos devuelva la funcion para calcular de forma aleatoria la siguiente pieza
function GeneraPecaAleatoria (){ 
    { 
    var peces = [
            [[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],"groc"],
            [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],"lila"],
            [[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],"verd"],
            [[[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,0]],"roig"],
            [[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],"blau"],
            [[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],"taronga"],
            [[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],"morat"] 
    ]

    var numeroAleatori = Math.round(Math.random()*6);                      
    return peces[numeroAleatori];     
    }    
}

//Creamos el objeto piezas
var Peca = function(forma, color, posicioX, posicioY){
    this.forma = forma;
    this.color = color;
    this.posicioX = posicioX;
    this.posicioY = posicioY;
}
//Generamos una pieza aleatoria
var piezaAleatoria = GeneraPecaAleatoria();
//Creamos una pieza
var p = new Peca()
Peca.prototype.rotarSentitHorari = function(){
    var moverDerecha = new Array();
    for(var iteracion = 0; iteracion < this.forma.length; iteracion++){
        moverDerecha[iteracion] = new Array();
        for(var j = 0; j < this.forma[iteracion].length; j++){
            moverDerecha[iteracion][j] = this.forma[this.forma[iteracion].length-1-j][i];
        }
    }
    this.forma = moverDerecha;
}
Peca.prototype.rotarAntiHorari = function(){
    //Llamamos a la funcion de girar a la derecha 3 veces que equivaldria a que si lo giramos a la izquierda
    this.rotarSentitHorari();
    this.rotarSentitHorari();
    this.rotarSentitHorari();
}
Peca.prototype.moureAvall = function(){}
Peca.prototype.formaPeca = function(){}

//Mostrem per pantalla l'espai de joc
$(document).ready(function(){
    console.log(jocTetris.espai);
    
    for(var i = 0; i < jocTetris.espai.length; i++){
        $("#tablero").append("<tr>");
        for(var j = 0; j < jocTetris.espai[i].length; j++){
            $("#tablero").append("<td>" + jocTetris.espai[i][j] + "</td>");
        }
        $("#tablero").append("</tr>")
    }
});