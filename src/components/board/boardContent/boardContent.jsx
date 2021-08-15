
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styles from './boardContent.module.css';

class BoardContent extends Component {
    handleEditModeBoard = (event) => {
        event.preventDefault();
        this.props.onEditModeBoard(this.props.board);
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
                </td>
            </tr>
        );
    }
}

export default BoardContent;