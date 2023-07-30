import {View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';

const ImageSelector = async () => {
  const [image, setImage] = useState([]);
  const result = await launchImageLibrary({mediaType: 'photo', quality: 1});
  setImage(result);
  return <View>Image Selector</View>;
};
export default ImageSelector;
