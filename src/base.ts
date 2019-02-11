import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAoUk51WLZx_75K0TYwxgr_DBt-1ibA9Cg',
  authDomain: 'queuing-number-system.firebaseapp.com',
  databaseURL: 'https://queuing-number-system.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
