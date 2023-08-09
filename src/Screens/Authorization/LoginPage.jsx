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
  const [pageError, setPageError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const canLogin = Boolean(email && password);

  const Login = async () => {
    if (!email.includes('@' && '.com')) {
      setPageError('That does not look like an email address');
    } else {
      setLoading(true);
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('BuyerHome');
          setPassword('');
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
              'Oops!',
              'A network error has occured, please check your connectivity and try again.',
            );
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <View style={styles.container}>
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
                  <Text style={styles.email_error}>{pageError}</Text>
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
          onPress={() => {
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
