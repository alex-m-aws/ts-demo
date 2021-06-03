import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function SwitchLabels(props: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch 
        checked={props.checked} 
        onChange={handleChange} 
        name="checked" 
      />}
      label="Show hidden component"
    />
  );
}