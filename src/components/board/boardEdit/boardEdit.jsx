import React, { Component } from 'react';
import styles from './boardEdit.module.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { createRef } from 'react';

class BoardEdit extends Component {
    subjecRef = createRef();
    contentRef = createRef();

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
        if (this.props.isBoardState === 'W') {
            this.handleAddBoard(subject, content);
        } else {
            this.handleEditBoard(this.props.editBoard, subject, content);
        }

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
            <Container>
                <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="boardBasicSubject">
                            <Form.Label>제목</Form.Label>
                            <Form.Control ref={this.subjecRef} type="text" placeholder="제목" required defaultValue={subject} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="boardBasicContent">
                            <Form.Label>내용</Form.Label>
                            <Form.Control ref={this.contentRef} as="textarea" rows={15} required defaultValue={content} />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            {buttonName}
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default BoardEdit;