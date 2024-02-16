# Sudoku en js

--- 





### Notas   
Tengo 9 cuadros y 81 "tiles"
Dentro de cada cuadro tengo 9 tiles

Vamos a resolver el problema usando el algoritmo **WAVE COLLAPSE**

Podemos decir que cada "tile" de los 81 tiene 9 estados posibles, los numeros del 1 al 9.
A medida que se definen los espacios alrededor del mapa (sudoku) la cantidad de estados
que puede adoptar un "tile" disminuye.

Entonces lo que tengo que hacer es arrancar con el tile central e ir distribuyendo alrededor del tablero.

El proyecto entonces consta de dos partes

1. Rellenar el tablero con numeros (conseguir la combinacion)
2. Poder jugar y completar el sudoku

Y para ello trabajamos con los siguientes scripts

> **main.js**
Donde llevamos la logica principal del juego a traves de funciones otorgadas por el resto de los scripts. Iniciamos el juego, ocultamos los numeros, guiamos al jugador

> **render.js**
Para renderizar los numeros en el tablero

> **game.js**
Para llevar a cabo la logica del juego. Aqui tenemos una class llamada Sudoku, en esta class 
- generamos el tablero de numeros (combinacion de numeros)
- ocultamos los numeros de forma aleatoria
- realizamos las comprobaciones una vez el usuario termina el sudoku

> **tile.js**
Class que relaciona cada tile del tablero con su elemento del DOM. Ademas tiene propiedades como el cuadro en el que se encuentra, fila y columna.



### Bibliografia
> https://norvig.com/sudoku.html
> https://www.sudokuwiki.org/Sudoku_Creation_and_Grading.pdf
