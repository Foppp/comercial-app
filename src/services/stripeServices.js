export const getPaymentMethodId = (options) => {
  return new Promise((resolve, reject) => {
    const { stripe, method } = options;
    method.card.update({ disabled: true });
    stripe.createPaymentMethod(method)
      .then(({ error, paymentMethod }) => {
        if (error) {
          method.card.update({ disabled: false });
          reject(error);
        } else {
          resolve(paymentMethod.id);
        }
      }).catch((err) => {
        method.card.update({ disabled: false });
        reject(err);
      });
  });
};