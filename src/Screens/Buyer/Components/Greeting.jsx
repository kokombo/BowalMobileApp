import {Image, Text, View} from 'react-native';
import {assets, COLORS} from '../../../../constants';
import {useSelector} from 'react-redux';

const Greeting = () => {
  const {user} = useSelector(store => store.currentUser);
  console.log(user);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      <Text style={{fontSize: 20, color: COLORS.grey, fontWeight: '600'}}>
        Hi, {user.displayName}
      </Text>
      <Image source={assets.wave} style={{width: 25, height: 25}} />
    </View>
  );
};
export default Greeting;
