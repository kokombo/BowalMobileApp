import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {Location, Search} from '../../Components';
import {Banner, Greeting, FeaturedCategories} from './Components';
import {useDispatch, useSelector} from 'react-redux';
import {getSavedVendors} from '../../Redux/Slices/savedVendorSlice';
import {useEffect} from 'react';

const BuyerHome = () => {
  // const dispatch = useDispatch();
  // const {vendors, status} = useSelector(store => store.savedVendors);
  // const {user} = useSelector(store => store.currentUser);

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(getSavedVendors());
  //   }
  // }, [user, status]);

  return (
    <View style={styles.body}>
      <View style={styles.head}>
        <Greeting />
        {/* <Location /> */}
      </View>
      <Search placeholder={'What would you like to buy?'} />
      <Banner />
      <FeaturedCategories />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
    flexDirection: 'column',
    gap: 25,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default BuyerHome;
