import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {signout} from '../Redux/Slices/currentUserSlice';
import {Alert} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const useSignOut = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      //React native google signout
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut().then(() => {
        dispatch(signout());
        navigation.navigate('Signin');
      });

      //React native normal auth signout
      await auth()
        .signOut()
        .then(() => {
          dispatch(signout());
          navigation.navigate('Signin');
        });
    } catch (error) {
      if (error === 'auth/no-current-user') {
        Alert.alert('No active user');
      }
    }
  };

  return {logOut};
};

export default useSignOut;
