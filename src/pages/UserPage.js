import { Component } from "react";
import { withRouter } from "../ReactRouter";

@withRouter
class UserPage extends Component {
  render() {
    console.log('xxx', this.props);
    return <div>UserPage</div>
  }
}

export default UserPage;