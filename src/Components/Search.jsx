import {TextInput, StyleSheet, View, Image} from 'react-native';
import {COLORS, assets} from '../../constants';

const Search = ({value}) => {
  return (
    <View>
      <Image source={assets.searchicon} style={styles.icon} />
      <TextInput placeholder={'Search'} style={styles.search} value={value} />
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    backgroundColor: COLORS.cloud,
    height: 48,
    borderRadius: 50,
    paddingLeft: 50,
  },
  icon: {
    width: 24,
    height: 24,
    top: 36,
    zIndex: 1000,
    left: 20,
  },
});
export default Search;
