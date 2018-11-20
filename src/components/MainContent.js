import React from "react";
import "./MainContent.css";
import Empty from "./Empty";
import ChatWindow from  "../containers/ChatWindow";

const MainContent = ({ user, activeUserId }) => {
	const renderMainContent = () =>  {
		if(!activeUserId) {
			return <Empty user={user} activeUserId={activeUserId} />;
		} else {
			return <ChatWindow activeUserId={activeUserId} />;
		}
	} 
	return <main className="mainContent">{renderMainContent()}</main>;
}

export default MainContent;