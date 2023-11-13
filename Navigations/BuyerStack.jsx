import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import {
  SavedBusinesses,
  VendorsList,
  Cart,
  ProductDetail,
} from '../src/Screens/Buyer';
import {COLORS, FONT, assets} from '../constants';
import ShopTopTab from './ShopTopTab';
import {GoBack} from '../src/Components';

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
        headerShadowVisible: false,
        headerBackTitle: false,
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
          headerLeft: () => <GoBack source={assets.arrowbackblue} />,
        }}
      />

      <Stack.Screen
        name="Vendors"
        component={VendorsList}
        options={({route}) => ({
          title: route.params.filteredVendors
            ?.slice(0, 1)
            .map(item => item.category),
          headerLeft: () => <GoBack source={assets.arrowbackblue} />,
        })}
      />

      <Stack.Screen
        name="VendorShopHome"
        component={ShopTopTab}
        options={{
          title: '',
          headerStyle: {backgroundColor: COLORS.blue},
          headerLeft: () => <GoBack source={assets.arrowback} />,
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerLeft: () => <GoBack source={assets.arrowbackblue} />,
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: '',
          headerLeft: () => <GoBack source={assets.arrowbackblue} />,
        }}
      />
    </Stack.Navigator>
  );
};
export default BuyerStack;
