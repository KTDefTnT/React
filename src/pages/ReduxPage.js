import React, { Component } from "react";
import store from "./store";

export default class ReduxPage extends Component {
  componentDidMount() {
    // 需要进行订阅及取消： 强制触发更新，因 redux内部数据的变化无法触发视图更新
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  handleAdd = () => {
    store.dispatch({ type: "ADD" });
  };

  handleMinus = () => {
    store.dispatch({ type: "MINUS" });
  };

  render() {
    return (
      <div>
        <h1>ReduxPage</h1>
        <div>值： {store.getState()}</div>
        <button onClick={this.handleAdd}>增加</button>
        <button onClick={this.handleMinus}>减少</button>
      </div>
    );
  }
}
