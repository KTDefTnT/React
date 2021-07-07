import { useStore, useDispatch, useSelector } from "../../React-Redux";
export default function FunctionReactRedux() {
  const store = useStore();
  const dispatch = useDispatch();
  console.log('store', store);
  const handleAdd = () => {
    dispatch({ type: 'ADD' })
  }

  const count = useSelector(state => state.count);
  return <div>function - Children - {count} <button onClick={handleAdd}>增加</button></div>
}