import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {ProfilePicture, Mode, NavigationCard} from '../../Components';
import {COLORS} from '../../../constants';
import {ScrollView} from 'react-native';
import {accountTabData} from '../../../constants/data';

const Account = () => {
  const renderItem = ({item}) => {
    return <NavigationCard data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Profile</Text>
        <View style={styles.profile_picture_frame}>
          <ProfilePicture width={100} height={100} style={styles.picture} />
        </View>
        <Text style={styles.text}>Samuel Oluwanbowa</Text>
      </View>
      <View style={styles.curve}></View>
      <View style={styles.mode_wrapper}>
        <Mode />
      </View>
      <FlatList
        data={accountTabData}
        renderItem={renderItem}
        keyExtractor={item => item.text.toString()}
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
    height: 331,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 45,
    gap: 20,
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
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    top: 355,
    backgroundColor: COLORS.white,
  },
  mode_wrapper: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    top: 320,
  },
});
export default Account;
