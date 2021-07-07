import { Component } from "react";

export default class Link extends Component {
  render() {
    // 接收一个to
    const { to, children, ...restProps } = this.props;
    return <a href={to} {...restProps}>{children}</a>;
  }
}
