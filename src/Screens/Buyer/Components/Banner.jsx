import {FlatList, Image, View, StyleSheet} from 'react-native';
import {assets} from '../../../../constants';

const bannerData = [
  {id: 1, image: assets.banner1},
  {id: 2, image: assets.banner1},
  {id: 3, image: assets.banner1},
];

const Banner = () => {
  const renderItem = ({item}) => {
    return (
      <View style={{width: 345, height: 120}}>
        <Image
          source={item.image}
          style={{width: '100%', height: '100%', borderRadius: 10}}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={bannerData}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        contentContainerStyle={{gap: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.dot_container}>
        {bannerData.map(item => {
          return (
            <Image
              key={item.id}
              source={assets.greydot}
              style={{width: 12, height: 12}}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot_container: {
    flexDirection: 'row',
    gap: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
});
export default Banner;
