import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {ProductCard} from '../../../Components';
import {COLORS} from '../../../../constants';
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
//React.memo is used to export this component because render callback was to display it in tab navigation.  React.memo helps to avoid performance issues as render callback lacks the default optimization that comes with React Navigation.
export default React.memo(Shop);
