import React, { Component } from 'react';
import RouterContext from './Context';

export default class Redirect extends Component {
  render () {
    return (<RouterContext.Consumer>
       {context => {
          const {history, push = false} = context;
          const {to} = this.props;
          return (
            <LifeCycle
              onMount={() => {
                push ? history.push(to) : history.replace(to);
              }}
            />
          );
       }}
      </RouterContext.Consumer>);
  }
}

class LifeCycle extends Component() {
  componentDidMount() {
    if(this.onMount) {
      this.onMount();
    }
  }

  render() {
    return null;
  }
}