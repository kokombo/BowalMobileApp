import {Text, TouchableOpacity, View, StyleSheet, FlatList} from 'react-native';
import {COLORS} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {cagtegoriesData} from '../../../../constants/data';
import CategoryCard from './CategoryCard';
import {useSelector} from 'react-redux';

const FeaturedCategories = () => {
  const {vendors} = useSelector(store => store.vendors);

  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return <CategoryCard item={item} vendors={vendors} />;
  };

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

      <FlatList
        data={cagtegoriesData.slice(0, 6)}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        contentContainerStyle={{gap: 15}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
