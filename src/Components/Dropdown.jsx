import {COLORS} from '../../constants';
import {TouchableOpacity, View, FlatList, Text, StyleSheet} from 'react-native';
import {Modal} from 'react-native';
import Input from './Input';
import {useState} from 'react';
import {cagtegoriesData} from '../../constants/data';

export default BusinessCategory = ({category, setCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          setCategory(`${item.name}`);
          setModalVisible(false);
        }}>
        <Text style={styles.text}>{item.name} </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Input
        placeholder={'Select your business category'}
        onPressIn={() => setModalVisible(true)}
        value={category}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modal_view}>
          <FlatList
            data={cagtegoriesData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
              gap: 10,
            }}
          />
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modal_view: {
    flex: 1,

    backgroundColor: COLORS.snow,
    paddingVertical: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.grey,
    width: 400,
  },
  text: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: '300',
  },
});
