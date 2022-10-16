import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';
export interface IHash {
  [details: string]: string;
}

@Component({
  selector: 'app-firebase-control',
  templateUrl: './firebase-control.component.html',
  styleUrls: ['./firebase-control.component.css']
})
export class FirebaseControlComponent {
  curCollection?: Observable<any[]>;
  collectionDir?: any;
  docSelector?: any;

  constructor(public firebaseService: FirebaseService) {

    this.collectionDir = 'root';
    this.docSelector = {};
    this.selectCollection(this.collectionDir);
    
    // Object.keys(this.inputHash).forEach((key) => {console.log(this.inputHash[key])});
  }

  selectCollection(input: any) {
    this.curCollection = this.getCollection(input);
  }
  selectDocuemnt(input: any) {
    this.docSelector = this.firebaseService.getDoc(input).ref;
  }
  getCollection(input?: any) {
    if(input!!){
      this.collectionDir=input;
    };
    return this.firebaseService.getCollection(input);
  }
  saveDoc(input?: any) {
    if (input != undefined) {
      this.firebaseService.writeDoc(this.collectionDir, input);
    } else {
      this.firebaseService.addDoc(this.collectionDir, {
        uid: 'undefind',
        name: 'undefind',
        title: 'undefind',
        content: 'undefind',
      });
    }
  }
  writeDoc() {

  }
  deleteDoc() {

  }


}
