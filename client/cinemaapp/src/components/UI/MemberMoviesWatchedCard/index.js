import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


import AddNewMovieCard from '../AddNewMovieCard'

const useStyles = makeStyles((theme) => ({

    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e9c46a"
    },
    cardContent: {
        flexGrow: 1
    },
    ul: {
        display: "block",
        float: "left",
        height: "70px",
        listStyle: "none",
        marginRight: "20px",
        overflow: "scroll",
        overflowX: "hidden"
    }
}));

export default function MemberMoviesWatchedCard(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    //const movies = [1, 2];

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    Movies Watched
        </Typography>
                <CardActions>
                    <Button size="small" onClick={() => setOpen(!open)}>Subscribe to new movie</Button>
                </CardActions>
                <CardActions>
                    {open ? <AddNewMovieCard movies={props.movies.filter(mov => !props.sub.Movies.some(mov2 => mov2.movieId === mov._id))} addMovieFunc={props.addMovieFunc} memberId={props.sub._id} /> : null}
                </CardActions>
                <Typography>
                    <ul className={classes.ul}>
                        {props.sub !== undefined ? props.sub.Movies.map((movie) => (
                            <li>{props.movies.length > 0 ? props.movies.find(mov => mov._id === movie.movieId).Name : movie.movieId}</li>
                        )) : null}
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    );
}
