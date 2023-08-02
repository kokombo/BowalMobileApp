import Geolocation from 'react-native-geolocation-service';
import {useEffect, useState} from 'react';
import Geocoder from 'react-native-geocoding';
import {request, PERMISSIONS} from 'react-native-permissions';
import {REACT_GOOGLE_MAP_KEY} from '@env';
import {Text, View, Image, Alert} from 'react-native';
import {COLORS, assets} from '../../constants';

const Location = () => {
  Geocoder.init(REACT_GOOGLE_MAP_KEY, {language: 'en'});

  const [userLocation, setUserLocation] = useState({city: '', address: ''});
  const [userPosition, setUserPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [permissionStatus, setPermissionStatus] = useState('');

  //Requesting location permission and if granted, the user's current position (longitude and latitude) is retrieved.
  const requestLocalPermision = async () => {
    try {
      const granted = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (granted === 'granted') {
        setPermissionStatus('Location permission granted');
      }
    } catch (error) {
      // console.log('error', error);
      Alert.alert(error);
    }
  };
  useEffect(() => {
    requestLocalPermision();
  }, []);

  //The position of the user is retrieved here.
  const geoLocation = () => {
    if (requestLocalPermision) {
      Geolocation.getCurrentPosition(
        position => {
          setUserPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          // console.log(error.code, error.message);
          Alert.alert(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  useEffect(() => {
    geoLocation();
  }, []);

  //The below code converts the user's geo position to exact address. The city and state info is extracted.

  setTimeout(() => {
    Geocoder.from(userPosition.latitude, userPosition.longitude).then(json => {
      let formatted_address = json?.results[0].formatted_address;
      let city_address = json?.results[5].formatted_address;
      setUserLocation({address: formatted_address, city: city_address});
    });
  }, 150);

  // console.log(userLocation);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}>
      <Image source={assets.location} style={{height: 20, width: 20}} />
      <Text style={{color: COLORS.gray, fontSize: 12}}>
        {userLocation.city}{' '}
      </Text>
    </View>
  );
};
export default Location;
