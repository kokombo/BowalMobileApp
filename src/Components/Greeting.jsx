import {Text} from 'react-native';
import {COLORS} from '../../constants';

const Greeting = () => {
  return (
    <Text style={{fontSize: 20, color: COLORS.grey, fontWeight: '600'}}>
      Welcome, Samuel
    </Text>
  );
};
export default Greeting;
