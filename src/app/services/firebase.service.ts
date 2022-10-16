import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData, doc, getDoc, getFirestore } from '@angular/fire/firestore';
import { map, Observable, of } from 'rxjs';

export interface Item { 
  uid: string,
  name?: string;
  title?: string;
  timeStamp?: string;
  content?:any;
 }


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private firestore: AngularFirestore) {
  }

  getCollection(dir?:string){
    if(dir!==undefined){
      return this.firestore.collection(dir).valueChanges();
    }else{
      return this.firestore.collection('/root').valueChanges();
    }
  }
  getDoc(dir:string) {
    return  this.firestore.doc<Item>(dir);
  }
  addDoc(dir:string,item: Item) {
    const id = this.firestore.createId();
    item.uid = id;
    alert( Date.now().toString())
    item.timeStamp = Date.now().toString();
    const itemsCollection = this.firestore.collection<Item>(dir.toString());
    itemsCollection.doc(id).set(item);
  }
  writeDoc(dir:string,item: Item) {
    const doc = this.firestore.doc<Item>(dir.toString());
    console.log(doc.update(item));
  }
  query(){
  }
  delete(){
  }


}
