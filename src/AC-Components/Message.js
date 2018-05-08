import React from 'react';

class Message extends React.Component {
    render() {
        const {message} = this.props;
        return (
            <p>
                <span id="message">{message}</span>
            </p>
        )
    }
}

export default Message;