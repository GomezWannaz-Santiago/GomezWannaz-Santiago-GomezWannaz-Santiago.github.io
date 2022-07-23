import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-cell',
  templateUrl: './ttt-cell.component.html',
  styleUrls: ['./ttt-cell.component.css']
})
export class TttCellComponent implements OnInit {

  value="0"  
  @Input() turn ="X"
  @Input() tttObserver : any = null
  empty : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setValue(){
    if(this.empty){
      this.value = this.tttObserver.getTurn()
      this.tttObserver.changeTurn();
      this.empty = false;
    }    
  }


}
