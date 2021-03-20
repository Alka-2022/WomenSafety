import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import ChatRoom from "./ChatRoom";
import { SocketProvider } from "../contexts/SocketProvider";

function App() {
  const id = 98765432107894560;
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/chat" exact>
          <Chat />
        </Route>
        <Route path="/:id" exact>
          <ChatRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
