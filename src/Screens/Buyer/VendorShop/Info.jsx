import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONT} from '../../../../constants';
import {VendorLocation} from '../Components';

const Info = ({vendor}) => {
  return (
    <View style={styles.body}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Business Name</Text>

        <Text style={styles.answer}>{vendor?.businessName}</Text>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.label}>Business Description</Text>

        <Text style={styles.answer}>{vendor?.businessDescription} </Text>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.label}>Business Location</Text>

        <VendorLocation color={COLORS.grey} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
    width: '100%',
    gap: 40,
  },
  label: {
    fontSize: FONT.base,
    color: COLORS.gray,
  },
  answer: {
    fontSize: FONT.lg,
    color: COLORS.grey,
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
  },
});
export default Info;
