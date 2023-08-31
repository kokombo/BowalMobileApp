import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import commaNumber from 'comma-number';

const ProductCard = ({data}) => {
  const navigation = useNavigation();

  const image = data?.productImages[0];
  const name = data?.productName;
  const price = commaNumber(data?.productPrice);

  const showProductDetail = () => {
    navigation.navigate('ProductDetail', {data});
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={showProductDetail}>
      <View style={styles.image_container}>
        <Image
          source={{
            uri: `${image}`,
          }}
          style={styles.product_image}
        />
      </View>
      <View style={styles.product_info_container}>
        <Text style={styles.product_name}>{name}</Text>
        <Text style={styles.product_price}>&#8358; {price} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 20,
  },
  image_container: {
    width: 170,
    height: 132,
    backgroundColor: COLORS.snow,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  product_image: {
    width: 127,
    height: 107,
    resizeMode: 'contain',
  },
  product_name: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.grey,
  },
  product_price: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.grey,
  },
  product_info_container: {
    gap: 5,
  },
});
export default ProductCard;
