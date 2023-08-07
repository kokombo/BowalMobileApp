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
import {BuyerSignUp} from '../src/Screens/Onboarding/BuyerOnboarding';
import DrawerNavigator from './DrawerNavigator';
import {SavedBusinesses} from '../src/Screens/Buyer';

const RootStack = createStackNavigator();

const StackNavigator = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          color: COLORS.grey,
          fontSize: 20,
          fontWeight: '600',
        },
        headerBackTitleVisible: false,
        headerShadowVisible: false,
      }}>
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
        name="BuyerSignUp"
        component={BuyerSignUp}
        options={{headerShown: false}}></RootStack.Screen>
      <RootStack.Screen
        name="Add Product"
        component={AddProduct}
        options={{
          headerBackgroundContainerStyle: {backgroundColor: COLORS.white},
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
          headerBackgroundContainerStyle: {backgroundColor: COLORS.white},
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
        name="VendorHome"
        component={TabNavigator}
        options={{headerShown: false}}></RootStack.Screen>
      <RootStack.Screen
        name="BuyerHome"
        component={DrawerNavigator}
        options={{headerShown: false}}></RootStack.Screen>

      <RootStack.Screen
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
        }}></RootStack.Screen>
    </RootStack.Navigator>
  );
};

export default StackNavigator;
