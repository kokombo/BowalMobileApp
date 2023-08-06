import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const FeaturedCategories = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.heading_wrapper}>
        <Text style={styles.heading_text}>Categories</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Categories');
          }}>
          <Text style={styles.heading_link}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading_text: {
    fontSize: 18,
    color: COLORS.grey,
    fontWeight: '600',
  },
  heading_link: {
    color: COLORS.blue,
    fontSize: 18,
    fontWeight: '300',
  },
});

export default FeaturedCategories;
