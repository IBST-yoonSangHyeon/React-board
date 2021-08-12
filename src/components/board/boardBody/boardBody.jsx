import React, { Component } from 'react';
import styles from './boardBody.module.css';
import { Table } from 'react-bootstrap';
import BoardContent from '../boardContent/boardContent';

class BoardBody extends Component {
    render() {
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
                        this.props.boardList.map((board, index) => <BoardContent key={board.key} index={index + 1} board={board} />)
                    }
                </tbody>
            </Table>
        );
    }
}

export default BoardBody;