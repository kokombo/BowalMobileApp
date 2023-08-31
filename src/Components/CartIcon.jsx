import {TouchableOpacity, Image} from 'react-native-gesture-handler';
import {assets} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Cart');
      }}>
      <Image source={assets.cart} style={{width: 30, height: 30}} />
    </TouchableOpacity>
  );
};
export default CartIcon;
