import { Component } from "react";
/**
 * setState()三件注意的事情
 * 1、不可以直接进行修改state
 * 2、setState的更新可能是异步的
 * 3、setSate的更新会被合并
 * 
 * setState(partialState, callback)
 * partialState: object|function-用于产生与当前state合并的子集
 * callback: state更新之后被调用· 
 * 
 */
export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '焦糖瓜子',
      count: 0,
    };
  }

  componentDidMount() {
    document.getElementById('host').addEventListener('click', () => {
      this.setState({
        count: 2
      });
      console.log('count', this.state.count);
    });
  }

  setCounter = val => {
    // partialState为Object，每次handleClick执行时，count只会加2
    // this.setState({
    //   count: this.state.count + val
    // });

     // partialState为function，每次handleClick执行时，count会将每次的函数执行结果叠加
    this.setState((prevState) => ({
      count: prevState.count + val
    }));
  }

  handleClick = () => {
    // 3、setState的更新会被合并
    this.setCounter(1);
    this.setCounter(2);
    
    /* 
    1、不能直接修改State：正确使用setState，直接给this.state赋值无法重新渲染组件
    this.state.count = 2;
    console.log(this.state);
     */
    // 2.State的更新可能是异步的
    // this.setState({ count: 2 });
    // console.log(this.state.count);
    // 在回调函数中获取最新值
    // this.setState(() => ({
    //   count: 2
    // }), () => {
    //   console.log(this.state.count);
    // })
    // 在setTimeout中获取最新值
    // setTimeout(() => {
    //   this.setState({
    //     count: 2
    //   });
    //   console.log('setTimeout', this.state.count);
    // }, 0)
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>count: {count}</p>
        <button onClick={this.handleClick}>合成事件</button>
        <p id="host">原生事件</p>
      </div>
    );
  }
}
