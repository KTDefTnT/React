import React, { Component } from "react";
import RouterContext from "./Context";
import matchPath from "./matchPath";

export default class Switch extends Component {
  render() {
    const { children } = this.props;
    return (
      <RouterContext.Consumer>
        {(context) => {
          let match, element;
          const { location } = context;
          React.Children.forEach(children, (child) => {
            // 独占路由，若其中一个Route组件已命中(match不再为null)，则不再向下匹配
            if (match == null && React.isValidElement(child)) {
              element = child;
              const { path } = child.props;
              // 精确匹配当前Route组件的path与location.pathname  精确匹配才算匹配
              // 若没精确匹配种 则将match设置为null 继续遍历向下匹配
              match = path ? matchPath(location.pathname, child.props) : null;
            }
          });
          // 克隆当前命中组件，并传递一个 computedMatch参数  表示当前组件命中
          return match
            ? React.cloneElement(element, { computedMatch: match })
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}

