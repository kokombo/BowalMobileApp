import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../src/Screens/General';
import {
  FormA,
  FormB,
  FormC,
  Verify,
  AccountType,
} from '../src/Screens/Onboarding';
import {AddProduct, Notifications} from '../src/Screens/Seller';
import TabNavigator from './TabNavigator';
import {Image, TouchableOpacity} from 'react-native';
import {COLORS, assets} from '../constants';
import {useDispatch} from 'react-redux';
import {clearImages} from '../src/Redux/Slices/ImageSelectorSlice';
import {useNavigation} from '@react-navigation/native';
import {LoginPage} from '../src/Screens/Authorization';

const RootStack = createStackNavigator();

const StackNavigator = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}></RootStack.Screen>
      <RootStack.Screen
        name="AccountType"
        component={AccountType}
        options={{headerShown: false}}></RootStack.Screen>
      {/* seller onboarding screens */}
      <RootStack.Screen
        name="FormA"
        component={FormA}
        options={{
          headerShown: false,
        }}></RootStack.Screen>
      <RootStack.Screen
        name="FormB"
        component={FormB}
        options={{headerShown: false}}></RootStack.Screen>
      <RootStack.Screen
        name="FormC"
        component={FormC}
        options={{headerShown: false}}></RootStack.Screen>
      <RootStack.Screen
        name="Verify"
        component={Verify}
        options={{headerShown: false}}></RootStack.Screen>
      <RootStack.Screen
        name="Signin"
        component={LoginPage}
        options={{headerShown: false}}></RootStack.Screen>
      <RootStack.Screen
        name="Add Product"
        component={AddProduct}
        options={{
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerBackgroundContainerStyle: {backgroundColor: COLORS.white},
          headerTitleStyle: {color: COLORS.grey},
          headerBackImage: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
                dispatch(clearImages());
              }}>
              <Image
                source={assets.arrowbackblue}
                style={{width: 20, height: 17, marginLeft: 10}}
              />
            </TouchableOpacity>
          ),
        }}></RootStack.Screen>
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
                dispatch(clearImages());
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
        name="VendorHome"
        component={TabNavigator}
        options={{headerShown: false}}></RootStack.Screen>
    </RootStack.Navigator>
  );
};

export default StackNavigator;
