import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONT} from '../../../../constants';
import ProductIncrement from './ProductIncrement';

const ProductQuantity = ({id}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Quantity</Text>
      <ProductIncrement id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  description: {
    color: COLORS.grey,
    fontSize: FONT.lg,
    fontWeight: '600',
  },
});
export default ProductQuantity;
