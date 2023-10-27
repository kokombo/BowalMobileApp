import {View, StyleSheet, SafeAreaView} from 'react-native';
import {COLORS} from '../../../constants';
import {HomeHeader} from './Components';
import Greeting from './Components/Greeting';

import ProductsContainer from './ProductsContainer';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcome}>
        <Greeting />

        {/* <Location /> */}
      </View>

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
    paddingHorizontal: 15,
  },
  body: {
    marginTop: 15,
  },
  welcome: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Home;
