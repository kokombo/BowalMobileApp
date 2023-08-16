import {View, Text} from 'react-native';

const VendorsList = ({route}) => {
  const {filteredVendors} = route.params;
  console.log(filteredVendors);
  const category = filteredVendors?.map(item => item.category);
  console.log(category);

  return (
    <View>
      <Text>AAA</Text>
    </View>
  );
};
export default VendorsList;
