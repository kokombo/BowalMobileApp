import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../constants';
import BuyerTabNavigator from './BuyerTabNavigator';
import {Aside} from '../src/Components';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <Aside />}
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {width: 350, backgroundColor: COLORS.blue},
        drawerLabelStyle: {color: COLORS.grey, fontSize: 18, fontWeight: '300'},
      }}>
      <Drawer.Screen
        name=" "
        component={BuyerTabNavigator}
        options={{
          headerShown: false,
          drawerLabelStyle: {display: 'none'},
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
