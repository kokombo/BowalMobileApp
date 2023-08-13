import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {
  ProfilePicture,
  Mode,
  NavigationCard,
  DisplayName,
} from '../../Components';
import {COLORS} from '../../../constants';
import {accountTabData} from '../../../constants/data';

const Account = () => {
  const renderItem = ({item}) => {
    return <NavigationCard data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile_picture_frame}>
          <ProfilePicture width={100} height={100} style={styles.picture} />
        </View>
        <DisplayName color={COLORS.white} />
      </View>
      <View style={styles.curve}></View>
      <View style={styles.mode_wrapper}>
        <Mode />
      </View>
      <FlatList
        data={accountTabData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{padding: 15}}
        showsVerticalScrollIndicator={false}
      />

      <View></View>
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
    height: 321,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 45,
    gap: 20,
    position: 'relative',
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
    top: 275,
    backgroundColor: COLORS.white,
  },
  mode_wrapper: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    top: 242,
  },
});
export default Account;
