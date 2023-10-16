import {View, Text} from 'react-native';
import {FONT} from '../../../../constants';

const VendorLocation = ({color}) => {
  return (
    <View>
      <Text style={{color: color, fontSize: FONT.lg}}>Ikeja, Lagos</Text>
    </View>
  );
};
export default VendorLocation;
