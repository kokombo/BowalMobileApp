import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, assets} from '../../../../constants';
import OnboardingCTA from '../Components/OnboardingCTA';
import OnboardingHeading from '../Components/OnboardingHeading';
import CustomButton from '../../../Components/Buttons';
import {BusinessCategory} from '../../../Components';

const FormC = ({navigation}) => {
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
          <OnboardingHeading heading={'registration'} />
        </View>

        <View style={styles.form}>
          <View style={styles.inputs}>
            <BusinessCategory />
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
  header: {
    height: 150,
    backgroundColor: COLORS.blue,
    width: '100%',
    justifyContent: 'center',
    paddingTop: 60,
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
});

export default FormC;
