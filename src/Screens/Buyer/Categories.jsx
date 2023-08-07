import {View, StyleSheet, FlatList} from 'react-native';
import {cagtegoriesData} from '../../../constants/data';
import {COLORS} from '../../../constants';
import {CategoryCard} from './Components';
const Categories = () => {
  const renderItem = ({item}) => {
    return <CategoryCard item={item} />;
  };
  return (
    <View style={styles.body}>
      <FlatList
        data={cagtegoriesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={{
          alignItems: 'center',
          justifyContent: 'space-around',
          // paddingVertical: 15,
        }}
        contentContainerStyle={{gap: 10, paddingTop: 15}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default Categories;
