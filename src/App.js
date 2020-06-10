import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import "./components/mainpage.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/Design" />
          <Route path="/coding" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
