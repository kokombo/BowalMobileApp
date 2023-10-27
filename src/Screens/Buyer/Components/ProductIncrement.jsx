import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONT} from '../../../../constants';
import {useDispatch} from 'react-redux';
import {
  increase,
  decrease,
  removeFromCart,
} from '../../../Redux/Slices/cartSlice';

const ProductIncrement = ({item}) => {
  const dispatch = useDispatch();

  const increaseCount = () => {
    dispatch(increase(item?.id));
  };

  const decreaseCount = () => {
    //If the quanity of the item picked by a user is one when the decreased button is clicked, the item will be removed from cart since the next number afer 1 is zero (when decreasing).
    if (item?.quantity === 1) {
      dispatch(removeFromCart(item?.id));
    } else {
      dispatch(decrease(item?.id));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon_wrapper} onPress={increaseCount}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>

      <View style={styles.count_container}>
        <Text style={[styles.text, styles.count]}>{item?.quantity}</Text>
      </View>

      <TouchableOpacity style={styles.icon_wrapper} onPress={decreaseCount}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  icon_wrapper: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: COLORS.snow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FONT.lg,
  },
  count: {
    position: 'absolute',
  },
  count_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ProductIncrement;
