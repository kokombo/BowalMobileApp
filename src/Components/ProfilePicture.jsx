import {View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';

const ProfilePicture = ({width, height}) => {
  const {user} = useSelector(store => store.currentUser);

  return (
    <View style={{width: width, height: height}}>
      <Image
        source={{uri: user?.picture}}
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
