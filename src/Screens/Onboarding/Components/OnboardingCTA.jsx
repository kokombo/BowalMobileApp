import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const OnboardingCTA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cta_wrapper}>
      <Text style={styles.question}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.link}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cta_wrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  question: {
    color: COLORS.grey,
    fontSize: 18,
    fontWeight: '300',
  },
  link: {
    color: COLORS.blue,
    fontWeight: '500',
    fontSize: 18,
  },
});
export default OnboardingCTA;
