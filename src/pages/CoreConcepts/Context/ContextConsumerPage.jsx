import { Component } from "react";
import { ThemeContext, UserContext } from "./const";

export default class ContextConsumerPage extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <UserContext.Consumer>
            {user => <div className={theme.className}>ContextConsumerPage-{user.name}</div>}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
