import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Splash from './Splash';
import AvailableProduce from './AvailableProduce';
import ScheduleFeed from './ScheduleFeed';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>

      <div>
        <Panel/>
      </div>
      <div>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>/></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}><ScheduleFeed/></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}><ScheduleFeed/></Paper>
          </Grid>
        </Grid>
      </div>
    </div>

  );
}


// <Grid item xs={3}>
//   <Paper className={classes.paper}>xs=3</Paper>
// </Grid>
// <Grid item xs={3}>
//   <Paper className={classes.paper}>xs=3</Paper>
// </Grid>
// <Grid item xs={3}>
//   <Paper className={classes.paper}>xs=3</Paper>
// </Grid>
// <Grid item xs={3}>
//   <Paper className={classes.paper}>xs=3</Paper>
// </Grid>
