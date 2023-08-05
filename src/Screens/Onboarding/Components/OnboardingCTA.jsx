import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const OnboardingCTA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cta_wrapper}>
      <Text style={{color: COLORS.grey}}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={{color: COLORS.blue, fontWeight: 'bold'}}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cta_wrapper: {
    flexDirection: 'row',
    gap: 3,
  },
});
export default OnboardingCTA;
