/**
 * 主要功能： 接受多个reducer， 返回一个新的reducer  
 * 其newState包含所有的key-reducer键值对，在新的reducer中遍历reducers 执行每个reducer
 * @param {*} reducers 各个reducer
 * @returns 返回一个新的reducer
 */
export default function combineReducer(reducers) {
  if (Object.prototype.toString.call(reducers) !== '[object Object]') {
    throw new Error('combineReducers要求传入一个由reducer组合而成的对象');
  }

  // 返回一个新的reducer
  return (state = {}, action) => {
    let newState;
    for(let key in reducers) {
      let reducer = reducers[key];
      newState[key] = reducer(state, action);
    }
    return newState;
  }
}