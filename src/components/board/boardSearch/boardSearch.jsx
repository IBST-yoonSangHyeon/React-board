import React, { Component } from 'react';
import styles from './boardSearch.module.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { createRef } from 'react';

class BoardSearch extends Component {

    searchFieldRef = createRef();
    searchTextRef = createRef();



    handleOnSubmit = (event) => {
        event.preventDefault();
        const field = this.searchFieldRef.current.value;
        const text = this.searchTextRef.current.value;
        console.log("field : " + field);
        console.log("text : " + text);
        this.props.onSearch(field, text);
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Row className="align-items-center">
                    <Col xs="auto" className="my-1">
                        <Form.Select ref={this.searchFieldRef} className="me-sm-2" id="searchField">
                            <option value="subject">제목</option>
                            <option value="content">내용</option>
                            <option value="datetime">날짜</option>
                        </Form.Select>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Control ref={this.searchTextRef} id="searchText" placeholder="Jane Doe" />
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