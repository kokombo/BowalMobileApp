import {TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';
import {assets} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const Bell = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Notifications');
      }}>
      <Image source={assets.bell} style={styles.bell} />
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  bell: {
    width: 30,
    height: 30,
  },
});
export default Bell;
