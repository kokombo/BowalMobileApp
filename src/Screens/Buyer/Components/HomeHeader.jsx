import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../../../constants';
import {Location, Search} from '../../../Components';
import Banner from './Banner';
import Greeting from './Greeting';
import FeaturedCategories from './FeaturedCategories';

const HomeHeader = () => {
  return (
    <View style={styles.body}>
      <View style={styles.head}>
        <Greeting />
        {/* <Location /> */}
      </View>

      <Search placeholder={'What would you like to buy?'} />

      <Banner />

      <FeaturedCategories />

      <View>
        <Text style={styles.heading_text}>Featued Businesses</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    gap: 25,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading_text: {
    fontSize: 18,
    color: COLORS.grey,
    fontWeight: '600',
  },
});

export default HomeHeader;
