import React, { Component } from "react";
import RouterContext from "./Context";
import matchPath from "./matchPath";

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { location } = context;

          const { path, children, component, render, computedMatch } =
            this.props;
          // 根据浏览器上的地址 判断当前路由是否已被匹配，若匹配则展示当前路由
          // ? 若不匹配则展示默认路由即匹配当前路由
          let match = computedMatch
            ? computedMatch
            : path
              ? matchPath(location.pathname, this.props)
              : context.match;
          const props = {
            ...context,
            match
          };

          // 添加Provider的原因： 组件会从组件树离自身最近匹配的Provider中读取当前的context值，hook/withRouter中需要使用最近的props
          return <RouterContext.Provider value={props}>{
            match
              ? children
                ? typeof children === "function"
                  ? children(props)
                  : children
                : component
                  ? React.createElement(component, props)
                  : render
                    ? render(props)
                    : null
              : typeof children === "function"
                ? children(props)
                : null
          }</RouterContext.Provider>

        }}
      </RouterContext.Consumer>
    );
  }
}