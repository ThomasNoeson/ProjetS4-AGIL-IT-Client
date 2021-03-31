import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {LpSolverTestComponent} from './lp-solver-test/lp-solver-test.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {JeuxComponent} from './jeux/jeux.component';
import {AjoutUtilisateurComponent} from './ajout-utilisateur/ajout-utilisateur.component';
import {GameDetailsComponent} from './game-details/game-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'jeux', pathMatch: 'full'},
  {path: 'jeux', component: JeuxComponent},
  {path: 'create', component: AjoutUtilisateurComponent},
  {path: 'logout', component: AcceuilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'jeux/:id', component: GameDetailsComponent},
  {path: 'ro', component: LpSolverTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
