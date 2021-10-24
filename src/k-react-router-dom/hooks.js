import RouterContext from "./RouterContext";
import {useContext} from "react";

// 自定义hook
export function useHistory() {
  return useContext(RouterContext).history;
}

export function useLocation() {
  return useContext(RouterContext).location;
}

export function useRouteMatch() {
  return useContext(RouterContext).match;
}

export function useParams() {
  const match = useContext(RouterContext).match;
  return match ? match.params : {};
}
