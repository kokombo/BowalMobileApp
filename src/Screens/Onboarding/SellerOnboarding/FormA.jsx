import {View, StyleSheet, Text, Image, Alert} from 'react-native';
import {COLORS, assets} from '../../../../constants';
import OnboardingCTA from '../Components/OnboardingCTA';
import OnboardingHeading from '../Components/OnboardingHeading';
import CustomButton from '../../../Components/Buttons';
import {Input, Loader, PasswordInput} from '../../../Components';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import database from '@react-native-firebase/database';
import {login} from '../../../Redux/Slices/currentUserSlice';

//Component for vendor signup first screen.
const FormA = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState(''); //This handles email format error
  const [authError, setAuthError] = useState('');
  const [passwordError, setPasswordError] = useState(''); //This is used to monitor password format error

  const navigation = useNavigation();
  const dispatch = useDispatch();

  //canSignup checks if a user has inputed signup credentials to enable login button.
  const canSignUp = Boolean(fullname && email && password && phone);

  //Function to sign up a user for a vendor account
  const handleSignUp = async () => {
    /*
     If statement to check the format of the inputed email.
     Followed by an else if statement to inspect the length of the inputed password
    */
    if (!email.includes('@') || !email.includes('.com')) {
      setPageError('Please enter a valid email address');
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
    } else {
      // Initiate loading
      setLoading(true);
      // create a new user vendor account
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          setPassword('');
          //update user account to store user's name, phonenumber and specify vendor account (using isAnonymous: false)
          res.user
            .updateProfile({
              displayName: fullname,
              phoneNumber: phone,
              isAnonymous: false,
            })
            .then(
              //dispatch user login and save login credentials to user state in currentUserSlice in Redux
              dispatch(
                login({
                  displayName: fullname,
                  email: res.user.email,
                  uid: res.user.uid,
                  isAnonymous: false,
                  accountType: 'vendor',
                }),
              ),
            );
          //store user's info to firebase firestore
          database()
            .ref(`users/vendors/${res.user.uid}`)
            .set({name: fullname, accountType: 'vendor', phoneNumber: phone});
          //After signup, navigates to formB (a component that handles vendor's business info)
          navigation.navigate('FormB');
          Alert.alert('Welcome!', 'You have successfully created your account');
        })
        .catch(() => {
          // catch possible signup errors
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Error!', 'Email address already in use');
            setAuthError('Email already in use');
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Oops!', 'Invalid email address');
            setAuthError('Invalid email address');
          }
          if (error.code === 'auth/weak-password') {
            Alert.alert('Weak Password!', 'Please choose a stronger password');
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <View style={styles.body}>
      {loading && <Loader />}

      <OnboardingHeading
        heading={'Welcome'}
        subheading={'Sign up to continue!'}
      />

      <View style={styles.form}>
        <View style={styles.inputs}>
          <Input
            placeholder={'Full name'}
            textContentType={'name'}
            value={fullname}
            onChangeText={setFullname}
          />
          <View>
            <Input
              placeholder={'Email'}
              textContentType={'emailAddress'}
              value={email}
              onChangeText={setEmail}
            />

            <View>
              {pageError && (
                <Text style={styles.email_error}>{pageError}</Text> //This displays the email format error when there is one
              )}
            </View>
          </View>

          <View style={styles.number}>
            <View style={styles.country}>
              <Text style={{fontSize: 18}}>+234</Text>
              <Image source={assets.dropdown} style={styles.dropdown} />
            </View>
            <View style={{width: '91%'}}>
              <Input
                placeholder={'Phone Number'}
                keyboardType={'numeric'}
                textContentType={'telephoneNumber'}
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </View>
          <View>
            <PasswordInput value={password} onChangeText={setPassword} />
            {passwordError && (
              <Text style={styles.email_error}>{passwordError}</Text> //This displays the email format error when there is one.
            )}
          </View>
        </View>
        <CustomButton
          title={'Create My Account'}
          onPress={handleSignUp}
          disabled={!canSignUp}
        />
      </View>
      <View style={styles.login}>
        <OnboardingCTA />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 80,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputs: {
    gap: 40,
  },
  form: {
    gap: 50,
    marginBottom: 100,
  },
  login: {
    alignItems: 'center',
  },
  dropdown: {
    width: 14,
    height: 7,
  },
  number: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginHorizontal: 30,
  },
  country: {
    borderColor: COLORS.gray,
    borderBottomWidth: 1,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  email_error: {
    fontSize: 10,
    color: 'red',
    fontWeight: '300',
    position: 'absolute',
  },
});

export default FormA;
