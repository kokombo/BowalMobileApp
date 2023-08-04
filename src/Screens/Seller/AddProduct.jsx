import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import CustomButton from '../../Components/Buttons';
import {COLORS} from '../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {addProduct} from '../../Redux/Slices/ProductSlice';
import {CustomAlert, AddProductImage} from '../../Components';
import {clearImages} from '../../Redux/Slices/ImageSelectorSlice';

const AddProduct = ({navigation}) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const {status} = useSelector(store => store.product);
  const {selectedImages} = useSelector(store => store.imageSelector);

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
    } else {
      dispatch(
        addProduct({
          productName,
          productCategory,
          productPrice,
          productDescription,
          selectedImages,
        }),
      );
      dispatch(clearImages());

      Alert.alert('Product Added', 'you have successfully added a new product');
      navigation.navigate('Products');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <AddProductImage />

        <View style={styles.product_info_container}>
          <View style={styles.input_wrapper}>
            <Text style={styles.label}>Product Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setProductName(value)}
              autoCorrect={false}
            />
          </View>
          <View style={styles.input_wrapper}>
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setProductCategory(value)}
              autoCorrect={false}
            />
          </View>
          <View style={styles.input_wrapper}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={value => setProductPrice(value)}
              autoCorrect={false}
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
    marginTop: 40,
  },
  button_container: {
    marginVertical: 50,
  },
});
export default AddProduct;
