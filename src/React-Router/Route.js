import React, { Component } from "react";
import matchPath from "./matchPath";
import RouterContext from "./Context";

// 展示对应的组件，其中children > component > render
export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { location } = context;
          // computedMatch由Switch组件传入，若存在则直接使用即可 单一选择
          const { path, children, component, render, computedMatch } =
            this.props;
          // 根据location判断当前的界面参数
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(location.pathname, this.props)
            : context.match;

          const props = {
            ...context,
            match,
          };

          return (
            // 先判断是否匹配，若匹配则判断是否存在children  再判断是否存在component 最后判断是否存在render
            // 若不匹配： 则判断是否存在children（404），若存在则使用children
            <div>
              {/* 添加Provider的原因： 组件会从组件树离自身最近匹配的Provider中读取当前的context值，hook中需要使用最近的props */}
              <RouterContext.Provider value={props}>
                {match
                  ? children
                    ? typeof children === "function"
                      ? children(props)
                      : children
                    : component
                    ? React.createElement(component, props)
                    : render
                    ? render(props)
                    : null
                  : children
                  ? typeof children === "function"
                    ? children(props)
                    : children
                  : null}
              </RouterContext.Provider>
            </div>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
