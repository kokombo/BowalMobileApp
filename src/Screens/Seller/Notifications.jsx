import {View, StyleSheet, Image, Text} from 'react-native';
import {COLORS, assets} from '../../../constants';

const Notifications = () => {
  const Content = () => {
    return (
      <View style={styles.empty_notification}>
        <Image
          source={assets.nonotification}
          style={styles.empty_notification_icon}
        />
        <Text style={styles.text}>No notifications yet!</Text>
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
  empty_notification: {
    gap: 20,
    alignItems: 'center',
    marginBottom: 60,
  },
  empty_notification_icon: {
    width: 140,
    height: 170,
  },
  text: {
    fontSize: 18,
    color: COLORS.grey,
  },
});
export default Notifications;
