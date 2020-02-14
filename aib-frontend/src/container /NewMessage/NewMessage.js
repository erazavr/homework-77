import React, {Component, Fragment} from 'react';
import MessageForm from "../../components/MessageForm/MessageForm";
import {connect} from "react-redux";
import {postMessage} from "../../store/action";

class NewMessage extends Component {
    createMessage = async (messageData) => {
        await this.props.postMessage(messageData)
    };

    render() {
        return (
            <Fragment>

                <MessageForm onSubmit={this.createMessage}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    postMessage: message => dispatch(postMessage(message))
});
export default connect(null, mapDispatchToProps)(NewMessage);