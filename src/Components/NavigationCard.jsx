import {Image, TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {COLORS, assets} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const NavigationCard = ({data}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(`${data.text}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.wrapper}>
        <View style={styles.icon_container}>
          <Image source={data.icon} style={styles.icon} />
        </View>

        <Text style={styles.text}>{data.text}</Text>
      </View>

      <Image source={assets.navigate} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: COLORS.chalk,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  icon_container: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: COLORS.snow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textTransform: 'capitalize',
    color: COLORS.grey,
    fontWeight: '300',
    fontSize: 18,
  },
});
export default NavigationCard;
