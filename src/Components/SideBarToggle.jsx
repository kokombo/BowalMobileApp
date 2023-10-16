import {TouchableOpacity, Image} from 'react-native';
import {assets} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const SideBarToggle = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Image source={assets.sidebartoggle} style={{width: 30, height: 30}} />
    </TouchableOpacity>
  );
};
export default SideBarToggle;
