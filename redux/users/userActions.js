import { doc, getDoc } from 'firebase/firestore';

import { USER_STATE_CHANGE } from './userTypes';

const fetchUser = () => async (dispatch) => {
  const auth = getAuth();
  const db = getFirestore();
  const docRef = doc(db, 'users', auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    dispatch({
      type: USER_STATE_CHANGE,
      payload: docSnap.data(),
    });
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};
