import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Image} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import {useNavigation} from '@react-navigation/native';
import {SavedBusinesses, VendorsList} from '../src/Screens/Buyer';
import {assets} from '../constants';
import {cagtegoriesData} from '../constants/data';

const Stack = createStackNavigator();

const BuyerStack = () => {
  const navigation = useNavigation();

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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BuyerHome');
              }}>
              <Image
                source={assets.arrowbackblue}
                style={{width: 20, height: 17, marginLeft: 10}}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Vendors"
        component={VendorsList}
        options={({route}) => ({
          title: route.params.name,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BuyerHome');
              }}>
              <Image
                source={assets.arrowbackblue}
                style={{width: 20, height: 17, marginLeft: 10}}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
export default BuyerStack;
