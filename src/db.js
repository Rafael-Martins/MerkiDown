import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAC1s5PGqbb5E7MMlM-Z5_axPoQU5pEpbg',
  authDomain: 'merkidown.firebaseapp.com',
  databaseURL: 'https://merkidown.firebaseio.com/',
  projectId: 'merkidown',
};

firebase.initializeApp(config);

/* eslint-disable import/prefer-default-export */
export const database = firebase.database();
