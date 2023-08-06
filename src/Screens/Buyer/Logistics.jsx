import {View, Text, StyleSheet, Image} from 'react-native';
import {assets, COLORS} from '../../../constants';

const Logistics = () => {
  return (
    <View style={styles.body}>
      <View style={styles.icon_container}>
        <Image source={assets.logisticscomingsoon} style={styles.icon} />
        <Text style={styles.coming_soon_text}>Coming soon! </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  icon: {
    width: 237,
    height: 142,
  },
  icon_container: {
    alignItems: 'center',
    gap: 20,
  },
  coming_soon_text: {
    fontSize: 18,
    fontWeight: '300',
    color: COLORS.grey,
  },
});
export default Logistics;
