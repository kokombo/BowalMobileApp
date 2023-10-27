import {View, Text, Image, StyleSheet} from 'react-native';
import VendorLocation from './VendorLocation';
import {FONT, assets, COLORS} from '../../../../constants';

const VendorInfo = ({vendor}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile_image_container}>
        <Image source={assets.profilepicture} style={styles.profile_image} />
      </View>

      <View style={styles.location_container}>
        <Text style={styles.vendor_name}>{vendor?.businessName}</Text>

        <VendorLocation color={COLORS.gray} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profile_image_container: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },
  profile_image: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  location_container: {
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start',
    maxWidth: 230,
  },
  vendor_name: {
    fontSize: FONT.xl,
    fontWeight: 'bold',
  },
});
export default VendorInfo;
