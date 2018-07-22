import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf.js'


class MainPage extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              correctBooks={this.props.books
                .filter(book => book.shelf === 'currentlyReading')}
              moveShelf={this.props.moveShelf}
            />
            <BookShelf
              title="Want to Read"
              correctBooks={this.props.books
                .filter(book => book.shelf === 'wantToRead')}
              moveShelf={this.props.moveShelf}
            />
            <BookShelf
              title="Read"
              correctBooks={this.props.books
                .filter(book => book.shelf === 'read')}
              moveShelf={this.props.moveShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MainPage
