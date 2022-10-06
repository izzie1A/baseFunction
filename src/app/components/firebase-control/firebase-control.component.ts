import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-firebase-control',
  templateUrl: './firebase-control.component.html',
  styleUrls: ['./firebase-control.component.css']
})
export class FirebaseControlComponent implements OnInit {
  testItems: Observable<any[]>;
  constructor(private firebaseService:FirebaseService) {
    this.testItems = firebaseService.getValueChange();
  }

  getFirestore(input:string){
    return this.firebaseService.getValueChange(input);
  }


  ngOnInit(): void {
  }

}
