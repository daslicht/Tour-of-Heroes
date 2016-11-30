import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
//import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingModule }     from './app-routing.module';

import './rxjs-extensions';

import { CrisisListComponent } from './crisis-lits.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(),
    AppRoutingModule,
    HeroesModule
  ],
  declarations: [
    AppComponent,
    CrisisListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
