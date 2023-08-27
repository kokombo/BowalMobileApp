import {View, StyleSheet, Image} from 'react-native';
import {Rating, VendorInfo} from '../Components';
import {COLORS, assets} from '../../../../constants';
import {getVendorProducts} from '../../../Redux/Slices/getVendorSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import ShopTopTab from '../../../../Navigations/ShopTopTab';

//Component that renders vendor's shop home view. This is what a buyer will see once they click on a vendor card.
const Home = ({route}) => {
  const {vendor} = route.params;
  const dispatch = useDispatch();

  const {products} = useSelector(store => store.vendors);
  const id = vendor.id;

  useEffect(() => {
    dispatch(getVendorProducts(id));
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.shop_image_container}>
        <Image
          source={assets.dummyshop}
          resizeMode="cover"
          style={styles.shop_image}
        />
      </View>
      <View style={styles.vendorinfo_container}>
        <VendorInfo vendor={vendor} />
        <Rating />
      </View>
      <View>
        <ShopTopTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  vendorinfo_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  shop_image_container: {
    height: 300,
    width: '100%',
  },
  shop_image: {
    height: '100%',
    width: '100%',
  },
});

export default Home;
