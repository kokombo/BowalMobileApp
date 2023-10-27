import {View, StyleSheet, Text, FlatList} from 'react-native';
import {COLORS} from '../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {CartItem} from './Components';
import commaNumber from 'comma-number';
import {useEffect} from 'react';
import {calculateTotalPrice} from '../../Redux/Slices/cartSlice';

const Cart = () => {
  const {cartItems, total, quantity} = useSelector(store => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [cartItems, quantity]);

  const renderItem = ({item}) => <CartItem item={item} />;

  return (
    <View style={styles.body}>
      {cartItems.length < 1 ? (
        <View style={styles.empty_cart}>
          <Text>Your cart is empty, start adding products</Text>
        </View>
      ) : (
        <FlatList
          renderItem={renderItem}
          data={cartItems}
          keyExtractor={item => item?.id.toString()}
          contentContainerStyle={{gap: 10}}
        />
      )}

      {total > 0 && (
        <View style={styles.total}>
          <Text>&#8358;{commaNumber(total.toFixed(2))}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  empty_cart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: COLORS.snow,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
  },
});
export default Cart;
