import {Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';

export default CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.blue,
        width: '100%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 18,
          color: COLORS.white,
          textTransform: 'capitalize',
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
