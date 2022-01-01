
  /*
  *Firebase Singleton class for CRUD operations
  */
 
import { Injectable } from '@angular/core';
import  {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'
import {addDoc, doc, getDocs, setDoc, Firestore, collection} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public firestore: Firestore) { }


  pushData (value: any){
    const dbInstance = doc(this.firestore, 'user','86842006206');
    const data = {

     "age":32
    }
    
    setDoc(dbInstance, data).then(()=> alert('DATA SENT'))
    .catch((error)=> alert('error occured'))

 }
 
 getData () {
   const dbInstance = collection(this.firestore, 'user');
   getDocs(dbInstance).then((response)=> alert( JSON.stringify(
     response.docs.map(
     (item) =>{ return {...item.data(), id:item.id}}))
   )
     )
   .catch((error)=> alert())
 }


}
