import {NavigationContainer} from '@react-navigation/native';
import {Animated} from 'react-native';
import StackNavigator from './Navigations/StackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import {fetchProducts} from './src/Redux/Slices/ProductSlice';

store.dispatch(fetchProducts());

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
