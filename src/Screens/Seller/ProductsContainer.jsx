import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {ProductCard, RefreshController} from '../../Components';
import {fetchProducts} from '../../Redux/Slices/ProductSlice';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../../constants';

const ProductsContainer = ({ListHeaderComponent}) => {
  const dispatch = useDispatch();
  const {status, productArray} = useSelector(store => store.product);

  const renderItem = ({item}) => {
    return <ProductCard data={item} />;
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productArray, status]);

  const Content = () => {
    if (status === 'loading') {
      return (
        <View style={styles.activity_container}>
          <ActivityIndicator size={'large'} color={COLORS.blue} />
        </View>
      );
    }
    if (status === 'succeeded') {
      return (
        <FlatList
          numColumns={2}
          data={productArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshController />}
          ListHeaderComponent={ListHeaderComponent}
          columnWrapperStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 30,
          }}
        />
      );
    }
  };
  return (
    <View style={styles.products_container}>
      <Content />
    </View>
  );
};
const styles = StyleSheet.create({
  products_container: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
  },
  activity_container: {
    marginTop: 150,
  },
});
export default ProductsContainer;
