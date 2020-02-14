import React, {Component} from 'react';
import {Card, CardBody, CardImg, Container} from "reactstrap";
import {connect} from "react-redux";
import NewMessage from "../NewMessage/NewMessage";
import {getMessages} from "../../store/action";
import {apiURL} from "../../constans";

class Message extends Component {
    componentDidMount() {
        this.props.getMessages()
    }

    render() {
        const styles = {
            width: '100px',
            height: '100px'
        };
        return (
            <Container>
                {this.props.messages.map(message => (
                    <Card key={message.id} className='mb-3'>
                        <CardBody className='d-flex align-items-center'>
                            <div className='mr-2'>
                                {message.image ? <CardImg top width="100%" src={`${apiURL}/uploads/${message.image}`} alt="Card image cap" style={styles}/>: null}
                            </div>
                            <div>
                                <p><b>Author:</b> {message.author}</p>
                                <p><b>Message:</b>{message.message}</p>
                            </div>
                        </CardBody>
                    </Card>
                ))}
                <NewMessage/>
            </Container>
        );
    }
}
const mapStateToProps = state => ({
    messages: state.messages
});
const mapDispatchToProps = dispatch => ({
    getMessages: () => dispatch(getMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);