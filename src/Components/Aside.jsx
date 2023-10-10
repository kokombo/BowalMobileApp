import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ProfilePicture from './ProfilePicture';
import {COLORS, assets} from '../../constants';
import {sidebarData} from '../../constants/data';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DisplayName from './DisplayName';
import {useSelector} from 'react-redux';
import {DrawerActions} from '@react-navigation/native';
import useSignOut from '../utilities/useSignOut';

const Aside = () => {
  const [aside] = useState(sidebarData);
  const navigation = useNavigation();
  const {logOut} = useSignOut();

  const {user} = useSelector(store => store.currentUser);

  useEffect(() => {
    if (user === null) {
      logOut();
    }
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.picture_container}>
          <ProfilePicture width={73} height={73} />
        </View>
        <DisplayName color={COLORS.white} />
      </View>

      <View style={styles.aside_body}>
        <Text style={styles.menu}>Menu</Text>
        <View style={styles.navigations_container}>
          {aside.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => {
                  navigation.navigate(`${item.text}`);
                  navigation.dispatch(DrawerActions.closeDrawer());
                }}>
                <View style={styles.icon_wrapper}>
                  <Image source={item.icon} style={styles.icon} />
                </View>
                <Text style={styles.navigation_name}>{item.text} </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={[styles.card, styles.logout]} onPress={logOut}>
          <View style={styles.icon_wrapper}>
            <Image source={assets.logout} style={styles.icon} />
          </View>
          <Text style={styles.navigation_name}>Log out </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  picture_container: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: COLORS.blue,
    paddingVertical: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  icon: {
    width: 24,
    height: 24,
  },
  icon_wrapper: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.snow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  navigations_container: {
    gap: 20,
  },
  navigation_name: {
    color: COLORS.grey,
    fontSize: 18,
    fontWeight: '300',
    textTransform: 'capitalize',
  },
  logout: {
    marginTop: 200,
  },
  aside_body: {
    padding: 15,
    gap: 30,
    backgroundColor: COLORS.white,
    height: '100%',
  },
  menu: {
    fontSize: 18,
    fontWeight: '600',
  },
});
export default Aside;
