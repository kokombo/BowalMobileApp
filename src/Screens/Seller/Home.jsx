import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {COLORS, assets} from '../../../constants';
import {ProfilePicture} from '../../Components';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.heading}>
          <ProfilePicture />
          <Image source={assets.bell} style={styles.bell} />
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
    padding: 15,
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
});
export default Home;
