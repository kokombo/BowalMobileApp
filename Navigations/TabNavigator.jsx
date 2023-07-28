import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {assets} from '../constants';
import {Home, Products, Chats, Orders, Account} from '../src/Screens/Seller';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return (
              <Image
                source={focused ? assets.focusedhome : assets.home}
                style={{height: 30, width: 30}}
              />
            );
          }
          if (route.name === 'Products') {
            return (
              <Image
                source={focused ? assets.focusedproduct : assets.product}
                style={{height: 30, width: 30}}
              />
            );
          }
          if (route.name === 'Chats') {
            return (
              <Image
                source={focused ? assets.focusedchat : assets.chat}
                style={{height: 30, width: 30}}
              />
            );
          }
          if (route.name === 'Orders') {
            return (
              <Image
                source={focused ? assets.focusedorder : assets.order}
                style={{height: 30, width: 30}}
              />
            );
          }
          if (route.name === 'Account') {
            return (
              <Image
                source={focused ? assets.focusedaccount : assets.account}
                style={{height: 30, width: 30}}
              />
            );
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
