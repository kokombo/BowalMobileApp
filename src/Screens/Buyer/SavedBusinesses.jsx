import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {COLORS, FONT} from '../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {getSavedVendors} from '../../Redux/Slices/savedVendorSlice';
import {useEffect} from 'react';
import {VendorCard} from './Components';
import {Error} from '../../Components';

const SavedBusinesses = () => {
  const dispatch = useDispatch();

  const {vendors, status, error} = useSelector(store => store.savedVendors);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getSavedVendors());
    }
  }, [vendors]);

  const renderItem = ({item}) => <VendorCard vendor={item} />;

  return (
    <View style={styles.body}>
      {status === 'loading' ? (
        <ActivityIndicator size={'large'} color={COLORS.blue} />
      ) : status === 'failed' ? (
        <Error error={'Something went wrong, please try again'} />
      ) : vendors.length < 1 ? (
        <View style={styles.empty_list_container}>
          <Text style={styles.empty_list_text}>Your list is empty!</Text>
          <Text style={styles.empty_list_text}>
            You haven't save any business yet!
          </Text>
        </View>
      ) : (
        <FlatList
          data={vendors}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{gap: 30}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  empty_list_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  empty_list_text: {
    fontSize: FONT.lg,
    color: COLORS.grey,
  },
});
export default SavedBusinesses;
