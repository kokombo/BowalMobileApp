import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile} from '../src/Screens/Seller';
import {assets} from '../constants';
import {Image} from 'react-native';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {width: 300},
      }}>
      <Drawer.Screen
        name=" "
        component={TabNavigator}
        options={{
          title: '',
          drawerIcon: () => (
            <Image source={assets.home} style={{width: 16, height: 16}} />
          ),
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: () => (
            <Image source={assets.home} style={{width: 16, height: 16}} />
          ),
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
