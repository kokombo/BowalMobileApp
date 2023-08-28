import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {ProductCard} from '../../../Components';
import {COLORS} from '../../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {getVendorProducts} from '../../../Redux/Slices/getVendorSlice';

const Shop = ({vendor}) => {
  const dispatch = useDispatch();

  const {status, products} = useSelector(store => store.vendors);

  const id = vendor?.id;

  //useEffect that dispatches fetching the product of each vendor.
  useEffect(() => {
    dispatch(getVendorProducts(id));
  }, []);

  let content;
  if (status === 'loading') {
    content = <ActivityIndicator size="large" color={COLORS.blue} />;
  }
  if (status === 'succeeded') {
    content = (
      <View style={styles.product_container}>
        {products.map(product => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </View>
    );
  }

  return <View style={styles.body}>{content}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  product_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
export default Shop;
