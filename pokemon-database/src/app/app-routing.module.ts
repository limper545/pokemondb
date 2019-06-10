import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pokemon-db/dashboard/dashboard.component';
import { PokemonDetailsComponent } from './pokemon-db/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'pokemon/:name', component: PokemonDetailsComponent},
  { path: '', component: DashboardComponent, pathMatch: 'full'},

  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
