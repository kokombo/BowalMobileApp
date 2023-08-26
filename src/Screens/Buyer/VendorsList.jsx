import {View, Text, StyleSheet, FlatList} from 'react-native';
import {VendorCard} from './Components';
import {COLORS, FONT} from '../../../constants';
import {RefreshController} from '../../Components';

const VendorsList = ({route}) => {
  const {filteredVendors} = route.params;
  console.log(
    route.params.filteredVendors.slice(0, 1).map(item => item.category),
  );

  const category = filteredVendors?.map(item => item.category);

  const renderVendor = ({item}) => {
    return <VendorCard vendor={item} />;
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={filteredVendors}
        renderItem={renderVendor}
        keyExtractor={item => item.id}
        refreshControl={<RefreshController />}
        contentContainerStyle={{gap: 30}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
  },
  no_vendor_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  no_vendor_text: {
    textAlign: 'center',
    fontSize: FONT.lg,
    color: COLORS.blue,
  },
});
export default VendorsList;
