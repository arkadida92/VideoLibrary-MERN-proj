import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import MemberCard from "../MemberCard";

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
                        {props.members.map((member, index) => (
                            <Grid item key={index} xs={12} sm={12} md={12}>
                                <MemberCard
                                    member={member}
                                    sub={props.subs.find(sub => sub._id === member._id)}
                                    movies={props.movies}
                                    deleteMemberFunc={() => props.deleteMemberFunc(member._id)}
                                    onEditClicked={() => props.onEditClicked(member)}
                                    addMovieFunc={props.addMovieFunc}
                                    perms={props.perms}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
