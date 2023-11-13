import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {assets, COLORS} from '../constants';
import {Home, Products, Chats, Orders, Account} from '../src/Screens/Seller';
import {Text} from 'react-native';
import {AddProductIcon, Bell} from '../src/Screens/Seller/Components';
import {ProfilePicture, TabImage} from '../src/Components';

const Tab = createBottomTabNavigator();
const VendorTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleStyle: {fontSize: 20, fontWeight: '600', color: COLORS.grey},

        headerShadowVisible: false,

        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return (
              <TabImage source={focused ? assets.focusedhome : assets.home} />
            );
          } else if (route.name === 'Products') {
            return (
              <TabImage
                source={focused ? assets.focusedproduct : assets.product}
              />
            );
          } else if (route.name === 'Chats') {
            return (
              <TabImage source={focused ? assets.focusedchat : assets.chat} />
            );
          } else if (route.name === 'Orders') {
            return (
              <TabImage source={focused ? assets.focusedorder : assets.order} />
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
        component={Home}
        options={{
          headerTitle: '',

          headerLeft: () => <ProfilePicture height={50} width={50} />,

          headerRight: () => <Bell />,

          headerLeftContainerStyle: {paddingLeft: 15},

          headerRightContainerStyle: {paddingRight: 15},
        }}
      />

      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: ' ',

          headerLeft: () => (
            <Text style={{fontSize: 20, color: COLORS.grey, fontWeight: '600'}}>
              Products
            </Text>
          ),

          headerRight: () => <AddProductIcon />,

          headerLeftContainerStyle: {paddingLeft: 15},

          headerRightContainerStyle: {paddingRight: 15},
        }}
      />

      <Tab.Screen name="Chats" component={Chats} />

      <Tab.Screen name="Orders" component={Orders} />

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

export default VendorTabNavigator;
