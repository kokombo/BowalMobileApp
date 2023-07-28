import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

const OnboardingHeading = ({title}) => {
  return <Text style={styles.tagline}>{title}</Text>;
};

const styles = StyleSheet.create({
  tagline: {
    textAlign: 'center',
    fontSize: 30,
    color: COLORS.blue,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
export default OnboardingHeading;
