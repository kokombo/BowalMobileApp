import {View, StyleSheet, Image} from 'react-native';
import {assets} from '../../constants';

const ProfilePicture = ({width, height}) => {
  return (
    <View style={{width: width, height: height}}>
      <Image
        source={assets.profilepicture}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});
export default ProfilePicture;
