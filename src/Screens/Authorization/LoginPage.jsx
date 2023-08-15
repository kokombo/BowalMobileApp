import {View, StyleSheet, Text, Alert} from 'react-native';
import {useEffect, useState} from 'react';
import {COLORS} from '../../../constants';
import OnboardingHeading from '../Onboarding/Components/OnboardingHeading';
import {Input, Loader, PasswordInput} from '../../Components';
import CustomButton from '../../Components/Buttons';
import QuickSignIn from './QuickSignIn';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../../Redux/Slices/currentUserSlice';
import {fetchProducts} from '../../Redux/Slices/ProductSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pageError, setPageError] = useState(''); //This is used to monitor email format error
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  //useEffect to already fetch product before a vendor logs in.
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //canLogin checks if a user has inputed login credentials to enable login button.
  const canLogin = Boolean(email && password);

  //Function to log users into the application
  const Login = async () => {
    /*
     If statement to check the format of the inputed email.
    */
    if (!email.includes('@') || !email.includes('.com')) {
      setPageError('Please enter a valid email address');
    } else {
      // Initiate loading
      setLoading(true);
      //Sign a user with firebase method
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          // dispatch login after credentials authorization
          setPassword('');
          dispatch(
            login({
              email: res.user.email,
              displayName: res.user.displayName,
              isAnonymous: res.user.isAnonymous,
              uid: res.user.uid,
            }),
          );
          /* 
         isAnonymous is used to check if a user has a buyer or a vendor account. If isAnonymous is true, the user is a buyer and if false the user is a vendor.
        */
          if (res.user.isAnonymous === true) {
            navigation.navigate('BuyerStack');
          }
          if (res.user.isAnonymous === false) {
            navigation.navigate('VendorStack');
          }
        })
        .catch(error => {
          /*
          Handling possible login errors
          */

          if (error.code === 'auth/invalid-email') {
            Alert.alert('Invalid email address!');
          }
          if (error.code === 'auth/user-disabled') {
            Alert.alert('Error!', 'Your account has been disabled');
          }
          if (error.code === 'auth/user-not-found') {
            Alert.alert(
              'User not found!',
              'Please check your credentials and try again',
            );
          }
          if (error.code === 'auth/wrong-password') {
            Alert.alert('Wrong password!');
          }
          if (error.code === 'auth/network-request-failed') {
            Alert.alert(
              'Network error!',
              'Please check your internet connection and try again.',
            );
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <View style={styles.container}>
      {loading && <Loader />}

      <View style={styles.body}>
        <OnboardingHeading
          heading={'welcome !'}
          subheading={'Sign in to continue'}
        />

        <View>
          <View style={styles.input_field}>
            <View>
              <Input
                placeholder={'Email'}
                value={email}
                onChangeText={setEmail}
              />
              <View>
                {pageError && (
                  <Text style={styles.email_error}>{pageError}</Text> // This displays the email format error when there is one.
                )}
              </View>
            </View>
            <PasswordInput value={password} onChangeText={setPassword} />
          </View>

          <Text style={styles.forget_password}>Forgot Password?</Text>

          <CustomButton title={'Login'} onPress={Login} disabled={!canLogin} />
        </View>

        <QuickSignIn
          heading={'or sign in with'}
          cta={"Don't have an account yet?"}
          link={'Sign up'}
          onPressLink={() => {
            navigation.navigate('AccountType');
          }}
        />
      </View>
    </View>
  );
};

// Login Page Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  body: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 80,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  input_field: {
    gap: 40,
  },
  forget_password: {
    color: COLORS.blue,
    fontWeight: '300',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 30,
  },
  email_error: {
    fontSize: 10,
    color: 'red',
    fontWeight: '300',
    position: 'absolute',
  },
});
export default LoginPage;
