export const getPaymentMethodId = (options) => {
  return new Promise((resolve, reject) => {
    const { stripe, method } = options;
    stripe.createPaymentMethod(method)
      .then(({ error, paymentMethod }) => {
        if (error) {
          reject(error);
        } else {
          resolve(paymentMethod.id);
        }
      }).catch((err) => {
        reject(err);
      });
  });
};