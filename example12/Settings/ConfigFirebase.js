import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyDF-WErG7DlMBwaiVuSOlBNW9c6oWXMK4s",
    authDomain: "proyecto-final-84648.firebaseapp.com",
    databaseURL: "https://proyecto-final-84648-default-rtdb.firebaseio.com",
    projectId: "proyecto-final-84648",
    storageBucket: "proyecto-final-84648.appspot.com",
    messagingSenderId: "736256420980",
    appId: "1:736256420980:web:40e5937801df9e973d7521",
    measurementId: "G-VRZ0XDDRC0"
}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;