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
        var piezaAleatoria = GeneraPecaAleatoria();
        pecaBajando = new Peca(piezaAleatoria[0], piezaAleatoria[1], 0, 3);
        piezaAleatoria = GeneraPecaAleatoria();
        seguentPeca = new Peca(piezaAleatoria[0], piezaAleatoria[1], 20, 5);
        comptadorPeca = 0;
        nivell = 0;
        intervarlTemps = 3*100; //Falta ampliar

        //Calcular de forma aleatoria la següent peça que baixara
        //Gestio de la interacció del teclat
        //Moviment automatic que sera el intervalo de timepo que ira bajando la piez
        automatic = function(){
            pecaBajando.moureAvall();

        }
        setInterval(function(){automatic();}, 3000);

    },
    pintarPiezaTablero: function(){
        //Recorremos las filas de la pieza que bajara
        for(var i = 0; i < pecaBajando.forma.length; i++){
            //Recorremos las columnas de la pieza que abajara
            for(var j = 0; j < pecaBajando.forma[i].length; j++){
                //Comprobamos que esa pieza en esa columna y fila contenga un 1
                if(pecaBajando.forma[i][j] == 1){
                    //Pintamos en el tablero esa pieza 
                    this.espai[pecaBajando.posicioX + i][pecaBajando.posicioY + j] = 1;                    
                }
            }
        }
    },

    irAlaIzquierda: function(event){
        console.log(event.keyCode);
    },
    irAlaDerecha: function(){}
}

//Creamos el objeto piezas
var Peca = function(forma, color, posicioX, posicioY){
    this.forma = forma;
    this.color = color;
    this.posicioX = posicioX;
    this.posicioY = posicioY;
}

//Creamos una pieza
var p = new Peca(GeneraPecaAleatoria()[0], GeneraPecaAleatoria()[1], 2, 20);
//console.log(p);

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

 
//Funcion que desplazara la pieza a la derecha
Peca.prototype.moverDerecha = function(){
    console.log("entra1");
    //Comprobamos que al mover la pieza a la derecha no se salga del tablero
    if( (x-1) > 0){
        return true;
    }else{
        return false;
    }
}

//Funcion que desplazara la pieza a la izquierda
Peca.prototype.moverIzqueirda = function(){
    console.log("entra2");
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


//Funcion para hacer que la pieza baje
Peca.prototype.moureAvall = function(){
    tableroTetris(jocTetris.espai);
    for(var i = 0; i < jocTetris.espai.length; i++){
        for(var j = 0; j < jocTetris.espai[i].length; j++){
            if(jocTetris.espai[i][j] == 1){
                jocTetris.espai[i][j] = 0;
            }
        }
    }
    //Esto hara que la pieza se desplace hacia abajo
    pecaBajando.posicioX++;
    console.log(jocTetris.espai);

    //Capturamos las teclas de las direcciones
    //Serviran para mover la pieza segun la tecla presionada
    window.addEventListener("keydown", function(event){
        this.console.log(event);
        switch(event.keyCode){
            case "40": //Abajo
                break;
            case "39": //Derecha
                break;
            case "38": //Arriba
                break;
            case "37": //Izqueirda
                break;
        }
        
    });
    
    
    //Pintamos la pieza en el tablero 
    jocTetris.pintarPiezaTablero();

    
}


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
    //Mostramos la pieza originalmente
    document.getElementById("original").innerHTML = p.pintarPieza();
    //Giramos la pieza
    p.rotarSentitHorari();

    //Mostramos la pieza girada
    document.getElementById("girada").innerHTML = p.pintarPieza();

    //Giramos la pieza en sentido antihorario
    //pieza.rotarAntiHorari();
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

    console.log(p)
    document.getElementById("prueba").innerHTML = p.pintarPieza();
});