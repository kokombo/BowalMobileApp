import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity} from 'react-native';
import {
  BuyerHome,
  Categories,
  Logistics,
  BuyerAccount,
} from '../src/Screens/Buyer';
import {Chats} from '../src/Screens/Seller';
import {COLORS, assets} from '../constants';
import {SideBarToggle} from '../src/Components';
import {useNavigation} from '@react-navigation/native';

const BuyerTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerLeft: () => <SideBarToggle />,
        headerLeftContainerStyle: {paddingLeft: 15},
        headerRightContainerStyle: {paddingRight: 15},
        headerTitleStyle: {color: COLORS.grey, fontSize: 20, fontWeight: '600'},
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
          if (route.name === 'Categories') {
            return (
              <Image
                source={focused ? assets.focusedcategory : assets.category}
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
          if (route.name === 'Logistics') {
            return (
              <Image
                source={focused ? assets.focusedlogistics : assets.logistics}
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
        component={BuyerHome}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <Image source={assets.cart} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}></Tab.Screen>
      <Tab.Screen name="Categories" component={Categories}></Tab.Screen>
      <Tab.Screen name="Chats" component={Chats}></Tab.Screen>
      <Tab.Screen name="Logistics" component={Logistics}></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={BuyerAccount}
        options={{
          headerTitle: 'Profile',
          headerStyle: {backgroundColor: COLORS.blue},
          headerTitleStyle: {
            color: COLORS.white,
            fontSize: 20,
            fontWeight: '600',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Image
                source={assets.whitetoggle}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};
export default BuyerTabNavigator;
