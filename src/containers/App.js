import React from 'react';
import './App.css';
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import store from "../store";
import _ from "lodash";

const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <MainContent user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;
