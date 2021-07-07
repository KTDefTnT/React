/**
 * 加强dispatch
 * @param  {...any} middlewares 中间件
 */
export default function applyMiddleware(...middlewares) {
  /**
   *
   * @param  {...any} funcs 中间件
   * @returns 将中间件组合起来，返回一个新的函数
   */
  function compose(...funcs) {
    console.log("funcs", funcs);
    if (funcs.length === 0) {
      return (arg) => arg;
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(
      (a, b) =>
        (...args) =>
          a(b(...args))
    );
  }

  return (createStore) => (reducer) => {
    // 增强store中的dispatch
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    // 中间件的参数
    let params = {
      getState: store.state,
      dispatch: (...args) => dispatch(...args),
    };

    // 将参数传入每个middleware
    let middlewaresChain = middlewares.map((middleware) => middleware(params));
    console.log("compose", compose);
    // 重写dispatch
    dispatch = compose(...middlewaresChain)(dispatch);
    return {
      ...store,
      dispatch,
    };
  };
}
