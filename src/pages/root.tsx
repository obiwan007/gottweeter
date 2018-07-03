import * as React from 'react';


import { CircularProgress, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

import { StyleRulesCallback, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HouseCard from './housecard';
import HouseList from './houselist';

import { House } from '../models/house';

const styles: StyleRulesCallback<'root'> = theme => ({

  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',    
    color: theme.palette.text.secondary,
  },
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },

});

export interface IState {
  selectedHouse?: House;
  loading: boolean;

}
/**
 * Main Component of the app to show a grid for List of Houses with House Details
 */
export class Root extends React.Component<any, IState> {
  /**
   *
   */
  constructor(props: any, state: IState) {
    super(props, state);
    this.state = {
      loading: false,
      selectedHouse: undefined,
    };
  }

  public render() {
    const { classes } = this.props;
    const { selectedHouse, loading } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Game of Thrones House Tweeter
          </Typography>
            <div>
              {loading &&
                <CircularProgress />
              }
            </div>
          </Toolbar>
        </AppBar>
        <br />
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={6}>
            <div className={classes.paper}>
              <HouseList
                onLoading={(load) => this.setState({ loading: load })}
                onSelectHouse={(house) => this.setState({ selectedHouse: house })} />
            </div>
          </Grid>
          <Grid item={true} xs={6}>
            <div className={classes.paper}>
              <HouseCard house={selectedHouse} />
            </div>
          </Grid>
        </Grid>

      </div>
    );
  }

}

export default withStyles(styles)(Root);