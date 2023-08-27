import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Image} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import {SavedBusinesses, VendorsList} from '../src/Screens/Buyer';
import {COLORS, assets} from '../constants';
import {Home} from '../src/Screens/Buyer/VendorShop';

const Stack = createStackNavigator();

const BuyerStack = () => {
  return (
    <Stack.Navigator>
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
        component={Home}
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
    </Stack.Navigator>
  );
};
export default BuyerStack;
