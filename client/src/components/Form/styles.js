import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: '15px auto',
    width: '20%',
    position: 'sticky',
    top: '150px',
    height: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      width: '100%',

    },
  },
  paperForm: {
    padding: theme.spacing(2),
    margin: '15px auto',
    height: 'fit-content',
    position: 'sticky',
    top: '100px',
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
  imagePreviewWrapeer: {
    width: '100%',
  },
  imagePreview: {
    width: '100%',
  },
  closePreview: {
    cursor: 'pointer',
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
  },
  emojiWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '10px 15px',
  },
  emojiImage: {
    width: '30px',
    cursor: 'pointer',
  },
  emojiIcon: {
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.6'
    }
  },
  emoji: {
    position: 'absolute',
    right: '0',
    top: '2.5rem',
    zIndex: '5'
  },
}));