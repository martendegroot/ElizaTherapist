import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendButton from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      isBlocked: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const registeredInputValue = this.state.inputValue
    this.setState({ inputValue: "" });
    this.setState({ isBlocked: true });

    this.props.onMessage(registeredInputValue, () => {
      this.setState({ isBlocked: false });
    });
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
        <Box width="100%" display="flex" alignItems="center" justifyContent="flex-end">
          <Box flexGrow={1} m={1}>
            <TextField
              fullWidth
              margin="normal" mt={1}
              label="Write here"
              variant="outlined"
              value={this.state.inputValue}
              onChange={this.handleChange}
              disabled={this.state.isBlocked}
            />
          </Box>
          <Box m={2} mt={3}>
            {this.state.isBlocked
              ? <CircularProgress />
              : <IconButton onClick={this.handleSubmit}><SendButton /></IconButton>
            }
          </Box>
        </Box>
      </form>
    );
  }
}
