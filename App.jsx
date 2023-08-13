import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './Navigations/RootStackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import {fetchProducts} from './src/Redux/Slices/ProductSlice';

store.dispatch(fetchProducts());

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
