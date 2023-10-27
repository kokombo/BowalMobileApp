import {Text, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../constants';

const OnboardingHeading = ({heading, subheading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles._heading}>{heading}</Text>

      <Text style={styles.sub_heading}>{subheading} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  _heading: {
    fontSize: 30,
    color: COLORS.blue,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  sub_heading: {
    color: COLORS.grey,
    fontSize: 20,
    fontWeight: '400',
  },
});
export default OnboardingHeading;
