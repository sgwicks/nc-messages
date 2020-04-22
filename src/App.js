import React from "react";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import ChatHistory from "./components/ChatHistory";

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <ChatHistory />
    </div>
  );
}

export default App;
