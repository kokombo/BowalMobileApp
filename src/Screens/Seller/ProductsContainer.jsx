import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import {ProductCard, RefreshController} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../../constants';
import {NoProduct} from './Components';

//Component that holds each vendor's products
const ProductsContainer = ({ListHeaderComponent}) => {
  const dispatch = useDispatch();
  const {status, productsArray} = useSelector(store => store.product);
  const {user} = useSelector(store => store.currentUser);

  const renderItem = ({item}) => {
    return <ProductCard data={item} />;
  };

  const Content = () => {
    // if (productsArray.length === 0) {
    //   return <NoProduct />;
    // }

    if (status === 'loading') {
      return (
        <View style={styles.activity_container}>
          <ActivityIndicator size={'large'} color={COLORS.blue} />
        </View>
      );
    } else if (status === 'failed') {
      return Alert.alert('Error!', 'something went wrong, please try again');
    } else {
      return (
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
  },
  activity_container: {
    marginTop: 150,
  },
});
export default ProductsContainer;
