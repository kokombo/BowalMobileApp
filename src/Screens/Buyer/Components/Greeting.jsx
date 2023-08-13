import {Image, View, Text} from 'react-native';
import {COLORS, assets} from '../../../../constants';
import {DisplayName} from '../../../Components';

const Greeting = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
      <Text style={{fontSize: 20, fontWeight: '600', color: COLORS.grey}}>
        Hi,
      </Text>
      <DisplayName color={COLORS.grey} />

      <Image source={assets.wave} style={{width: 25, height: 25}} />
    </View>
  );
};
export default Greeting;
