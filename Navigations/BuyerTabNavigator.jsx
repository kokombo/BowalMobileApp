import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {
  BuyerHome,
  Categories,
  Logistics,
  BuyerAccount,
} from '../src/Screens/Buyer';
import {Chats} from '../src/Screens/Seller';
import {COLORS, FONT, assets} from '../constants';
import {SideBarToggle} from '../src/Components';
import {useNavigation} from '@react-navigation/native';
import {CartIcon} from '../src/Components';
import {useSelector} from 'react-redux';

const BuyerTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  const {cartItems} = useSelector(store => store.cart);

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
              {cartItems.length > 0 && (
                <View
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 100,
                    backgroundColor: COLORS.blue,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 18,
                    left: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: FONT.lg,
                      color: COLORS.white,
                    }}>
                    {cartItems?.length}
                  </Text>
                </View>
              )}
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
