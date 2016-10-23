import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  af:AngularFire;
  item: FirebaseObjectObservable<any>;
  name:string;

  constructor(af: AngularFire) { 
    this.af=af;
  }

  save() {
    console.log('set: ',this.name);
    this.item.set({ 
        name: this.name
    });
  }

  delete(){
    console.log('set: ',this.name);
    this.item.remove();
  }

  update() {
    console.log('update: ',this.name);
    this.item.update({ name: this.name });
  }

  ngOnInit() {
    this.item = this.af.database.object('/item');
    console.log('constructor: ',this.item);
  }

}
