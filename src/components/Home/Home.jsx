import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Grid , Box , Button, Avatar } from '@material-ui/core';


import useStyles from './styles';

const images = [
  {
    url: 'https://wallpapercave.com/wp/wp4135808.jpg',
    title: 'Breakfast',
    width: '20%',
  },
  {
    url: 'https://wallpaperaccess.com/full/2365465.jpg',
    title: 'Burgers',
    width: '20%',
  },
  {
    url: 'https://cutewallpaper.org/21/synthesizer-wallpapers/Im-Modular-Synth,-Download-Wallpapers-on-Jakpost.travel.jpg',
    title: 'Camera',
    width: '20%',
  },
    {
    url: 'https://wallpaperaccess.com/full/2365465.jpg',
    title: 'Burgers',
    width: '20%',
  },
  {
    url: 'https://cutewallpaper.org/21/synthesizer-wallpapers/Im-Modular-Synth,-Download-Wallpapers-on-Jakpost.travel.jpg',
    title: 'Camera',
    width: '20%',
  },
];

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={ classes.root} spacing={3}>
      <Grid item className={classes.item} xs={12} sm={6} md={3}>
        <Button
        className={classes.button}
        variant="text"
        color="transparent"
        startIcon={<Avatar className={classes.large} src={'https://wallpaperaccess.com/full/2365465.jpg'} />}
      >
        Analog Synthesizers
      </Button>
      </Grid>
      <Grid item className={classes.item} xs={12} sm={6} md={3}>
        <Button
        className={classes.button}
        variant="text"
        color="transparent"
        startIcon={<Avatar className={classes.large} src={'https://wallpapercave.com/wp/wp4135808.jpg'} />}
      >
          Digital Synthesizers
      </Button>
      </Grid>
      <Grid item className={classes.item} xs={12} sm={6} md={3}>
        <Button
        className={classes.button}
        variant="text"
        color="transparent"
        startIcon={<Avatar className={classes.large} src={'https://cutewallpaper.org/21/synthesizer-wallpapers/Im-Modular-Synth,-Download-Wallpapers-on-Jakpost.travel.jpg'} />}
      >
        Desktop Synthesizers
      </Button>
      </Grid>
      <Grid item className={classes.item} xs={12} sm={6} md={3}>
        <Button
        className={classes.button}
        variant="text"
        color="transparent"
        startIcon={<Avatar className={classes.large} src={'https://cutewallpaper.org/21/synthesizer-wallpapers/Im-Modular-Synth,-Download-Wallpapers-on-Jakpost.travel.jpg'} />}
      >
        Modular Synthesizers
      </Button>
        </Grid>
      </Grid>
  );
}

export default Home;
