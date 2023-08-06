import {View, StyleSheet, Image, Text} from 'react-native';
import {COLORS, assets} from '../../../constants';

const Chats = () => {
  const Content = () => {
    return (
      <View style={styles.no_message_container}>
        <Image source={assets.nomessage} style={styles.no_message_icon} />
        <Text style={styles.no_message_text}>No messages yet</Text>
      </View>
    );
  };

  return (
    <View style={styles.body}>
      <Content />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  no_message_icon: {
    width: 164,
    height: 114,
  },
  no_message_text: {
    fontSize: 18,
    color: COLORS.grey,
    fontWeight: '300',
  },
  no_message_container: {
    alignItems: 'center',
    gap: 20,
  },
});
export default Chats;
