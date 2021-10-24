import { Component } from "react";
import RouterContext from "./Context";

export default class Router extends Component {
  // 配置404界面  -- 默认path
  static computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };

    // 监听location变化
    this.unListen = props.history.listen((location) => {
      this.setState({location});
    });
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const { children, history } = this.props;
    return (
      <RouterContext.Consumer>
        {(context) => {
          return <RouterContext.Provider value={{
            history,
            location: history.location,
            match: Router.computeRootMatch(this.state.location.pathname)
          }}>{children}</RouterContext.Provider>;
        }}
      </RouterContext.Consumer>
    );
  }
}
