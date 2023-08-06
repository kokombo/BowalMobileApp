import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import OnboardingHeading from '../Components/OnboardingHeading';
import OnboardingCTA from '../Components/OnboardingCTA';
import {assets, COLORS} from '../../../../constants';
import {Input} from '../../../Components';
import CustomButton from '../../../Components/Buttons';
import CountryCodePicker from '../Components/CountryCodePicker';

const FormB = ({navigation}) => {
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
        <OnboardingHeading heading={'Vendor Registration'} />
        <View style={styles.form}>
          <View style={styles.inputs}>
            <Input placeholder={'Email'} textContentType={'emailAddress'} />
            <View style={styles.number}>
              <View style={styles.country}>
                {/* <View style={{position: 'absolute', bottom: 100}}>
                  <CountryCodePicker />
                </View> */}
                <Text style={{fontSize: 18}}>+234</Text>

                <Image source={assets.dropdown} style={styles.dropdown} />
              </View>

              <View style={{width: '91%'}}>
                <Input
                  placeholder={'Phone Number'}
                  keyboardType={'numeric'}
                  textContentType={'telephoneNumber'}
                />
              </View>
            </View>
          </View>
          <CustomButton
            title="continue"
            onPress={() => {
              navigation.navigate('FormC');
            }}
          />
        </View>
        <View style={styles.login}>
          <OnboardingCTA />
        </View>
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
  inputs: {
    gap: 40,
  },
  body: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 80,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  form: {
    gap: 50,
    marginBottom: 272,
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
});

export default FormB;
