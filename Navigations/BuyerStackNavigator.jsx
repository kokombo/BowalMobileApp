import {createStackNavigator} from '@react-navigation/stack';

import {Notifications} from '../src/Screens/Seller';

import BuyerTabNavigator from './BuyerTabNavigator';
import {Image, TouchableOpacity} from 'react-native';
import {COLORS, assets} from '../constants';

import {useNavigation} from '@react-navigation/native';

const RootStack = createStackNavigator();

const BuyerStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerBackgroundContainerStyle: {backgroundColor: COLORS.white},
          headerTitleStyle: {color: COLORS.grey},
          headerBackImage: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={assets.arrowbackblue}
                style={{width: 20, height: 17, marginLeft: 10}}
              />
            </TouchableOpacity>
          ),
        }}></RootStack.Screen>

      <RootStack.Screen
        name="BuyerHome"
        component={BuyerTabNavigator}
        options={{headerShown: false}}></RootStack.Screen>
    </RootStack.Navigator>
  );
};

export default BuyerStackNavigator;
