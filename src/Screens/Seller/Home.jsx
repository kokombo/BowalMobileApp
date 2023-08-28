import {View, StyleSheet, SafeAreaView} from 'react-native';
import {COLORS} from '../../../constants';
import {HomeHeader} from './Components';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts} from '../../Redux/Slices/ProductSlice';

import ProductsContainer from './ProductsContainer';

const Home = () => {
  const dispatch = useDispatch();
  const {status} = useSelector(store => store.product);
  const {user} = useSelector(store => store.currentUser);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, user]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ProductsContainer ListHeaderComponent={HomeHeader} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
  },
  body: {
    marginHorizontal: 15,
    marginTop: 15,
  },
});
export default Home;
