import { combineReducers } from 'redux';
import ContactsReducer from './reducer_contacts';
import selectContact from './reducer_selected_contact';
import filteredContacts from './reducer_filtered_contacts';

const rootReducer = combineReducers({
  contacts:ContactsReducer,
  selectContact:selectContact,
  filteredContacts:filteredContacts
});

export default rootReducer;
