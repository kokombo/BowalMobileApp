import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {getSavedVendors} from '../../Redux/Slices/savedVendorSlice';
import {useEffect} from 'react';
import {VendorCard} from './Components';

const SavedBusinesses = () => {
  const dispatch = useDispatch();
  const {vendors, status} = useSelector(store => store.savedVendors);
  const {user} = useSelector(store => store.currentUser);

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
    content = (
      <View>
        <Text>Something went wrong, please try again</Text>{' '}
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

  return <View style={styles.body}>{content}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
});
export default SavedBusinesses;
