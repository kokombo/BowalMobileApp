import {useState} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import CustomButton from '../../Components/Buttons';
import {COLORS, assets} from '../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {selectImage} from '../../Redux/Slices/ImageSelectorSlice';
import {addProduct} from '../../Redux/Slices/ProductSlice';
import { CustomAlert } from '../../Components';


const AddProduct = ({navigation}) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImages, setProductImages] = useState([]);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(selectImage());
  };

//Handle product info storage to firebase using set method (this is inside productSlice in redux)
  const submit = () => {
    const canNotSave =
      !productName || !productCategory || !productPrice || !productDescription;

    if (canNotSave) {
      Alert.alert(
        "Can't Add Product!",
        'Please provide all product details before submitting',
      );
      // return <CustomAlert text = {"Can't add product"} />
    }
    else{
      dispatch(
        addProduct({
          productName,
          productCategory,
          productPrice,
          productDescription,
          productImages,
        }),
      );
      Alert.alert('Product Added', 'you have successfully added a new product');
      navigation.navigate('Products');
    }
   
  };

console.log(productName, productCategory, productPrice)

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.selectImage} onPress={handlePress}>
          <Image source={assets.selectimage} style={styles.selecticon} />
          <Text style={styles.text}>
            <Text style={{color: COLORS.blue}}>Browse</Text> to select product
            image
          </Text>
        </TouchableOpacity>
        <View style={styles.image_preview_container}>
          <View style={styles.preview_image}></View>
        </View>

        <View style={styles.product_info_container}>
          <View style={styles.input_wrapper}>
            <Text style={styles.label}>Product Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setProductName(value)}
            />
          </View>
          <View style={styles.input_wrapper}>
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setProductCategory(value)}
            />
          </View>
          <View style={styles.input_wrapper}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={value => setProductPrice(value)}
            />
          </View>
          <View style={styles.input_wrapper}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.description]}
              multiline
              onChangeText={value => setProductDescription(value)}
            />
          </View>

          <View style={styles.button_container}>
            <CustomButton title={'add'} onPress={submit} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 15,
  },
  selectImage: {
    height: 200,
    width: '100%',
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.snow,
  },
  selecticon: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 18,
  },
  preview_image: {
    width: 100,
    height: 80,
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: COLORS.snow,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray,
    padding: 10,
  },
  label: {
    fontSize: 18,
    color: COLORS.grey,
    fontWeight: '500',
  },
  description: {
    height: 120,
  },
  input_wrapper: {
    gap: 10,
  },
  product_info_container: {
    gap: 20,
    marginTop: 50,
  },
  button_container: {
    marginVertical: 50,
  },
  image_preview_container: {
    marginTop: 30,
  },
});
export default AddProduct;
