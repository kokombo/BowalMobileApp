import SelectDropdown from 'react-native-select-dropdown';
import {COLORS, assets, Image} from '../../constants';
import {TouchableOpacity} from 'react-native';

export default BusinessCategory = () => {
  const categories = ['Kids & toys', 'gaming', 'clothing', 'food', 'fashion'];

  return (
    <SelectDropdown
      data={categories}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      dropdownStyle={{
        backgroundColor: COLORS.white,
      }}
      defaultButtonText="Business Category"
      buttonStyle={{
        width: '100%',
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
      }}
      buttonTextStyle={{
        color: COLORS.gray,
        textAlign: 'left',
        textTransform: 'capitalize',
      }}
    />
  );
};
