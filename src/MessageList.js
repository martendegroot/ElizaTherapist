import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import MessageItem from './MessageItem.js';

const useStyles = makeStyles({
  container: {
    flexWrap : "nowrap",
    display : "flex",
    alignItems : "flex-end",
    flexDirection : "column-reverse",
    overflow : 'auto',
    width : "100%",
  },
  shade: {
    zIndex: 2,
    height: '150px',
    width: '100%',
    position: 'fixed',
    top: 0,
    background: '-webkit-linear-gradient(white, rgba(255,255,255, 0))'
  },
  contentPusher: {
    minHeight: '75px',
    width: '100%',
  },
});

export default function (props) {
  const classes = useStyles();

  const messageItemList = props.messages.map((m, i) =>
    <MessageItem key={i} from={m.from} message={m.message} />
  )

  return (
    <Box display="flex" flexGrow={1} style={{ overflow: 'auto' }} >
      <Box
        spacing = {1}
        width = {1}
        className={classes.container+" noScrollBar"}
      >
        <Box className={classes.shade}></Box>
        {messageItemList}
        <Box className={classes.contentPusher}></Box>

      </Box>
    </Box>
  );
}