import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from 'react-bootstrap';
import Nav from './components/nav/nav';
import { Component } from 'react';
import Board from './components/board/board';


class App extends Component {



  render() {
    return (
      <>
        <Container>
          <Row>
            <Nav />
          </Row>
        </Container>
        <Container>
          <Row>
            <Board />
          </Row>
        </Container>
      </>
    );
  }

}

export default App;
