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
import {SideBarToggle, TabImage} from '../src/Components';
import {useNavigation} from '@react-navigation/native';
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
              <TabImage source={focused ? assets.focusedhome : assets.home} />
            );
          } else if (route.name === 'Categories') {
            return (
              <TabImage
                source={focused ? assets.focusedcategory : assets.category}
              />
            );
          } else if (route.name === 'Chats') {
            return (
              <TabImage source={focused ? assets.focusedchat : assets.chat} />
            );
          } else if (route.name === 'Logistics') {
            return (
              <TabImage
                source={focused ? assets.focusedlogistics : assets.logistics}
              />
            );
          } else {
            return (
              <TabImage
                source={focused ? assets.focusedaccount : assets.account}
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
        }}
      />

      <Tab.Screen name="Categories" component={Categories} />

      <Tab.Screen name="Chats" component={Chats} />

      <Tab.Screen name="Logistics" component={Logistics} />

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
        }}
      />
    </Tab.Navigator>
  );
};
export default BuyerTabNavigator;
