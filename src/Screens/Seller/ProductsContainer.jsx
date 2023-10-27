import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {ProductCard, RefreshController, Error} from '../../Components';
import {COLORS} from '../../../constants';
import {NoProduct} from './Components';
import {useSelector} from 'react-redux';

//Component that holds each vendor's products
const ProductsContainer = ({ListHeaderComponent}) => {
  const {status, productsArray} = useSelector(store => store.product);

  const renderItem = ({item}) => <ProductCard data={item} />;

  return (
    <View style={styles.products_container}>
      {status === 'loading' ? (
        <View style={styles.activity_container}>
          <ActivityIndicator size={'large'} color={COLORS.blue} />
        </View>
      ) : status === 'failed' ? (
        <Error error={'Something went wrong, please try again'} />
      ) : productsArray.length < 1 ? (
        <NoProduct />
      ) : (
        <FlatList
          numColumns={2}
          data={productsArray}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshController />}
          ListHeaderComponent={ListHeaderComponent}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}
        />
      )}
    </View>
  );
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
