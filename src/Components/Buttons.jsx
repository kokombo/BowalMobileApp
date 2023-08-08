import {Text, Pressable} from 'react-native';
import {COLORS} from '../../constants';

export default CustomButton = ({title, onPress, disabled}) => {
  return (
    <Pressable
      style={{
        backgroundColor: disabled ? COLORS.snow : COLORS.blue,
        width: '100%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={{
          fontSize: 18,
          color: COLORS.white,
          textTransform: 'capitalize',
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </Pressable>
  );
};
