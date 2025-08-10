"use client"
import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from "@mui/material/styles";
import MegaMenu from "./megamenu/MegaMenu"
import Image from 'next/image';
import {styles } from "./header.style"
import { COLORS } from "../../../lib/constants/colors";
import {  FONT_WEIGHT } from '../../../lib/constants/typography';
import SimpleBackdrop from '@src/components/common/BackDrop';
import { Autocomplete, Badge, Drawer, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '@src/components/Cart/Cart';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [navLinkValue, setNavLinkValue] = useState(null);

const theme = useTheme()

const [open, setOpen] = useState(false);
const handleClose = () => {
  setOpen(false);
};
const handleOpen = () => {
  setOpen(true);
};


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

  const pages = ['Dog', 'Cat', 'Small Animal' ,"birds" , "Fishes & turtle" , "Learn" , "Retail Store" ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleOpenNavMenu = (event) => {
    console.log(event)
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; 
  let auth = false;
  const handleMenuClick = (page) => {
    setNavLinkValue(page)
    handleOpen()
  };
// cart function

const [cartOpen, setCartOpen] = useState(false);
const [cartItems, setCartItems] = useState([]);

const getTotalItems = (items) => items.reduce((acc, item) => acc + item.amount, 0);

const handleAddToCart = (clickedItem) => {
  setCartItems((prev) => {
    const isItemInCart = prev.find((item) => item.id === clickedItem.id);

    if (isItemInCart) {
      return prev.map((item) =>
        item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    }

    return [...prev, { ...clickedItem, amount: 1 }];
  });
};

const handleRemoveFromCart = (id) => {
  setCartItems((prev) =>
    prev.reduce((acc, item) => {
      if (item.id === id) {
        if (item.amount === 1) return acc;
        return [...acc, { ...item, amount: item.amount - 1 }];
      } else {
        return [...acc, item];
      }
    }, [] )
  );
};



  return (  
 <div>

<AppBar  style={styles.container} sx={{zIndex : 12000 , position : "sticky!important"  }} >
    <Container maxWidth={theme.breakpoints.values.xl} >
      <Toolbar disableGutters>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: '10%' }}>
    <Image 
        src={`/assets/mainlogo.webp`} 
        
        width={218}
        height={80} 
        priority 
        alt='logo'
        style={{ maxWidth: '100%', height: 'auto' }} // Add this line to maintain aspect ratio
    />
</Box>
       

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, px : "20px" , gap: 2}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => {handleCloseNavMenu;handleMenuClick }}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
          
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}  >
        <Image src={`/assets/petfoodlogo.png`} width={100} height={100}  priority alt='logo'/>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },  px : "20px" , gap : 2 , width : "70%"  }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {handleCloseNavMenu;handleMenuClick(page) }}
              sx={{ my: 2, color: COLORS.PRIMARY.dark, display: 'block',fontWeight : FONT_WEIGHT.semiBold  }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0, display : "flex" , width: "30%" , gap : 2 , alignItems: "center"}}>
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        sx={{maxWidth : "100%" , width : "300px" ,".css-zf8tz9-MuiInputBase-root-MuiOutlinedInput-root" : {border : `1px solid ${COLORS.PRIMARY.main}`}}}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            hiddenLabel
            size='small'
            placeholder='search for toys'
            InputProps={{
              ...params.InputProps,
              type: 'search',
              endAdornment: <SearchIcon position="end"  sx={{color : COLORS.PRIMARY.main}}/>,
            }}
          />
        )}
      />
      {auth ? <>
        <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
          </>
      :
      <>
      
      <Stack display="flex" alignItems="center">
      <Link href={"/account/login"}><AccountCircleIcon fontSize='large' sx={{color:COLORS.PRIMARY.main}} /></Link>
      <Box  style={styles.StyledButton} onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <ShoppingCartIcon sx={{color : COLORS.PRIMARY.main}} fontSize='large' />
        </Badge>
      </Box> 
      </Stack>
      </>
      }
           <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

     
          
        </Box>
      </Toolbar>
    </Container>

  </AppBar>

  {navLinkValue && <SimpleBackdrop open={open} handleClose={handleClose}> <MegaMenu page={navLinkValue}/>  </SimpleBackdrop>}

 </div>
   
  )
}

export default Header

