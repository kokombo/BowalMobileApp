import {createStackNavigator} from '@react-navigation/stack';
import {Animated} from 'react-native';
import {TouchableOpacity, Image} from 'react-native';
import OnboardingStack from './OnboardingStack';
import VendorStack from './VendorStack';
import {Notifications} from '../src/Screens/Seller';
import BuyerStack from './BuyerStack';
import {COLORS, assets} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {LoginPage} from '../src/Screens/Authorization';
import {GoBack} from '../src/Components';
import {Splash} from '../src/Screens/General';

const Stack = createStackNavigator();

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const RootStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      //   initialRouteName="OnboardingStack"
      screenListeners={{
        focus: () => {
          Animated.timing(av, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        },
      }}
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          color: COLORS.grey,
          fontSize: 20,
          fontWeight: '600',
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingStack"
        component={OnboardingStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VendorStack"
        component={VendorStack}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="BuyerStack"
        component={BuyerStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signin"
        component={LoginPage}
        options={{
          headerLeft: () => {
            return <GoBack />;
          },
          headerStyle: {backgroundColor: COLORS.blue},
          title: '',
        }}
      />
      <Stack.Screen
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
        }}
      />
    </Stack.Navigator>
  );
};
export default RootStackNavigator;
