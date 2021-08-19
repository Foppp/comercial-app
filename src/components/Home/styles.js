import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   root: {
    marginTop: '80px',
  },
  item: {
    textAlign: "center",
  },
  button: {
    boxShadow: '0 10px 6px rgba(50, 50, 93, 0.11)',
    "&:hover": {
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    }
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));