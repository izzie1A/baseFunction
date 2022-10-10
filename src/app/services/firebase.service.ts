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

  getCollection(input?:string){
    if(input!==undefined){
      return this.firestore.collection(input).valueChanges();
    }else{
      return this.firestore.collection('todo').valueChanges();
    }
  }
  test(dir:string) {
    let itemsCollection = this.firestore.collection(dir).valueChanges().subscribe(ref => {
      console.log(ref);
    });
    console.log(itemsCollection);
    
    let itemsCollection2 = this.firestore.collection(dir).valueChanges().subscribe(ref => {
      console.log(ref);
    });
    console.log(itemsCollection2);
    
    const nums = of(1, 2, 3);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    squaredNums.subscribe(x => console.log(x));

    return this.firestore.collection(dir).valueChanges();;
  }
  getDoc(dir:string) {
    let itemDoc = this.firestore.doc<Item>(dir);
    console.log(itemDoc);
    return itemDoc.valueChanges();
  }
  addDoc(dir:string,item: Item) {
    const id = this.firestore.createId();
    item.uid = id;
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
