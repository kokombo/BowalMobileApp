import {View, Pressable, Image, Text, StyleSheet} from 'react-native';
import {COLORS, FONT, assets} from '../../../../constants';
import {useState} from 'react';

const ProductDescription = ({description}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleShow = () => {
    setShowDescription(prev => !prev);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.description_heading}>
        <Text style={styles.heading_text}>Description</Text>

        <Pressable onPress={toggleShow}>
          <Image source={assets.arrowdown} style={styles.icon} />
        </Pressable>
      </View>

      <View>
        {showDescription && (
          <Text style={styles.description}>{description}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    gap: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.chalk,
    paddingVertical: 20,
  },
  icon: {
    height: 11,
    width: 16,
  },
  description_heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    color: COLORS.grey,
    fontSize: FONT.base,
  },
  heading_text: {
    color: COLORS.grey,
    fontSize: FONT.lg,
    fontWeight: '600',
  },
});
export default ProductDescription;
