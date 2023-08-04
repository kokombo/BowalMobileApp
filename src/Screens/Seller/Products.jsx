import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {COLORS, assets} from '../../../constants';
import {Search} from '../../Components';
import ProductsContainer from './ProductsContainer';

const Products = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.heading}>
          <Text style={{fontSize: 25, fontWeight: '600', color: COLORS.grey}}>
            Products
          </Text>
          <View style={styles.plus_container}>
            <Text style={{color: COLORS.blue, fontSize: 18}}>Add</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Add Product');
              }}>
              <Image source={assets.plus} style={styles.plus_icon} />
            </TouchableOpacity>
          </View>
        </View>
        <Search />
        <View style={styles.product_wrapper}>
          <ProductsContainer />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  body: {
    paddingHorizontal: 15,
    marginTop: StatusBar.currentHeight,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plus_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  plus_icon: {
    width: 30,
    height: 30,
  },
  product_wrapper: {
    marginTop: 30,
  },
});
export default Products;
