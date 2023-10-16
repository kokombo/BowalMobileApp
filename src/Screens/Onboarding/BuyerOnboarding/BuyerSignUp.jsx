import {View, StyleSheet, Text, Alert} from 'react-native';
import {COLORS} from '../../../../constants';
import OnboardingHeading from '../Components/OnboardingHeading';
import {Input, Loader, PasswordInput} from '../../../Components';
import CustomButton from '../../../Components/Buttons';
import {QuickSignIn} from '../../Authorization';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';
import {login} from '../../../Redux/Slices/currentUserSlice';

const BuyerSignUp = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState(''); // This is used to keep email format error
  const [passwordError, setPasswordError] = useState(''); //This is used to keep password format error
  const [authError, setAuthError] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  //canSignup checks if a user has inputed signup credentials to enable login button.
  const canSignUp = Boolean(fullname && email && password);

  //Function to sign up a user for a buyer account
  const handleSignUp = async () => {
    if (!email.includes('@') || !email.includes('.com')) {
      setPageError('Please enter a valid email address');
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
    } else {
      setLoading(true);
      //Create a new user buyer account with firebase method
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          setPassword('');
          //update user account to store user's name.
          res.user.updateProfile({displayName: fullname}).then(
            //dispatch login as a buyer and save credentials to user state in currentUserSlice
            dispatch(
              login({
                email: res.user.email,
                displayName: fullname,
                uid: res.user.uid,
                accountType: 'buyer',
              }),
            ),
          );
          //store user data to firebase firestore
          database()
            .ref(`users/${res.user.uid}`)
            .set({name: fullname, accountType: 'buyer'});

          navigation.navigate('BuyerStack');

          Alert.alert(
            'Account created',
            'you have successfully created your account',
          );
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Email already in use');
            setAuthError('Email already in use');
          }
          if (error.code === 'auth/invalid-email') {
            setAuthError('Invalid email address');
          }
          if (error.code === 'auth/weak-password') {
            setAuthError(
              'Password not strong enough, please choose a stronger password',
            );
          }
          if (error.code === 'auth/network-request-failed') {
            Alert.alert(
              'Network error!',
              'Please check your internet connection and try again.',
            );
            setAuthError(
              'A network error has occured, please check your connectivity and try again.',
            );
          }
          if (error.code === 'auth/permission-denied') {
            Alert.alert('permission denied');
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
          subheading={'Sign up to continue'}
        />

        <View>
          <View style={styles.input_field}>
            <Input
              placeholder={'Full Name'}
              value={fullname}
              onChangeText={setFullName}
            />
            <View>
              <Input
                placeholder={'Email'}
                value={email}
                onChangeText={setEmail}
              />
              <View>
                {pageError && (
                  <Text style={styles.email_error}>{pageError}</Text>
                )}
              </View>
            </View>
            <View>
              <PasswordInput value={password} onChangeText={setPassword} />
              <View>
                {passwordError && (
                  <Text style={styles.email_error}>{passwordError}</Text> //This displays the email format error when there is one.
                )}
              </View>
            </View>
          </View>

          <View style={styles.button_container}>
            <CustomButton
              title={'Create My Account'}
              onPress={handleSignUp}
              disabled={!canSignUp}
            />
          </View>
        </View>
        <QuickSignIn
          heading={'or sign up with'}
          cta={'Already have an account?'}
          link={'Sign in'}
          onPressLink={() => {
            navigation.navigate('Signin');
          }}
        />
      </View>
    </View>
  );
};

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
  button_container: {
    marginTop: 50,
  },
  email_error: {
    fontSize: 10,
    color: 'red',
    fontWeight: '300',
    position: 'absolute',
  },
});
export default BuyerSignUp;
