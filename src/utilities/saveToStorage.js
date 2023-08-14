import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';

export const saveToStorage = async details => {
  const {user} = useSelector(store => store.currentUser);

  await database()
    .ref(`users/${user.uid}`)
    .set({...details});
};
