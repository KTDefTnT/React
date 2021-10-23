import React, { Component } from "react";

export default class ShouldComponentUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "function",
    };
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleName = () => {
    this.setState({
      name: this.state.name,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        ShouldComponentUpdatePage - {counter}
        <button onClick={this.handleName}>修改name</button>
        <button onClick={this.handleCounter}>修改counter</button>
        <FunctionChildren name={this.state.name} />
        {/* 没有被 React.memo包裹的组件，每次父组件更新 子组件也会更新 */}
        {/* <ChildrenPage /> */}
        {/* React.memo包裹的组件，不会重复进行渲染 */}
        {/* <MemoedChildrenPage /> */}
      </div>
    );
  }
}

class FunctionChildren extends React.PureComponent {
  componentDidUpdate() {
    console.log("FunctionChildren Update");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.name === nextProps.name) return false;
  //   return true;
  // }

  render() {
    return <div>props-{this.props.name}</div>;
  }
}

function ChildrenPage() {
  console.log("ChildrenPage update");
  return <div>我是底部栏</div>;
}

const MemoedChildrenPage = React.memo(ChildrenPage);
