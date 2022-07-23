import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { WipComponent } from './wip/wip.component';

const routes: Routes = [
  {path:'', redirectTo:'/wip', pathMatch:"full"},
  {path:'wip', component:WipComponent},
  {path:'tic-tac-toe', component:TicTacToeComponent},
  {path:"**", component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
