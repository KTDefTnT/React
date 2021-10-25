import { Component } from "react";

export default class LifeCycle extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }
  
  render() {
    return null;
  }
}