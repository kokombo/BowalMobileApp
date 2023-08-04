import {View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {COLORS, assets} from '../../../constants';
import HomeHeader from './HomeHeader';
import {ProfilePicture} from '../../Components';

import ProductsContainer from './ProductsContainer';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <ProfilePicture width={50} height={50} />
        <Image source={assets.bell} style={styles.bell} />
      </View>

      <ProductsContainer ListHeaderComponent={<HomeHeader />} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  bell: {
    width: 30,
    height: 30,
  },
});
export default Home;
