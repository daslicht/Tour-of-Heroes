import {  Component, 
          OnInit,
          HostBinding,
          trigger, 
          transition, 
          animate,
          style, 
          state } from '@angular/core';
// Keep the Input import for now, we'll remove it later:
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          //transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          //transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          //transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class HeroDetailComponent implements OnInit {
    
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }
    
    @HostBinding('style.display') get display() {
      return 'block';
    }

    @HostBinding('style.position') get position() {
      return 'absolute';
    }
    hero: Hero;
    
    constructor(  private heroService: HeroService,
                  private route: ActivatedRoute,
                  private location: Location,
                  private router: Router
    ) {}

    ngOnInit(): void {
      // this.route.params.forEach((params: Params) => {
      //   console.log('params: ', params)
      //   let id = +params['id']; // typecast to number by using JavaScript (+) operator.
      //   this.heroService.getHero(id)
      //     .then(hero => this.hero = hero);
      // });

      // No subscription 
      /*
        // (+) converts string 'id' to a number
        let id = +this.route.snapshot.params['id'];

        this.service.getHero(id)
          .then((hero: Hero) => this.hero = hero);
      */
      console.log('this.route.snapshot:',this.route.snapshot)

      // Subscript to changes
      this.route.params
        // (+) converts string 'id' to a number
        //http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-switchMap
        .switchMap(
          (params: Params) => this.heroService.getHero(+params['id'])
        )
        .subscribe((hero: Hero) => this.hero = hero);

      this.route.url.subscribe(data => {
            console.log( ' this.route.url: ',data)
        
      })
    }
    
    save(): void {
      this.heroService.update(this.hero)
        .then(() => this.goBack());
    }

    goBack(): void {
      //this.location.back();
      let heroId = this.hero ? this.hero.id : null;
      this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    }


}
