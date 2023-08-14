import auth from '@react-native-firebase/auth';
import {login, signout} from '../Redux/Slices/currentUserSlice';
import {useDispatch} from 'react-redux';

export const checkAuth = () => {
  const dispatch = useDispatch();

  const listener = auth().onAuthStateChanged(activeUser => {
    if (activeUser) {
      dispatch(
        login({
          displayName: activeUser.displayName,
          email: activeUser.email,
          uid: activeUser.uid,
        }),
      );
    } else {
      dispatch(signout());
    }
  });
  listener();
};
