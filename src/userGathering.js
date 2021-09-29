import {getRandomCard} from './randomCard.js';

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEdQT6X3dR6uzwzwcVbSwiEwh-wYknZOs",
  authDomain: "ecobingo-corpochivor.firebaseapp.com",
  projectId: "ecobingo-corpochivor",
  storageBucket: "ecobingo-corpochivor.appspot.com",
  messagingSenderId: "959928311446",
  appId: "1:959928311446:web:2999abc8c946e2b304ecb7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

let roomDocument;

class UserGatheringConnection {

  static acceptingUsers = true;
  static userCount = 0;
  
  static async startGatheringUsers(room, maxCapacity, target){

    const roomCollection = firestore.collection(room);
    roomDocument = roomCollection.doc(room);
    roomDocument.set({ target: JSON.stringify(target), open: true });

    this.closeRoom = () => roomCollection.doc(room).update({ open: false });

    this.unsubRoom = roomCollection.onSnapshot((snapshot) => {
      
      snapshot.docChanges().forEach((change) => {

        if(this.userCount >= maxCapacity) return;
        if (change.type === 'added' && change.doc.id !== room) {

          this.userCount += 1;
          this.connectUser(change.doc);
        }
      });

      if(this.userCount >= maxCapacity){

        this.stopGatheringUsers();
      }
    });
  }
  
  static async connectUser(userDocumentSnapshot){

    if(!this.acceptingUsers) return;
    
    let userDocument = userDocumentSnapshot.ref;
    
    let name = userDocumentSnapshot.get("name");
    let card = getRandomCard();
    
    userDocument.update({ card: JSON.stringify(card) });
    
    let user = {
    
      name,
      card,
      userDocument,
    };
    
    this.onuser(user);
  }
  
  static closeRoom() {
  
    console.log("Attempting to close room, but none opened yet.");
  }
  
  static unsubRoom() {
  
    console.log("Attempting to unsub from room, but none subbed yet.");
  }
  
  static onuser(_user) {
  
    console.log("User handler not initialized, being used");
  }
  
  static stopGatheringUsers(){
  
    this.acceptingUsers = false;
    this.unsubRoom();
    this.closeRoom();
  }
}

export { UserGatheringConnection, roomDocument};