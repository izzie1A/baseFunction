import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.items = this.firestore.collection('test').valueChanges();
  }
  
  getValueChange(input?:string){
    return this.firestore.collection('todo').valueChanges();
  }
}
