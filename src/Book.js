import React, {Component} from 'react'
import PropTypes from 'react-proptypes'
import Status from './Status'

class Book extends Component {

  displayAuthors = (authors) => {
    let authorsText = "";
    for (let index in authors) {
      if (index > 0) {
        authorsText = `${authorsText}, ${authors[index]}`;
      }
      else{
        authorsText = authors[index];
      }
    }
    return authorsText;
  }


  render(){
    let book = this.props.book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <Status shelfInfo={book.shelf} bookID={book.id} onUpdatingStatus={this.props.onUpdatingStatus} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{this.displayAuthors(book.authors)}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdatingStatus: PropTypes.func.isRequired
}

export default Book
