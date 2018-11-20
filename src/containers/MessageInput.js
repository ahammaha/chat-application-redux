import React from "react";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({textMsgValue}) => {

	const storeState=store.getState();

	const handleSubmit = e => {
		e.preventDefault();
		const { typing, activeUserId } = storeState;
		store.dispatch(sendMessage(typing, activeUserId));
	}

	const onInputChange = e => {
		store.dispatch(setTypingValue(e.target.value));
	}

	return(
		<form className="Message" onSubmit={handleSubmit}>
			<input
				className="Message_input"
				onChange={onInputChange}
				value={textMsgValue}
				placeholder="Write a message..."
			/>
    </form>
	);
}

export default MessageInput;