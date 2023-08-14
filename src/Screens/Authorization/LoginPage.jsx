import {View, StyleSheet, Text, Alert} from 'react-native';
import {useState} from 'react';
import {COLORS} from '../../../constants';
import OnboardingHeading from '../Onboarding/Components/OnboardingHeading';
import {Input, Loader, PasswordInput} from '../../Components';
import CustomButton from '../../Components/Buttons';
import QuickSignIn from './QuickSignIn';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pageError, setPageError] = useState(''); //This is used to monitor email format error
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  /* We check if the user has inputed email and password. The login button remains disabled at default until the user inputs their credentials. */
  const canLogin = Boolean(email && password);

  /* 
  We check if the email address inputted by user is valid by inspecting if it includes (@) && '.com'. If the inputted does not include either of the two, an error message will show up when the user fires the login button.

  if user provides correct credential format, the authentication process begins. Every possible authentication error has been handled. 
  */

  const Login = async () => {
    if (!email.includes('@') || !email.includes('.com')) {
      setPageError('Please enter a valid email address');
    } else {
      setLoading(true);
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setPassword('');
          navigation.navigate('BuyerStack');
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
