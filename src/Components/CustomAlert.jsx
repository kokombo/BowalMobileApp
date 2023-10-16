import {Modal, View, Text, StyleSheet, StatusBar, Platform} from 'react-native';
import {COLORS} from '../../constants';
import {useEffect} from 'react';
import {closeAlert} from '../Redux/Slices/customAlertSlice';
import {useDispatch, useSelector} from 'react-redux';

const CustomAlert = ({text, color}) => {
  const {alertShown} = useSelector(store => store.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeAlert());
    }, 2000);
  }, []);

  return (
    <View>
      {alertShown && (
        <Modal animationType="none" transparent={true}>
          <View style={styles.container}>
            <View style={styles.body}>
              <Text style={{color: color}}>{text}</Text>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight + 10,
    alignItems: 'flex-start',
  },
  body: {
    backgroundColor: COLORS.grey,
    height: Platform.OS === 'ios' ? 100 : StatusBar.currentHeight,
    width: '100%',
  },
});
export default CustomAlert;
