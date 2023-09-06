import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import CustomButton from '../../Components/Buttons';
import {COLORS, FONT} from '../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {addProduct} from '../../Redux/Slices/ProductSlice';
import {CustomAlert, AddProductImage} from '../../Components';
import {clearImages} from '../../Redux/Slices/ImageSelectorSlice';
import {BusinessCategory} from '../../Components';
import firestore from '@react-native-firebase/firestore';
import {fetchProducts} from '../../Redux/Slices/ProductSlice';

const AddProduct = ({navigation}) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const dispatch = useDispatch();
  const {status} = useSelector(store => store.product);
  const {selectedImages} = useSelector(store => store.imageSelector);

  //To further ensure exactly 3 images are uploaded to firestore for each product.
  const productImages = selectedImages.slice(0, 3);

  // Function that handles product upload.
  const handleSubmit = () => {
    // canNotSave check's if a user has not inputed all product details before trying to upload.
    const canNotSave =
      selectedImages.length === 0 ||
      !productName ||
      !productCategory ||
      !productPrice ||
      !productDescription;

    if (canNotSave) {
      Alert.alert('Oops!', 'Please provide all product details before adding.');
      // return <CustomAlert text = {"Can't add product"} />
    } else {
      //If a user can upload the product, addProduct(available in ProductSlice) will be dispatched
      dispatch(
        addProduct({
          productName,
          productCategory,
          productPrice,
          productDescription,
          productImages,
          timeStamp: firestore.FieldValue.serverTimestamp(),
          date: new Date().toDateString(),
        }),
      );
      //After striking the add button
      dispatch(clearImages());
      Alert.alert('Product Added', 'you have successfully added a new product');
      dispatch(fetchProducts());
      navigation.navigate('Products');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <AddProductImage />

      <View style={styles.product_info_container}>
        <View style={styles.input_wrapper}>
          <View style={styles.label_container}>
            <Text style={styles.label}>Product Name</Text>
            {productName.length > 0 && (
              <Text style={styles.count}>{productName.length}/20</Text>
            )}
          </View>

          <TextInput
            style={styles.input}
            onChangeText={value => setProductName(value)}
            autoCorrect={false}
            maxLength={20}
          />
        </View>
        <View style={styles.input_wrapper}>
          <Text style={styles.label}>Category</Text>
          <BusinessCategory
            category={productCategory}
            setCategory={setProductCategory}
            placeholder={''}
            borderWidth={1}
            borderRadius={10}
            height={50}
            padding={10}
          />
        </View>
        <View style={styles.input_wrapper}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            keyboardType="numbers-and-punctuation"
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
          <CustomButton title={'add'} onPress={handleSubmit} />
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
    fontSize: FONT.lg,
    color: COLORS.grey,
  },
  label: {
    fontSize: FONT.lg,
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
  count: {
    fontSize: FONT.small,
    alignSelf: 'flex-end',
  },
  label_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
});
export default AddProduct;
