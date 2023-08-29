import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import {ProductCard, RefreshController} from '../../Components';
import {useSelector} from 'react-redux';
import {COLORS} from '../../../constants';
import {NoProduct} from './Components';

//Component that holds each vendor's products
const ProductsContainer = ({ListHeaderComponent}) => {
  const {status, productsArray} = useSelector(store => store.product);

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
    content = Alert.alert('Error!', 'something went wrong, please try again');
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
