import {View, StyleSheet, SafeAreaView} from 'react-native';
import {COLORS} from '../../../constants';
import {HomeHeader} from './Components';

import ProductsContainer from './ProductsContainer';

const Home = () => {
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
