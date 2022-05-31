import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#ffd7d7',
    color: '#4e5166',
    '&:hover': {
      backgroundColor: '#4e5166',
      color: '#ffd7d7',
    }
  },
  buttonClear: {
    backgroundColor: '#fd2d01',
    color: '#4e5166',
    '&:hover': {
      backgroundColor: '#4e5166',
      color: '#fd2d01',
    }
  }
}));