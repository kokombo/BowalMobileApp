import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import {
  SavedBusinesses,
  VendorsList,
  Cart,
  ProductDetail,
} from '../src/Screens/Buyer';
import {COLORS, FONT, assets} from '../constants';
import ShopTopTab from './ShopTopTab';

const Stack = createStackNavigator();

const BuyerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: COLORS.grey,
          fontSize: FONT.lg,
          fontWeight: '600',
        },
      }}>
      <Stack.Screen
        name="BuyerHome"
        component={DrawerNavigator}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Saved Businesses"
        component={SavedBusinesses}
        options={{
          title: 'Saved Businesses',
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerBackImage: () => (
            <Image
              source={assets.arrowbackblue}
              style={{width: 20, height: 17, marginLeft: 10}}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Vendors"
        component={VendorsList}
        options={({route}) => ({
          title: route.params.filteredVendors
            ?.slice(0, 1)
            .map(item => item.category),
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Image
              source={assets.arrowbackblue}
              style={{width: 20, height: 17, marginLeft: 10}}
            />
          ),
        })}
      />

      <Stack.Screen
        name="VendorShopHome"
        component={ShopTopTab}
        options={{
          headerShadowVisible: false,
          title: '',
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: COLORS.blue},
          headerBackImage: () => (
            <Image
              source={assets.arrowback}
              style={{width: 20, height: 17, marginLeft: 10}}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Image
              source={assets.arrowbackblue}
              style={{width: 20, height: 17, marginLeft: 10}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: '',
          headerBackImage: () => (
            <Image
              source={assets.arrowbackblue}
              style={{width: 20, height: 17, marginLeft: 10}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default BuyerStack;
