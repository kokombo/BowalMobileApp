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

const SavedBusinesses = () => {
  const dispatch = useDispatch();
  const {vendors, status, error} = useSelector(store => store.savedVendors);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getSavedVendors());
    }
  }, [vendors]);

  const renderItem = ({item}) => {
    return <VendorCard vendor={item} />;
  };

  let content;
  if (status === 'loading') {
    content = <ActivityIndicator size={'large'} color={COLORS.blue} />;
  } else if (status === 'failed') {
    content = <Text>{error} </Text>;
  } else {
    if (vendors.length === 0) {
      content = (
        <View style={styles.empty_list_container}>
          <Text style={styles.empty_list_text}>Your list is empty!</Text>
          <Text style={styles.empty_list_text}>
            You haven't save any business yet
          </Text>
        </View>
      );
    } else {
      content = (
        <FlatList
          data={vendors}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{gap: 30}}
        />
      );
    }
  }

  return <View style={styles.body}>{content}</View>;
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
