import {RefreshControl} from 'react-native';
import {useCallback, useState} from 'react';
import {fetchProducts} from '../Redux/Slices/ProductSlice';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../constants';
import {getAllVendors} from '../Redux/Slices/getVendorSlice';

export const RefreshController = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchProducts());
    dispatch(getAllVendors());

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      tintColor={COLORS.blue}
    />
  );
};

export default RefreshController;
