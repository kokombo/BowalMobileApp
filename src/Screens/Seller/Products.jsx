import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {COLORS} from '../../../constants';
import {Search} from '../../Components';
import ProductsContainer from './ProductsContainer';

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.search_container}>
          <Search placeholder={'Search'} />
        </View>
        <ProductsContainer />
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
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    gap: 30,
  },
});
export default Products;
