import { Component } from "react";
// import { connect } from "react-redux";
import { connect } from '../../React-Redux/index';
import { mapStateToProps, mapDispatchToProps } from "./reactRedux";

class ReactReduxPage extends Component {
  render() {
    return (
      <div>
        ReactReduxPage - store - {this.props.count}
        <br />
        <button onClick={this.props.addCount}>新增</button>
        <br />
        <button onClick={this.props.minusCount}>减少</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage);
