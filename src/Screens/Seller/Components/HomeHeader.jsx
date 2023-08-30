import {View, StyleSheet, Text} from 'react-native';
import {assets, COLORS} from '../../../../constants';
import {Location, Analytics} from '../../../Components';
import Greeting from './Greeting';
import {useSelector} from 'react-redux';

const HomeHeader = () => {
  const {productsArray} = useSelector(store => store.product);

  //The total number of product in a vendor's store
  const productsNumber = productsArray.length;

  return (
    <View style={styles.body}>
      <View style={styles.analytics_container}>
        <Analytics
          title={'Total Products'}
          icon={assets.totalproducts}
          value={productsNumber}
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

  product_container_heading: {
    color: COLORS.grey,
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 15,
  },
});
export default HomeHeader;
