import React, { Component } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';

class BoardEdit extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="boardBasicSubject">
                            <Form.Label>제목</Form.Label>
                            <Form.Control type="text" placeholder="제목" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="boardBasicContent">
                            <Form.Label>내용</Form.Label>
                            <Form.Control as="textarea" rows={15} />
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