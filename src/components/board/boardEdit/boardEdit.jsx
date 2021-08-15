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

    handleSubmit = (event) => {
        event.preventDefault();
        let subject = this.subjecRef.current.value;
        let content = this.contentRef.current.value;
        this.handleAddBoard(subject, content);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="boardBasicSubject">
                            <Form.Label>제목</Form.Label>
                            <Form.Control ref={this.subjecRef} type="text" placeholder="제목" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="boardBasicContent">
                            <Form.Label>내용</Form.Label>
                            <Form.Control ref={this.contentRef} as="textarea" rows={15} required />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            저장
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default BoardEdit;