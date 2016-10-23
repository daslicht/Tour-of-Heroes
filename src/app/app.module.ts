import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import './rxjs-extensions';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroesComponent } from './hero/heroes.component';
//import { MaterialModule } from '@angular/material';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { HeroService }  from './hero.service';
import { ItemsService }  from './items.service';
import { ItemsComponent } from './items/items.component';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAzrtKXwKL5kAoa9dbGt9x32YWA7Yi_Jec',
  authDomain: 'test-fad8a.firebaseapp.com',
  databaseURL: 'https://test-fad8a.firebaseio.com',
  storageBucket: 'test-fad8a.appspot.com',
  messagingSenderId: "113730117393"
};

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    AppRoutingComponent,
    HeroSearchComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    //MaterialModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [HeroService, ItemsService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
