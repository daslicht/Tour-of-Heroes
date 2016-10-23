import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ItemsService {
  
  items: FirebaseListObservable<any[]>;

  constructor(private http: Http, af: AngularFire) { 
    this.items = af.database.list('/items');
    console.log('items',this.items);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getItems(): Promise<any[]> {
    return this.items
               .toPromise()
               .catch(this.handleError);
  }

  update(){
    return
  }

  create() {
    return
  }


  getItem(id:Number){
    return
  }
  
  delete(id: number): Promise<void> {
    return
  }
  

}



