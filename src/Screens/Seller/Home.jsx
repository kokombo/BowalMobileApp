import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {COLORS, assets} from '../../../constants';
import {ProfilePicture, Location, Greeting, Analytics} from '../../Components';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.heading}>
          <ProfilePicture />
          <Image source={assets.bell} style={styles.bell} />
        </View>

        <View style={styles.welcome}>
          <Greeting />
          <Location />
        </View>

        <View style={styles.analytics_container}>
          <Analytics
            title={'Total Products'}
            icon={assets.totalproducts}
            value={'1234'}
          />
          <Analytics
            title={'Total Visitors'}
            icon={assets.visitors}
            value={'12345'}
          />
        </View>

        <View>
          <Text>Total Products</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  body: {
    paddingHorizontal: 15,
    gap: 10,
    marginTop: StatusBar.currentHeight,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bell: {
    width: 30,
    height: 30,
  },
  analytics_container: {
    gap: 20,
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
