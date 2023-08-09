import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {assets, COLORS} from '../constants';
import {Home, Products, Chats, Orders, Account} from '../src/Screens/Seller';
import {Image, Text} from 'react-native';
import {AddProductIcon, Bell} from '../src/Screens/Seller/Components';
import {ProfilePicture} from '../src/Components';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleStyle: {fontSize: 20, fontWeight: '600', color: COLORS.grey},
        headerShadowVisible: false,
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
        options={{
          headerTitle: ' ',
          headerLeft: () => {
            return <ProfilePicture height={50} width={50} />;
          },
          headerRight: () => {
            return <Bell />;
          },
          headerLeftContainerStyle: {paddingLeft: 15},
          headerRightContainerStyle: {paddingRight: 15},
        }}></Tab.Screen>
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: ' ',
          headerLeft: () => {
            return (
              <Text
                style={{fontSize: 20, color: COLORS.grey, fontWeight: '600'}}>
                Products
              </Text>
            );
          },
          headerRight: () => {
            return <AddProductIcon />;
          },
          headerLeftContainerStyle: {paddingLeft: 15},
          headerRightContainerStyle: {paddingRight: 15},
        }}></Tab.Screen>
      <Tab.Screen name="Chats" component={Chats}></Tab.Screen>
      <Tab.Screen name="Orders" component={Orders}></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerTitle: 'Profile',
          headerStyle: {backgroundColor: COLORS.blue},
          headerTitleStyle: {
            color: COLORS.white,
            fontSize: 20,
            fontWeight: '600',
          },
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
