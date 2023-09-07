import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../constants';
import ProductIncrement from './ProductIncrement';
import {useDispatch} from 'react-redux';
import {
  removeFromCart,
  calculateTotalPrice,
} from '../../../Redux/Slices/cartSlice';
import commaNumber from 'comma-number';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item?.id));
    dispatch(calculateTotalPrice());
  };

  return (
    <View style={[styles.body, styles.shadowProp]}>
      <View style={styles.container}>
        <View style={styles.image_wrapper}>
          <Image
            source={item?.productImages[0]}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.price_container}>
          <Text style={styles.product_name}>{item?.productName} </Text>
          <Text style={styles.product_price}>
            &#8358; {commaNumber(item?.productPrice)}
          </Text>
        </View>
      </View>
      <View style={styles.increment_container}>
        <ProductIncrement item={item} />
        <TouchableOpacity onPress={handleRemoveFromCart}>
          <Text style={styles.remove_item_text}>Remove Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 132,
    padding: 15,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.gray,
  },
  shadowProp: {
    shadowColor: COLORS.gray,
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 9,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  image_wrapper: {
    width: '40%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
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
  price_container: {
    flexDirection: 'column',
    gap: 12,
  },
  increment_container: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
  },
  remove_item_text: {
    color: 'red',
  },
});

export default CartItem;
