import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, assets} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const AddProductIcon = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.plus_container}>
      <Text style={{color: COLORS.blue, fontSize: 18}}>Add</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Add Product');
        }}>
        <Image source={assets.plus} style={styles.plus_icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  plus_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  plus_icon: {
    width: 30,
    height: 30,
  },
});
export default AddProductIcon;
