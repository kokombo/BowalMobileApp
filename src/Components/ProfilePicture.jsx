import {View, StyleSheet, Image} from 'react-native';
import {assets} from '../../constants';

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image source={assets.seller} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});
export default ProfilePicture;
