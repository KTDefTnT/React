import { Component } from "react";
import store from "./store";
import { bindActionCreators } from "redux";

export default class ReduxPage extends Component {
  componentDidMount() {
    // store的变化无法实时触发render进行视图渲染，需要使用subscribe监听state的变化，强制触发更新
    store.subscribe(() => {
    console.log(store.getState());
      this.forceUpdate();
    })
  }

  handleAdd = () => {
    // 通过dispatch提交action：{ type: 'ADD' }
    store.dispatch({ type: 'ADD' });
    // console.log(this.actions);
  }

  // action creator, action的创造器
  setName = (type = 'English', name) => {
    return { type, name }
  }

  countAction = type => {
    return { type }
  }

  actions = bindActionCreators({setName: this.setName, countAction: this.countAction});

  render() {
    return (
      <div>
        ReduxPage上手界面， redux缓存的数据 { store.getState() }<br />
        <button onClick={this.handleAdd}>增加</button>
        <button onClick={this.handleMinus}>减少</button>
      </div>
    );
  }
}