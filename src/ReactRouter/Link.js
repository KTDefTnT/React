import { Component } from "react";
import RouterContext from './Context';

export default class Link extends Component {
  static contextType = RouterContext;
  handleClick = (event) => {
    event.preventDefault();
    this.context.history.push(this.props.to);
  };
  render() {
    const { to, children, ...restProps } = this.props;
    return (
      <a href={this.props.to} {...restProps} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}
