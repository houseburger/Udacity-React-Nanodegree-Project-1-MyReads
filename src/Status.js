import React, {Component} from 'react'
import PropTypes from 'react-proptypes'

class Status extends Component {
  render(){
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

Status.propTypes = {

}

export default Status
