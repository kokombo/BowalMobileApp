import {FlatList, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constants';
import {useSelector} from 'react-redux';
import {VendorCard} from './Components';
import HomeHeader from './Components/HomeHeader';
import {RefreshController} from '../../Components';

const BuyerHome = () => {
  const {vendors} = useSelector(store => store.vendors);

  const renderItem = ({item}) => <VendorCard vendor={item} />;

  return (
    <View style={styles.body}>
      <FlatList
        data={vendors.slice(0, 20)}
        renderItem={renderItem}
        keyExtractor={item => item?.id.toString()}
        ListHeaderComponent={HomeHeader}
        contentContainerStyle={{gap: 30, padding: 15}}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshController />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
export default BuyerHome;
