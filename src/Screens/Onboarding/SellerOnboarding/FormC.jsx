import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, assets} from '../../../../constants';
import OnboardingCTA from '../Components/OnboardingCTA';
import OnboardingHeading from '../Components/OnboardingHeading';
import CustomButton from '../../../Components/Buttons';
import {BusinessCategory} from '../../../Components';

const FormC = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <OnboardingHeading heading={'vendor registration'} />
        </View>

        <View style={styles.form}>
          <View style={styles.inputs}>
            <View>
              <BusinessCategory />
              <Image source={assets.dropdown} style={styles.dropdown_icon} />
            </View>
          </View>

          <View>
            <CustomButton
              title={'register & verify'}
              onPress={() => {
                navigation.navigate('Verify');
              }}
            />
          </View>
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
  form: {
    gap: 50,
    marginBottom: 200,
  },
  inputs: {
    gap: 30,
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
  login: {
    alignItems: 'center',
  },
  dropdown_icon: {
    position: 'absolute',
    right: 0,
    width: 14,
    height: 7,
    top: 16,
  },
});

export default FormC;
