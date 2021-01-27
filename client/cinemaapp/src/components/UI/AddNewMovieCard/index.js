import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';
// import { PinDropSharp } from "@material-ui/icons";


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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function AddNewMovieCard(props) {
    const classes = useStyles();

    const [id, setId] = React.useState('');

    const handleChange = (event) => {
        setId(event.target.value);
        //console.log(event.target.value)
    };

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    Add a new movie
        </Typography>
                <CardActions>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Movie Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={id}
                            onChange={handleChange}
                        >
                            {props.movies.map(mov => <MenuItem value={mov._id}>{mov.Name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </CardActions>
                <CardActions>
                    <Button size="small" onClick={() => props.addMovieFunc(props.memberId, id)}>
                        Subscribe
          </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}
