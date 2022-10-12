import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-firebase-control',
  templateUrl: './firebase-control.component.html',
  styleUrls: ['./firebase-control.component.css']
})
export class FirebaseControlComponent {
  curCollection?: Observable<any[]>;
  curCollection2?: any[];
  collectionDir?: any;
  docSelector?: any;
  user?: any;

  constructor(public firebaseService:FirebaseService) {
    this.collectionDir = 'root';
    this.docSelector = {};
    this.selectCollection(this.collectionDir);
    this.ttest();
    this.firebaseService.getDoc('todo/6bXzb9DG9apl1YF0mLob');
  }

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  
  ttest(){
    let array = new Array();
    this.curCollection = this.firebaseService.test('root');
    this.curCollection.subscribe((ref: any) => {
      console.log(ref);
      array = ref;
      console.log('meow');
    });
  }

  onKey(event:any) {const inputValue = event.target.value;}

  selectCollection(input:any){
    this.curCollection = this.getCollection(input);
  }
  selectDocuemnt(input:any){
    this.docSelector = this.firebaseService.getDoc(input).ref;
    console.log(this.docSelector  )
  }
  getCollection(input?:any){
    return this.firebaseService.getCollection(input);
  }
  saveDoc(input?:any){
    if(input!=undefined){
      this.firebaseService.writeDoc(this.collectionDir,input);
    }else{
      this.firebaseService.addDoc(this.collectionDir, { 
        uid: 'undefind',
        name: 'undefind',
        title: 'undefind',
        content:'undefind',
       });
    }
  }
  writeDoc(){

  }
  deleteDoc(){

  }


}
