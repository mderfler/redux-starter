import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filtered extends Component {
  renderList(){

    return this.props.filtered.map((contact)=> {
      return (
          <li 
            key={contact.id}
            className="list-group_item">
            {contact.name}
          </li>
        )
    })
  }
  render(){
     if (!this.props.filtered) {
      return <div>Search contacts to get started.</div>;
    }
      return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      )
  }
}
//this gives us our props - the book chosen in reducer_active_book switch statement
function mapStateToProps(state) {
  return {
    filtered: state.filteredContacts
  };
}

export default connect(mapStateToProps)(Filtered);