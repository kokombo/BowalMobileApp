import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {assets, COLORS} from '../../../../constants';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const SaveVendor = ({vendor}) => {
  //Getting the id of the vendor who owns the current shop
  const vendorId = vendor.id;

  //Selecting the current user(buyer) who is trying to save a vendor.
  const {user} = useSelector(store => store.currentUser);
  const userId = user?.uid;

  //Getting the saved vendors for a particular user
  const {savedVendors} = useSelector(store => store.savedVendors);

  //Function that handles saving vendor to the backend
  const handleSaveAVendor = async () => {
    try {
      await firestore()
        .collection('buyers')
        .doc(`${userId}`)
        .collection('savedVendors')
        .doc(`${vendorId}`)
        .set({
          ...vendor,
          timeStamp: firestore.FieldValue.serverTimestamp(),
        });
    } catch (error) {
      return error.message;
    }
  };

  //Function that handles removing vendor from the backend
  const handleRemoveAVendor = async () => {
    try {
      await firestore()
        .collection('buyers')
        .doc(`${userId}`)
        .collection('savedVendors')
        .doc(`${vendorId}`)
        .delete();
    } catch (error) {
      return error.message;
    }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleSaveAVendor}>
        <Image source={assets.love} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
export default SaveVendor;
