import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroesComponent } from './hero/heroes.component';
import { MaterialModule } from '@angular/material';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppComponent } from './app/app.component';
import { HeroService }  from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import './rxjs-extensions';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    AppRoutingComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
