import React from 'react';
import './App.css';
import { sendAMessageToTheRoom, printUsersMessage } from './../services/socket';
class App extends React.Component {
  state = {
    usersMessageToPrint: '',
    userMessageToSend: '',
  };

  componentDidMount() {
    printUsersMessage(usersMessageToPrint => {
      this.setState({
        usersMessageToPrint,
      });
    });
  }

  onChange = ({ target: { value } }) => {
    this.setState({
      userMessageToSend: value,
    });
  };

  sendMessage = () => {
    sendAMessageToTheRoom(this.state.userMessageToSend);
  };

  render() {
    console.log(this.state.userMessageToSend);
    console.log(this.state.userMessageToPrint);
    return (
      <div className="App">
        <h1
          style={{
            backgroundColor: '#2F4F4F',
            color: '#D3D3D3',
          }}
        >
          CHAT ROOM
        </h1>
        <div
          style={{
            border: '1px solid #2F4F4F',
            backgroundColor: '#D3D3D3',
            borderRadius: '5px',
            width: '60vw',
            height: '60vh',
            margin: '0 auto',
          }}
        >
          {this.state.usersMessageToPrint}
        </div>
        <div>
          <div>Enter your message</div>
          <input
            onChange={this.onChange}
            style={{ borderRadius: '5px' }}
          ></input>
          <button
            onClick={this.sendMessage}
            style={{
              borderRadius: '5px',
              backgroundColor: '#2F4F4F',
              color: '#D3D3D3',
              border: 'none',
            }}
          >
            SEND
          </button>
        </div>
      </div>
    );
  }
}

export default App;
