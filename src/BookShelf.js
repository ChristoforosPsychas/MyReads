import React, { Component } from 'react';
import Book from './Book.js'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.correctBooks
            .map(book => (
              <li key={book.id}>
                <Book
                  thumb={book.imageLinks ? book.imageLinks.thumbnail : ''}
                  bookTitle={book.title}
                  bookAuthor={book.authors}
                  moveShelf={this.props.moveShelf}
                  book={book}
                  currentShelf={book.shelf}
                />
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
