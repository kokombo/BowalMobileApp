import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, assets} from '../../../constants';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {login} from '../../Redux/Slices/currentUserSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

GoogleSignin.configure();
// Component to sign in with Google auth.
const QuickSignIn = ({heading, cta, link, onPressLink}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoogleSignin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const res = await GoogleSignin.signIn();
      if (res) {
        dispatch(
          login({
            email: res.user.email,
            displayName: res.user.name,
            uid: res.user.id,
            picture: res.user.photo,
          }),
        );
        navigation.navigate('BuyerStack');
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{heading}</Text>
      </View>

      <View style={styles.social_auth_container}>
        <TouchableOpacity
          style={styles.google_wrapper}
          onPress={handleGoogleSignin}>
          <Image source={assets.google} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.cta_wrapper}>
        <Text style={styles.text}>{cta}</Text>
        <TouchableOpacity onPress={onPressLink}>
          <Text style={[styles.text, styles.link]}>{link}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 40,
  },
  google_wrapper: {
    backgroundColor: COLORS.snow,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  icon: {
    width: 25,
    height: 25,
  },
  social_auth_container: {
    alignItems: 'center',
  },
  cta_wrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: COLORS.grey,
    fontWeight: '300',
  },
  link: {
    color: COLORS.blue,
    fontWeight: '500',
  },
});
export default QuickSignIn;
