import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Shop, Info, Reviews} from '../src/Screens/Buyer/VendorShop';

const Tab = createMaterialTopTabNavigator();

const ShopTopTab = () => {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Reviews" component={Reviews} />
    </Tab.Navigator>
  );
};

export default ShopTopTab;
