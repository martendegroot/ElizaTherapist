import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './App.css';

import ChatForm from './ChatForm.js';
import MessageList from './MessageList.js';
import DoctorEliza from './DoctorEliza/DoctorEliza';

const welcomeMessage = {
  from: "Eliza",
  message: "Welcome. How are you feeling today?",
}

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [welcomeMessage],
    };

    this.DoctorEliza = new DoctorEliza();
    this.createMessages = this.createMessages.bind(this);
  }

  createMessages(input, callback) {
    this.setState({
      messages: [{
        from: "You",
        message: input
      }, ...this.state.messages]
    });

    const response = this.DoctorEliza.read(input);

    setTimeout(() => {
      this.setState({
        messages: [{
          from: "Eliza",
          message: response,
        }, ...this.state.messages]
      });
      return callback();
    }, (response.length / (Math.random() * 15 + 30) * 1000));

  }

  render() {
    return (
      <Container maxWidth="sm">

        <Box display="flex" flexDirection="column-reverse" style={{ height: '90vh' }}>
          <ChatForm onMessage={this.createMessages} />
          <MessageList messages={this.state.messages} />
        </Box>

      </Container>
    );
  }
}
