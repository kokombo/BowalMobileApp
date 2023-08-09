import {TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const Input = ({
  value,
  placeholder,
  onChangeText,
  keyboardType,
  textContentType,
  onPressIn,
  onPressOut,
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={COLORS.gray}
      keyboardType={keyboardType}
      style={styles.input}
      autoCorrect={false}
      textContentType={textContentType}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 32,
    borderColor: COLORS.gray,
    borderBottomWidth: 1,
    fontSize: 18,
    color: COLORS.grey,
  },
});

export default Input;
