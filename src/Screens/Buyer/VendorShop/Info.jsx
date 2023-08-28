import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

const Info = ({vendor}) => {
  return (
    <SafeAreaView style={styles.body}>
      <Text>{vendor?.businessName}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default Info;
