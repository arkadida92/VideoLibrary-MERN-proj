import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


/**
* @author
* @function SubsWatchedCard
**/

const useStyles = makeStyles({
    root: {
        // width: 200,
        // height: 300,
        // backgroundColor: '#e9c46a'
        // height: "50%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#e9c46a'
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
});

const SubsWatchedCard = (props) => {
    const classes = useStyles();

    let membersWatchedList = <ul className={classes.ul}>
        {props.subsWatched !== undefined ?
            props.subsWatched.members.map((member, index) =>
                <li key={index}>
                    {member.mname}, <br />
                    {member.date.split('T')[0]}
                    <hr />
                </li>) : null}
    </ul>

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="subtitle1" component="h2">
                    <Box fontWeight="fontWeightBold">
                        Subscriptions watched
                    </Box>
                </Typography>
                <Typography variant="body2" component="span">
                    <Box textAlign="center">
                        {membersWatchedList}
                    </Box>

                </Typography>
            </CardContent>
        </Card>
    )

}

export default SubsWatchedCard