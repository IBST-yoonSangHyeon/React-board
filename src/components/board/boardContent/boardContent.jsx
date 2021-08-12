import React, { Component } from 'react';
import styles from './boardContent.module.css';

class BoardContent extends Component {
    render() {
        const index = this.props.index;
        const { subject, content, datetime } = this.props.board;
        return (
            <tr>
                <td className={styles.center}>{index}</td>
                <td>{subject}</td>
                <td>{content}</td>
                <td>{datetime}</td>
                <td></td>
            </tr>
        );
    }
}

export default BoardContent;