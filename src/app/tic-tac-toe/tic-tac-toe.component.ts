import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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


  @Output() reset = new EventEmitter<boolean>();


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

    if(control.disabled){
      control.enable();
      this.btnText = "Confirm board size";
      this.btnColor = "btn-success"
      this.sizeConfirmed = false;  

      this.resetBoard();

      return
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
    this.reset.emit(true);        
  }

  changeTurn(){
    this.turn = this.tttObserver.getTurn();
  }

}
