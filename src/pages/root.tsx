import * as React from 'react';

// tslint:disable-next-line:ordered-imports
import { Grid, CircularProgress } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
// tslint:disable-next-line:ordered-imports
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
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
    // tslint:disable-next-line:object-literal-sort-keys
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
              Game of Thrones Character Explorer
          </Typography>
            <div>
              {loading &&
                <CircularProgress />
              }
            </div>
          </Toolbar>
        </AppBar>
        <br/>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={6}>
            <HouseList
              // tslint:disable-next-line:jsx-no-lambda
              onLoading={(load) => this.setState({ loading: load })}
              // tslint:disable-next-line:jsx-no-lambda
              onSelectHouse={(house) => this.setState({ selectedHouse: house })} />
          </Grid>
          <Grid item={true} xs={6}>
            <HouseCard house={selectedHouse} />
          </Grid>
        </Grid>

      </div>
    );
  }

}

export default withStyles(styles)(Root);