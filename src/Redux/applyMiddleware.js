import compose from "./compose";
/**
 * 分析： 每个中间件需要传入参数  state和dispatch， 还需要reducer来执行对应的函数
 * @param  {...any} middlewares 中间件
 * @returns 
 */
export default function applyMiddleware(...middlewares) {
  
  return createStore => reducer => {
    // 先创建一个普通的store
    let store = createStore(reducer);
    console.log('store', store);
    let dispatch = store.dispatch;

    // 中间件接收store, 以及 action  执行dispatch以及自身的功能
    let params = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };

    // 先拿到store
    let middlewareChain = middlewares.map(middleware => middleware(params));

    // 组合middleware， 接收dispatch函数，并返回一个dispatch函数
    /**
     * 其中每个md实际compose()()后为： action => next(action)， 其中next为其包裹的函数
     * md1的next为md2 md2的next为md3 md3的next为dispatch
     * 组合为此函数： dispatch => md1(md2(md3(dispatch)))
     * 
     * 当外部调用dispatch(action)时，实际执行为 md1(md2(md3(dispatch)))(action)
     */
    dispatch = compose(...middlewareChain)(dispatch);

    return {
      ...store,
      dispatch
    };
  }
}