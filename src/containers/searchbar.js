import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectContact } from '../actions/index';
import {filteredContacts} from '../actions/filter';
import { bindActionCreators } from 'redux';

class SearchBar extends Component{
	constructor(props){
		super(props);
        this.onInputChange = this.onInputChange.bind(this);
	}

   onInputChange(event) {
     var filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.indexOf(event.target.value) !== -1
        ) 
        this.props.filteredContacts(filteredContacts);
    }

    render() {
        return (
            
             <input type="search" placeholder="search" onChange={this.onInputChange.bind(this)}/>
            
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectContact: selectContact, filteredContacts:filteredContacts}, dispatch);
}

function mapStateToProps(state){
    //whatever is returned will show up in Index props
    return {
        contacts: state.contacts
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);