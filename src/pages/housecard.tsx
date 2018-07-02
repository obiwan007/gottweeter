import { withStyles, WithTheme } from '@material-ui/core/styles';

import * as React from 'react';

import { Button, Card, CardActions, CardContent, CircularProgress, Paper, Typography } from '@material-ui/core';

import { House } from '../models/house';

const styles = {

 
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
    marginBottom: 16,
  },
  

};

// tslint:disable-next-line:no-empty-interface
export interface IProps {
  // tslint:disable-next-line:no-unused-expression
  house?: House;
}
export type IPropTypes = IProps & Partial<WithTheme> & 
{ classes: Record<"root", string>; } &
{ classes: Record<"card", string>; } &
{ classes: Record<"pos", string>; } &
{ classes: Record<"title", string>; } &
{ classes: Record<"bullet", string>; };


export interface IState {
  selected: string;
  houses: House[];
  page: number;
  rowsPerPage: number;
  loading: boolean;
}

export class HouseCard extends React.Component<IPropTypes, IState> {
  /**
   *
   */
  constructor(props: IPropTypes, state: IState) {
    super(props, state);
    this.state = { houses: [], selected: '', page: 0, rowsPerPage: 10, loading: false };
  }

  public render() {
    const { classes, house } = this.props;
    const { selected, loading } = this.state;
    // tslint:disable-next-line:no-console
    console.log('Selected:', selected);

    return (
      <Paper className={classes.root}>
        {loading &&
          <CircularProgress />
        }
        { house &&
        <Card>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              {/* {house.overlord} */}
          </Typography>
            <Typography variant="headline" component="h2">
              {house!.name}
          </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {house!.region}
          </Typography>
            <Typography component="p">
              {house!.founded}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
}
      </Paper>
    );
  }



}

export default withStyles(styles)(HouseCard);