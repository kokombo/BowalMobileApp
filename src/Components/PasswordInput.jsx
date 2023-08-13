import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {assets, COLORS} from '../../constants';
import {useState} from 'react';

const PasswordInput = ({onChangeText, value}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [labelVisible, setLabelVisible] = useState(false);

  //Text input press in that triggers label to display.
  const onPressIn = () => {
    setLabelVisible(true);
  };

  //password visibility icon onpress to show or hide password.
  const onPress = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      {labelVisible && <Text style={styles.label}>Password</Text>}
      <TextInput
        value={value}
        placeholder={labelVisible ? ' ' : 'Password'}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.gray}
        style={styles.input}
        secureTextEntry={isVisible ? false : true}
        autoCorrect={false}
        textContentType="password"
        onPressIn={onPressIn}
      />
      <TouchableOpacity style={styles.visibility} onPress={onPress}>
        <Image source={assets.visibility} style={styles.icon} />
      </TouchableOpacity>
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
  icon: {
    width: 24,
    height: 24,
  },
  visibility: {
    position: 'absolute',
    right: 0,
    top: 5,
  },
  label: {
    position: 'absolute',
    left: 0,
    top: -20,
    color: COLORS.grey,
  },
});
export default PasswordInput;
