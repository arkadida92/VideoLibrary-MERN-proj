import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import MemberMoviesWatchedCard from "../MemberMoviesWatchedCard"

const useStyles = makeStyles((theme) => ({
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2a9d8f"
    },
    cardContent: {
        flexGrow: 1
    }
}));

export default function MemberCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.member.Name}
                </Typography>
                <Typography>
                    Email: {props.member.Email}<br />
                    City:  {props.member.City}<br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={props.onEditClicked} disabled={props.perms.length === 0 || props.perms[3] === false}>Edit</Button>
                <Button size="small" onClick={props.deleteMemberFunc} disabled={props.perms.length === 0 || props.perms[2] === false}>Delete</Button>
            </CardActions>
            <CardContent className={classes.cardContent}>
                <MemberMoviesWatchedCard sub={props.sub} movies={props.movies} addMovieFunc={props.addMovieFunc} />

            </CardContent>
        </Card>
    );
}
