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
 
//Funcion que desplazara la pieza a la derecha
Peca.prototype.moverDerecha = function(){
    if( (x-1) > 0){
        return true;
    }else{
        return false;
    }
}

//Funcion que desplazara la pieza a la izquierda
Peca.prototype.moverIzqueirda = function(){
    if( (x+1) < 14 ){
        x++;
        return true;
    }else{
        return false;
    }
}

//Pintamos la pieza
Peca.prototype.pintarPieza = function(){
    var resultat = "<table border='1'>";
    for (var i = 0; i < this.forma.length;i++){
        resultat = resultat + "<tr>"
        for (var j = 0; j<this.forma[i].length;j++) { 
            resultat = resultat + "<td>";
            if (this.forma[i][j]==1) { 
                resultat=resultat+"1" 
            }
            else { 
                resultat = resultat + "0" 
            };
            resultat = resultat + "</td>";
        }
        resultat = resultat + "</tr>";
    }
    resultat = resultat + "</table>";
    return resultat
}; 
//Generamos una pieza aleatoria
var piezaAleatoria = GeneraPecaAleatoria();
var pieza = new Peca(piezaAleatoria[0], piezaAleatoria[1]);

Peca.prototype.rotarSentitHorari = function(){
    var formaNova = new Array();
    for (var i=0;i<this.forma.length;i++) {
        formaNova[i]=new Array();
        for (var j=0;j<this.forma[i].length;j++) {
            formaNova[i][j]=this.forma[this.forma[i].length-1-j][i];
        }
    }
    this.forma = formaNova;
}

Peca.prototype.rotarAntiHorari = function(){
    //Llamamos a la funcion de girar a la derecha 3 veces que equivaldria a que si lo giramos a la izquierda
    this.rotarSentitHorari();
    this.rotarSentitHorari();
    this.rotarSentitHorari();
}
pieza.rotarAntiHorari();
Peca.prototype.moureAvall = function(){}
Peca.prototype.formaPeca = function(){}

//Creamos una pieza
var p = new Peca();

//Mostrem per pantalla l'espai de joc
$(document).ready(function(){
    //Mostramos la pieza originalmente
    document.getElementById("original").innerHTML = pieza.pintarPieza();
    //Giramos la pieza
    pieza.rotarSentitHorari();
    //Mostramos la pieza girada
    document.getElementById("girada").innerHTML = pieza.pintarPieza();

    //Giramos la pieza en sentido antihorario
    pieza.rotarAntiHorari();

    //Pintamos el tablero
    for(var i = 0; i < jocTetris.espai.length; i++){
        $("#tablero").append("<tr>");
        for(var j = 0; j < jocTetris.espai[i].length; j++){
            $("#tablero").append("<td>" + jocTetris.espai[i][j] + "</td>");
        }
        $("#tablero").append("</tr>")
    }
    //Pintamos las piezas del color al que pertenecen
    if(pieza.color == "verd"){
        
    }
    console.log(pieza);
});