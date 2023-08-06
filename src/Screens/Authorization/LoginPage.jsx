import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {assets, COLORS} from '../../../constants';
import OnboardingHeading from '../Onboarding/Components/OnboardingHeading';
import {Input, PasswordInput} from '../../Components';
import CustomButton from '../../Components/Buttons';
import QuickSignIn from './QuickSignIn';

const LoginPage = ({navigation}) => {
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
          subheading={'Sign in to continue'}
        />

        <View>
          <View style={styles.input_field}>
            <Input placeholder={'Email'} />
            <PasswordInput />
          </View>
          <Text style={styles.forget_password}>Forgot Password?</Text>
          {/* This will change later on when I implement authorization. This is here for the sake of development */}
          <CustomButton
            title={'Login'}
            onPress={() => {
              navigation.navigate('BuyerHome');
            }}
          />
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
  forget_password: {
    color: COLORS.blue,
    fontWeight: '300',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 30,
  },
});
export default LoginPage;
