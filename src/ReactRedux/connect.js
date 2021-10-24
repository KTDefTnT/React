import { useContext, useReducer, useLayoutEffect } from "react";
import { bindActionCreators } from "./bindActionCreators";
import Context from "./context";
/**
 *
 * @param {Function} mapStateToProps
 * @param {Function | Object} mapDispatchToProps () => { type: 'add' }/  { add: () => { type: 'add' } }
 * @returns
 */
const connect =
  (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (props) => {
    // 出去wrappedComponent本身自带的props外，还需要将state 以及dispatch等参数也传入进去
    let store = useContext(Context);
    let dispatch = store.dispatch;
    let subscribe = store.subscribe;
    
    let stateProps, dispatchProps;
    if (typeof mapStateToProps !== "function") {
      throw new Error("mapStateToProps必须是一个函数!");
    }

    if (
      typeof mapDispatchToProps !== "object" &&
      typeof mapDispatchToProps !== "function"
    ) {
      throw new Error("mapDispatchToProps必须为Function或者Object");
    }

    stateProps = mapStateToProps(store.getState());

    // mapDispatchToProps两个格式： (dispatch) => dispatch({ type: 'add' })/  { add: () => { type: 'add' } }
    // 当前主要功能就是将actionCreators用dispatch包裹后 返回对应传入格式
    if (typeof mapDispatchToProps === "function") {
      dispatchProps = mapDispatchToProps(dispatch);
    } else {
      dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
    }

    //? store无法触发视图更新，需要我们在组件内部进行主动触发
    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    // useLayoutEffect和useEffect的主要区别  一个在浏览器绘制之前(useLayoutEffect) 一个在浏览器绘制之后(useEffect)
    // ! 如果当前使用useEffect可能会导致出现一些bug，
    // ! 若是在绘制之后再更新状态 可能在绘制与useEffect执行之前的阶段store又进行了变化,则无法即使反映
    useLayoutEffect(() => {
      const unsubscribe = subscribe(() => {
        forceUpdate();
      });
      // 返回一个清除函数
      return () => {
        // 视图卸载之后将订阅删除
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }, [store]);

    return <WrappedComponent {...stateProps} {...dispatchProps} {...props} />;
  };

export default connect;
