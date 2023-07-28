import {Text} from 'react-native';
import {COLORS} from '../../../../constants';
const OnboardingCTA = () => {
  return (
    <Text style={{color: COLORS.grey}}>
      Already have an account?{' '}
      <Text style={{color: COLORS.blue, fontWeight: 'bold'}}>Sign in</Text>
    </Text>
  );
};
export default OnboardingCTA;
