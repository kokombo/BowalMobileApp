import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {login, signout} from '../Redux/Slices/currentUserSlice';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const listener = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
          }),
        );
      } else {
        dispatch(signout());
      }
    });
    listener();
  }, []);
};
