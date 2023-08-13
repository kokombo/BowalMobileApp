import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {assets} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={assets.arrowback} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    height: 18,
    width: 20,
    marginLeft: 15,
  },
});

export default GoBack;
