import { Component } from 'react';
import { ThemeContext } from './const';

export default class ContextTypePage extends Component {
  static contextType = ThemeContext;
  // constructor (props) {
  //   super(props)
  // }

  render() {
    console.log('contextType', this.context);
    const { className } = this.context;
    return <div className={className}>ContextTypePage</div>
  }
}

// 如果不使用static
ContextTypePage.contextType = ThemeContext;