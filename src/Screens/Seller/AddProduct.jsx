import {View, Modal, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, assets} from '../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {selectImage} from '../../Redux/Slices/ImageSelectorSlice';

const AddProduct = () => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(selectImage());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          height: 200,
          width: '100%',
          borderColor: COLORS.grey,
          borderWidth: 1,
        }}
        onPress={handlePress}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 15,
  },
});
export default AddProduct;
