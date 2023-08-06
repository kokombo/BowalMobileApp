import {View, StyleSheet, Text} from 'react-native';
import {assets, COLORS} from '../../../../constants';
import {Location, Greeting, Analytics} from '../../../Components';

const HomeHeader = () => {
  return (
    <View style={styles.body}>
      <View style={styles.welcome}>
        <Greeting />
        {/* <Location /> */}
      </View>

      <View style={styles.analytics_container}>
        <Analytics
          title={'Total Products'}
          icon={assets.totalproducts}
          value={'1234'}
        />
        <Analytics
          title={'Total Visitors'}
          icon={assets.visitors}
          value={'12345'}
        />
      </View>
      <Text style={styles.product_container_heading}>Products</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    gap: 10,
    minWidth: '100%',
  },

  analytics_container: {
    gap: 20,
    marginTop: 15,
  },
  welcome: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  product_container_heading: {
    color: COLORS.grey,
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 15,
  },
});
export default HomeHeader;
