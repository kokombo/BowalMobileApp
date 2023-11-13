import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import {COLORS, assets} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {signout} from '../Redux/Slices/currentUserSlice';

//Component that renders as the child of the flatlist on the Vendor "Account" tab
const NavigationCard = ({data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {user} = useSelector(store => store.currentUser);

  //Function handling signout // This is temporary here for development
  const logOut = async () => {
    await auth()
      .signOut()
      .then(() => {
        dispatch(signout());
        navigation.navigate('Signin');
      })
      .catch(error => {
        if (error === 'auth/no-current-user') {
          Alert.alert('No current user');
        }
      });
  };

  //useEffect checking if a user is null to call the logout function
  useEffect(() => {
    if (user === null) {
      logOut();
    }
  }, [user]);

  //function handling the process of the renderedItems in the flatlist in vendor's account tab
  const handlePress = () => {
    if (data.text === 'Log out') {
      logOut();
    } else {
      navigation.navigate(`${data.text}`);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.wrapper}>
        <View style={styles.icon_container}>
          <Image source={data.icon} style={styles.icon} />
        </View>

        <Text style={styles.text}>{data.text}</Text>
      </View>

      <Image source={assets.navigate} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: COLORS.chalk,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  icon_container: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: COLORS.snow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textTransform: 'capitalize',
    color: COLORS.grey,
    fontWeight: '300',
    fontSize: 18,
  },
});
export default NavigationCard;
