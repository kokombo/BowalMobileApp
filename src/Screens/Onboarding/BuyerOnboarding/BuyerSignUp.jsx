import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import {COLORS, assets} from '../../../../constants';
import OnboardingHeading from '../Components/OnboardingHeading';
import {Input, Loader, PasswordInput} from '../../../Components';
import CustomButton from '../../../Components/Buttons';
import {QuickSignIn} from '../../Authorization';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const BuyerSignUp = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState('');
  const [authError, setAuthError] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    setLoading(true);
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('BuyerHome');
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
        console.log(error);
      });
    setLoading(false);
  };

  const canSignUp = Boolean(fullname && email && password);

  if (loading) {
    return <Loader />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={assets.arrowback}
            style={{height: 18, width: 20, marginLeft: 15}}
          />
        </TouchableOpacity>
      </View>
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
              onChangeText={value => setFullName(value)}
            />
            <View>
              <Input
                placeholder={'Email'}
                value={email}
                onChangeText={value => setEmail(value)}
              />
              <View>
                {pageError && (
                  <Text style={styles.email_error}>{pageError}</Text>
                )}
              </View>
            </View>

            <PasswordInput
              value={password}
              onChangeText={value => setPassword(value)}
            />
          </View>

          <View style={styles.button_container}>
            <CustomButton
              title={'Sign Up'}
              onPress={handleSignUp}
              disabled={!canSignUp}
            />
          </View>
        </View>

        <QuickSignIn
          heading={'or sign up with'}
          cta={'Already have an account?'}
          link={'Sign in'}
          onPress={() => {
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
  header: {
    height: 150,
    backgroundColor: COLORS.blue,
    width: '100%',
    justifyContent: 'center',
    paddingTop: 60,
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
  },
});
export default BuyerSignUp;
