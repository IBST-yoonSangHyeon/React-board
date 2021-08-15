import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import BoardBody from './boardBody/boardBody';
import BoardPage from './boardPage/boardPage';
import BoardSearch from './boardSearch/boardSearch';

class Board extends Component {
    state = {

    }

    handleSearch = (field, text) => {
        this.props.onSearch(field, text);
    }

    handleWrite = () => {
        this.props.onWrite();
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <BoardBody boardList={this.props.boardData} search={this.props.search} />
                    </Row>
                    <Row>
                        <BoardPage />
                    </Row>
                    <Row>
                        <Container>
                            <Row>
                                <Col >
                                    <BoardSearch onSearch={this.handleSearch} onWrite={this.handleWrite} />
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Board;