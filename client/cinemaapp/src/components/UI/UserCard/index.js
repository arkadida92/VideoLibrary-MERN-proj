import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


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

export default function UserCard(props) {
    const classes = useStyles();

    // const permissionsStr = [
    //     'View Subscriptions',
    //     'Create Subscriptions',
    //     'Delete Subscriptions',
    //     'Update Subscription',
    //     'View Movies',
    //     'Create Movies',
    //     'Delete Movies',
    //     'Update Movie']

    const getPerms = (perms) => {
        const permissionsStr = [
            'View Subscriptions',
            'Create Subscriptions',
            'Delete Subscriptions',
            'Update Subscription',
            'View Movies',
            'Create Movies',
            'Delete Movies',
            'Update Movie']

        let selectedPerms = permissionsStr.filter((perm, index) => perms[index])
        return selectedPerms.toString()
    }

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.user.FirstName} {props.user.LastName}
                </Typography>
                <Typography>
                    User Name: {props.user.UserName}
                    <br />
          Session time out (Minutes): {props.user.SessionTimeOut}
                    <br />
          Created date: {props.user.CreatedDate.split('T')[0]}
                    <br />
                    Permissions: {props.permissions.length > 0 ?
                        getPerms(props.permissions) :
                        'empty'}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => props.onEditClicked(props.user, props.permissions)}>
                    Edit
        </Button>
                <Button size="small" onClick={props.onDeleteClicked}>
                    Delete
        </Button>
            </CardActions>
        </Card>
    );
}
