import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Image} from 'react-native';
import VendorTabNavigator from './VendorTabNavigator';
import {AddProduct} from '../src/Screens/Seller';
import {COLORS, assets} from '../constants';
import {clearImages} from '../src/Redux/Slices/ImageSelectorSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const VendorStack = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="VendorHome"
        component={VendorTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add Product"
        component={AddProduct}
        options={{
          headerBackgroundContainerStyle: {backgroundColor: COLORS.white},
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
                dispatch(clearImages());
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
export default VendorStack;
