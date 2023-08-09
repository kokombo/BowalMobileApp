import {View, ActivityIndicator} from 'react-native';
import {COLORS} from '../../constants';

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: COLORS.gray,
          height: 80,
          width: 80,
          borderRadius: 10,
        }}>
        <ActivityIndicator size={'large'} color={COLORS.blue} />
      </View>
    </View>
  );
};
export default Loader;
