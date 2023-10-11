import {View, StyleSheet, Text, Alert} from 'react-native';
import {useState} from 'react';
import {COLORS} from '../../../constants';
import OnboardingHeading from '../Onboarding/Components/OnboardingHeading';
import {Input, Loader, PasswordInput} from '../../Components';
import CustomButton from '../../Components/Buttons';
import QuickSignIn from './QuickSignIn';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../../Redux/Slices/currentUserSlice';
import database from '@react-native-firebase/database';
import {fetchProducts} from '../../Redux/Slices/ProductSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pageError, setPageError] = useState(''); //Monitors email format error
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  //canLogin checks if a user has inputed login credentials to enable login button.
  const canLogin = Boolean(email && password);

  //Function to log users into the application
  const Login = async () => {
    if (!email.includes('@') || !email.includes('.com')) {
      setPageError('Please enter a valid email address');
    } else {
      setLoading(true);

      //Sign a user with firebase method
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          dispatch(
            login({
              email: res.user.email,
              displayName: res.user.displayName,
              uid: res.user.uid,
              picture: res.user.photoURL,
            }),
          );

          //referencing databse storage to pullout a user's account type while logging in. This is necessary to navigate to the appropriate screen.

          const ref = database().ref(`users/${res.user.uid}`);
          ref.on('value', snapshot => {
            const accountType = snapshot.child('accountType').val();

            if (accountType === 'buyer') {
              navigation.navigate('BuyerStack');
            }

            if (accountType === 'vendor') {
              dispatch(fetchProducts());
              navigation.navigate('VendorStack');
            }
          });
        })
        .catch(error => {
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
          setPassword('');
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
