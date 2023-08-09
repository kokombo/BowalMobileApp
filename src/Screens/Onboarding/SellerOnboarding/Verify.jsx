import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import {assets, COLORS} from '../../../../constants';
import OnboardingHeading from '../Components/OnboardingHeading';
import {TextInput} from 'react-native-gesture-handler';
import CustomButton from '../../../Components/Buttons';
import {useState} from 'react';

const Verify = ({navigation}) => {
  const [num, setNum] = useState('');

  const handleChange = value => {
    setNum(value);
  };
  return (
    <View style={styles.body}>
      <View style={styles.heading_container}>
        <OnboardingHeading heading={'Verify your account'} />
        <Text style={styles.text}>
          We sent a verification code to your email address. Enter the codes
          below
        </Text>
      </View>
      <View style={styles.image_container}>
        <Image source={assets.verify} style={styles.image} />
      </View>
      <View style={styles.input_container}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={handleChange}
          maxLength={1}
          returnKeyType="next"
          textContentType="oneTimeCode"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={handleChange}
          returnKeyType="next"
          maxLength={1}
          textContentType="oneTimeCode"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={handleChange}
          returnKeyType="next"
          maxLength={1}
          textContentType="oneTimeCode"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={handleChange}
          returnKeyType="done"
          maxLength={1}
          textContentType="oneTimeCode"
        />
      </View>

      <View style={styles.cta_wrapper}>
        <Text style={styles.text}> Didn't receive code?</Text>
        <TouchableOpacity>
          <Text style={[styles.text, styles.link]}>Resend Code</Text>
        </TouchableOpacity>
      </View>

      <View>
        <CustomButton
          title={'proceed'}
          onPress={() => {
            navigation.navigate('VendorHome');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 80,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: 191,
    height: 142,
  },
  input: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.snow,
    textAlign: 'center',
    fontSize: 24,
  },
  input_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  image_container: {
    height: 202,
    width: 202,
    backgroundColor: COLORS.snow,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  heading_container: {
    paddingHorizontal: 60,
  },
  cta_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300',
    color: COLORS.grey,
  },
  link: {
    color: COLORS.blue,
    fontWeight: '500',
  },
});
export default Verify;
