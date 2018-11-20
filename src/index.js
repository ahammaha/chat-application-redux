import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from "./store";

const render = () =>{
	myTestLog();
	return ReactDOM.render(<App />, document.getElementById('root'));
}

const myTestLog = () => {
	console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
	console.log(store.getState());
}

render();

store.subscribe(render);