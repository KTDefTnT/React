import { useContext }  from 'react';
import RouterContext from './Context';

export function useHistory() {
  return useContext(RouterContext).history;
}

export function useRouteMatch() {
  return useContext(RouterContext).match;
}

export function useLocation() {
  return useContext(RouterContext).location;
}

export function useParams(params) {
  // RouterContext取最近的Provider  需要在Route中包裹一层RouterContext.Provider
  const match = useContext(RouterContext).match;
  return match ? match.params : null
}