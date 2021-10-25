import { useContext } from 'react';
import RouterContext from './Context';

/**
 * context就近原则获取，如果Route组件中没有将精确的match向下传递，context中的match将永远是Router中的computedMatch
 */
const withRouter = WrappedComponent => props => {
  let contextProps = useContext(RouterContext);

  return <WrappedComponent {...props} {...contextProps} />
}
export default withRouter