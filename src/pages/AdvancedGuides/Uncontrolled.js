import React, { Component } from "react";

// 非受控组件
class UnControlledPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '焦糖瓜子',
      flag: true
    }
    this.nameInputRef = React.createRef(); // 创建ref
  }

  alertName = () => {
    // 不会同步给this.state
    console.log('name', this.nameInputRef.current.value, this.nameInputRef);
  }

  render() {
    return (<div>
      {/* 当使用value时， 使用defaultValue/defaultChecked 而不是value */}
      <input defaultValue={this.state.name} ref={this.nameInputRef}/>
      <div>state name: { this.state.name }</div>
      <br />
      <input type="checkbox" defaultChecked={this.state.flag} />
      <button onClick={this.alertName}>显示</button>
    </div>)
  }
}

export default UnControlledPage;