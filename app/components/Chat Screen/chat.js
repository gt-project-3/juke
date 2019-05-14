import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../../Backend/backend';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: 1 /*This is the User's ID that we will need to get from the login flow*/,
      user: {
        _id: '5ccdf852720df265a0bbcb39',
        name: this.props.data,
        email: this.props.data,
      },
      message: '',
      messages: [],
      eventID: '5cd22dd4ef4f31001764a4a0',
    };
  }
  // state = {
  //     user: '',
  //     name: '',
  //     message: '',
  //     messages: []
  // }

  componentWillMount() {}

  componentDidMount() {
    console.log('State before messages', this.state);
    Backend.getAllMessages(this.state.eventID)
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          (currentState) => {
            console.log('This line 35: ', data);
            return {
              messages: GiftedChat.append(currentState, data.reverse()),
            };
          },
          () => {
            Backend.getAllMessages(this.state.eventID);
            console.log('State after messages: ', this.state);
          },
        );
      });
  }

  handleSend(message) {
    //send message to backend
    console.log('here');
    Backend.addNewMessage(message, this.state.eventID)
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        this.setState(
          (currentState) => {
            console.log('This line 66: ', data);
            return {
              messages: GiftedChat.append(currentState, data.reverse()),
            };
          },
          () => {
            console.log('State after messages sent: ', this.state);
          },
        );
      });
    console.log('Message line 75: ', message);
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          //send message to backend
          Backend.addNewMessage(message, this.state.eventID)
            .then((response) => response.json())
            .then((data) => {
              this.setState(
                (currentState) => {
                  console.log('This line 66: ', data);
                  return {
                    messages: GiftedChat.append(currentState, data.reverse()),
                  };
                },
                () => {
                  console.log('State after messages sent: ', this.state);
                },
              );
            });
          console.log(message);
        }}
        user={{
          _id: this.state.user._id,
          name: this.state.user.name,
        }}
      />
    );
  }
}

// Chat.defaultProps = {
//     name: '',
// };

// Chat.PropTypes = {
//     name: React.PropTypes.string
// }

export default Chat;
