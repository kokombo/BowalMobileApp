import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS, assets} from '../../../constants';
import {HomeHeader} from './Components';
import {ProfilePicture} from '../../Components';
import ProductsContainer from './ProductsContainer';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.heading}>
          <ProfilePicture width={50} height={50} />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Notifications');
            }}>
            <Image source={assets.bell} style={styles.bell} />
          </TouchableWithoutFeedback>
        </View>

        <ProductsContainer ListHeaderComponent={<HomeHeader />} />
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
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  bell: {
    width: 30,
    height: 30,
  },
});
export default Home;
