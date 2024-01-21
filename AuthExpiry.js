// import firebase from 'firebase';
const firebase = require('firebase');
// const firebase = require('firebase/app');
// require('firebase/auth');
// require('firebase/database');
const user = firebase.auth().currentUser;
const expirationDate = user.getAccessTokenExpirationDate();
console.log(expirationDate);