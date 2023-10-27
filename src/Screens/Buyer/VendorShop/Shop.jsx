import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {ProductCard, Error} from '../../../Components';
import {COLORS, FONT} from '../../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {getVendorProducts} from '../../../Redux/Slices/getVendorSlice';

const Shop = ({vendor}) => {
  const dispatch = useDispatch();

  const {status, products, error} = useSelector(store => store.vendors);

  const id = vendor?.id;

  //useEffect to dispatch the fetching of each vendor's products
  useEffect(() => {
    dispatch(getVendorProducts(id));
  }, []);

  return (
    <View style={styles.body}>
      {status === 'loading' ? (
        <ActivityIndicator size="large" color={COLORS.blue} />
      ) : status === 'failed' ? (
        <Error error={'Something went wrong, please try again'} />
      ) : products.length < 1 ? (
        <View style={styles.no_products}>
          <Text style={styles.no_products_text}>
            There are no yet products in this shop.
          </Text>
          <Text style={styles.no_products_text}>Please check other shops!</Text>
        </View>
      ) : (
        <View style={styles.product_container}>
          {products.map(product => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </View>
      )}
    </View>
  );
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
  no_products: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  no_products_text: {
    fontSize: FONT.base,
    color: COLORS.blue,
  },
});
//React.memo is used to export this component because render callback was to display it in tab navigation.  React.memo helps to avoid performance issues as render callback lacks the default optimization that comes with React Navigation.
export default React.memo(Shop);
