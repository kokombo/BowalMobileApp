import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONT} from '../../../constants';
import {ProductImages, ProductInfo, ProductDescription} from './Components';
import database from '@react-native-firebase/database';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {addToCart, removeFromCart} from '../../Redux/Slices/cartSlice';

const ProductDetail = ({route}) => {
  const dispatch = useDispatch();
  const [accountType, setAccountType] = useState('');
  const {data} = route.params;
  const images = data?.productImages;
  const description = data?.productDescription;
  const id = data?.id;

  const {user} = useSelector(store => store.currentUser);
  const {cartItems} = useSelector(store => store.cart);

  //Checking if a product already exist in the cart
  const existingIds = cartItems?.map(item => item.id);

  //If a product exists in cart already, user can remove.
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  //Hence user can add product to cart
  const handleAddToCart = () => {
    dispatch(addToCart({...data, quantity: 1}));
  };

  let buttonContainer;
  //Referencing the database to check user's account type. If the user is a vendor, seleting number of products to cart and cart button will not show on the product details page. Only a buyer have access to the features.
  const ref = database().ref(`users/${user.uid}`);
  ref.on('value', snapshot => {
    const accountType = snapshot.child('accountType').val();
    setAccountType(accountType);
  });

  if (accountType === 'buyer') {
    buttonContainer = (
      <View style={styles.buttons_container}>
        <TouchableOpacity style={[styles.chat_button, styles.button]}>
          <Text style={styles.chat_text}>chat</Text>
        </TouchableOpacity>

        {existingIds.includes(id) ? (
          <TouchableOpacity
            onPress={handleRemoveFromCart}
            style={[styles.cart_button, styles.button, styles.remove_button]}>
            <Text style={styles.cart_text}>Remove</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleAddToCart}
            style={[styles.cart_button, styles.button]}>
            <Text style={styles.cart_text}>Add</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={styles.body}>
      <ProductImages images={images} />
      <ProductInfo data={data} />
      <ProductDescription description={description} />
      {buttonContainer}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
    gap: 15,
  },
  button: {
    borderRadius: 50,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  cart_button: {
    backgroundColor: COLORS.blue,
  },
  chat_button: {
    borderWidth: 1,
    borderColor: COLORS.blue,
  },
  buttons_container: {
    flexDirection: 'row',
    gap: 30,
    position: 'absolute',
    bottom: 40,
    left: '60%',
    marginLeft: '-50%',
  },
  cart_text: {
    color: COLORS.white,
    fontSize: FONT.lg,
    fontWeight: '500',
  },
  chat_text: {
    color: COLORS.blue,
    fontSize: FONT.lg,
    fontWeight: '500',
  },
  remove_button: {
    backgroundColor: 'red',
  },
});
export default ProductDetail;
