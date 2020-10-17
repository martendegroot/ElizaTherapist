import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    text: {
        fontSize: 10,
        opacity: 0.4,
      }
  });

export default function (props) {
    const classes = useStyles();

    return (
        <Box
            position="fixed"
            bottom={0}
            margin={1}
        >
            <Typography className={classes.text} gutterBottom>
                &copy; 1999-2020 <a rel="nofollow" href="https://github.com/martendegroot">github:Marten de Groot</a> &amp; <a rel="nofollow" href="http://manifestation.com/neurotoys/eliza.php3/">manifestation.com</a> &amp; PMB 417 .. 10800 Alpharetta Hwy, Suite 208 .. Roswell, GA 30076 Michal J Wallace <a rel="nofollow" href="http://withoutane.com/">withoutane.com</a>
            </Typography>
        </Box>
    );
}