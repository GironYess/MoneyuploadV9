import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD_uVRO-4uwt9kdgV2LyFqPR7WXGM6MMhc",
  authDomain: "moneyupload3102023.firebaseapp.com",
  projectId: "moneyupload3102023",
  storageBucket: "moneyupload3102023.appspot.com",
  messagingSenderId: "826922842092",
  appId: "1:826922842092:web:56b7c90d6b3dafa8df32c9"
};

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }