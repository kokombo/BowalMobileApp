import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONT} from '../../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {increase, decrease} from '../../../Redux/Slices/cartSlice';

const ProductIncrement = ({id}) => {
  const dispatch = useDispatch();
  const {quantity} = useSelector(store => store.cart);
  console.log(quantity);

  // const increaseCount = dispatch(increase(id));
  // const decreaseCount = dispatch(decrease(id));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon_wrapper}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{quantity}</Text>
      <TouchableOpacity style={styles.icon_wrapper}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
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
});
export default ProductIncrement;
