import {  Component, 
          OnInit,
} from '@angular/core';
import {  Router, ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroListComponent implements OnInit {
    
    private selectedHero: Hero;
    private heroes
    private selectedId: number;



    onSelect(hero: Hero) {
      this.router.navigate(['/hero', hero.id]);
    }

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
    }
    
    delete(hero: Hero): void {
      this.heroService
          .delete(hero.id)
          .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });
    }

    isSelected(hero: Hero) { 
      return hero.id === this.selectedId
    }
    
    constructor( 
      private router: Router, 
      private route: ActivatedRoute,
      private heroService: HeroService) {
      /* Years of experience and bitter tears have taught us to keep complex logic out of the constructor, 
      especially anything that might call a server as a data access method is sure to do. indetead use     ngOnInit() {
      }*/
    }

    ngOnInit():void { // Lifecycle Hook.https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
      //this.getHeroes();
      this.heroes = this.route.params
      .switchMap((params: Params) => {
        console.log('params: ',params)
        this.selectedId = +params['id']
        return this.heroService.getHeroes()
      });
    }


}

