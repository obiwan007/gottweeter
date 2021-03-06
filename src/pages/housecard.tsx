import { withStyles, WithTheme } from '@material-ui/core/styles';

import * as React from 'react';

import { Button, Card, CardActions, CardContent, CircularProgress, Icon, Paper, Typography } from '@material-ui/core';

import { House } from '../models/house';

import IfftApi from '../services/ifftservice';

const styles = (theme: any) => ({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    card: {
        minWidth: 275,
    },
    icon: {
        marginLeft: theme.spacing.unit,
    },
    pos: {
        marginBottom: 12,
    },
    progress: {
        paddingLeft: 10,
    },
    root: {
        flexGrow: 1,
    },
    title: {
        fontSize: 14,
        marginBottom: 16,
    },

});

export interface IProps {
    house?: House;
}
export type IPropTypes = IProps & Partial<WithTheme> &
{ classes: Record<"root", string>; } &
{ classes: Record<"card", string>; } &
{ classes: Record<"pos", string>; } &
{ classes: Record<"icon", string>; } &
{ classes: Record<"title", string>; } &
{ classes: Record<"progress", string>; } &
{ classes: Record<"bullet", string>; };


export interface IState {
    loading: boolean;
}
/**
 * Component to show a give House as a Material Card
 * Button to push a request to ifft.
 */
export class HouseCard extends React.Component<IPropTypes, IState> {
    /**
     *
     */
    constructor(props: IPropTypes, state: IState) {
        super(props, state);
        this.state = { loading: false };
    }

    public render() {
        const { classes, house } = this.props;
        const { loading } = this.state;
        return (
            <Paper className={classes.root}>
                {house &&
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
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => this.handleTweet()}
                                disabled={loading}
                                size="small">
                                Tweet it
                                <Icon className={classes.icon}>send</Icon>
                            </Button>
                            {loading &&
                                <CircularProgress className={classes.progress} />
                            }
                        </CardActions>
                    </Card>
                }
            </Paper>
        );
    }

    private handleTweet = () => {
        this.setState({ loading: true });
        IfftApi.sendHouseTweet(this.props.house!).then(() => {
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000);   // delay a bit to see the spinning and assure the user that he suscessfully clicked the tweet button

        });
    }
}

export default withStyles(styles)(HouseCard);