import { withStyles, WithTheme } from '@material-ui/core/styles';

import * as React from 'react';

import { CircularProgress, Paper, TablePagination } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import GotApi from '../services/gotservice';

import { House } from '../models/house';

const styles = {
  root: {
    flexGrow: 1,
  },
};

// tslint:disable-next-line:no-empty-interface
export interface IProps {
  // tslint:disable-next-line:no-unused-expression
  onSelectHouse?: (house: House | undefined) => void
}
export type IPropTypes = IProps & Partial<WithTheme> & { classes: Record<"root", string>; };


export interface IState {
  selected: string;
  houses: House[];
  page: number;
  rowsPerPage: number;
  loading: boolean;
}

export class HouseList extends React.Component<IPropTypes, IState> {
  /**
   *
   */
  constructor(props: IPropTypes, state: IState) {
    super(props, state);
    this.state = { houses: [], selected: '', page: 0, rowsPerPage: 10, loading: false };
  }
  public componentDidMount() {
    this.loadPage(this.state.page);
  }

  public loadPage = (page: number) => {
    this.setState({ loading: true });
    GotApi.getHouses(page).then(houses => {
      this.setState({ houses, loading: false });
    });
  }

  public isSelected = (id: string) => this.state.selected === id;

  public handleClick = (event: any, id: string) => {
    this.setState({ selected: id });
    if (this.props.onSelectHouse) {
      this.props.onSelectHouse(this.state.houses.find(h => h.url === id));
    }
  }

  public handleChangePage = (event: any, page: number) => {
    this.setState({ page });
    this.loadPage(page);
  };

  public handleChangeRowsPerPage = (event: any) => {
    const rowsPerPage = event.target.value;

    const oldPosition = this.state.page * this.state.rowsPerPage;
    // tslint:disable-next-line:no-console
    console.log('OldPos', oldPosition);
    const page = Math.round(oldPosition / rowsPerPage);

    this.setState({ rowsPerPage, page });
    this.loadPage(page);
  };


  public render() {
    const { classes } = this.props;
    const { selected, houses, loading, rowsPerPage, page } = this.state;
    // tslint:disable-next-line:no-console
    console.log('Selected:', selected);

    return (
      <Paper className={classes.root}>
        {loading &&
          <CircularProgress />
        }

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {houses!.map((n) => {
              const isSelected = this.isSelected(n.url);
              return (
                <TableRow
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={event => this.handleClick(event, n.url)}
                  key={n.url}
                  selected={isSelected}
                >
                  <TableCell component="th" scope="row">
                    {n.name}
                  </TableCell>
                </TableRow>
              );
            })}
            <TablePagination
              component="div"
              count={5000}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />

          </TableBody>
        </Table>
      </Paper>
    );
  }



}

export default withStyles(styles)(HouseList);