import {createStackNavigator} from '@react-navigation/stack';
import {Animated} from 'react-native';
import OnboardingStack from './OnboardingStack';
import VendorStack from './VendorStack';
import {Notifications} from '../src/Screens/Seller';
import BuyerStack from './BuyerStack';
import {COLORS, assets} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {LoginPage} from '../src/Screens/Authorization';
import {GoBack} from '../src/Components';
import {Splash} from '../src/Screens/General';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {login, signout} from '../src/Redux/Slices/currentUserSlice';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const RootStackNavigator = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const listener = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            isAnonymous: user.isAnonymous,
          }),
        );
      } else {
        dispatch(signout());
      }
    });
    listener();
  }, []);

  return (
    <Stack.Navigator
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
          gestureEnabled: false,
          headerStyle: {backgroundColor: COLORS.blue},
          title: '',
          headerLeft: () => <GoBack source={assets.arrowback} />,
        }}
      />

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerBackgroundContainerStyle: {backgroundColor: COLORS.white},
          headerLeft: () => <GoBack source={assets.arrowbackblue} />,
        }}
      />
    </Stack.Navigator>
  );
};
export default RootStackNavigator;
