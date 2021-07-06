import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCk7mPecBVi_-QkkAjj7gaylHcKdDvx43k",
    authDomain: "crwn-db-85190.firebaseapp.com",
    projectId: "crwn-db-85190",
    storageBucket: "crwn-db-85190.appspot.com",
    messagingSenderId: "726402471127",
    appId: "1:726402471127:web:3e7d7de95f1a2d9cf3cc92"
};

export const createUserProfileDocument = async ( userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message)
        }
    }

    return userRef;

} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;