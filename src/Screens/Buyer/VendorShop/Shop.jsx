import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ProductCard} from '../../../Components';
import {COLORS} from '../../../../constants';

const Shop = ({products}) => {
  return (
    <View style={styles.body}>
      {products.map(product => {
        return <ProductCard key={product.id} data={product} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
export default React.memo(Shop);
