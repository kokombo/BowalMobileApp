import {TextInput, StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../../constants';
import {useState} from 'react';

const Input = ({
  value,
  placeholder,
  onChangeText,
  keyboardType,
  textContentType,
  onPressOut,
  maxLength,
}) => {
  const [labelVisible, setLabelVisible] = useState(false);

  const onPressIn = () => {
    setLabelVisible(true);
  };

  return (
    <View>
      {labelVisible && <Text style={styles.label}>{placeholder}</Text>}
      <TextInput
        value={value}
        placeholder={labelVisible ? ' ' : placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.gray}
        keyboardType={keyboardType}
        style={styles.input}
        autoCorrect={false}
        textContentType={textContentType}
        onPressOut={onPressOut}
        onPressIn={onPressIn}
        maxLength={maxLength}
      />
    </View>
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
  label: {
    position: 'absolute',
    left: 0,
    top: -20,
    color: COLORS.grey,
  },
});

export default Input;
