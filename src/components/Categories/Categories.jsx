import React from 'react';
import { Grid , Button, Avatar, Typography } from '@material-ui/core';

import categories from './catgoryList';
import useStyles from './styles';



const Categories = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      {categories.map((category, i) => (
        <Grid item key={i} className={classes.item} xs={12} sm={6} md={3}>
          <Button
            className={classes.button}
            variant="text"
            value="transparent"
            startIcon={<Avatar className={classes.large} src={category.url} />}
          >
            <Typography varinat="h1">{category.title}</Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default Categories;
