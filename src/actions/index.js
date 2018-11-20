import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE } from "../constants/action-types";
/*
Action creator is just a function. 
setActiveUserId function is called and it takes in user id 
and returns the action (that is, the object) with the type and payload rightly set.
*/

export const setActiveUserId = (userId) => ({
	type: SET_ACTIVE_USER_ID,
	userId
})

export const setTypingValue = (textMsgVal) => ({
	type: SET_TYPING_VALUE,
	textMsgVal
})

export const sendMessage = (message,userId) => ({
	type: SEND_MESSAGE,
	message,
	userId
})