import {View, StyleSheet, TextInput} from 'react-native';
import OnboardingHeading from '../Components/OnboardingHeading';
import {COLORS} from '../../../../constants';
import {Input, BusinessCategory} from '../../../Components';
import CustomButton from '../../../Components/Buttons';
import {useState} from 'react';
import {updateUserProfile} from '../../../utilities/updateUserProfile';
import {useNavigation} from '@react-navigation/native';

const FormB = () => {
  const [category, setCategory] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');

  const navigation = useNavigation();

  const canSubmit = Boolean(category && businessName && businessDescription);

  const handleSubmit = () => {
    if (canSubmit) {
      updateUserProfile({category, businessName, businessDescription});
      navigation.navigate('Verify');
    }
  };

  return (
    <View style={styles.body}>
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
          <BusinessCategory category={category} setCategory={setCategory} />
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
