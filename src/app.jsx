import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from 'react-bootstrap';
import Nav from './components/nav/nav';
import { Component } from 'react';
import Board from './components/board/board';
import BoardEdit from './components/board/boardEdit/boardEdit';
import format from 'date-fns/format'


class App extends Component {

  state = {
    boardData: [
      { key: 1, subject: '제목1', content: '내용1.....,', datetime: '2021-08-12 00:00:02' },
      { key: 2, subject: '제목2', content: '내용2.....,', datetime: '2021-08-12 00:00:02' },
      { key: 3, subject: '제목3', content: '내용3.....,', datetime: '2021-08-12 00:00:02' },
      { key: 4, subject: '제목4', content: '내용4.....,', datetime: '2021-08-12 00:00:02' },
      { key: 5, subject: '제목5', content: '내용5.....,', datetime: '2021-08-12 00:00:02' },
      { key: 6, subject: '제목6', content: '내용6.....,', datetime: '2021-08-12 00:00:02' },
      { key: 7, subject: '제목7', content: '내용7.....,', datetime: '2021-08-12 00:00:02' },
      { key: 8, subject: '제목8', content: '내용8.....,', datetime: '2021-08-12 00:00:02' },
      { key: 9, subject: '제목9', content: '내용9.....,', datetime: '2021-08-12 00:00:02' },
      { key: 10, subject: '제목10', content: '내용10.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 11, subject: '제목11', content: '내용11.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 12, subject: '제목12', content: '내용12.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 13, subject: '제목13', content: '내용13.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 14, subject: '제목14', content: '내용14.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 15, subject: '제목15', content: '내용15.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 16, subject: '제목16', content: '내용16.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 17, subject: '제목17', content: '내용17.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 18, subject: '제목18', content: '내용18.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 19, subject: '제목19', content: '내용19.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 20, subject: '제목20', content: '내용20.....,', datetime: '2021-08-12 00:00:02' },
      // { key: 21, subject: '제목21', content: '내용21.....,', datetime: '2021-08-12 00:00:02' },
    ],
    search: { field: "", text: "" }, // 검색 상태 
    isBoardState: 'R', // R : 게시판 리스트, W : 게시판 작성 , V : 게시판 내용 뷰
  }

  handleSearch = (field, text) => {
    const search = { ...this.state.search };
    const field_ = field;
    const text_ = text;
    search.field = field_;
    search.text = text_;
    //console.log('handleSearch => ' + text_);
    this.setState({ search: search })
  }

  handleWrite = () => {
    const isBoardState = 'W';
    this.setState({ isBoardState: isBoardState })
  }

  handleAddBoard = (subject, content) => {
    const boardData = [...this.state.boardData];
    const subject_ = subject;
    const content_ = content;
    const dateObj = new Date();
    const datetime_ = format(dateObj, "yyyy-MM-dd hh:mm:ss") //date-fns format
    console.log(dateObj);
    const key_ = Date.now();
    boardData.push({ key: key_, subject: subject_, content: content_, datetime: datetime_ })
    this.setState({ boardData: boardData, isBoardState: 'R' })
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Nav />
          </Row>
        </Container>
        <Container>
          {(this.state.isBoardState === 'R') && <Row><Board boardData={this.state.boardData} search={this.state.search} onSearch={this.handleSearch} onWrite={this.handleWrite} /></Row>}
          {(this.state.isBoardState === 'W') && <Row><BoardEdit onAddBoard={this.handleAddBoard} /></Row>}
        </Container>
      </>
    );
  }

}

export default App;
