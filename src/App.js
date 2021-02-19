
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Calculator from './components/Calculator'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'1%',
    // [theme.breakpoints.down('sm')]: {
    //   backgroundColor: theme.palette.secondary.main,
    // },
    // [theme.breakpoints.up('md')]: {
    //   backgroundColor: theme.palette.primary.main,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   backgroundColor: green[500],
    // }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App(){

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container  spacing={3} style={{display:'flex'}}>
        <Grid item xs={12} lg={4}>
          <Paper className={classes.paper}>
          <Calculator label="TEST"/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


export default App;
