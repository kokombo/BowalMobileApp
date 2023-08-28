import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {getSavedVendors} from '../../Redux/Slices/savedVendorSlice';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const SavedBusinesses = () => {
  const dispatch = useDispatch();
  const {savedVendors, status} = useSelector(store => store.savedVendors);
  const {user} = useSelector(store => store.currentUser);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getSavedVendors());
    }
  }, []);

  return <View style={styles.body}></View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default SavedBusinesses;
