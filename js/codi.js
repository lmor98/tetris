// Objecte on s'iniciarà tot el joc
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
    nivell: 0,
    pecaBajando: new Array(),
    seguentPeca: new Array(),
    comptadorPeca: 0,
    intervarlTemps: 500, //Falta ampliar
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
        var piezaAleatoria = GeneraPecaAleatoria();
        pecaBajando = new Peca(piezaAleatoria[0], piezaAleatoria[1], 0, 3);
       
        comptadorPeca = 0;
        nivell = 0;

        //Moviment automatic que sera el intervalo de timepo que ira bajando la piez
        
        setInterval(function(){jocTetris.automatic();}, jocTetris.intervarlTemps);

    },

    //Funció per a que baixi la seguent peça aleatoria
    seguentPecaBajando: function(){
        console.log("llega");
        jocTetris.piezaAleatoria = GeneraPecaAleatoria();
        jocTetris.pecaBajando = new Peca(jocTetris.piezaAleatoria[0], jocTetris.piezaAleatoria[1], 5, 5);
        this.pintarPiezaTablero();
        //Pintamos el tablero con el espacio
        tableroTetris(jocTetris.espai);
    },

    //Funció que baixarà la peça automaticament
    automatic: function(){
        var validacion = pecaBajando.validarPieza();
        if(validacion == true){
            //Hacemos que la pieza baje
            pecaBajando.posicioX++;
        }else{
            console.log("<<<<<<<<")
            jocTetris.seguentPecaBajando();
        }

        //Pintamos el tablero con el espacio
        tableroTetris(jocTetris.espai);

        //Recoremos el espacio de juego 
        for(var i = 0; i < jocTetris.espai.length; i++){
            for(var j = 0; j < jocTetris.espai[i].length; j++){
                //Donde haya un 1 lo ponemos a 0
                if(jocTetris.espai[i][j] == "F"){
                    jocTetris.espai[i][j] = 0;
                }
            }
        }

        //Pintamos la pieza en el tablero 
        jocTetris.pintarPiezaTablero();
    },

    //Funció que pinta la peça en el tauler de joc
    pintarPiezaTablero: function(){
        //Recorremos las filas de la pieza que bajara
        for(var i = 0; i < pecaBajando.forma.length; i++){
            //Recorremos las columnas de la pieza que abajara
            for(var j = 0; j < pecaBajando.forma[i].length; j++){
                //Comprobamos que esa pieza en esa columna y fila contenga un 1
                if(pecaBajando.forma[i][j] == 1){
                    if(pecaBajando.validarPieza() == false){
                        this.espai[pecaBajando.posicioX + i][pecaBajando.posicioY + j] = 1;
                    }else{
                        if(pecaBajando != null){
                        //Pintamos en el tablero esa pieza 
                        this.espai[pecaBajando.posicioX + i][pecaBajando.posicioY + j] = "F";  
                        }
                    }                 
                }
            }
        }
        tableroTetris(jocTetris.espai);
    },

    irAlaIzquierda: function(event){
        console.log(event.keyCode);
    },
    irAlaDerecha: function(){}
}

//Creamos el objeto pieza
var Peca = function(forma, color, posicioX, posicioY){
    this.forma = forma;
    this.color = color;
    this.posicioX = posicioX;
    this.posicioY = posicioY;
}

//Funcion que desplazara la pieza a la derecha
Peca.prototype.moverDerecha = function(){
    //Comprobamos que al mover la pieza a la derecha no se salga del tablero
    if( this.posicioY < 7){
        this.posicioY++
        return true;
    }else{
        return false;
    }
}

//Funcion que desplazara la pieza a la izquierda
Peca.prototype.moverIzqueirda = function(){
    //Comprobamos que al mover la pieza a la izquierda no se salga del tablero
    if( this.posicioY > -1 ){
        this.posicioY--;
        return true;
    }else{
        return false;
    }
}

//Funcion para hacer que la pieza baje
Peca.prototype.moureAvall = function(){
    if(pecaBajando.validarPieza() == true){
        this.posicioX++;
        jocTetris.puntuacio++;
    }
    
}

//Pintamos la pieza
Peca.prototype.pintarPieza = function(){
    //Creamos un tabalero
    var resultat = "<table border='1'>";
    //Recorremos las filas
    for (var i = 0; i < this.forma.length;i++){
        //Creamos las fials
        resultat = resultat + "<tr>";
        //Recorremos cada columna de una fila en concreto
        for (var j = 0; j < this.forma[i].length; j++) { 
            //Creamos las celdas para las columnas
            resultat = resultat + "<td>";
            //Comprovamos que en el array de la forma de la pieza si tien un 1 que pinte en el tablero un 1
            if (this.forma[i][j] == 1) { 
                resultat = resultat + "1"; 
            }
            //Sino que pinte un 0
            else { 
                resultat = resultat + "0" 
            };
            resultat = resultat + "</td>";
        }
        resultat = resultat + "</tr>";
    }
    resultat = resultat + "</table>";
    //Devolvemos el tablero con todo el contenido dentro
    return resultat;
}

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

//Funcion que rotara la pieza en sentido antihorario
Peca.prototype.rotarAntiHorari = function(){
    //Llamamos a la funcion de girar a la derecha 3 veces que equivaldria a que si lo giramos a la izquierda
    this.rotarSentitHorari();
    this.rotarSentitHorari();
    this.rotarSentitHorari();
}

//Función que validara la pieza en el tablero para que no se salga del tablero 
//Y para que al haber ya una pieza no se ponga encima
Peca.prototype.validarPieza = function(){
    //Recorremos la forma de la pieza
    for(var i = 0; i < pecaBajando.forma.length; i++){
        for(var j = 0; j < pecaBajando.forma[i].length; j++){
            if(pecaBajando.forma[i][j] == 1){
                //Comprobamos que la posicion no se salga del tablero a lo largo
                if(this.posicioX+i == 24){
                    return false;
                }
                //Comprobamos que la posicion no se salga del tablero a lo ancho
                if((this.posicioY+j < 0) || (this.posicioY > 10)){
                    return false;
                }
            }
        }
    }

    return true;
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

function colorPieza(){

}

//Funcion que crea el tablero del tetris
function tableroTetris(tablero){
    $("#tablero").empty();
    for(var i = 0; i < tablero.length; i++){
        $("#tablero").append("<tr>");
        for(var j = 0; j < tablero[i].length; j++){
            $("#tablero").append("<td>" + tablero[i][j] + "</td>");
        }
        $("#tablero").append("</tr>")
    }
}

//Mostrem per pantalla l'espai de joc
$(document).ready(function(){

    jocTetris.inicialitzar();
    jocTetris.pintarPiezaTablero();
    tableroTetris(jocTetris.espai);
    jocTetris.irAlaDerecha();
    

    //Pintamos la puntuación
    var punts = $("#puntuacion");
    punts.append(jocTetris.puntuacio);

    //Pintamos la puntiación máxima
    var puntsMax = $("#puntuacionMax");
    puntsMax.append(jocTetris.puntuacioMax);

    //Pintamos el nivel del juego
    var lvl = $("#nivell");
    lvl.append(jocTetris.nivell);

    $("body").keydown(function(event){
        if(event.keyCode == 38){ //Flecha hacia arriba
            pecaBajando.rotarSentitHorari();
        }
        if(event.keyCode == 37){ //Flecha hacia la izquierda
            pecaBajando.moverIzqueirda();
        }
        if(event.keyCode == 39){ //Flecha hacia la derecha
            pecaBajando.moverDerecha();
        }
        if(event.keyCode == 40){ //Flecha hacia abajo
            pecaBajando.moureAvall();
        }
        if(event.keyCode == 76){ //Para girar la pieza al otro lado
            pecaBajando.rotarAntiHorari();
        }
        if(event.keyCode == 77){ //Para girar la pieza en setindo horario
            pecaBajando.rotarSentitHorari();
        }
    })
});