import * as React from 'react';

import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
// tslint:disable-next-line:ordered-imports
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HouseCard from './housecard';
import HouseList from './houselist';

import { House } from '../models/house';

const styles: StyleRulesCallback<'root'> = theme => ({

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

}

export class Root extends React.Component<any, IState> {
  /**
   *
   */
  constructor(props: any, state: IState) {
    super(props, state);
    this.state = {
      selectedHouse: undefined
    }
  }

  public render() {
    const { classes } = this.props;
    const { selectedHouse } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Game of Thrones Character Explorer
          </Typography>
          </Toolbar>
        </AppBar>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={6}>
            
            <HouseList 
            // tslint:disable-next-line:jsx-no-lambda
            onSelectHouse={(house)=> this.setState({selectedHouse: house})} />
          </Grid>
          <Grid item={true} xs={6}>
            <HouseCard house={selectedHouse}/>
          </Grid>
        </Grid>

      </div>
    );
  }

}

export default withStyles(styles)(Root);