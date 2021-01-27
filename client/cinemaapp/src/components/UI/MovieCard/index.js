import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


import SubsWatchedCard from '../SubsWatchedCard'







/**
* @author
* @function MovieCard
**/

const useStyles = makeStyles((theme) => ({

    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#2a9d8f'
    },
    cardMedia: {
        paddingTop: "100%" // 16:9
    },
    cardContent: {
        flexGrow: 1
    },

}));

const MovieCard = (props) => {
    const classes = useStyles();


    return (

        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={props.img}
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}, {props.date}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.genres}
                </Typography>

                <SubsWatchedCard subsWatched={props.subsWatched} />
            </CardContent>
            <CardActions>
                <Button size="small" color="inherit" onClick={props.handleModalOpen} disabled={props.perms.length === 0 || props.perms[7] === false}>
                    Edit
                 </Button>
                <Button size="small" color="inherit" onClick={props.onDeleteClicked} disabled={props.perms.length === 0 || props.perms[6] === false}>
                    Delete
                 </Button>
            </CardActions>
        </Card>
    )

}

export default MovieCard