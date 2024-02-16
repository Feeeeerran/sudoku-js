// Para programar la funcion de wave collapse

// La funcion toma como argumento el tablero como array de arrays

// La estrategia para rellenar
//  > Empezar con el tile del medio (cuadro 4, tile_no 4)
//  > Expandir en vertical y horizontal sobre el cuadro


function wave_collapse(arr, filas, columnas) {
    console.log('aa');
    // Declaro la secuencia de cuadros y tiles a rellenar
    let secuencia = [4, 5, 3, 7, 1, 0, 2, 6, 8]

    // cuadro y tile actual
    let cuadro_act = arr[4]
    let tile_act = cuadro_act[4]

    // console.log(tile_act);
    // console.log(cuadro_act);

    let sec_cuadros = 0
    let sec_tiles = 0

    cont = 0

    // Bucle para rellenar
    while (cont < 18) {
        // Tomo un numero random de los posibles numeros del tile seleccionado
        let rang = tile_act.posible_nums.length
        let num = tile_act.posible_nums[_.random(rang - 1)]

        // Rellenamos el tile
        tile_act.btn.innerText = num == undefined? 'X' :  num
        tile_act.btn.innerText == 'X' ? tile_act.btn.style.color = 'red' : 

        // Colapsamos los posibles numeros para cada tile en cuadro, fila y columna relacionada al tile_act 
        colap_num(arr, secuencia[sec_cuadros],num=num)
        colap_num(filas, tile_act.fila, num)
        colap_num(columnas, tile_act.col, num)

        // Actualizo valores de cuadro_act y tile_act
        sec_tiles++

        if (sec_tiles == 9) {
            sec_tiles = 0
            sec_cuadros++
            cuadro_act = arr[secuencia[sec_cuadros]]
        }
        
        // Pasamos a la siguiente posicion del arr secuencia
        // Seleccionamos el tile basado en el cuadro actual pero en la posicion dada por la sec
        tile_act = cuadro_act[secuencia[sec_tiles]]

        cont++
    }

}


// Funciones para colapsar los numeros a lo largo de la fila y columna
// Es decir que si elijo un numero en un tile, entonces en esa fila y columna tengo que elimnar los numeros posibles del resto de tiles
function colap_num(arr, pos, num) {
    // Toma como parametro un arr que puede ser el de la fila o el de la columna
    arr[pos].forEach(tile => {
        tile.remove_num(num)
    });

}




// Funcion para obtener un numero entero aleatorio comprendido entre min y max
// max no incluido --> si llamo a rand(0,5) voy a obtener 0, 1, 2, 3, o 4, nunca 5
// function rand(min, max) {
//     return (Math.floor(Math.random() * (max - min) + min))
// } 