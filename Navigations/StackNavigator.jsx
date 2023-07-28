import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../src/Screens/General';
import {
  FormA,
  FormB,
  FormC,
  Verify,
  AccountType,
} from '../src/Screens/Onboarding';
import TabNavigator from './TabNavigator';

const RootStack = createStackNavigator();

const StackNavigator = () => {
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
        name="VendorHome"
        component={TabNavigator}
        options={{headerShown: false}}></RootStack.Screen>
    </RootStack.Navigator>
  );
};

export default StackNavigator;
