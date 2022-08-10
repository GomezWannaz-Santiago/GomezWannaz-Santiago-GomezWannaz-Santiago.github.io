

/**
 * An Observer that's going to be passed to each cell and the board.
 * Probably will only use it to determine who's turn is
 */

import { TTTCell } from "./tic-tac-toe-cell";

export class TTTObserver {

    turn : string = "X";
    usedCells : Array<TTTCell> = [];

    constructor(initialTurn : string){
        this.turn = initialTurn;
    }

    changeTurn(cellId : number, rowId : number){
        this.usedCells.push({column: cellId, row: rowId, turn:this.turn})
        this.usedCells.sort((a,b) => a.row - b.row);
        this.turn = this.turn == "X"? "O" : "X";                
    }
    
    getTurn(){
        return this.turn;
    }

    getUsedCells(){
        return this.usedCells;
    }


}