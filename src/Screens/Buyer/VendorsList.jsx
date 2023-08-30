import {View, StyleSheet, FlatList, Text} from 'react-native';
import {VendorCard} from './Components';
import {COLORS, FONT} from '../../../constants';
import {RefreshController} from '../../Components';

const VendorsList = ({route}) => {
  const {filteredVendors} = route.params;

  const renderVendor = ({item}) => {
    return <VendorCard vendor={item} />;
  };

  let content;
  if (filteredVendors.length === 0) {
    content = (
      <View style={styles.no_vendor_container}>
        <Text style={styles.no_vendor_text}>
          There are no vendors yet in this category.
        </Text>
        <Text style={styles.no_vendor_text}>
          Please check other categories.
        </Text>
      </View>
    );
  } else {
    content = (
      <FlatList
        data={filteredVendors}
        renderItem={renderVendor}
        keyExtractor={item => item.id}
        refreshControl={<RefreshController />}
        contentContainerStyle={{gap: 30}}
      />
    );
  }

  return <View style={styles.body}>{content}</View>;
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
