import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';

const ProductCard = ({data}) => {
  const image = data?.productImages[0];
  const name = data?.productName.substring(0, 18);

  return (
    <TouchableOpacity style={styles.wrapper}>
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
        <Text style={styles.product_price}>&#8358; {data?.productPrice} </Text>
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
    minWidth: 180,
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
