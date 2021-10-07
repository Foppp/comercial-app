import emailjs from 'emailjs-com';

const service = 'service_slxhkgl';
const template = 'template_xxundmk';
const user = 'user_YMWIwXTCBxoyKXwb2L7tm';

export const sendEmail = (values, formik) => {
  return new Promise((resolve, reject) => {
    emailjs.send(service, template, values, user)
      .then(
        () => {
          resolve();
          console.log('sent!');
          formik.resetForm();
        },
        (error) => {
          reject(error)
        }
    ).catch((err) => {
        reject(err)
      })
    });
};