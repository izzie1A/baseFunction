import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-firebase-control',
  templateUrl: './firebase-control.component.html',
  styleUrls: ['./firebase-control.component.css']
})
export class FirebaseControlComponent {
  itemList?: Observable<any[]>;
  collectionDir?: any;
  docSelector?: any;

  constructor(public firebaseService:FirebaseService) {
    this.collectionDir = 'root';
    this.selectCollection(this.collectionDir);
    this.docSelector = {};
  }

  onKey(event:any) {const inputValue = event.target.value;}

  selectCollection(input:any){
    this.itemList = this.getCollection(input);
  }
  selectDocuemnt(input:any){
    this.docSelector = input;
    this.firebaseService.getDoc(input);
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
