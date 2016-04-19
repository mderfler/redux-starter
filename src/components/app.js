import React from 'react';
import { Component } from 'react';
import ContactDetail from '../containers/contact_detail';
import SearchBar from '../containers/searchbar';
import Filtered from '../containers/filtered';
//<Filtered />
export default class App extends Component {
  render() {
    return (
      
<div className="row">
    <div className="col-lg-3 fixed">
        <SearchBar />
        {this.props.children}
    </div>
    <div className="col-lg-9 col-lg-offset-3">
        <ContactDetail />
    </div>
</div>
    );
  }
}
