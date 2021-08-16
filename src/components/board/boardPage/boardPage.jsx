import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './boardPage.css';



class BoardPage extends Component {

    state = {
        activePage: 5
    };

    handlePageChange = (pageNumber) => {
        this.props.onPageChange(pageNumber);
    }

    render() {
        return (
            <>
                <Pagination
                    activePage={this.props.activePage}
                    itemsCountPerPage={this.props.itemsCountPerPage}
                    totalItemsCount={this.props.totalItemsCount}
                    pageRangeDisplayed={this.props.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                />
            </>
        );
    }
}

export default BoardPage;