import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, assets} from '../constants';
import BuyerTabNavigator from './BuyerTabNavigator';
import {Aside} from '../src/Components';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName=" "
      drawerContent={() => <Aside />}
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {width: 330},
        headerShown: false,
        drawerActiveBackgroundColor: 'transparent',
        drawerLabelStyle: {color: COLORS.grey, fontSize: 18, fontWeight: '300'},
      }}>
      <Drawer.Screen
        name=" "
        component={BuyerTabNavigator}
        options={{}}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
