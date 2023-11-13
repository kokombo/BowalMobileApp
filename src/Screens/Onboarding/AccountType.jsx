import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, assets} from '../../../constants';
import OnboardingCTA from './Components/OnboardingCTA';
import OnboardingHeading from './Components/OnboardingHeading';

const AccountType = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.tagline_container}>
          <OnboardingHeading heading={'Buy easily, sell swiftly'} />
        </View>

        <View style={styles.account_type}>
          <TouchableOpacity
            style={styles.image_container}
            onPress={() => {
              navigation.navigate('BuyerSignUp');
            }}>
            <Image source={assets.buyer} style={styles.image} />

            <View style={styles.cta}>
              <Text style={styles.cta_text}>Become a buyer</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.image_container}
            onPress={() => {
              navigation.navigate('FormA');
            }}>
            <Image source={assets.seller} style={styles.image} />

            <View style={styles.cta}>
              <Text style={styles.cta_text}>Become a seller</Text>
            </View>
          </TouchableOpacity>
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
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 80,
    backgroundColor: COLORS.white,
  },
  image_container: {
    height: 183,
    width: '45%',
  },
  cta: {
    borderColor: COLORS.border,
    borderWidth: 1,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  cta_text: {
    color: COLORS.grey,
  },
  image: {
    width: '100%',
    height: 133,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  account_type: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 20,
    padding: 15,
    marginBottom: 120,
  },

  tagline_container: {},

  login: {
    alignItems: 'center',
  },
});

export default AccountType;
