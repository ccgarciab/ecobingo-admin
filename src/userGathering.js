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

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302',
              'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

const unsubscribeFns = [];
let receivingNewUsers = true;

const emptyCard = Array(25).fill(false);
emptyCard[12] = true;

async function startGatherUsers(room, userCount){

  const roomCollection = firestore.collection(room);
  roomCollection.doc(room).set({});

  const unsubRoom = roomCollection.onSnapshot((snapshot) => {
    
    snapshot.docChanges().forEach((change) => {
      if(users.length >= userCount) {
        return;
      }
      if (change.type === 'added' && change.doc.get("offer")) {

        connectUser(change.doc);
      }
    });

    if(users.length >= userCount){

      stopGatherUsers();
      roomCollection.doc("room").delete();
    }
  });

  unsubscribeFns.push(unsubRoom);
}

async function connectUser(userDocumentSnapshot){

  if(!receivingNewUsers){
    return;
  }

  let userDocument = userDocumentSnapshot.ref;
  const answerCandidates = userDocument.collection('answerCandidates');
  const offerCandidates = userDocument.collection('offerCandidates');

  const pc = new RTCPeerConnection(servers);
  const dataChannel = pc.createDataChannel(`Channel ${users.length}`);

  pc.onicecandidate = (e) => {
    e.candidate && answerCandidates.add(e.candidate.toJSON());
  };

  const offerDescription = userDocumentSnapshot.get("offer");
  await pc.setRemoteDescription(offerDescription);

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp,
  };

  await userDocument.update({ answer });

  const unsubOffers = offerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      
      if (change.type === 'added') {
        let data = change.doc.data();
        pc.addIceCandidate(new RTCIceCandidate(data));
      }
    });
  });

  unsubscribeFns.push(unsubOffers);

  const user = {

    name: userDocumentSnapshot.get("user"),
    connection: pc,
    channel: dataChannel,
    card: getRandomCard(),
    filled: [...emptyCard]
  };

  dataChannel.onerror = console.error;

  users.push(user);

  notifier.dispatchEvent(new Event("notify"));
}

function stopGatherUsers(){

  unsubscribeFns.forEach((f) => f());
  receivingNewUsers = false;
}

const users = [];
const notifier = document.createElement("null");

export { users, notifier, startGatherUsers, stopGatherUsers };