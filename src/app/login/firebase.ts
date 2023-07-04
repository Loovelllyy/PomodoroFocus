import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth';


const keys = {
  apiKey: process.env['FAREBASE_API_KEY'],
  authDomain: process.env["FAREBASE_AUTHDOMAIN"],
  projectId: process.env["FAREBASE_PROJECT_ID"],
  storageBucket:  process.env["FAREBASE_STORAGE_BACKET"],
  messagingSenderId: process.env["FAREBASE_MESSAGING_SENDER_ID"],
  appId: process.env["FAREBASE_APP_ID"],
}

const app = initializeApp(keys);

export const auth = getAuth(app);

export const fbLogin = (login: string, password: string): Promise<any> => {
  return signInWithEmailAndPassword(auth, login, password);
}

export default app;
