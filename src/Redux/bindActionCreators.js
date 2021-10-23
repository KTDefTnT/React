/**
 * 把一个value为不同action creator的对象，转成拥有同名key的对象。
 * 同时使用dispatch对每个action creator 进行包装，以便可以直接调用它们
 * 
 * 把dispatch和action creator隐藏起来，让其他地方感知不到redux的存在
 * 把多个 action creator 绑定到 dispatch() 方法上
 * 
 * actionCreators也可以是数组，但是对于使用不是很友好
 * @param {Function | Object} actionCreators 
 * @param {Function} dispatch 
 */

function bindActionCreator (actionCreator, dispatch) {
  // 返回通过dispatch增强的actionCreator  actionCreator 执行后返回action => { type: 'xx' }
  // args: action creator传入的参数
  console.log('actionCreator', actionCreator);
  return (...args) => dispatch(actionCreator(...args));
}

export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('actionCreators必须为Function或者Object');
  }

  let boundActionCreators = {};
  for(let key in actionCreators) {
    let actionCreator = actionCreators[key];
    // 排除actionCreator不是函数的值     
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }

  return boundActionCreators;
}
