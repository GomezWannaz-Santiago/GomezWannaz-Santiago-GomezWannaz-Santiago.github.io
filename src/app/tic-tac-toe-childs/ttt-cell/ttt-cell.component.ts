import { Component, Input, OnInit } from '@angular/core';
import { TTTObserver } from 'src/app/entities/tic-tac-toe-observer';

@Component({
  selector: 'ttt-cell',
  templateUrl: './ttt-cell.component.html',
  styleUrls: ['./ttt-cell.component.css']
})
export class TttCellComponent implements OnInit {

  value="0"  
  @Input() turn ="X"
  @Input() tttObserver : any;
  @Input() cellId : number = 0;
  @Input() rowId :number =0
  empty : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setValue(){
    if(this.empty){
      this.value = this.tttObserver.getTurn()
      this.tttObserver.changeTurn(this.cellId, this.rowId);
      this.empty = false;
    }    
  }


}
