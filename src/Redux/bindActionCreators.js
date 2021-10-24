/**
 * 把一个value为不同action creator的对象，转成拥有同名key的对象。
 * 同时使用dispatch对每个action creator 进行包装，以便可以直接调用它们
 * 
 * 把dispatch和action creator隐藏起来，让其他地方感知不到redux的存在
 * 把多个 action creator 绑定到 dispatch() 方法上
 * 
 * actionCreators也可以是数组，但是对于使用不是很友好
 * @param {Function | Object} actionCreators 
 * actionCreators (Function or Object): 一个 action creator，或者一个 value 是 action creator 的对象
 * @param {Function} dispatch 
 * @return 返回dispatch关联action的对象
 */

export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('actionCreators必须为Function或者Object');
  }

  let bindActionCreators = {};
  for (let key in actionCreators) {
    // 单个的actionCreator
    let actionCreator = actionCreators[key];
    // 排除值不是函数的action creator
    if (typeof actionCreator === 'function') {
      bindActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return bindActionCreators;
}

/**
 * function情况： actionCreators： () => { type: 'ADD' }
 * object情况： actionCreators：{
 *  add: () => { type: 'add' }
 * }
 */
 function bindActionCreator(actionCreator, dispatch) {
  return (...args) => dispatch(actionCreator(...args));
}