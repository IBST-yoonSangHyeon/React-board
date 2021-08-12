import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import BoardBody from './boardBody/boardBody';
import BoardPage from './boardPage/boardPage';
import BoardSearch from './boardSearch/boardSearch';

class Board extends Component {

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <BoardBody />
                    </Row>
                    <Row>
                        <BoardPage />
                    </Row>
                    <Row>
                        <BoardSearch />
                    </Row>
                </Container>
            </>
        );
    }
}

export default Board;