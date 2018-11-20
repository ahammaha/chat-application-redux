import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";

// state here isn’t the overall state object of the application. No. 
// It is the state managed by the reducer for the messages field

export default function messages(state=getMessages(1), action){
	switch(action.type){
		case SEND_MESSAGE:
			const message = action.message;
			const userId = action.userId;
			const allUserMsgs = state[userId];
			const msgNumber = Number(Object.keys(allUserMsgs).pop())+ 1;
			return {
				...state,
				[userId]: {
					...allUserMsgs,
					[msgNumber]: {
						number:msgNumber,
						text: message,
						is_user_msg: true
					}
				}
			};
		default:
			return state;
	}
}