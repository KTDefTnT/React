/**
 * 创建一个store来存放应用中的所有数据
 * @param {Function} reducer 一个纯函数
 * @returns 返回保存所有state的对象：包含 getState、dispatch、subscribe方法
 */
export default function createStore(reducer, enhancer) {
  let currentState;
  let currentListeners =[]; // 用于保存所有的listener
  
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  /**
   * 分发action。这是触发state变化的唯一途径
   * @returns 返回当前的state
   */
  const getState = () => {
    return currentState;
  }

  /**
   * 分发action。这是触发state变化的唯一途径
   * 使用当前 getState() 的结果和传入的 action 以同步方式的调用 store 的 reduce 函数
   * @param {Object} action 描述应用变化的普通函数
   * @returns 要dispatch的action
   */
  const dispatch = (action) => {
    currentState = reducer(getState(), action);
    currentListeners.map(listener => listener());
    return action;
  }

  // 执行一次dispatch， 初始化reducer的数据, 返回reducer的default数据
  dispatch({ type: 'redux/source' });

  const subscribe = (listener) => {
    if (typeof listener !== 'function') {
      throw new Error('listener必须是一个函数！');
    }
    // 将所有的监听函数存入currentListener中
    currentListeners.push(listener);
    return () => {
      currentListeners = [];
    }
  } 

  return {
    getState,
    dispatch,
    subscribe
  }
}