import {Image, Text, View} from 'react-native';
import {assets, COLORS} from '../../../../constants';

const Greeting = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      <Text style={{fontSize: 20, color: COLORS.grey, fontWeight: '600'}}>
        Hi, Samuel
      </Text>
      <Image source={assets.wave} style={{width: 25, height: 25}} />
    </View>
  );
};
export default Greeting;
