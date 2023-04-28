import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  Auth,
} from "firebase/auth";

//firebaseuiの読み込み
import firebaseUI from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'


// .envファイルで設定した環境変数をfirebaseConfigに入れる
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID
};

let firebaseApp = FirebaseApp;
let auth = Auth;
let db = getFirestore;

// サーバーサイドでレンダリングするときにエラーが起きないようにするための記述
if (typeof window !== "undefined" && !getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth(firebaseApp);
  auth.useDeviceLanguage();
  db = getFirestore(firebaseApp);
}

// Google認証とGithub認証のプロバイダーを作成
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { firebaseApp, auth, db, googleProvider, githubProvider, firebaseUI };
