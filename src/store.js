import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX10SENFeJWQ2GcunSMQGB0ts6bVKG8nQ",
  authDomain: "reactclientpanel-6a57f.firebaseapp.com",
  databaseURL: "https://reactclientpanel-6a57f.firebaseio.com",
  projectId: "reactclientpanel-6a57f",
  storageBucket: "reactclientpanel-6a57f.appspot.com",
  messagingSenderId: "982414718294",
  appId: "1:982414718294:web:8557d9d65658b9c48e52f7",
};

//react-redux-firebase-config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init firestore
//const firestore = firebase.firestore();

//add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), //firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

//Create initial state
const initialState = {};

//Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
