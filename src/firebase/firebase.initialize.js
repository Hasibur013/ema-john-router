import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* 
steps for authentication
-----------------------------
Initial set up
1. firebase: create project
2. create web app
3. get congiguration
4. intialize firebase
5. enable auth method

 */