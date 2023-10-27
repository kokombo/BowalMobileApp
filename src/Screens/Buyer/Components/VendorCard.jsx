import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {COLORS, FONT, assets} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const VendorCard = ({vendor}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('VendorShopHome', {vendor});
  };

  return (
    <Pressable
      style={[styles.card_container, styles.shadowProp]}
      onPress={onPress}>
      <View style={styles.image_wrapper}>
        <Image source={assets.seller} resizeMode="cover" style={styles.image} />
      </View>

      <View style={styles.business_info_container}>
        <Text style={styles.business_name}>{vendor.businessName}</Text>

        <Text style={styles.business_description}>
          {vendor.businessDescription}
        </Text>

        <View style={styles.dist_rating_container}>
          <View style={styles.rating_wrapper}>
            <Text style={styles.rating_text}>4.0</Text>

            <Image
              source={assets.star}
              resizeMode="contain"
              style={styles.star}
            />

            <Text style={styles.rating_text}>(2)</Text>
          </View>

          <Text style={styles.rating_text}>xxkm away</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card_container: {
    // flex: 1,
    height: 132,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  image_wrapper: {
    width: '24.6%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  business_info_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '75.4%',
    padding: 15,
  },
  star: {
    width: 20,
    height: 20,
  },
  business_name: {
    fontSize: FONT.lg,
    fontWeight: '500',
  },
  business_description: {
    fontSize: FONT.base,
    fontWeight: 'normal',
    color: COLORS.dirty,
  },
  dist_rating_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '100%',
  },
  rating_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rating_text: {
    color: COLORS.dirty,
    fontSize: FONT.base,
    fontWeight: 'normal',
  },
  shadowProp: {
    shadowColor: COLORS.gray,
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 9,
  },
});
export default VendorCard;
