import {Text, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../constants';
import {DisplayName} from '../../../Components';

const Greeting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome,</Text>
      <DisplayName color={COLORS.grey} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: COLORS.grey,
    fontWeight: '600',
  },
});
export default Greeting;
