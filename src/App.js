import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

// custom component
// pages
import Home from "./pages/Home";
import UserList from "./pages/UserList";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UserList} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
