import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const listener = auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoggedIn(true);
      } else {
        setUser(null);
        setLoggedIn(false);
      }
    });
    listener();
  }, []);

  return {user, loggedIn};
};

export default useCurrentUser;
