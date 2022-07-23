import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-row',
  templateUrl: './ttt-row.component.html',
  styleUrls: ['./ttt-row.component.css']
})
export class TttRowComponent implements OnInit {

  @Input() cellsNumber : number = 0;
  @Input() tttObserver : any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
