import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';

export const saveToStorage = details => {
  const {user} = useSelector(store => store.currentUser);
  database()
    .ref('users/' + user.uid)
    .set({...details}, error => {
      if (error) return error.message;
    });
};
