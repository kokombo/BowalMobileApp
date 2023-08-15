import {View, Text} from 'react-native';

const NoProduct = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 0.5}}>
      <Text>You have no product yet, start adding your product</Text>
    </View>
  );
};
export default NoProduct;
