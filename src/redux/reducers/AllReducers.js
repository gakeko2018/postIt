import { authReducer } from "./AuthReducer";
import { postReducer } from "./PostReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"


export const AllReducers = combineReducers({
  auth: authReducer,
  posts_in_allreducers: postReducer,
  firestore_in_allreducers: firestoreReducer,
  firebase_in_allreducers: firebaseReducer
});
 