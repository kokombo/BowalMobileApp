import {View, ActivityIndicator, Modal} from 'react-native';
import {COLORS} from '../../constants';

const Loader = () => {
  return (
    <Modal
      presentationStyle="fullScreen"
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
          marginTop: 400,
        }}>
        <ActivityIndicator size={'large'} color={COLORS.blue} />
      </View>
    </Modal>
  );
};
export default Loader;
