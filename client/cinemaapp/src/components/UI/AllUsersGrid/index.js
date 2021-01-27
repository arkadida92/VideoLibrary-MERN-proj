import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import UserCard from '../UserCard'

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),

        height: '82vh',
        overflow: 'hidden',
        overflowY: 'scroll'
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    }
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function AllMembersGrid(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {props.users.map((user, index) => (
                            <Grid item key={index} xs={12} sm={12} md={12}>
                                <UserCard
                                    user={user}
                                    onEditClicked={props.onEditClicked}
                                    onDeleteClicked={() => props.onDeleteClicked(user.Id)}
                                    permissions={props.usersPermissions.length > 0 ? props.usersPermissions.filter(usr => usr.Id === user.Id)[0].Permissions : []} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
