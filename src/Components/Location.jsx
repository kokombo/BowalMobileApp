import Geolocation from 'react-native-geolocation-service';
import {Platform} from 'react-native';
import {useEffect, useState} from 'react';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyDNHS4hA8m6VVV3ga527aGkxXobepYq56Y', {language: 'en'});

const Location = () => {
  const [userLocation, setUserLocation] = useState({city: '', address: ''});
  const [userPosition, setUserPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [permissionStatus, setPermissionStatus] = useState('');

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      await Geolocation.requestAuthorization('whenInUse').then(status => {
        if (status === 'disabled') {
          setPermissionStatus('disabled');
        }
        if (status === 'granted') {
          setPermissionStatus('granted');
        }
        if (status === 'denied') {
          setPermissionStatus('denied');
        }
        if (status === 'restricted') {
          setPermissionStatus('restricted');
        }
      });
      geoLocation();
    }
  };

  const geoLocation = () => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setUserPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };
  console.log(userPosition);

  useEffect(() => {
    geoLocation();
  }, []);

  setTimeout(() => {
    Geocoder.from(userPosition.latitude, userPosition.longitude)
      .then(json => {
        let formatted_address = json.results[0].formatted_address[0];
        let city_address = json.results[5].formatted_address.split(',')[0];
        setUserLocation({address: formatted_address, city: city_address});
      })
      .catch(error => console.log(error));
  }, 150);

  console.log(userLocation);
};
export default Location;
