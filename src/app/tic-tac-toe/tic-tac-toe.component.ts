import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TTTCell } from '../entities/tic-tac-toe-cell';
import { TTTObserver } from '../entities/tic-tac-toe-observer';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
 
  boardForm : FormGroup  
  sizeConfirmed : boolean = false;
  btnText = "Confirm board size";
  btnColor = "btn-success";
  errorMessage = "";
  parsedBoardSize = 0;
  turn = "X"
  tttObserver : TTTObserver;
  win : boolean = false;
  boardFull : boolean = false;

  constructor(formBuilder : FormBuilder) { 
    this.boardForm = formBuilder.group({
      boardSize : ['']
    });
    this.tttObserver = new TTTObserver(this.turn);
    this.turn = this.tttObserver.turn;
  }

  ngOnInit(): void {
  }

  
  confirmSize(){    
    let control = this.boardForm.controls['boardSize'];
    this.win = false;
    this.boardFull = false;
    if(control.disabled){
      control.enable();
      this.btnText = "Confirm board size";
      this.btnColor = "btn-success"
      this.sizeConfirmed = false;  
      this.resetBoard();

      return;
    }

    let validatedSize = this.validateBoardSize(control.value);
    if(validatedSize == -1){
      this.errorMessage = "Pick a size between 3 and 8";
      return;
    }

    this.parsedBoardSize = validatedSize;

    control.disable();
    this.btnText = "Delete board";
    this.btnColor = "btn-danger"    
    this.sizeConfirmed = true;
  }

  validateBoardSize(inputSize : number) : number{
    if(inputSize == null || inputSize < 3 || inputSize > 8){
      return -1;
    }

    let size = Number(inputSize.toFixed(0));
    return size;
  }



  resetBoard(){
    this.boardForm.controls['boardSize'].setValue(0);
    this.tttObserver = new TTTObserver(this.turn);    
  }

  changeTurn(){
    
    if(this.win || this.boardFull){
      return;
    }
    var usedCells = this.tttObserver.getUsedCells()
    this.checkWin(usedCells)

    if(!this.win){
      if(usedCells.length == this.parsedBoardSize * this.parsedBoardSize ){
        this.boardFull = true;
        return;
      }       
      this.turn = this.tttObserver.getTurn(); 
    }      
    
  }

  checkWin(board : Array<TTTCell>){
    //debugger;
    let size = this.parsedBoardSize;
    let rowCounter : number = 0;
    var columnCounter = 0;
    var diagonalCounter = 0
    var invertedDiagonalCounter = 0;

    let rowNumber : number;
    for(var i = 0; i < size; i++ ){
      rowNumber = i;    
     
      board.forEach(element => {

        if(element.turn == this.turn){
          if(rowNumber == element.row){
            rowCounter++;     
            if(rowNumber == element.column){
              diagonalCounter++;              
            }     
            if(size-1 - rowNumber == element.column){
              invertedDiagonalCounter++;
            }
          }
        }
        else {
          if(rowNumber == element.row){
            rowCounter--;  
            if(rowNumber == element.column){
            
            diagonalCounter--;
          }
          if(size-1 - rowNumber == element.column){
            invertedDiagonalCounter--;
          }
          }        
     
        }                                                          
        element.column == rowNumber ? element.turn == this.turn ? columnCounter++ : columnCounter-- : columnCounter;
      });
      if([rowCounter,columnCounter,invertedDiagonalCounter,diagonalCounter].indexOf(size) != -1){        
        this.win = true;
      }
      rowCounter = columnCounter = 0; 
    }
    invertedDiagonalCounter = diagonalCounter = 0;     
  }

}
