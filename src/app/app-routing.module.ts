import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-lits.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'crisis-center', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [ 
    RouterModule 
  ]
})

export class AppRoutingModule {}
