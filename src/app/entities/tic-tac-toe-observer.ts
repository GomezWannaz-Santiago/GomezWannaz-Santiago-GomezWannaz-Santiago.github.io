

/**
 * An Observer that's going to be passed to each cell and the board.
 * Probably will only use it to determine who's turn is
 */

export class TTTObserver {

    turn : string = "X";

    constructor(initialTurn : string){
        this.turn = initialTurn;
    }

    changeTurn(){
        this.turn = this.turn == "X"? "O" : "X";
    }
    
    getTurn(){
        return this.turn;
    }
}