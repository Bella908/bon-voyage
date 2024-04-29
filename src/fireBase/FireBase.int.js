// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2xHqAcZF01TpTk9vuPCwx-otFW_ewrvE",
  authDomain: "bon-voyage-c54b1.firebaseapp.com",
  projectId: "bon-voyage-c54b1",
  storageBucket: "bon-voyage-c54b1.appspot.com",
  messagingSenderId: "681495394627",
  appId: "1:681495394627:web:8f37baeb416d1babacd7f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;