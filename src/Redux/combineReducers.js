/**
 * 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数
 * 然后就可以对这个 reducer 调用 createStore 方法
 * @param {Object} reducers 接收由多个reducer组合而成的对象
 * @returns 返回一个由reducer组合的reducer
 */
export default function combineReducers(reducers) {
  if (Object.prototype.toString.call(reducers) !== '[object Object]') {
    throw new Error('combineReducers要求传入一个由reducer组合而成的对象');
  }

  // 返回一个reducer： 参数state和action
  return (state = {}, action) => {
    // reducer 返回一个新的state, 最新的newState通过执行reducers中的reducer得来
    let newState = {};
    
    // 执行所有的reducer获取最新的数据，更新state
    for (let key in reducers) {
      let reducer = reducers[key];
      newState[key] = reducer(state[key], action);
    }
    return newState;
  }
}