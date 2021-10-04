import { commerce } from "../lib/commerce";

export const getCart = () => {
  return new Promise((resolve, reject) => {
    commerce.cart.retrieve()
      .then((cart) => {
        resolve(cart);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const addProduct = (productId, qty) => {
  return new Promise((resolve, reject) => {
    commerce.cart.add(productId, qty)
      .then(({ cart }) => {
        resolve(cart);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const updateProductQty = (lineItemId, quantity) => {
  return new Promise((resolve, reject) => {
    commerce.cart.update(lineItemId, { quantity })
      .then(({ cart }) => {
        resolve(cart);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};


export const removeProduct = (productId) => {
  return new Promise((resolve, reject) => {
    commerce.cart.remove(productId)
      .then(({ cart }) => {
        resolve(cart);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const removeAllProducts = (productId) => {
  return new Promise((resolve, reject) => {
    commerce.cart.empty()
      .then(({ cart }) => {
        resolve(cart);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const refresh = (productId) => {
  return new Promise((resolve, reject) => {
    commerce.cart.refresh()
      .then((cart) => {
        resolve(cart);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const getCountries = (checkoutTokenId) => {
  return new Promise((resolve, reject) => {
    commerce.services.localeListShippingCountries(checkoutTokenId)
      .then(({ countries }) => {
        resolve(countries);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const getSubdivisions = (countryCode) => {
  return new Promise((resolve, reject) => {
    commerce.services.localeListSubdivisions(countryCode)
      .then(({ subdivisions }) => {
        resolve(subdivisions);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const getOptions = (countriesData) => {
  return new Promise((resolve, reject) => {
    const { checkoutTokenId, country, stateProvince } = countriesData;
    commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince })
      .then((options) => {
        resolve(options);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const getNewToken = (cartId) => {
  return new Promise((resolve, reject) => {
    commerce.checkout.generateToken(cartId, { type: 'cart' })
      .then((token) => {
        resolve(token);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const capture = (checkoutData) => {
  return new Promise((resolve, reject) => {
    const { checkoutTokenId, newOrder } = checkoutData;
    commerce.checkout.capture(checkoutTokenId, newOrder)
      .then((order) => {
        resolve(order);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};

export const getProductList = () => {
  return new Promise((resolve, reject) => {
    commerce.products.list()
      .then(({ data }) => {
        resolve(data);
      }).catch((err) => {
        reject(err.data.error);
      });
  });
};
