const firebaseConfig = {
  apiKey: "AIzaSyCeiyhx_XX-OD_1dcX5hlN2_nV4xIypZkM",
  authDomain: "my-demo-270012.firebaseapp.com",
  databaseURL: "https://my-demo-270012.firebaseio.com",
  projectId: "my-demo-270012",
  storageBucket: "my-demo-270012.appspot.com",
  messagingSenderId: "1096719025262",
  appId: "1:1096719025262:web:04120b3d952a759a1a527f",
  measurementId: "G-H4G73VHJ9Q"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth,provider};
export default  db;