//state is not application state-
//only state for this reducer
export default function (state = null,action) {
	//console.log(state);
	switch(action.type){
		case 'CONTACT_SELECTED':
			return action.payload;
	}
	//console.log(state);//will always be null here
	return state;
}