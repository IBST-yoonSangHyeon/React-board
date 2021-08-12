import React, { Component } from 'react';
import styles from './boardBody.module.css';
import { Table } from 'react-bootstrap';
import BoardContent from '../boardContent/boardContent';

class BoardBody extends Component {
    render() {
        const boardList = this.props.boardList;
        const { field, text } = this.props.search;
        const filterBoardList = boardList.filter((board) => {
            if (field !== '') {
                let boardText = board[field];
                console.log(boardText);
                console.log(text);
                if (boardText.includes(text)) { // 포함하고 있는 문자가 있으면 true를 없으면 false를 반환함
                    return board;
                }
            } else {
                return board;
            }
        })
        return (
            <Table striped bordered hover>
                <colgroup>
                    <col width="5%" />
                    <col width="30%" />
                    <col width="50%" />
                    <col width="10%" />
                    <col width="*" />
                </colgroup>
                <thead className={styles.thead_dark}>
                    <tr>
                        <th>#</th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>날짜</th>
                        <th>이벤트</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterBoardList.map((board, index) => <BoardContent key={board.key} index={index + 1} board={board} />)
                    }
                </tbody>
            </Table>
        );
    }
}

export default BoardBody;