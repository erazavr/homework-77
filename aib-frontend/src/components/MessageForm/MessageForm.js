import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter} from "reactstrap";

class MessageForm extends Component {
    state = {
        author: '',
        message: '',
        image: '',
        modal: false
    };
    submitFormHandler = event => {
        event.preventDefault();
        if (!this.state.message) {
            alert("Please, write your message")
        } else {
            this.setState({author: '', message: '', image: ''});
            const formData = new FormData();
            Object.keys(this.state).forEach(key => {
                formData.append(key, this.state[key])
            });
            this.props.onSubmit(formData);
            this.setState({modal: false})
        }
    };
    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    fileChangeHandler = event => {
        this.setState({
            [event.target.name]:event.target.files[0]
        })
    };
    toggle = () => {
        this.setState({modal: !this.state.modal})
    };

    render() {
        const style = {
            position: 'fixed',
            top: '10px',
            left: '10px'
        };
        return (
            <Fragment>
                <Button color="danger" onClick={this.toggle} style={style}>New message</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <Form  className='p-4' >
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0" >
                                <Label for="author" className="mr-sm-2">Author</Label>
                                <Input
                                    type="text"
                                    name="author"
                                    value={this.state.author}
                                    id="author"
                                    placeholder="Author name"
                                    onChange={this.inputChangeHandler}
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0" >
                                <Label for="message" className="mr-sm-2">Message</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    value={this.state.message}
                                    id="message"
                                    placeholder="Enter your message"
                                    className='mb-3'
                                    onChange={this.inputChangeHandler}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="image">Your image</Label>
                                <Input type="file" name="image" id="image" onChange={this.fileChangeHandler}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        <Button color="primary" onClick={this.submitFormHandler}>Submit</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default MessageForm;