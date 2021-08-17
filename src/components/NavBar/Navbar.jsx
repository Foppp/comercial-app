import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, ManuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/synthLogo.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  if (location )
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
            YuraSynth Shop
          </Typography>
          <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
