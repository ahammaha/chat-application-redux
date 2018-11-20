import { SET_ACTIVE_USER_ID } from "../constants/action-types";


export default function activeUserId(state=null,action){
	switch(action.type){
		case SET_ACTIVE_USER_ID:
			// new value of activeUserId is set to action.userId
			return action.userId;
		default:
			return state;
	}
}