import React from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import MessageInput from  "./MessageInput";
import _ from "lodash";

const ChatWindow = ({ activeUserId }) => {

	const storeState = store.getState();
	const activeUser = storeState.contacts[activeUserId];
	const activeUserMsgs = storeState.messages[activeUserId];
	const { typing } = storeState;

	return (
		<div className="ChatWindow">
			<Header user={activeUser} />
			<Chats messages={ _.values(activeUserMsgs) } />
			<MessageInput textMsgValue={typing} />
		</div>
	);
};

export default ChatWindow;