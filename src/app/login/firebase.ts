// @ts-ignore
// import firebase from "firebase/app";
import firebase from "firebase/compat";
import "firebase/auth";

const app = firebase.initializeApp(process.env);

export const auth = app.auth();
export default app;
