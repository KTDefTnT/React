import { Component } from "react";
import ReactDOM from "react-dom";

export default class PortalsPage extends Component {
  render() {
    // 正常渲染
    // return <div className="model"> {this.props.children} </div>;

    // 使用portals渲染到body上
    return ReactDOM.createPortal(
      <div className="model"> {this.props.children} </div>,
      document.body // 需要渲染到的 DOM节点
    );
  }
}
