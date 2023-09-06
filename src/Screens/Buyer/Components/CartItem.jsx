import {Image, Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';
import ProductIncrement from './ProductIncrement';

const CartItem = ({item}) => {
  return (
    <View styles={[styles.wrapper, styles.shadowProp]}>
      <View>
        <Image source={item.productImages[0]} />
        <View>
          <Text>{item.productName} </Text>
          <Text>{item.productPrice} </Text>
        </View>
      </View>
      <View>
        <ProductIncrement />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 132,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
  },
  shadowProp: {
    shadowColor: COLORS.gray,
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 9,
  },
});

export default CartItem;
