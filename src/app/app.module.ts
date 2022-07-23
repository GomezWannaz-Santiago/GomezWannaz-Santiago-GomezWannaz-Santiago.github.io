import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { WipComponent } from './wip/wip.component';
import { TttCellComponent } from './tic-tac-toe-childs/ttt-cell/ttt-cell.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TttRowComponent } from './tic-tac-toe-childs/ttt-row/ttt-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    WipComponent,
    TttCellComponent,
    TttRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
