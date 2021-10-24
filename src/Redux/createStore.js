export default function createStore(reducer, enhancer) {

  if(enhancer) {
    // 在enhancer内部 返回一个store和一个加强的dispatch
    return enhancer(createStore)(reducer);
  }

  let currentState;
  // 当前监听的事件
  let currentListeners = [];

  const getState = () => {
    return currentState;
  };

  /**
   * @params action 接收action
   * @returns 执行reducer
   */
  let dispatch = (action) => {
    currentState = reducer(currentState, action);
    // 执行所有的监听函数
    currentListeners.forEach((listener) => listener());
  };

  let subscribe = (listener) => {
    currentListeners.push(listener);

    // 返回一个取消订阅的方法
    return () => {
      currentListeners = [];
    };
  };

  // 需要在内部执行一次dispatch，触发reducer的default 初始化数据
  dispatch({ type: '@Redux-init' });

  return {
    dispatch,
    subscribe,
    getState,
  };
}
