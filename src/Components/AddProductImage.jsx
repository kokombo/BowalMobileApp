import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Alert,
  Platform,
} from 'react-native';
import {COLORS, assets} from '../../constants';
import {selectImage} from '../Redux/Slices/ImageSelectorSlice';
import {useDispatch, useSelector} from 'react-redux';

const AddProductImage = () => {
  const dispatch = useDispatch();
  const {selectedImages} = useSelector(store => store.imageSelector);

  if (selectedImages.length > 3) {
    Alert.alert('Warning!', 'You can only select up to three images');
  }

  const ImagePreview = () => {
    if (selectedImages.length > 0 && selectedImages !== null) {
      return (
        <View style={styles.image_preview_container}>
          {selectedImages.slice(0, 3).map((item, index) => (
            <Image
              source={{uri: `${selectedImages[index]}`}}
              style={styles.preview_image}
              key={index}
            />
          ))}
        </View>
      );
    }
  };

  const handlePress = () => {
    dispatch(selectImage());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectImage} onPress={handlePress}>
        <Image source={assets.selectimage} style={styles.select_icon} />
        <Text style={styles.text}>
          <Text style={{color: COLORS.blue}}>Browse</Text> to select product
          image
        </Text>
      </TouchableOpacity>

      <Text style={styles.info}>select up to 3 product images</Text>

      <ImagePreview />
      {/* <PreviewImages /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  selectImage: {
    height: 200,
    width: '100%',
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.snow,
  },
  select_icon: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 18,
  },
  image_preview_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    gap: 20,
  },
  preview_image: {
    width: '30%',
    height: 80,
    borderRadius: 10,
  },
  info: {
    color: COLORS.grey,
    fontSize: 12,
    marginTop: 5,
    fontStyle: 'italic',
  },
});
export default AddProductImage;
