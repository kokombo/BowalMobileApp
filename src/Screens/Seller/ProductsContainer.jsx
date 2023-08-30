import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {ProductCard, RefreshController, Error} from '../../Components';
import {COLORS} from '../../../constants';
import {NoProduct} from './Components';
import {useSelector} from 'react-redux';
import {fetchProducts} from '../../Redux/Slices/ProductSlice';
import {useEffect} from 'react';

//Component that holds each vendor's products
const ProductsContainer = ({ListHeaderComponent}) => {
  const {status, productsArray, error} = useSelector(store => store.product);

  const renderItem = ({item}) => {
    return <ProductCard data={item} />;
  };

  let content;
  if (status === 'loading') {
    content = (
      <View style={styles.activity_container}>
        <ActivityIndicator size={'large'} color={COLORS.blue} />
      </View>
    );
  } else if (status === 'failed') {
    content = <Error error={error} />;
  } else {
    if (productsArray.length === 0) {
      content = <NoProduct />;
    } else {
      content = (
        <FlatList
          numColumns={2}
          data={productsArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshController />}
          ListHeaderComponent={ListHeaderComponent}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}
        />
      );
    }
  }
  return <View style={styles.products_container}>{content}</View>;
};
const styles = StyleSheet.create({
  products_container: {
    width: '100%',
    height: '100%',
  },
  activity_container: {
    marginTop: 150,
  },
});
export default ProductsContainer;
