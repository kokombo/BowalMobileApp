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

  const renderItem = ({item}) => {
    return <CartItem item={item} />;
  };

  let content;

  if (cartItems.length === 0) {
    content = (
      <View style={styles.empty_cart}>
        <Text>Your cart is empty, start adding products</Text>
      </View>
    );
  } else {
    content = (
      <FlatList
        renderItem={renderItem}
        data={cartItems}
        keyExtractor={item => item.id}
        contentContainerStyle={{gap: 10}}
      />
    );
  }

  return (
    <View style={styles.body}>
      {content}
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
