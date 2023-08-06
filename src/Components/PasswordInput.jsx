import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {assets, COLORS} from '../../constants';

const PasswordInput = ({onChangeText, value}) => {
  return (
    <View>
      <TextInput
        value={value}
        placeholder={'Password'}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.gray}
        style={styles.input}
        secureTextEntry={true}
        autoCorrect={false}
        textContentType="password"
      />
      <TouchableOpacity style={styles.visibility}>
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
});
export default PasswordInput;
