import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBT4MvtanK447jeDUMrBmQgRqwZ6BLjA9Q",
  authDomain: "test2-ca628.firebaseapp.com",
  projectId: "test2-ca628",
  storageBucket: "test2-ca628.appspot.com",
  messagingSenderId: "775219979769",
  appId: "1:775219979769:web:efaf8df42736d5539ac928"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
<<<<<<< HEAD
=======
// export const handleSignOut = async () => {
//   try {
//     await firebase.auth().signOut();
//     // Sign-out successful
//   } catch (error) {
//     // Handle sign-out error
//   }
// }


>>>>>>> 7f5d0222a07d47dd726706267429f10b4feb0343

export default firebase;