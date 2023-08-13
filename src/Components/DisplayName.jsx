import {Text} from 'react-native';
import {useSelector} from 'react-redux';

const DisplayName = ({color}) => {
  const {user} = useSelector(store => store.currentUser);
  console.log(user);

  let name;
  if (user) {
    name = user.displayName;
  }

  return (
    <Text style={{fontSize: 20, color: `${color}`, fontWeight: '600'}}>
      {name}{' '}
    </Text>
  );
};
export default DisplayName;
