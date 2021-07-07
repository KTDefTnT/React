import React, { Component } from "react";
import RouterContext from './Context';
import matchPath from "./matchPath";

export default class Switch extends Component {
  render() {
    const { children } = this.props;
    return (
      <RouterContext.Consumer>
        {
          context => {
            let match, element;
            const { location } = context;
            React.Children.forEach(children, (child) => {
              if (match == null && React.isValidElement(child)) {
                element = child;
                const { path } = child.props;
                match = path ? matchPath(location.pathname, path) : context.match;
              }
            });
            console.log('match', match);
            return match ? React.cloneElement(element, { computedMatch: match }) : null;
          }
        }
        </RouterContext.Consumer>
    );
  }
}