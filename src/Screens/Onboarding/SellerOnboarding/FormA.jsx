import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, assets} from '../../../../constants';
import OnboardingCTA from '../Components/OnboardingCTA';
import OnboardingHeading from '../Components/OnboardingHeading';
import CustomButton from '../../../Components/Buttons';
import {Input} from '../../../Components';

const FormA = ({navigation}) => {
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
          <OnboardingHeading heading={'Vendor Registration'} />
        </View>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <Input placeholder={'Full name'} textContentType={'name'} />
            <Input
              placeholder={'Business name'}
              textContentType={'organizationName'}
            />
            <Input placeholder={'Business description'} />
          </View>
          <CustomButton
            title={'continue'}
            onPress={() => navigation.navigate('FormB')}
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
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputs: {
    gap: 40,
  },
  form: {
    gap: 50,
    marginBottom: 200,
  },
  login: {
    alignItems: 'center',
  },
});

export default FormA;
