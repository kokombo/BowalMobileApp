import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './Navigations/RootStackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import {getAllVendors} from './src/Redux/Slices/getVendorSlice';
import {getSavedVendors} from './src/Redux/Slices/savedVendorSlice';

store.dispatch(getAllVendors());
store.dispatch(getSavedVendors());

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
