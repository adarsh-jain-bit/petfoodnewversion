import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const names = [
  "100grams", "200grams", "500grams", "1kg", "2kg", "3kg", "5kg", "10kg"
];

export default function MultipleSelectChip({ label, handleChange, value, name }) {
  const theme = useTheme();

  const getStyles = (itemName) => ({
    fontWeight: value.includes(itemName)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  });

  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <InputLabel id={`${name}-label`} sx={{ bgcolor: "white", padding: "4px" }}>
        {label}
      </InputLabel>
      <Select
        labelId={`${name}-label`}
        id={`${name}-select`}
        multiple
        name={name}
        value={value}
        onChange={(e) => handleChange(name, e.target.value)}
        input={<OutlinedInput id="select-multiple-chip" label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((val) => (
              <Chip key={val} label={val} sx={{ padding: "20px 10px" }} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map((itemName) => (
          <MenuItem
            key={itemName}
            value={itemName}
            style={getStyles(itemName)}
          >
            {itemName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
