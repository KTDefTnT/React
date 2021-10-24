import { useContext, useReducer, useEffect} from "react";
import Context from "./context";

export function useStore() {
  return useContext(Context);
}

export function useDispatch() {
  const { dispatch } = useStore();
  return dispatch;
}

export function useSelector(selector) {
  const store = useStore();
  const { getState, subscribe } = store;
  const selectedState = selector(getState());

  const [, forceUpdate] = useReducer(x => x+1, 0);

  // 为什么不会更新视图
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate(); // 实际为dispatch  触发视图更新
    });
    return () => {
      // 视图卸载之后将订阅删除
      if (unsubscribe) {
        unsubscribe();
      }
    }
  }, [subscribe]);

  return selectedState;
}