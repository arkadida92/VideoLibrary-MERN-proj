import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";




import MovieCard from '../MovieCard'

/**
* @author
* @function AllMoviesGrid
**/

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),

        height: '82vh',
        overflow: 'hidden',
        overflowY: 'scroll'
    },

}));

const AllMoviesGrid = (props) => {

    const classes = useStyles();

    let moviesCards =
        <Grid container spacing={4}>

            {Array.isArray(props.movies) ? props.movies
                .filter(movie => movie.Name.toLowerCase().includes(props.searchTxt.toLowerCase()))
                .map((movie, index) =>
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <MovieCard
                            img={movie.Image}
                            name={movie.Name}
                            genres={movie.Genres.join(', ')}
                            date={movie.Premiered.split('-')[0]}
                            subsWatched={props.subsWatched.find(sub => sub._id === movie._id)}
                            onDeleteClicked={() => props.onDeleteClicked(movie._id)}
                            handleModalOpen={() => props.handleModalOpen(movie)}
                            perms={props.perms}
                        />
                    </Grid>
                ) : null}
        </Grid>

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            {moviesCards}
        </Container>
    )

}

export default AllMoviesGrid