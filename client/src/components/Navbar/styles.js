import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd7d7',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  heading: {
    color: '#4e5166',
    fontWeight: '400',
    textTransform: 'capitalize',
    fontSize: '3.75rem',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.875rem',
    }
  },
  image: {
    marginLeft: '15px',
    height: '100px',
    [theme.breakpoints.down('sm')]: {
      height: '50px',
    }
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: '#fd2d01',
  },
  signIn: {
    backgroundColor: '#fd2d01',
    color: '#4e5166',
    '&:hover': {
      backgroundColor: '#4e5166',
      color: '#fd2d01',
    }
  }
}));