import {TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const Input = ({
  value,
  placeholder,
  onChange,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      placeholderTextColor={COLORS.gray}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      style={styles.input}
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
