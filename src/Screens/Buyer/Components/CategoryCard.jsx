import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import {COLORS} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const CategoryCard = ({item, vendors}) => {
  const navigation = useNavigation();

  //Filtering through vendors to display vendors with matching business category.
  const filteredVendors = vendors?.filter(
    vendor => vendor.category === item.name,
  );

  const onPress = () => {
    navigation.navigate('Vendors', {filteredVendors});
  };

  return (
    <TouchableOpacity style={styles.card_container} onPress={onPress}>
      <View
        style={{
          height: 97,
          width: 97,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `${item.backgroundColor}`,
        }}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.text}>{item.name} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card_container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 97,
    height: 150,
    gap: 5,
  },
  text: {
    fontSize: 13,
    color: COLORS.grey,
    textTransform: 'capitalize',
    fontWeight: '300',
    textAlign: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
});
export default CategoryCard;
