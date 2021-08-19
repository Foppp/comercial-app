import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <Grid container>
      <Grid item xs={0} sm={1}/>
      <Grid className={classes.content} item xs={12} sm={10}>
        <Grid container spacing={3}>
{products.map((product) => (
  <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
        </Grid>
      </Grid>
      <Grid item xs={0} sm={1}/>
    </Grid>
  );
};

export default Products;