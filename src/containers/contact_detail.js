import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactDetail extends Component {
  render() {
    console.log(this.props.contact)
    if (!this.props.contact) {
      return <div>Select a contact to get started.</div>;
    }

		return (
			<div>
				<h3>Details for:
        <div>ID: {this.props.contact.id}</div>
        <div>Name: {this.props.contact.name}</div>
</h3>
			</div>
		);
	}
}
//this gives us our props - the book chosen in reducer_active_book switch statement
function mapStateToProps(state) {
  return {
    contact: state.selectContact,
    filtered: state.filteredContacts
  };
}

export default connect(mapStateToProps)(ContactDetail);