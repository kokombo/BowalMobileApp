import {Image, TouchableOpacity, View, StyleSheet, Text} from 'react-native';
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

  // Getting the current logged in user from user state in redux
  const {user} = useSelector(store => store.currentUser);

  //Function handling signout
  const logOut = async () => {
    await auth().signOut();
    dispatch(signout());
    navigation.navigate('Signin');
  };

  //useEffect checking if a user is null to call the logout function
  useEffect(() => {
    if (user === null) {
      logOut();
    }
  }, []);

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
