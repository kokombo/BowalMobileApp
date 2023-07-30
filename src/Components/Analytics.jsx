import {Image, Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const Analytics = ({title, icon, value}) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.heading}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.icon_container}>
          <Image source={icon} style={styles.image} />
        </View>
      </View>
      <View style={styles.value_container}>
        <Text style={styles.value}> {value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 121,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
  icon_container: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.snow,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
  },
  shadowProp: {
    shadowColor: COLORS.blue,
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  value_container: {
    marginBottom: 5,
  },
});

export default Analytics;
