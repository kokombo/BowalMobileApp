import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

const Reviews = () => {
  return (
    <View style={styles.body}>
      <Text>Reviews</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default Reviews;
