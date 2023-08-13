import {createStackNavigator} from '@react-navigation/stack';
import {AccountType, FormA, FormB, Verify} from '../src/Screens/Onboarding';
import {BuyerSignUp} from '../src/Screens/Onboarding/BuyerOnboarding';
import {COLORS} from '../constants';
import {GoBack} from '../src/Components';

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="AccountType">
      <Stack.Screen
        name="AccountType"
        component={AccountType}
        options={{
          headerStyle: {backgroundColor: COLORS.blue},
          title: '',
        }}
      />
      <Stack.Screen
        name="FormA"
        component={FormA}
        options={{
          headerLeft: () => {
            return <GoBack />;
          },
          headerStyle: {backgroundColor: COLORS.blue},
          title: '',
        }}
      />
      <Stack.Screen
        name="FormB"
        component={FormB}
        options={{
          headerStyle: {backgroundColor: COLORS.blue},
          title: '',
        }}
      />
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{
          headerLeft: () => {
            return <GoBack />;
          },
          headerStyle: {backgroundColor: COLORS.blue},
          title: '',
        }}
      />
      <Stack.Screen
        name="BuyerSignUp"
        component={BuyerSignUp}
        options={{
          headerLeft: () => {
            return <GoBack />;
          },
          headerStyle: {backgroundColor: COLORS.blue},
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default OnboardingStack;
