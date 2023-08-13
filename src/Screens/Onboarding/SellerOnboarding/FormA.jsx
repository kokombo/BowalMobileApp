import {View, StyleSheet, Text, Image, Alert} from 'react-native';
import {COLORS, assets} from '../../../../constants';
import OnboardingCTA from '../Components/OnboardingCTA';
import OnboardingHeading from '../Components/OnboardingHeading';
import CustomButton from '../../../Components/Buttons';
import {Input, Loader, PasswordInput} from '../../../Components';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {updateUserProfile, saveToStorage} from '../../../utilities';

const FormA = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState(''); //This handles email format error
  const [authError, setAuthError] = useState('');
  const navigation = useNavigation();

  /*A user (vendor) must provide fullname, email, and password before signup. Button is disabled until the three conditions are met.*/
  const canSignUp = Boolean(fullname && email && password && phone);

  /*This is the onPress function that handles user signup. If the email address entered does not contain "@" and ".com", an error will pop up. Firebase auth error is used to handle credential validation and network errors.
  
  Once a vendor signup with email, password, fullname, and password, firebase handles the email and password while the updateUserProfile function (available in the utilities folder) updates the user profile, receveing the displayName as fullname and phoneNumber as phone. The saveToStorage (also in the utilities folder) function is then called to store the users credentials to firebase storage.
  */

  const handleSignUp = async () => {
    if (!email.includes('@') || !email.includes('.com')) {
      setPageError('Please enter a valid email address');
    } else {
      setLoading(true);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setPassword(' ');
          updateUserProfile({
            displayName: fullname,
            phoneNumber: phone,
          });
          saveToStorage({name: fullname, accountType: 'vendor'});
          navigation.navigate('FormB');
          Alert.alert('Welcome!', 'You have successfully created your account');
        })
        .catch(error => {
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
          <PasswordInput value={password} onChangeText={setPassword} />
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
