export default function (state = null,action) {
	//console.log(state);
	switch(action.type){
		case 'FILTERED_CONTACTS':
			return action.payload;
	}
	//console.log(state);//will always be null here
	return state;
}