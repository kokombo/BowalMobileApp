import {View, Text, Pressable, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const Error = ({error}) => {
  <View style={styles.wrapper}>
    <Text>{error} </Text>
    <Pressable style={styles.button}>
      <Text>Try again</Text>
    </Pressable>
  </View>;
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
export default Error;
