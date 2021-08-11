import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from 'react-bootstrap';
import Nav from './components/nav';


function App() {

  return (
    <Container>
      <Row>
        <Nav />
      </Row>
      <Row>
        <Button>Hello World~~!!!</Button>
      </Row>
    </Container>
  );
}

export default App;
