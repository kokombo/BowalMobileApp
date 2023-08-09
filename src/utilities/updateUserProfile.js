import auth from '@react-native-firebase/auth';

export const updateUserProfile = async details => {
  await auth().currentUser.updateProfile({...details});
};
