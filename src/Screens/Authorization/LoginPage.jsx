import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {assets, COLORS} from '../../../constants';
import OnboardingHeading from '../Onboarding/Components/OnboardingHeading';
import {Input, PasswordInput} from '../../Components';
import CustomButton from '../../Components/Buttons';

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
        <View>
          <OnboardingHeading
            heading={'welcome !'}
            subheading={'Sign in to continue'}
          />
        </View>

        <View>
          <Input placeholder={'Email'} />
          <PasswordInput />
        </View>
        <Text>Forget Password </Text>
        <CustomButton title={'Login'} />
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
    padding: 15,
  },
});
export default LoginPage;
