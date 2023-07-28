import {View, Image, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const ProductCard = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 132,
    backgroundColor: COLORS.snow,
    borderRadius: 10,
  },
});
export default ProductCard;
