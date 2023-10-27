import {View, Image, StyleSheet} from 'react-native';
import {assets} from '../../../../constants';

const Rating = () => {
  return (
    <View style={styles.rating_container}>
      {[...Array(5)].map((_, index) => {
        return <Image source={assets.star} key={index} style={styles.star} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  rating_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  star: {
    height: 18,
    width: 18,
  },
});
export default Rating;
