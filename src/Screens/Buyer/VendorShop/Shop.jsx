import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {ProductCard} from '../../../Components';
import {COLORS, FONT} from '../../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {getVendorProducts} from '../../../Redux/Slices/getVendorSlice';

const Shop = ({vendor}) => {
  const dispatch = useDispatch();

  const {status, products, error} = useSelector(store => store.vendors);
  const id = vendor?.id;

  //useEffect that dispatches fetching the product of each vendor.
  useEffect(() => {
    dispatch(getVendorProducts(id));
  }, []);

  let content;
  if (status === 'loading') {
    content = <ActivityIndicator size="large" color={COLORS.blue} />;
  } else if (status === 'failed') {
    content = <Text>{error} </Text>;
  } else {
    if (products.length === 0) {
      content = (
        <View style={styles.no_products}>
          <Text style={styles.no_products_text}>
            There are no yet products in this shop.
          </Text>
          <Text style={styles.no_products_text}>Please check other shops!</Text>
        </View>
      );
    } else {
      content = (
        <View style={styles.product_container}>
          {products.map(product => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </View>
      );
    }
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
