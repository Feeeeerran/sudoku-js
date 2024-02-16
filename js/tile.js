class Tile {
    constructor(btn,tile_no ,cuadro, fila, col) {
        this.btn = btn
        this.tile_no = tile_no
        this.cuadro = cuadro
        this.fila = fila
        this.col = col

        this.num
        this.posible_nums = _.range(1,10)
    }

    // Metodo para quitar un numero de los posibles nums
    remove_num(num) {
        _.pull(this.posible_nums, num)
    }


}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Generamos el array de tiles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Tenemos 9 filas x 9 columnas en total 81 tiles
// Tomamos los 9 cuadros y 81 tiles del DOM

let botones = document.querySelectorAll("button")
let cuadros = document.querySelectorAll(".cuadro")
let n_cuadro = n_fila = n_col = cont_tiles = 0
let tiles = []
let filas = new Array(9).fill(0).map( () => [])
let columnas = new Array(9).fill(0).map( () => [])


// Por cada boton genero un nuevo tile y lo guardo en un array
// Si quiero darle el valor de fila y columna tengo que tener en cuenta
//      Cada 9 iteraciones cambio de bloque
//      Cuando cambio de bloque tengo que actualizar el valor de fila y columna
//      Entonces puedo sacar las posiciones especificas por cada 9 iter
let cuadro_tile_init = []
for (let i = 0; i <= 6; i += 3) {
    for (let j = 0; j <= 6; j += 3) {
        cuadro_tile_init.push(
            {'fila': i, 'col': j}
        )
    }
}





let i = 0
botones.forEach((btn) => {
    // Actualizamos el n_cuadro en caso de cambiar a otro cuadro
    if (cont_tiles == 9) {
        n_cuadro++
        
        // Actualizamos el conteo de tiles
        cont_tiles = 0

        // Obtenemos las posiciones de fila y col
        n_fila = cuadro_tile_init[n_cuadro].fila
        n_col = cuadro_tile_init[n_cuadro].col
    }

    // Actualizamos n_fila y n_col
    if (n_col >= cuadro_tile_init[n_cuadro].col +3) {
        n_col = cuadro_tile_init[n_cuadro].col
        n_fila++
    }


    
    

    // Genero una nueva instancia de Tile con las prop correspondientes
    let new_tile = new Tile(btn, cont_tiles, n_cuadro, n_fila, n_col)
    // new_tile.btn.innerText = cont_tiles
    
    // Pusheo al array de tiles
    tiles.push(new_tile)

    // Pusheo la misma instancia al array de filas y columnas
    filas[n_fila].push(new_tile)
    columnas[n_col].push(new_tile)

    // Actualizo los valores
    cont_tiles++
    n_col++
})

// Ahora uso lodash para hacer de tiles un array de arrays
tiles = _.chunk(tiles,9)

