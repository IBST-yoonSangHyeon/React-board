import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import BoardBody from './boardBody/boardBody';
import BoardPage from './boardPage/boardPage';
import BoardSearch from './boardSearch/boardSearch';

class Board extends Component {

    handleSearch = (field, text) => {
        this.props.onSearch(field, text);
    }

    handleWrite = () => {
        this.props.onWrite();
    }
    handleEditModeBoard = (baord) => {
        this.props.onEditModeBoard(baord);
    }

    handlePageChange = (pageNumber) => {
        this.props.onPageChange(pageNumber);
    }

    handleDelBoard = (baord) => {
        this.props.onDelBoard(baord);
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <BoardBody
                            boardList={this.props.boardData}
                            search={this.props.search}
                            activePage={ this.props.activePage}
                            onEditModeBoard={this.handleEditModeBoard}
                            onDelBoard={ this.handleDelBoard}
                        />
                    </Row>
                    <Row>
                        <BoardPage
                            onPageChange={this.handlePageChange}
                            activePage={this.props.activePage}
                            itemsCountPerPage={this.props.itemsCountPerPage}
                            totalItemsCount={this.props.totalItemsCount}
                            pageRangeDisplayed = {this.props.pageRangeDisplayed}
                        />
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