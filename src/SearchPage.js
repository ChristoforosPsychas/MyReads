import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import {DebounceInput} from 'react-debounce-input'

class SearchPage extends Component {
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query })

    this.getSearchedBooks(query)
  }


  getSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        //
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] })
        } else {
          this.setState({ searchedBooks })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }

  }


  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close
          </Link>
          <div className="search-books-input-wrapper">
             <DebounceInput
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
               debounceTimeout={500}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks
              .map(searchedBooks => {
                this.props.books.map(book => (
                    book.id === searchedBooks.id ?
                    searchedBooks.shelf=book.shelf :
                    ''
                ))

                return(
                  <li key={searchedBooks.id}>
                    <Book
                      book={searchedBooks}
                      thumb={searchedBooks.imageLinks ? searchedBooks.imageLinks.thumbnail : ''}
                      bookTitle={searchedBooks.title}
                      bookAuthor={searchedBooks.authors}
                      moveShelf={this.props.moveShelf}
                      currentShelf={searchedBooks.shelf}
                    />
                  </li>
                )
              })
            }

          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
