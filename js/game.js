class Sudoku {
    constructor(tiles,filas,columnas,init) {
        this.tiles = tiles
        this.filas = filas
        this.columnas = columnas
        this.init = init

    }


}



const random = (min, max)=> {
    return Math.floor(Math.random()*(max+1))+min
}