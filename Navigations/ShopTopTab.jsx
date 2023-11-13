import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Info, Reviews, Home, Shop} from '../src/Screens/Buyer/VendorShop';
import {ScrollView, View, RefreshControl} from 'react-native';
import {COLORS} from '../constants';
import {getVendorProducts} from '../src/Redux/Slices/getVendorSlice';
import {useDispatch} from 'react-redux';
import {useState, useCallback} from 'react';

const Tab = createMaterialTopTabNavigator();

const ShopTopTab = ({route}) => {
  const [refreshing, setRefreshing] = useState(false);
  const {vendor} = route.params;
  const dispatch = useDispatch();

  const id = vendor?.id;

  //Onrefresh to reload vendor shop page in case of a slow internet connectivity or any other network error.
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getVendorProducts(id));
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={COLORS.blue}
        />
      }
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: COLORS.white}}>
      <View>
        <Home vendor={vendor} />
      </View>

      <View style={{flex: 1, minHeight: 500}}>
        <Tab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: {
              backgroundColor: COLORS.blue,
              height: 5,
              width: 115,
              marginLeft: 15,
            },

            tabBarIndicatorContainerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray,
            },

            tabBarActiveTintColor: COLORS.blue,

            tabBarInactiveTintColor: COLORS.gray,
          }}>
          <Tab.Screen name="Shop">
            {props => <Shop {...props} vendor={vendor} />}
          </Tab.Screen>

          <Tab.Screen name="Info">
            {props => <Info {...props} vendor={vendor} />}
          </Tab.Screen>

          <Tab.Screen name="Reviews">
            {props => <Reviews {...props} vendor={vendor} />}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </ScrollView>
  );
};

export default ShopTopTab;
