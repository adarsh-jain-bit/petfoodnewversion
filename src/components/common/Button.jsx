import React from 'react'
import MuiButton from '@mui/material/Button';
import { COLORS } from '@src/lib/constants/colors';


const CustomButton = ({ text,  variant = "text", link = "#", size = "medium" , active = false })  => {
  return (
    <MuiButton variant={variant}  size={size}  disabled={active} 
    sx={{
      backgroundColor: !active ? COLORS.PRIMARY.main : COLORS.GLOBAL.GRAY_50,
        color: COLORS.GLOBAL.WHITE ,
        borderRadius: "30px",
    fontSize : "12px",
    padding : "8px  10px",
        '&:hover': {
            backgroundColor: !active  ? COLORS.PRIMARY.light : COLORS.GLOBAL.GRAY_10,
        }
    }}
    >{text}</MuiButton>
  )
}

export default CustomButton