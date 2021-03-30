import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {LpSolverTestComponent} from './lp-solver-test/lp-solver-test.component';
import {AcceuilComponent} from './acceuil/acceuil.component';

const routes: Routes = [
  {path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'logout', component: AcceuilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ro', component: LpSolverTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
