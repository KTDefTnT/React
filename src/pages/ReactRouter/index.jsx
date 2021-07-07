import { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "../../React-Router";
import HomePage from "./home";
import LoginPage from "./Login";
import NotFound from "./NotFound";
import UserPage from "./user";

export default class ReactRouterPage extends Component {
  render() {
    return (
      <div>
        <p>ReactRouterPage</p>

        <Router>
          <Link to="/">首页</Link>&nbsp;&nbsp;
          <Link to="/login">登录</Link>&nbsp;&nbsp;
          <Link to="/user">用户中心</Link>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/user/:id" component={UserPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
