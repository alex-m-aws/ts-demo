import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels(props) {
  const handleChange = (event) => {
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
