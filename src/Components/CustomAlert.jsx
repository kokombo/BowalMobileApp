import {Modal, View, Text, StyleSheet, StatusBar, Platform} from 'react-native';
import {COLORS} from '../../constants';
import {useEffect} from 'react';
import {showAlert, closeAlert} from '../Redux/Slices/customAlertSlice';
import {useDispatch, useSelector} from 'react-redux';

const CustomAlert = ({text}) => {
  const {alertShown} = useSelector(store => store.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(showAlert());
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {alertShown && (
        <View style={styles.body}>
          <Text>{text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
  },
  body: {
    height: 100,
    width: 300,
    backgroundColor: COLORS.gray,

    top: Platform.OS === 'ios' ? 100 : StatusBar.currentHeight + 10,
    left: 0,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
});
export default CustomAlert;
