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


//Creamos el objeto piezas
var Peca = function(forma, color, posicioX, posicioY){
    this.forma = forma;
    this.color = color;
    this.posicioX = posicioX;
    this.posicioY = posicioY;
}
//Generamos una pieza aleatoria
var piezaAleatoria = GeneraPecaAleatoria();
var pieza = new Peca(piezaAleatoria[0], piezaAleatoria[1]);

//Creamos una pieza
var p = new Peca(GeneraPecaAleatoria()[0], GeneraPecaAleatoria()[1], 5, 25);
console.log(p);
 
//Funcion que desplazara la pieza a la derecha
Peca.prototype.moverDerecha = function(){
    //Comprobamos que al mover la pieza a la derecha no se salga del tablero
    if( (x-1) > 0){
        return true;
    }else{
        return false;
    }
}

//Funcion que desplazara la pieza a la izquierda
Peca.prototype.moverIzqueirda = function(){
    //Comprobamos que al mover la pieza a la izquierda no se salga del tablero
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

//Funcion que rotara la pieza en sentido horario
Peca.prototype.rotarSentitHorari = function(){
    //Creamos un array para guardar la nueva forma
    var formaNova = new Array();
    //Recorremos el array de la forma de la pieza
    for (var i = 0; i < this.forma.length; i++) {
        formaNova[i] = new Array();
        for (var j = 0; j < this.forma[i].length; j++) {
            formaNova[i][j] = this.forma[this.forma[i].length-1-j][i];
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

//Funcion para hacer que la pieza baje
Peca.prototype.moureAvall = function(posicioY){
    //Esto hara que la pieza se desplace hacia abajo
    this.posicioY--;
}
Peca.prototype.formaPeca = function(){}


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
});