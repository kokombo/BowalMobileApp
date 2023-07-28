import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const CountryCodePicker = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={{width: 70}}
      style={{width: 150, borderWidth: 0}}
    />
  );
};

export default CountryCodePicker;
