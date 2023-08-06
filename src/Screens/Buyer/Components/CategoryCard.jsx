import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

const CategoryCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.card_container}>
      <TouchableOpacity
        style={{
          height: 97,
          width: 97,
          borderRadius: 10,
          backgroundColor: `${item.backgroundColor}`,
        }}></TouchableOpacity>
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
    fontSize: 18,
    color: COLORS.grey,
    textTransform: 'capitalize',
    fontWeight: '300',
    textAlign: 'center',
  },
});
export default CategoryCard;
