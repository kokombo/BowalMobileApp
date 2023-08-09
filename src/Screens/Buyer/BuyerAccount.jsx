import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {ProfilePicture, Mode, NavigationCard} from '../../Components';
import {COLORS} from '../../../constants';
import {buyerAccountTabData} from '../../../constants/data';
import {useSelector} from 'react-redux';

const BuyerAccount = () => {
  const {user} = useSelector(store => store.currentUser);

  const renderItem = ({item}) => {
    return <NavigationCard data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile_picture_frame}>
          <ProfilePicture width={100} height={100} style={styles.picture} />
        </View>
        <Text style={styles.text}>{user.displayName}</Text>
      </View>

      <View style={styles.curve}></View>

      <FlatList
        data={buyerAccountTabData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{padding: 15}}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  header: {
    backgroundColor: COLORS.blue,
    height: 247,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingBottom: 25,
    position: 'relative',
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '500',
  },
  profile_picture_frame: {
    backgroundColor: COLORS.white,
    width: 110,
    height: 110,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    position: 'relative',
  },
  curve: {
    height: 50,
    width: '100%',
    position: 'absolute',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: 220,
    backgroundColor: COLORS.white,
  },
});
export default BuyerAccount;
