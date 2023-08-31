import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONT} from '../../../../constants';
import {useState} from 'react';

const ProductIncrement = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon_wrapper}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text style={styles.text}>2</Text>
      <TouchableOpacity style={styles.icon_wrapper}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon_wrapper: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: COLORS.snow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FONT.lg,
  },
});
export default ProductIncrement;
