import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
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
        <View style={styles.heading_container}>
          <OnboardingHeading heading={'Verify your account'} />
          <Text style={styles.text}>
            We sent a verification code to your mobile email. Enter the codes
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
            returnKeyType="default"
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={handleChange}
            returnKeyType="next"
            maxLength={1}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={handleChange}
            returnKeyType="next"
            maxLength={1}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={handleChange}
            returnKeyType="next"
            maxLength={1}
          />
        </View>
        <View style={styles.cta}>
          <Text>
            Didn't receive code?{' '}
            <Text style={{color: COLORS.blue, fontWeight: 'bold'}}>
              Resend Code
            </Text>{' '}
          </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  cta: {
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '200',
  },
});
export default Verify;
