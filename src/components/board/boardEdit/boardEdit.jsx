import React, { Component } from 'react';
//import styles from './boardEdit.module.css';
import { Button, Container, Form, Row, Modal, Overlay, Tooltip } from 'react-bootstrap';
import { createRef } from 'react';

class BoardEdit extends Component {
    state = {
        show1: false,
        show2: false,
        modalShow : false,
    }
    _overlayRef = createRef();
    modalRef = createRef();
    subjecRef = createRef();
    contentRef = createRef();

    handleChange = () => {
        if (this.state.show1 || this.state.show2) {
            this.setState({show1 : false, show2 : false})
        }
    }

    handleClose = () => {
        this.setState({ show: false})
    }

    handleOpen = () => {
        this.setState({ show: true})
    }

    handleAddBoard = (subject, content) => {
        this.props.onAddBoard(subject, content);
    }

    handleEditBoard = (board, subject, content) => {
        this.props.onEditBoard(board, subject, content);
    }

    

    handleSubmit = (event) => {
        event.preventDefault();
        let subject = this.subjecRef.current.value;
        let content = this.contentRef.current.value;
        console.log(this.props.isBoardState);
        console.log(this.modalRef);
        if (subject.replace(/(\s*)/g, "") === '') {
            console.log('ddddd');
            this.setState({ show1: true });
        }

        if (content.replace(/(\s*)/g, "") === '') {
            console.log('ddddd');
            this.setState({ show2: true });
        }


        console.log('ddddfd2332434');
        // if (this.props.isBoardState === 'W') {
        //     this.handleAddBoard(subject, content);
        // } else {
        //     this.handleEditBoard(this.props.editBoard, subject, content);
        // }

    }
    render() {
        const isBoardState = this.props.isBoardState;
        let buttonName = '작성';
        const editBoard = this.props.editBoard;
        let subject = '';
        let content = '';
        if (isBoardState === 'U') {
            buttonName = '수정';
            subject = editBoard.subject;
            content = editBoard.content;
        }
        return (
            <>
            <Container>
                <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="boardBasicSubject">
                            <Form.Label>제목</Form.Label>
                                <Form.Control ref={this.subjecRef} type="text" placeholder="제목" defaultValue={subject} onChange={this.handleChange} />
                                <Overlay ref={ this._overlayRef} target={this.subjecRef.current} show={ this.state.show1} placement="left-start">
                                    <Tooltip id="subjectToolTip">
                                        제목을 입력해주세요.
                                    </Tooltip>
                                </Overlay>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="boardBasicContent">
                            <Form.Label>내용</Form.Label>
                                <Form.Control ref={this.contentRef} as="textarea" rows={15} defaultValue={content} onChange={this.handleChange}/>
                                <Overlay ref={ this._overlayRef} target={this.contentRef.current} show={ this.state.show2} placement="left-start">
                                    <Tooltip id="contentToolTip">
                                        내용을 입력해주세요.
                                    </Tooltip>
                                </Overlay>
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            {buttonName}
                        </Button>
                    </Form>
                </Row>
                </Container>
                
                {/* <Modal ref={this.modalRef} show={this.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
                </>
        );
    }
}

export default BoardEdit;