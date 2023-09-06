import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONT} from '../../../../constants';
import {useDispatch} from 'react-redux';
import {increase, decrease} from '../../../Redux/Slices/cartSlice';

const ProductIncrement = ({item}) => {
  const dispatch = useDispatch();

  const increaseCount = () => dispatch(increase(item.id));
  const decreaseCount = () => dispatch(decrease(item.id));

  //Disables the decrease button when the count equals 0
  const disabled = Boolean(item?.quantity === 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon_wrapper} onPress={increaseCount}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{item?.quantity}</Text>
      <TouchableOpacity
        style={styles.icon_wrapper}
        onPress={decreaseCount}
        disabled={disabled}>
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
