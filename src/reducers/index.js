import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";

// combineReducers function takes in an object. 
// An object whose shape is exactly like the state object of the application.
// When using combineReducers, value returned from each reducer is not the state of the app
// They represent only the value of the particular key in state object 
export default combineReducers({
	user,
	contacts,
	activeUserId
});