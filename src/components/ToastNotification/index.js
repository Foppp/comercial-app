import { setHideNotification, setShowNotification } from "../../redux/notifier/notifier.js";

const showNotification = (type, message) => (dispatch) => {
  const duration = 5000;
  dispatch(setShowNotification({ type, message }));
  setTimeout(() => dispatch(setHideNotification()), duration);
};

export default showNotification;