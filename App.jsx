import {NavigationContainer} from '@react-navigation/native';
import {Animated} from 'react-native';
import DrawerNavigator from './Navigations/DrawerNavigator';
import StackNavigator from './Navigations/StackNavigator';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
