import {View, Image, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

const ProductImages = ({images}) => {
  const image = images[0];
  console.log(image);
  return (
    <View style={styles.container}>
      <View style={styles.image_background}>
        <Image
          source={{
            uri: `${image}`,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  image_background: {
    backgroundColor: COLORS.snow,
    height: 284,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  image: {
    width: 275,
    height: 230,
  },
});
export default ProductImages;
