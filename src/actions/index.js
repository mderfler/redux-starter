export function selectContact(contact){
	//selectContact is an action creator - it needs to return an action - 
	// an object with a type property
		return {
			type: 'CONTACT_SELECTED',
			payload: contact
		};
}

