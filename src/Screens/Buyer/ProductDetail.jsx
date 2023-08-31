import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONT} from '../../../constants';
import {
  ProductImages,
  ProductInfo,
  ProductDescription,
  ProductQuantity,
} from './Components';
import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';

const ProductDetail = ({route}) => {
  const {data} = route.params;
  const images = data?.productImages;
  const description = data?.productDescription;

  const {user} = useSelector(store => store.currentUser);

  let quantity;
  let buttonContainer;

  //Referencing the database to check user's account type. If the user is a vendor, seleting number of products to cart and cart button will not show on the product details page. Only a buyer have access to the features.
  const ref = database().ref(`users/${user.uid}`);
  ref.on('value', snapshot => {
    const accountType = snapshot.child('accountType').val();
    if (accountType === 'buyer') {
      quantity = <ProductQuantity />;
      buttonContainer = (
        <View style={styles.buttons_container}>
          <TouchableOpacity style={[styles.chat_button, styles.button]}>
            <Text style={styles.chat_text}>chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.cart_button, , styles.button]}>
            <Text style={styles.cart_text}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      );
    }
  });

  return (
    <View style={styles.body}>
      <ProductImages images={images} />
      <ProductInfo data={data} />
      {quantity}
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
});
export default ProductDetail;
