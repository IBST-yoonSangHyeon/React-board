
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styles from './boardContent.module.css';

class BoardContent extends Component {
    handleEditModeBoard = (event) => {
        event.preventDefault();
        this.props.onEditModeBoard(this.props.board);
    }
    handleDelBoard = (event) => {
        event.preventDefault();
        if (window.confirm('삭제 하시겠습니까?')) {
            this.props.onDelBoard(this.props.board);
        }
    }
    render() {
        const index = this.props.index;
        const { subject, content, datetime } = this.props.board;
        return (
            <tr>
                <td className={styles.center}>{index}</td>
                <td>{subject}</td>
                <td>{content}</td>
                <td>{datetime}</td>
                <td>
                    <Button variant="primary" type="button" onClick={this.handleEditModeBoard}>수정</Button>
                    <Button variant="danger" type="button" onClick={this.handleDelBoard}>삭제</Button>
                </td>
            </tr>
        );
    }
}

export default BoardContent;