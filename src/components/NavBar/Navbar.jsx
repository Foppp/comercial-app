import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, InputBase } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useLocation } from 'react-router-dom';


import logo from '../../assets/synthmaster_logo_black.png';
import logo2 from '../../assets/synthmaster_logo_black2.png';

import useStyles from './styles';




const PrimarySearchAppBar = ({ totalItems }) => {
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  // const location = useLocation();

  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  // const mobileMenuId = 'primary-search-account-menu-mobile';

  // const renderMobileMenu = (
  //   <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
  //     <MenuItem>
  //       <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
  //         <Badge badgeContent={totalItems} color="secondary">
  //           <ShoppingCart />
  //         </Badge>
  //       </IconButton>
  //       <p>Cart</p>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <>
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="transparent" >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            >
                                        <img component={Link} to="/" src={logo2} alt="synth" height="35px" className={classes.image2} />
<img src={logo} alt="synth" height="25px" className={classes.image} />
            </IconButton>

            <Typography component={Link} to="/" className={classes.title} variant="h6" >
              {/* <img src={logo} alt="synth" height="45px" className={classes.image} /> */}

          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
              </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>
            <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  
      {/* <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Yura Shop
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu} */}
    </>
  );
};

export default PrimarySearchAppBar;