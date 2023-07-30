import {NavigationContainer} from '@react-navigation/native';
import {Animated} from 'react-native';
import StackNavigator from './Navigations/StackNavigator';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Store';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
