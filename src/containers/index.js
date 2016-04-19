import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectContact } from '../actions/index';
import { bindActionCreators } from 'redux';

class Index extends Component{
	renderContactList(){
		return this.props.contacts.map((contact)=> {
			return (
					<div 
						key={contact.id}
						onClick={()=>this.props.selectContact(contact)} 
						className="list-group_item">
						{contact.name}
					</div>
				)
		})
	}

	renderFilteredList(){
    return this.props.filtered.map((contact)=> {
      return (
          <div 
            key={contact.id}
            onClick={()=>this.props.selectContact(contact)} 
            className="list-group">
            {contact.name}
          </div>
        )
    })
  }
	render(){
		if (!this.props.filtered) {
			console.log("contact")
			return (
			<div className="list-group">
				{this.renderContactList()}
			</div>
			)
		} else{
		console.log("filtered")
		return (
		<div className="list-group">
			{this.renderFilteredList()}
		</div>
			)
		}
	}
}

function mapDispatchToProps(dispatch){
	//whenever selectContact is called, the result should be passed
	//to all reducers
	return bindActionCreators({selectContact: selectContact}, dispatch);
}

function mapStateToProps(state){
	//whatever is returned will show up in Index props
	return {
		contacts: state.contacts,
		filtered: state.filteredContacts
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);