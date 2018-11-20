import { createStore } from "redux";
import reducer from "../reducers";

// This is an ES6 syntax, 
// similar to this: {contacts: contacts} 
// with a contacts key and a value of contacts from static-data.

const store =createStore (reducer);
export default store; 