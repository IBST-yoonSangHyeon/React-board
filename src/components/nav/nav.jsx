import React, { Component } from 'react';
import styles from './nav.module.css';
import { Container, Row, Col } from 'react-bootstrap';

class Nav extends Component {
    render() {
        return (
            <Container className="p-3 my-3 border ">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <img src="/images/navLeft.png" alt="MyLeftStar" />
                    </Col>
                    <Col xs={6}>
                        <h1 className={styles.subject}>윤상현 게시판</h1>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <img src="/images/navRight.png" alt="MyRightStar" className="" />
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Nav;