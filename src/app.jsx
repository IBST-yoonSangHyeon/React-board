import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Row } from 'react-bootstrap';
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
    isBoardState: 'R', // R : 게시판 리스트, W : 게시판 작성 , V : 게시판 내용 뷰, U : 게시판 수정
    editBoard: null,
    activePage: 1,
    itemsCountPerPage: 10,
    totalItemsCount: 0,
    pageRangeDisplayed: 5,
  }

  componentDidMount() {
    const boardDataLength = this.state.boardData.length;
    console.log(boardDataLength)
    this.setState({ totalItemsCount: boardDataLength });
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

  handleEditModeBoard = (board) => {
    console.log('호출????');
    const isBoardState = 'U';
    console.log(board);
    this.setState({ editBoard: board, isBoardState: isBoardState })
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
    const boardDataLength = boardData.length;
    this.setState({ boardData: boardData, isBoardState: 'R' , totalItemsCount: boardDataLength})
  }

  handleEditBoard = (board, subject, content) => {
    const boardData = [...this.state.boardData];
    console.log(board);
    const board_ = board;
    const subject_ = subject;
    const content_ = content;
    boardData.map((board) => {
      if (board.key === board_.key) {
        board['subject'] = subject_;
        board['content'] = content_;
        return board;
      }
      return board;
    });
    this.setState({ boardData: boardData, isBoardState: 'R' });
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  handleGoToMain = () => {
    this.setState({ isBoardState: 'R' });
  }

  handleDelBoard = (baord) => {
    const board_ = baord;
    const boardData = [...this.state.boardData];
    const boardField = boardData.filter((board) => {
      if (board_.key !== board.key){
        return board;
      }
    });
    console.log(board_);
    console.log(boardData);
    const boardDataLength = boardData.length;
    this.setState({ boardData: boardField, isBoardState: 'R' , totalItemsCount: boardDataLength});
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Nav onGoToMain={ this.handleGoToMain}/>
          </Row>
        </Container> 
        <Container>
          {(this.state.isBoardState === 'R') &&
            <Row>
              <Board
                boardData={this.state.boardData}
                search={this.state.search}
                onSearch={this.handleSearch}
                onWrite={this.handleWrite}
                onEditModeBoard={this.handleEditModeBoard}
                onPageChange={this.handlePageChange}
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemsCountPerPage}
                totalItemsCount={this.state.totalItemsCount}
                pageRangeDisplayed = {this.state.pageRangeDisplayed}
                onDelBoard={ this.handleDelBoard}
                />
            </Row>}
          {(this.state.isBoardState === 'W' || this.state.isBoardState === 'U') &&
            <Row>
              <BoardEdit
                isBoardState={this.state.isBoardState}
                editBoard={this.state.editBoard}
                onAddBoard={this.handleAddBoard}
                onEditBoard={this.handleEditBoard}
              />
            </Row>}
        </Container>
      </>
    );
  }

}

export default App;
