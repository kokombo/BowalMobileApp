import {View, StyleSheet, TextInput} from 'react-native';
import OnboardingHeading from '../Components/OnboardingHeading';
import {COLORS} from '../../../../constants';
import {Input, BusinessCategory, Loader} from '../../../Components';
import CustomButton from '../../../Components/Buttons';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

//Component that handles vendor's product into after signup.
const FormB = () => {
  const [category, setCategory] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  //canSubmit check if the user has filled every necessary field.
  const canSubmit = Boolean(category && businessName && businessDescription);

  //getting the current user (vendor) from currentUserSlice
  const {user} = useSelector(store => store.currentUser);

  //Saves vendor's business info to firebase database.
  const saveToStorage = async () => {
    //Saves user info to realtime database
    await database()
      .ref(`users/${user.uid}`)
      .update({category, businessName, businessDescription});
    //Saves user info to firestore database
    await firestore()
      .collection('users')
      .doc(`${user.uid}`)
      .set({category, businessName, businessDescription});
  };

  //handles user's business info submission
  const handleSubmit = () => {
    if (canSubmit) {
      setLoading(true);
      saveToStorage();
      navigation.navigate('Verify');
      setLoading(false);
    }
  };

  return (
    <View style={styles.body}>
      {loading && <Loader />}
      <OnboardingHeading
        heading={'Almost there!'}
        subheading={'Set up your store details'}
      />

      <View style={styles.form}>
        <View style={styles.inputs}>
          <Input
            placeholder={'Enter your business name'}
            textContentType={'organizationName'}
            value={businessName}
            onChangeText={setBusinessName}
          />
          <BusinessCategory
            category={category}
            setCategory={setCategory}
            placeholder={'Select your business category'}
            height={32}
          />
          <TextInput
            placeholder={'Write a brief description of your business...'}
            multiline={true}
            style={styles.business_description_input}
            value={businessDescription}
            onChangeText={setBusinessDescription}
          />
        </View>
        <CustomButton
          title="continue"
          onPress={handleSubmit}
          disabled={!canSubmit}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingTop: 40,
    flexDirection: 'column',
  },
  inputs: {
    gap: 40,
  },
  form: {
    gap: 50,
    marginTop: 60,
  },
  login: {
    alignItems: 'center',
  },
  business_description_input: {
    height: 96,
    borderColor: COLORS.gray,
    borderBottomWidth: 1,
    fontSize: 18,
    color: COLORS.grey,
  },
});

export default FormB;
