import {View, StyleSheet, Image} from 'react-native';
import {Rating, VendorInfo, SaveVendor} from '../Components';
import {COLORS, assets} from '../../../../constants';

//Component that renders vendor's shop home view. This is what a buyer will see once they click on a vendor card.
const Home = ({vendor}) => {
  return (
    <View style={styles.body}>
      <View style={styles.shop_image_container}>
        <Image
          source={assets.dummyshop}
          resizeMode="cover"
          style={styles.shop_image}
        />

        <View style={styles.save_vendor_wrapper}>
          <SaveVendor vendor={vendor} />
        </View>
      </View>

      <View style={styles.vendorinfo_container}>
        <VendorInfo vendor={vendor} />

        <Rating />
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
  save_vendor_wrapper: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});

export default Home;
