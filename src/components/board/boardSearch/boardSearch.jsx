import React, { Component } from 'react';
import styles from './boardSearch.module.css';
import { Button, Col, Form, Row } from 'react-bootstrap';

class BoardSearch extends Component {
    render() {
        return (
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto" className="my-1">
                        <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                            <option value="subject">제목</option>
                            <option value="content">내용</option>
                            <option value="datetime">날짜</option>
                        </Form.Select>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">검색</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default BoardSearch;