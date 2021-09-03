import {
  setHideNotification,
  setShowNotification,
} from "../../redux/notification.js";

const showNotification = (type, message) => async (dispatch) => {
  const duration = 5000;
  dispatch(setShowNotification({ type, message }));
  setTimeout(() => dispatch(setHideNotification()), duration);
};

export default showNotification;