import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation";
import Login from "./components/credentials/login";
import Register from "./components/credentials/newaccount";
import Landing from "./components/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
