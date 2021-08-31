import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '30px',
    backgroundColor: 'red',
  },
  root: {
    flexGrow: 1,
  },
}));