import { Component } from "react";
import UserPage from './UserPage';
import { BrowserRouter as Router, Link, Route, Switch } from "../ReactRouter";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default class ReactRouterPage extends Component {
  render() {
    return (
      <Router>
        <Link to="/">首页</Link>&nbsp;&nbsp;
        <Link to="/login">登录</Link>&nbsp;&nbsp;
        <Link to="/goods">商品列表</Link>&nbsp;&nbsp;
        <Link to="/user">用户</Link>
        <div>
          <Switch>
            <Route exact path="/" render={() => "这里是首页哦"} />
            <Route path="/login" render={() => "这里是登录哦"} />
            <Route path="/goods" render={() => "这里是商品列表哦"} />
            <Route path="/user" component={UserPage} />
            <Route render={() => "4040404440404 Page"} />
          </Switch>
        </div>

      </Router>
    );
  }
}
