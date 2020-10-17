import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
    opacity: 0.7,
  },
  left : {
    alignSelf: "start",
  },
});

export default function(props) {
  const classes = useStyles();

  return (
    <Box className={props.from==="Eliza" ? classes.left : ""} m={1}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.from}
        </Typography>
          <Typography variant="body2" component="p">
            {props.message}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
