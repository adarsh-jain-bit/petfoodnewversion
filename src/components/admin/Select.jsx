import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText, Typography } from '@mui/material';
import {COLORS} from "../../lib/constants/colors"
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function getStyles(name, value, theme) {
  return {
    fontWeight: value.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function CustomSelect({names , label , handleChange , value , name , helperText}) {
  const theme = useTheme();
  const handleSelectChange = (event) => {
    handleChange(name, event.target.value);
  };
  return (
    <div>
        <Typography variant='h6' color={COLORS .GLOBAL.GRAY_60} fontFamily={theme.typography.fontFamily} >{label}</Typography>
      <FormControl sx={{ width: "100%" }}>
       
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
           name={name}
          value={value}
          onChange={handleSelectChange}
          MenuProps={MenuProps}
          error={helperText ? true : false}
          
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, value, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText sx={{color: COLORS.ERROR.main}}>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
}
