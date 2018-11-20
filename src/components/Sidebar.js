import React from "react";
import "./Sidebar.css";
import User from "../containers/User";

export default class Sidebar extends React.Component{
	render(){
		return(
			<aside className="sidebar">
				{this.props.contacts.map(contact => <User user={contact} key={contact.user_id} />)}
			</aside>
		);
	}
} 