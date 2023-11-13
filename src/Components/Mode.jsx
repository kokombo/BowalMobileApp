import {Image, View, Text, StyleSheet} from 'react-native';
import {COLORS, assets} from '../../constants';

const Mode = () => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Text style={styles.text}>Buyers Mode</Text>

      <Image source={assets.mode} style={styles.mode_icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '84%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 20,
  },
  mode_icon: {
    width: 35,
    height: 17.5,
  },
  text: {
    fontSize: 18,
    color: COLORS.grey,
    fontWeight: '300',
  },
  shadowProp: {
    shadowColor: COLORS.gray,
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
});

export default Mode;
