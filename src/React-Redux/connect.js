import { useContext, useEffect, useReducer } from "react";
import { bindActionCreators } from "../Redux";
import Context from "./context";
/**
 * connect实际上是一个高阶组件，将store的数据挂载到wrappedComponent上
 * @param {Function} mapStateToProps
 * @param {Function | Object} mapDispatchToProps
 * @returns 返回一个组件
 */
const connect =
  (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (props) => {
    let stateProps = {},
      dispatchProps = {};
    const store = useContext(Context);
    const dispatch = store.dispatch;
    const subscribe = store.subscribe;

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

    // 函数中dispatch方法会将 action creator 的返回值作为参数执行，得到actionCreators
    if (typeof mapDispatchToProps === "function") {
      dispatchProps = mapDispatchToProps(dispatch);
    } else if (typeof mapDispatchToProps === "object") {
      dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
    }

    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
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

    return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />;
  };
export default connect;
