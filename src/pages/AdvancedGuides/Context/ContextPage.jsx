import { Component } from "react";
import { ThemeContext, UserContext } from "./const";
import ContextConsumerPage from "./ContextConsumerPage";
import ContextTypePage from "./ContextTypePage";
import FunctionPage from "./FunctionPage";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        className: "gold",
      },
      user: {
        name: '焦糖瓜子花生米'
      }
    };
  }
  render() {
    const { theme, user } = this.state;
    console.log("theme", theme);
    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <FunctionPage />
          <br />
          <ContextTypePage />
          <br />
          <UserContext.Provider value={user}>
            <ContextConsumerPage />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}
