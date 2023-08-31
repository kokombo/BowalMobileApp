import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONT} from '../../../../constants';
import commaNumber from 'comma-number';

const ProductInfo = ({data}) => {
  const name = data?.productName;
  const price = commaNumber(data?.productPrice);
  const category = data?.productCategory;

  return (
    <View style={styles.container}>
      <View style={styles.text_wrapper}>
        <Text style={styles.product_name}>{name} </Text>
        <Text style={styles.category}>{category} </Text>
      </View>

      <Text style={styles.price}>&#8358;{price} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_wrapper: {
    flexDirection: 'column',
    gap: 10,
  },
  product_name: {
    fontSize: FONT.xl,
    fontWeight: '600',
    color: COLORS.grey,
  },
  price: {
    fontSize: FONT.lg,
    color: COLORS.grey,
    fontWeight: '400',
  },
  category: {
    fontSize: FONT.lg,
    color: COLORS.gray,
    fontWeight: '400',
  },
});
export default ProductInfo;
